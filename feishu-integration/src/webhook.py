"""
飞书Webhook机器人集成模块
用于通过Webhook向飞书群组发送消息
"""

import json
import requests
from typing import Dict, Any, Optional, List
from dataclasses import dataclass
import logging

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@dataclass
class FeishuMessage:
    """飞书消息数据类"""
    msg_type: str
    content: Dict[str, Any]


class FeishuWebhookBot:
    """飞书Webhook机器人类"""
    
    def __init__(self, webhook_url: str, secret: Optional[str] = None):
        """
        初始化飞书Webhook机器人
        
        Args:
            webhook_url: Webhook URL
            secret: 签名密钥（可选）
        """
        self.webhook_url = webhook_url
        self.secret = secret
        
    def _generate_sign(self, timestamp: int) -> str:
        """
        生成签名
        
        Args:
            timestamp: 时间戳
            
        Returns:
            签名字符串
        """
        import hmac
        import hashlib
        import base64
        
        if not self.secret:
            return ""
            
        # 拼接timestamp和secret
        string_to_sign = f'{timestamp}\n{self.secret}'
        
        # 使用HmacSHA256算法计算签名
        hmac_code = hmac.new(
            string_to_sign.encode('utf-8'),
            digestmod=hashlib.sha256
        ).digest()
        
        # 对结果进行base64编码
        sign = base64.b64encode(hmac_code).decode('utf-8')
        return sign
    
    def send_text(self, text: str, at_all: bool = False) -> Dict[str, Any]:
        """
        发送文本消息
        
        Args:
            text: 消息文本
            at_all: 是否@所有人
            
        Returns:
            响应结果
        """
        content = {"text": text}
        if at_all:
            content["text"] = f"<at user_id=\"all\">所有人</at> {text}"
            
        message = FeishuMessage(
            msg_type="text",
            content=content
        )
        
        return self._send_message(message)
    
    def send_rich_text(self, title: str, content_lines: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        发送富文本消息
        
        Args:
            title: 标题
            content_lines: 内容行列表
            
        Returns:
            响应结果
        """
        message = FeishuMessage(
            msg_type="post",
            content={
                "post": {
                    "zh_cn": {
                        "title": title,
                        "content": [content_lines]
                    }
                }
            }
        )
        
        return self._send_message(message)
    
    def send_card(self, card_config: Dict[str, Any]) -> Dict[str, Any]:
        """
        发送卡片消息
        
        Args:
            card_config: 卡片配置
            
        Returns:
            响应结果
        """
        message = FeishuMessage(
            msg_type="interactive",
            content=card_config
        )
        
        return self._send_message(message)
    
    def send_markdown(self, title: str, markdown_text: str) -> Dict[str, Any]:
        """
        发送Markdown消息（通过卡片实现）
        
        Args:
            title: 标题
            markdown_text: Markdown文本
            
        Returns:
            响应结果
        """
        card_config = {
            "config": {
                "wide_screen_mode": True
            },
            "elements": [
                {
                    "tag": "markdown",
                    "content": markdown_text
                }
            ],
            "header": {
                "title": {
                    "content": title,
                    "tag": "plain_text"
                },
                "template": "blue"
            }
        }
        
        return self.send_card(card_config)
    
    def _send_message(self, message: FeishuMessage) -> Dict[str, Any]:
        """
        发送消息到飞书
        
        Args:
            message: 消息对象
            
        Returns:
            响应结果
        """
        import time
        
        payload = {
            "msg_type": message.msg_type,
            "content": message.content
        }
        
        # 如果设置了密钥，添加签名
        if self.secret:
            timestamp = int(time.time())
            sign = self._generate_sign(timestamp)
            payload["timestamp"] = str(timestamp)
            payload["sign"] = sign
        
        try:
            response = requests.post(
                self.webhook_url,
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            response.raise_for_status()
            result = response.json()
            
            if result.get("code") != 0:
                logger.error(f"发送消息失败: {result}")
            else:
                logger.info(f"消息发送成功")
                
            return result
            
        except requests.exceptions.RequestException as e:
            logger.error(f"请求失败: {e}")
            return {"code": -1, "msg": str(e)}


def create_code_block_card(title: str, code: str, language: str = "python") -> Dict[str, Any]:
    """
    创建代码块卡片
    
    Args:
        title: 标题
        code: 代码内容
        language: 代码语言
        
    Returns:
        卡片配置
    """
    return {
        "config": {
            "wide_screen_mode": True
        },
        "header": {
            "title": {
                "content": f"📝 {title}",
                "tag": "plain_text"
            },
            "template": "purple"
        },
        "elements": [
            {
                "tag": "markdown",
                "content": f"```{language}\n{code}\n```"
            }
        ]
    }


def create_notification_card(title: str, content: str, status: str = "info") -> Dict[str, Any]:
    """
    创建通知卡片
    
    Args:
        title: 标题
        content: 内容
        status: 状态 (info, success, warning, error)
        
    Returns:
        卡片配置
    """
    template_map = {
        "info": "blue",
        "success": "green",
        "warning": "orange",
        "error": "red"
    }
    
    icon_map = {
        "info": "ℹ️",
        "success": "✅",
        "warning": "⚠️",
        "error": "❌"
    }
    
    return {
        "config": {
            "wide_screen_mode": True
        },
        "header": {
            "title": {
                "content": f"{icon_map.get(status, '')} {title}",
                "tag": "plain_text"
            },
            "template": template_map.get(status, "blue")
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