"""
飞书Webhook机器人使用示例
演示如何使用Webhook发送各种类型的消息
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.webhook import FeishuWebhookBot, create_code_block_card, create_notification_card
from config import FeishuConfig


def main():
    """主函数"""
    
    # 检查配置
    if not FeishuConfig.validate_webhook_config():
        print("❌ 请先配置 FEISHU_WEBHOOK_URL")
        print("1. 复制 .env.example 为 .env")
        print("2. 填入你的Webhook URL")
        return
    
    # 创建机器人实例
    bot = FeishuWebhookBot(
        webhook_url=FeishuConfig.WEBHOOK_URL,
        secret=FeishuConfig.WEBHOOK_SECRET
    )
    
    print("开始发送测试消息...")
    print("=" * 50)
    
    # 1. 发送简单文本消息
    print("\n1. 发送文本消息")
    result = bot.send_text("👋 Hello from Cursor! 这是一条来自Cursor的测试消息。")
    print(f"   结果: {'✅ 成功' if result.get('code') == 0 else '❌ 失败'}")
    
    # 2. 发送@所有人的消息
    print("\n2. 发送@所有人消息")
    result = bot.send_text("重要通知：Cursor与飞书集成测试中！", at_all=True)
    print(f"   结果: {'✅ 成功' if result.get('code') == 0 else '❌ 失败'}")
    
    # 3. 发送富文本消息
    print("\n3. 发送富文本消息")
    content_lines = [
        {"tag": "text", "text": "这是一条"},
        {"tag": "text", "text": "富文本", "style": ["bold", "italic"]},
        {"tag": "text", "text": "消息，包含"},
        {"tag": "a", "text": "链接", "href": "https://www.feishu.cn"},
        {"tag": "text", "text": "和"},
        {"tag": "text", "text": "高亮文本", "style": ["underline"]}
    ]
    result = bot.send_rich_text("富文本消息测试", content_lines)
    print(f"   结果: {'✅ 成功' if result.get('code') == 0 else '❌ 失败'}")
    
    # 4. 发送Markdown消息
    print("\n4. 发送Markdown消息")
    markdown_content = """
## Cursor集成功能列表

### 已实现功能
- ✅ **Webhook消息发送**
- ✅ **API调用**
- ✅ **事件订阅**

### 支持的消息类型
1. 文本消息
2. 富文本消息
3. Markdown消息
4. 卡片消息

### 代码示例
```python
bot = FeishuWebhookBot(webhook_url)
bot.send_text("Hello Feishu!")
```

[查看完整文档](https://open.feishu.cn)
"""
    result = bot.send_markdown("Markdown消息测试", markdown_content)
    print(f"   结果: {'✅ 成功' if result.get('code') == 0 else '❌ 失败'}")
    
    # 5. 发送代码块卡片
    print("\n5. 发送代码块卡片")
    code_example = """def connect_to_feishu():
    '''连接到飞书'''
    bot = FeishuWebhookBot(webhook_url)
    bot.send_text("Connected!")
    return bot"""
    
    card = create_code_block_card("Python代码示例", code_example, "python")
    result = bot.send_card(card)
    print(f"   结果: {'✅ 成功' if result.get('code') == 0 else '❌ 失败'}")
    
    # 6. 发送通知卡片
    print("\n6. 发送不同状态的通知卡片")
    
    # 成功通知
    card = create_notification_card(
        "部署成功",
        "✨ 应用已成功部署到生产环境\n\n**版本**: v1.0.0\n**时间**: 2024-01-01 12:00:00",
        "success"
    )
    result = bot.send_card(card)
    print(f"   成功通知: {'✅' if result.get('code') == 0 else '❌'}")
    
    # 警告通知
    card = create_notification_card(
        "内存使用率警告",
        "⚠️ 服务器内存使用率达到 85%\n\n请及时检查并处理",
        "warning"
    )
    result = bot.send_card(card)
    print(f"   警告通知: {'✅' if result.get('code') == 0 else '❌'}")
    
    # 错误通知
    card = create_notification_card(
        "构建失败",
        "❌ CI/CD 流水线执行失败\n\n**错误**: 单元测试未通过\n**失败数**: 3",
        "error"
    )
    result = bot.send_card(card)
    print(f"   错误通知: {'✅' if result.get('code') == 0 else '❌'}")
    
    # 信息通知
    card = create_notification_card(
        "系统维护通知",
        "ℹ️ 系统将于今晚 22:00-23:00 进行维护\n\n维护期间服务可能暂时不可用",
        "info"
    )
    result = bot.send_card(card)
    print(f"   信息通知: {'✅' if result.get('code') == 0 else '❌'}")
    
    # 7. 发送复杂卡片消息
    print("\n7. 发送复杂交互卡片")
    complex_card = {
        "config": {
            "wide_screen_mode": True
        },
        "header": {
            "title": {
                "content": "🚀 Cursor-飞书集成测试报告",
                "tag": "plain_text"
            },
            "template": "green"
        },
        "elements": [
            {
                "tag": "markdown",
                "content": "**测试时间**: 2024-01-01 12:00:00\n**测试环境**: Production"
            },
            {
                "tag": "hr"
            },
            {
                "tag": "div",
                "fields": [
                    {
                        "is_short": True,
                        "text": {
                            "content": "**总测试数**\n7",
                            "tag": "lark_md"
                        }
                    },
                    {
                        "is_short": True,
                        "text": {
                            "content": "**成功数**\n7",
                            "tag": "lark_md"
                        }
                    },
                    {
                        "is_short": True,
                        "text": {
                            "content": "**失败数**\n0",
                            "tag": "lark_md"
                        }
                    },
                    {
                        "is_short": True,
                        "text": {
                            "content": "**成功率**\n100%",
                            "tag": "lark_md"
                        }
                    }
                ]
            },
            {
                "tag": "hr"
            },
            {
                "tag": "note",
                "elements": [
                    {
                        "tag": "plain_text",
                        "content": "所有测试已通过，集成功能正常运行"
                    }
                ]
            },
            {
                "tag": "action",
                "actions": [
                    {
                        "tag": "button",
                        "text": {
                            "content": "查看详情",
                            "tag": "plain_text"
                        },
                        "type": "primary",
                        "url": "https://open.feishu.cn"
                    },
                    {
                        "tag": "button",
                        "text": {
                            "content": "查看文档",
                            "tag": "plain_text"
                        },
                        "type": "default",
                        "url": "https://open.feishu.cn/document"
                    }
                ]
            }
        ]
    }
    result = bot.send_card(complex_card)
    print(f"   结果: {'✅ 成功' if result.get('code') == 0 else '❌ 失败'}")
    
    print("\n" + "=" * 50)
    print("✅ 所有测试消息发送完成！")
    print("请检查你的飞书群组查看消息效果")


if __name__ == "__main__":
    main()