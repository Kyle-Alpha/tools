"""
飞书API客户端使用示例
演示如何使用API进行各种操作
"""

import sys
import os
import json
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.api_client import FeishuAPIClient, create_text_card
from config import FeishuConfig


def test_message_api(client: FeishuAPIClient):
    """测试消息API"""
    print("\n📨 测试消息API")
    print("-" * 40)
    
    if not FeishuConfig.DEFAULT_RECEIVER_ID:
        print("⚠️ 未设置默认接收者，跳过消息API测试")
        print("   请在 .env 中设置 FEISHU_DEFAULT_RECEIVER_ID")
        return
    
    try:
        # 发送文本消息
        print("1. 发送文本消息...")
        result = client.send_text_message(
            FeishuConfig.DEFAULT_RECEIVER_ID,
            "Hello from Cursor API Client! 这是通过API发送的消息。",
            FeishuConfig.DEFAULT_RECEIVER_TYPE
        )
        if result.get("code") == 0:
            print("   ✅ 文本消息发送成功")
            message_id = result.get("data", {}).get("message_id")
            print(f"   消息ID: {message_id}")
        else:
            print(f"   ❌ 发送失败: {result.get('msg')}")
        
        # 发送卡片消息
        print("\n2. 发送卡片消息...")
        card = create_text_card(
            "API测试卡片",
            "这是通过 **飞书API** 发送的卡片消息\n\n支持 *Markdown* 格式",
            buttons=[
                {"text": "主要按钮", "type": "primary", "url": "https://www.feishu.cn"},
                {"text": "次要按钮", "type": "default", "url": "https://open.feishu.cn"}
            ]
        )
        
        result = client.send_card_message(
            FeishuConfig.DEFAULT_RECEIVER_ID,
            card,
            FeishuConfig.DEFAULT_RECEIVER_TYPE
        )
        
        if result.get("code") == 0:
            print("   ✅ 卡片消息发送成功")
        else:
            print(f"   ❌ 发送失败: {result.get('msg')}")
            
    except Exception as e:
        print(f"   ❌ 错误: {e}")


def test_user_api(client: FeishuAPIClient):
    """测试用户API"""
    print("\n👤 测试用户API")
    print("-" * 40)
    
    if not FeishuConfig.DEFAULT_RECEIVER_ID:
        print("⚠️ 未设置默认用户ID，跳过用户API测试")
        return
    
    try:
        print("1. 获取用户信息...")
        result = client.get_user_info(
            FeishuConfig.DEFAULT_RECEIVER_ID,
            FeishuConfig.DEFAULT_RECEIVER_TYPE
        )
        
        if result.get("code") == 0:
            user = result.get("data", {}).get("user", {})
            print(f"   ✅ 获取成功")
            print(f"   - 名称: {user.get('name', 'N/A')}")
            print(f"   - 邮箱: {user.get('email', 'N/A')}")
            print(f"   - 手机: {user.get('mobile', 'N/A')}")
            print(f"   - 部门: {user.get('department_ids', [])}")
        else:
            print(f"   ❌ 获取失败: {result.get('msg')}")
            
    except Exception as e:
        print(f"   ❌ 错误: {e}")


def test_chat_api(client: FeishuAPIClient):
    """测试群组API"""
    print("\n💬 测试群组API")
    print("-" * 40)
    
    if not FeishuConfig.DEFAULT_CHAT_ID:
        print("⚠️ 未设置默认群组ID，跳过群组API测试")
        print("   请在 .env 中设置 FEISHU_DEFAULT_CHAT_ID")
        return
    
    try:
        print("1. 获取群组信息...")
        result = client.get_chat_info(FeishuConfig.DEFAULT_CHAT_ID)
        
        if result.get("code") == 0:
            chat = result.get("data", {})
            print(f"   ✅ 获取成功")
            print(f"   - 名称: {chat.get('name', 'N/A')}")
            print(f"   - 描述: {chat.get('description', 'N/A')}")
            print(f"   - 成员数: {chat.get('member_count', 0)}")
            print(f"   - 群主: {chat.get('owner_id', 'N/A')}")
        else:
            print(f"   ❌ 获取失败: {result.get('msg')}")
        
        # 发送群消息
        print("\n2. 发送群消息...")
        result = client.send_text_message(
            FeishuConfig.DEFAULT_CHAT_ID,
            "这是通过API发送到群组的测试消息 🎉",
            "chat_id"
        )
        
        if result.get("code") == 0:
            print("   ✅ 群消息发送成功")
        else:
            print(f"   ❌ 发送失败: {result.get('msg')}")
            
    except Exception as e:
        print(f"   ❌ 错误: {e}")


def test_document_api(client: FeishuAPIClient):
    """测试文档API"""
    print("\n📄 测试文档API")
    print("-" * 40)
    
    try:
        # 注意：文档API需要额外的权限配置
        print("1. 创建文档...")
        print("   ⚠️ 文档API需要在飞书开放平台配置相应权限")
        print("   - 需要授予云文档相关权限")
        print("   - 需要用户授权或使用应用身份访问")
        
        # 这里仅展示API调用方式，实际使用需要正确的folder_token
        # result = client.create_doc(
        #     folder_token="your_folder_token",
        #     title="Cursor集成测试文档",
        #     content={"title": "测试文档", "body": "文档内容"}
        # )
        
    except Exception as e:
        print(f"   ❌ 错误: {e}")


def main():
    """主函数"""
    
    # 检查配置
    if not FeishuConfig.validate_api_config():
        print("❌ 请先配置飞书API")
        print("1. 复制 .env.example 为 .env")
        print("2. 填入 FEISHU_APP_ID 和 FEISHU_APP_SECRET")
        print("3. (可选) 设置 FEISHU_DEFAULT_RECEIVER_ID 和 FEISHU_DEFAULT_CHAT_ID")
        return
    
    print("=" * 50)
    print("🚀 飞书API客户端测试")
    print("=" * 50)
    
    # 创建API客户端
    client = FeishuAPIClient(
        app_id=FeishuConfig.APP_ID,
        app_secret=FeishuConfig.APP_SECRET,
        encrypt_key=FeishuConfig.ENCRYPT_KEY
    )
    
    try:
        # 获取访问令牌
        print("\n🔑 获取访问令牌...")
        token = client._get_tenant_access_token()
        print(f"   ✅ 成功获取令牌: {token[:20]}...")
        
        # 测试各个API模块
        test_message_api(client)
        test_user_api(client)
        test_chat_api(client)
        test_document_api(client)
        
        print("\n" + "=" * 50)
        print("✅ API测试完成！")
        print("\n提示：")
        print("- 某些API需要在飞书开放平台配置相应权限")
        print("- 请确保应用已经通过审核并启用")
        print("- 部分功能需要用户授权才能使用")
        
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")
        print("\n可能的原因：")
        print("1. APP_ID 或 APP_SECRET 配置错误")
        print("2. 应用未通过审核或未启用")
        print("3. 网络连接问题")


if __name__ == "__main__":
    main()