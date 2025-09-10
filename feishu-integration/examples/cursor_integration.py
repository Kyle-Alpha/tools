"""
Cursor与飞书集成示例
展示如何在Cursor中使用飞书功能
"""

import sys
import os
import json
from datetime import datetime
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.webhook import FeishuWebhookBot
from src.api_client import FeishuAPIClient
from config import FeishuConfig


class CursorFeishuIntegration:
    """Cursor飞书集成类"""
    
    def __init__(self):
        """初始化集成"""
        self.webhook_bot = None
        self.api_client = None
        
        # 初始化Webhook机器人
        if FeishuConfig.validate_webhook_config():
            self.webhook_bot = FeishuWebhookBot(
                webhook_url=FeishuConfig.WEBHOOK_URL,
                secret=FeishuConfig.WEBHOOK_SECRET
            )
            print("✅ Webhook机器人已初始化")
        else:
            print("⚠️ Webhook未配置")
        
        # 初始化API客户端
        if FeishuConfig.validate_api_config():
            self.api_client = FeishuAPIClient(
                app_id=FeishuConfig.APP_ID,
                app_secret=FeishuConfig.APP_SECRET,
                encrypt_key=FeishuConfig.ENCRYPT_KEY
            )
            print("✅ API客户端已初始化")
        else:
            print("⚠️ API未配置")
    
    def notify_code_completion(self, file_path: str, changes: str):
        """通知代码完成"""
        if not self.webhook_bot:
            print("Webhook未配置，无法发送通知")
            return
        
        card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": "✅ 代码更新完成", "tag": "plain_text"},
                "template": "green"
            },
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "content": f"**文件**: `{file_path}`\n**时间**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                        "tag": "lark_md"
                    }
                },
                {
                    "tag": "hr"
                },
                {
                    "tag": "markdown",
                    "content": f"**更改内容**:\n```python\n{changes[:500]}{'...' if len(changes) > 500 else ''}\n```"
                }
            ]
        }
        
        self.webhook_bot.send_card(card)
        print(f"✅ 已发送代码完成通知: {file_path}")
    
    def notify_error(self, error_msg: str, context: str = ""):
        """通知错误"""
        if not self.webhook_bot:
            print("Webhook未配置，无法发送通知")
            return
        
        card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": "❌ 错误通知", "tag": "plain_text"},
                "template": "red"
            },
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "content": f"**错误信息**: {error_msg}\n**上下文**: {context}\n**时间**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                        "tag": "lark_md"
                    }
                }
            ]
        }
        
        self.webhook_bot.send_card(card)
        print(f"✅ 已发送错误通知")
    
    def notify_test_results(self, total: int, passed: int, failed: int, details: list = None):
        """通知测试结果"""
        if not self.webhook_bot:
            print("Webhook未配置，无法发送通知")
            return
        
        success_rate = (passed / total * 100) if total > 0 else 0
        template = "green" if failed == 0 else "red" if success_rate < 50 else "orange"
        
        elements = [
            {
                "tag": "div",
                "fields": [
                    {"is_short": True, "text": {"content": f"**总数**\n{total}", "tag": "lark_md"}},
                    {"is_short": True, "text": {"content": f"**通过**\n{passed}", "tag": "lark_md"}},
                    {"is_short": True, "text": {"content": f"**失败**\n{failed}", "tag": "lark_md"}},
                    {"is_short": True, "text": {"content": f"**成功率**\n{success_rate:.1f}%", "tag": "lark_md"}}
                ]
            }
        ]
        
        if details and failed > 0:
            elements.append({"tag": "hr"})
            failed_tests = [d for d in details if not d.get("passed", False)][:5]
            details_text = "\n".join([f"• {t['name']}: {t['error']}" for t in failed_tests])
            elements.append({
                "tag": "div",
                "text": {"content": f"**失败详情**:\n{details_text}", "tag": "lark_md"}
            })
        
        card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": "🧪 测试结果", "tag": "plain_text"},
                "template": template
            },
            "elements": elements
        }
        
        self.webhook_bot.send_card(card)
        print("✅ 已发送测试结果通知")
    
    def send_to_user(self, user_id: str, message: str, msg_type: str = "text"):
        """发送消息给用户"""
        if not self.api_client:
            print("API未配置，无法发送消息")
            return
        
        if msg_type == "text":
            result = self.api_client.send_text_message(user_id, message)
        else:
            # 可以扩展支持其他消息类型
            result = self.api_client.send_text_message(user_id, message)
        
        if result.get("code") == 0:
            print(f"✅ 消息已发送给用户: {user_id}")
        else:
            print(f"❌ 发送失败: {result.get('msg')}")
        
        return result
    
    def create_task_card(self, task_name: str, description: str, assignee: str = None, due_date: str = None):
        """创建任务卡片"""
        if not self.webhook_bot:
            print("Webhook未配置，无法发送任务卡片")
            return
        
        elements = [
            {
                "tag": "div",
                "text": {"content": f"**描述**: {description}", "tag": "lark_md"}
            }
        ]
        
        fields = []
        if assignee:
            fields.append({"is_short": True, "text": {"content": f"**负责人**\n{assignee}", "tag": "lark_md"}})
        if due_date:
            fields.append({"is_short": True, "text": {"content": f"**截止日期**\n{due_date}", "tag": "lark_md"}})
        
        if fields:
            elements.append({"tag": "hr"})
            elements.append({"tag": "div", "fields": fields})
        
        elements.append({
            "tag": "action",
            "actions": [
                {"tag": "button", "text": {"content": "开始任务", "tag": "plain_text"}, "type": "primary"},
                {"tag": "button", "text": {"content": "查看详情", "tag": "plain_text"}, "type": "default"}
            ]
        })
        
        card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": f"📋 新任务: {task_name}", "tag": "plain_text"},
                "template": "blue"
            },
            "elements": elements
        }
        
        self.webhook_bot.send_card(card)
        print(f"✅ 已创建任务卡片: {task_name}")
    
    def sync_code_to_doc(self, doc_id: str, code: str, language: str = "python"):
        """同步代码到飞书文档"""
        if not self.api_client:
            print("API未配置，无法同步到文档")
            return
        
        # 这里需要文档API权限
        # 实际实现需要根据飞书文档API进行调整
        print(f"📄 准备同步代码到文档: {doc_id}")
        print(f"   语言: {language}")
        print(f"   代码长度: {len(code)} 字符")
        
        # 示例：创建包含代码的内容
        content = {
            "title": f"代码同步 - {datetime.now().strftime('%Y-%m-%d %H:%M')}",
            "body": {
                "blocks": [
                    {
                        "type": "code",
                        "language": language,
                        "content": code
                    }
                ]
            }
        }
        
        # 实际调用需要正确的文档权限和API
        # result = self.api_client.update_doc(doc_id, content)
        print("⚠️ 文档同步功能需要配置文档API权限")


def demo_cursor_workflow():
    """演示Cursor工作流程集成"""
    print("\n" + "=" * 60)
    print("🚀 Cursor与飞书集成工作流演示")
    print("=" * 60)
    
    # 初始化集成
    integration = CursorFeishuIntegration()
    
    # 1. 代码完成通知
    print("\n1. 模拟代码完成通知")
    integration.notify_code_completion(
        "src/main.py",
        """def hello_feishu():
    print("Hello from Cursor!")
    return True"""
    )
    
    # 2. 错误通知
    print("\n2. 模拟错误通知")
    integration.notify_error(
        "ImportError: No module named 'feishu'",
        "尝试导入飞书模块时失败"
    )
    
    # 3. 测试结果通知
    print("\n3. 模拟测试结果通知")
    integration.notify_test_results(
        total=10,
        passed=8,
        failed=2,
        details=[
            {"name": "test_connection", "passed": True},
            {"name": "test_send_message", "passed": True},
            {"name": "test_webhook", "passed": False, "error": "Connection timeout"},
            {"name": "test_api", "passed": False, "error": "Invalid token"}
        ]
    )
    
    # 4. 创建任务
    print("\n4. 模拟创建任务")
    integration.create_task_card(
        "优化飞书集成性能",
        "需要优化API调用频率，减少延迟",
        assignee="张三",
        due_date="2024-01-15"
    )
    
    # 5. 发送消息给用户（需要配置）
    if FeishuConfig.DEFAULT_RECEIVER_ID:
        print("\n5. 发送消息给默认用户")
        integration.send_to_user(
            FeishuConfig.DEFAULT_RECEIVER_ID,
            "Cursor集成测试消息：代码已更新完成！"
        )
    
    print("\n" + "=" * 60)
    print("✅ 工作流演示完成！")


def demo_automation_scenarios():
    """演示自动化场景"""
    print("\n" + "=" * 60)
    print("🤖 自动化场景演示")
    print("=" * 60)
    
    integration = CursorFeishuIntegration()
    
    # 场景1: Git提交后通知
    print("\n场景1: Git提交通知")
    if integration.webhook_bot:
        commit_card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": "📦 新的代码提交", "tag": "plain_text"},
                "template": "purple"
            },
            "elements": [
                {
                    "tag": "markdown",
                    "content": """**提交信息**: feat: 添加飞书集成功能
**分支**: main
**作者**: developer
**文件变更**: 5 files changed, 423 insertions(+)

```diff
+ src/feishu_integration.py
+ config/feishu.yaml
+ tests/test_integration.py
```"""
                }
            ]
        }
        integration.webhook_bot.send_card(commit_card)
        print("   ✅ 已发送Git提交通知")
    
    # 场景2: CI/CD流水线状态
    print("\n场景2: CI/CD流水线通知")
    if integration.webhook_bot:
        pipeline_card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": "🔄 流水线执行中", "tag": "plain_text"},
                "template": "orange"
            },
            "elements": [
                {
                    "tag": "div",
                    "fields": [
                        {"is_short": True, "text": {"content": "**构建**\n✅ 成功", "tag": "lark_md"}},
                        {"is_short": True, "text": {"content": "**测试**\n⏳ 进行中", "tag": "lark_md"}},
                        {"is_short": True, "text": {"content": "**部署**\n⏸ 等待", "tag": "lark_md"}},
                        {"is_short": True, "text": {"content": "**进度**\n66%", "tag": "lark_md"}}
                    ]
                }
            ]
        }
        integration.webhook_bot.send_card(pipeline_card)
        print("   ✅ 已发送流水线状态")
    
    # 场景3: 代码审查请求
    print("\n场景3: 代码审查请求")
    if integration.webhook_bot:
        review_card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"content": "👀 需要代码审查", "tag": "plain_text"},
                "template": "blue"
            },
            "elements": [
                {
                    "tag": "markdown",
                    "content": """**PR标题**: 添加用户认证功能
**提交者**: @developer
**变更统计**: +245 -32
**描述**: 实现了基于JWT的用户认证系统"""
                },
                {
                    "tag": "action",
                    "actions": [
                        {"tag": "button", "text": {"content": "查看PR", "tag": "plain_text"}, 
                         "type": "primary", "url": "https://github.com/example/pr/123"},
                        {"tag": "button", "text": {"content": "开始审查", "tag": "plain_text"}, 
                         "type": "default"}
                    ]
                }
            ]
        }
        integration.webhook_bot.send_card(review_card)
        print("   ✅ 已发送代码审查请求")
    
    print("\n" + "=" * 60)
    print("✅ 自动化场景演示完成！")


def main():
    """主函数"""
    print("Cursor与飞书集成演示")
    print("请选择演示内容：")
    print("1. 基础工作流演示")
    print("2. 自动化场景演示")
    print("3. 全部演示")
    
    choice = input("\n请输入选项 (1-3): ").strip()
    
    if choice == "1":
        demo_cursor_workflow()
    elif choice == "2":
        demo_automation_scenarios()
    elif choice == "3":
        demo_cursor_workflow()
        demo_automation_scenarios()
    else:
        print("无效选项")


if __name__ == "__main__":
    main()