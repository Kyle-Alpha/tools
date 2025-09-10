"""
飞书开放API客户端
提供完整的飞书API集成功能
"""

import json
import time
import requests
from typing import Dict, Any, Optional, List
from datetime import datetime, timedelta
import logging

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class FeishuAPIClient:
    """飞书API客户端类"""
    
    def __init__(self, app_id: str, app_secret: str, encrypt_key: Optional[str] = None):
        """
        初始化飞书API客户端
        
        Args:
            app_id: 应用ID
            app_secret: 应用密钥
            encrypt_key: 加密密钥（可选）
        """
        self.app_id = app_id
        self.app_secret = app_secret
        self.encrypt_key = encrypt_key
        self.base_url = "https://open.feishu.cn/open-apis"
        self.tenant_access_token = None
        self.token_expire_time = None
        
    def _get_tenant_access_token(self) -> str:
        """
        获取tenant_access_token
        
        Returns:
            访问令牌
        """
        # 检查token是否过期
        if self.tenant_access_token and self.token_expire_time:
            if datetime.now() < self.token_expire_time:
                return self.tenant_access_token
        
        # 获取新的token
        url = f"{self.base_url}/auth/v3/tenant_access_token/internal"
        payload = {
            "app_id": self.app_id,
            "app_secret": self.app_secret
        }
        
        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            data = response.json()
            
            if data.get("code") == 0:
                self.tenant_access_token = data["tenant_access_token"]
                # 设置过期时间（提前5分钟刷新）
                expire_seconds = data.get("expire", 7200) - 300
                self.token_expire_time = datetime.now() + timedelta(seconds=expire_seconds)
                logger.info("成功获取tenant_access_token")
                return self.tenant_access_token
            else:
                raise Exception(f"获取token失败: {data}")
                
        except Exception as e:
            logger.error(f"获取tenant_access_token失败: {e}")
            raise
    
    def _make_request(self, method: str, endpoint: str, **kwargs) -> Dict[str, Any]:
        """
        发送API请求
        
        Args:
            method: HTTP方法
            endpoint: API端点
            **kwargs: 其他请求参数
            
        Returns:
            响应数据
        """
        url = f"{self.base_url}{endpoint}"
        
        # 添加认证头
        headers = kwargs.get("headers", {})
        headers["Authorization"] = f"Bearer {self._get_tenant_access_token()}"
        kwargs["headers"] = headers
        
        try:
            response = requests.request(method, url, **kwargs)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            logger.error(f"API请求失败: {e}")
            raise
    
    # ========== 消息相关API ==========
    
    def send_message(self, receive_id_type: str, receive_id: str, 
                    msg_type: str, content: str) -> Dict[str, Any]:
        """
        发送消息
        
        Args:
            receive_id_type: 接收者ID类型 (open_id, user_id, union_id, email, chat_id)
            receive_id: 接收者ID
            msg_type: 消息类型 (text, post, image, interactive等)
            content: 消息内容（JSON字符串）
            
        Returns:
            响应数据
        """
        endpoint = "/im/v1/messages"
        params = {"receive_id_type": receive_id_type}
        
        payload = {
            "receive_id": receive_id,
            "msg_type": msg_type,
            "content": content
        }
        
        return self._make_request("POST", endpoint, params=params, json=payload)
    
    def send_text_message(self, receive_id: str, text: str, 
                          receive_id_type: str = "open_id") -> Dict[str, Any]:
        """
        发送文本消息
        
        Args:
            receive_id: 接收者ID
            text: 文本内容
            receive_id_type: 接收者ID类型
            
        Returns:
            响应数据
        """
        content = json.dumps({"text": text})
        return self.send_message(receive_id_type, receive_id, "text", content)
    
    def send_card_message(self, receive_id: str, card_content: Dict[str, Any],
                         receive_id_type: str = "open_id") -> Dict[str, Any]:
        """
        发送卡片消息
        
        Args:
            receive_id: 接收者ID
            card_content: 卡片内容
            receive_id_type: 接收者ID类型
            
        Returns:
            响应数据
        """
        content = json.dumps(card_content)
        return self.send_message(receive_id_type, receive_id, "interactive", content)
    
    def reply_message(self, message_id: str, msg_type: str, content: str) -> Dict[str, Any]:
        """
        回复消息
        
        Args:
            message_id: 要回复的消息ID
            msg_type: 消息类型
            content: 消息内容
            
        Returns:
            响应数据
        """
        endpoint = f"/im/v1/messages/{message_id}/reply"
        
        payload = {
            "msg_type": msg_type,
            "content": content
        }
        
        return self._make_request("POST", endpoint, json=payload)
    
    # ========== 群组相关API ==========
    
    def create_chat(self, name: str, description: str = "", 
                   user_id_list: List[str] = None) -> Dict[str, Any]:
        """
        创建群组
        
        Args:
            name: 群组名称
            description: 群组描述
            user_id_list: 用户ID列表
            
        Returns:
            响应数据
        """
        endpoint = "/im/v1/chats"
        
        payload = {
            "name": name,
            "description": description,
            "user_id_list": user_id_list or []
        }
        
        return self._make_request("POST", endpoint, json=payload)
    
    def get_chat_info(self, chat_id: str) -> Dict[str, Any]:
        """
        获取群组信息
        
        Args:
            chat_id: 群组ID
            
        Returns:
            响应数据
        """
        endpoint = f"/im/v1/chats/{chat_id}"
        return self._make_request("GET", endpoint)
    
    def update_chat_info(self, chat_id: str, **kwargs) -> Dict[str, Any]:
        """
        更新群组信息
        
        Args:
            chat_id: 群组ID
            **kwargs: 要更新的字段
            
        Returns:
            响应数据
        """
        endpoint = f"/im/v1/chats/{chat_id}"
        return self._make_request("PUT", endpoint, json=kwargs)
    
    def add_chat_members(self, chat_id: str, id_list: List[str]) -> Dict[str, Any]:
        """
        添加群成员
        
        Args:
            chat_id: 群组ID
            id_list: 成员ID列表
            
        Returns:
            响应数据
        """
        endpoint = f"/im/v1/chats/{chat_id}/members"
        payload = {"id_list": id_list}
        return self._make_request("POST", endpoint, json=payload)
    
    # ========== 文档相关API ==========
    
    def get_doc_content(self, document_id: str) -> Dict[str, Any]:
        """
        获取文档内容
        
        Args:
            document_id: 文档ID
            
        Returns:
            响应数据
        """
        endpoint = f"/docx/v1/documents/{document_id}/raw_content"
        return self._make_request("GET", endpoint)
    
    def create_doc(self, folder_token: str, title: str, 
                  content: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """
        创建文档
        
        Args:
            folder_token: 文件夹token
            title: 文档标题
            content: 文档内容
            
        Returns:
            响应数据
        """
        endpoint = "/docx/v1/documents"
        
        payload = {
            "folder_token": folder_token,
            "title": title
        }
        
        if content:
            payload["content"] = content
            
        return self._make_request("POST", endpoint, json=payload)
    
    def list_docs(self, folder_token: str, page_size: int = 20, 
                 page_token: Optional[str] = None) -> Dict[str, Any]:
        """
        列出文档
        
        Args:
            folder_token: 文件夹token
            page_size: 分页大小
            page_token: 分页标记
            
        Returns:
            响应数据
        """
        endpoint = "/drive/v1/files"
        
        params = {
            "folder_token": folder_token,
            "page_size": page_size
        }
        
        if page_token:
            params["page_token"] = page_token
            
        return self._make_request("GET", endpoint, params=params)
    
    # ========== 用户相关API ==========
    
    def get_user_info(self, user_id: str, user_id_type: str = "open_id") -> Dict[str, Any]:
        """
        获取用户信息
        
        Args:
            user_id: 用户ID
            user_id_type: 用户ID类型
            
        Returns:
            响应数据
        """
        endpoint = f"/contact/v3/users/{user_id}"
        params = {"user_id_type": user_id_type}
        return self._make_request("GET", endpoint, params=params)
    
    def batch_get_users(self, user_ids: List[str], 
                       user_id_type: str = "open_id") -> Dict[str, Any]:
        """
        批量获取用户信息
        
        Args:
            user_ids: 用户ID列表
            user_id_type: 用户ID类型
            
        Returns:
            响应数据
        """
        endpoint = "/contact/v3/users/batch"
        params = {
            "user_id_type": user_id_type,
            "user_ids": user_ids
        }
        return self._make_request("GET", endpoint, params=params)
    
    # ========== 事件订阅相关 ==========
    
    def verify_signature(self, timestamp: str, nonce: str, 
                        signature: str, body: bytes) -> bool:
        """
        验证事件签名
        
        Args:
            timestamp: 时间戳
            nonce: 随机数
            signature: 签名
            body: 请求体
            
        Returns:
            是否验证通过
        """
        import hashlib
        
        if not self.encrypt_key:
            return True
            
        content = timestamp + nonce + self.encrypt_key + body.decode('utf-8')
        calculated_signature = hashlib.sha256(content.encode()).hexdigest()
        
        return calculated_signature == signature
    
    def decrypt_event(self, encrypt_data: str) -> Dict[str, Any]:
        """
        解密事件数据
        
        Args:
            encrypt_data: 加密的事件数据
            
        Returns:
            解密后的事件数据
        """
        from Crypto.Cipher import AES
        import base64
        
        if not self.encrypt_key:
            raise ValueError("需要设置encrypt_key才能解密事件")
        
        key = hashlib.sha256(self.encrypt_key.encode()).digest()
        cipher = AES.new(key, AES.MODE_CBC, key[:16])
        
        decrypted = cipher.decrypt(base64.b64decode(encrypt_data))
        # 移除padding
        decrypted = decrypted[:-decrypted[-1]]
        
        return json.loads(decrypted)


class FeishuEventHandler:
    """飞书事件处理器"""
    
    def __init__(self, api_client: FeishuAPIClient):
        """
        初始化事件处理器
        
        Args:
            api_client: API客户端实例
        """
        self.api_client = api_client
        self.handlers = {}
        
    def register_handler(self, event_type: str, handler):
        """
        注册事件处理函数
        
        Args:
            event_type: 事件类型
            handler: 处理函数
        """
        self.handlers[event_type] = handler
        
    def handle_event(self, event_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        处理事件
        
        Args:
            event_data: 事件数据
            
        Returns:
            处理结果
        """
        # URL验证
        if event_data.get("type") == "url_verification":
            return {
                "challenge": event_data.get("challenge")
            }
        
        # 处理事件
        header = event_data.get("header", {})
        event_type = header.get("event_type")
        
        if event_type in self.handlers:
            try:
                self.handlers[event_type](event_data)
                return {"code": 0, "msg": "success"}
            except Exception as e:
                logger.error(f"处理事件失败: {e}")
                return {"code": -1, "msg": str(e)}
        else:
            logger.warning(f"未注册的事件类型: {event_type}")
            return {"code": 0, "msg": "unregistered event"}


def create_text_card(title: str, content: str, buttons: List[Dict[str, str]] = None) -> Dict[str, Any]:
    """
    创建文本卡片
    
    Args:
        title: 标题
        content: 内容
        buttons: 按钮列表
        
    Returns:
        卡片配置
    """
    card = {
        "config": {
            "wide_screen_mode": True
        },
        "header": {
            "title": {
                "content": title,
                "tag": "plain_text"
            },
            "template": "blue"
        },
        "elements": [
            {
                "tag": "div",
                "text": {
                    "content": content,
                    "tag": "lark_md"
                }
            }
        ]
    }
    
    # 添加按钮
    if buttons:
        actions = []
        for button in buttons:
            actions.append({
                "tag": "button",
                "text": {
                    "content": button.get("text", "按钮"),
                    "tag": "plain_text"
                },
                "type": button.get("type", "default"),
                "url": button.get("url", "")
            })
        
        card["elements"].append({
            "tag": "action",
            "actions": actions
        })
    
    return card