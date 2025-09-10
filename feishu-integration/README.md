# 🚀 Cursor与飞书集成方案

这是一个完整的Cursor与飞书（Feishu/Lark）集成解决方案，支持通过Webhook和API两种方式与飞书进行交互。

## 📋 功能特性

### Webhook机器人功能
- ✅ 发送文本消息
- ✅ 发送富文本消息
- ✅ 发送Markdown消息
- ✅ 发送交互式卡片
- ✅ @所有人功能
- ✅ 签名验证支持

### 开放API功能
- ✅ 消息发送（文本、卡片、富文本）
- ✅ 用户信息获取
- ✅ 群组管理
- ✅ 文档操作
- ✅ 事件订阅处理
- ✅ Token自动管理

### Cursor集成场景
- 🔔 代码完成通知
- ❌ 错误告警
- 🧪 测试结果报告
- 📋 任务创建与管理
- 📦 Git提交通知
- 🔄 CI/CD状态同步
- 👀 代码审查请求

## 🛠 安装配置

### 1. 克隆项目

```bash
git clone <repository_url>
cd feishu-integration
```

### 2. 安装依赖

```bash
pip install -r requirements.txt
```

### 3. 配置环境变量

复制环境变量模板并填入你的配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入以下配置：

#### Webhook配置（简单快速）

1. 在飞书群组中添加自定义机器人
2. 获取Webhook URL
3. （可选）设置签名密钥

```env
FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxxxx
FEISHU_WEBHOOK_SECRET=your_secret_key  # 可选
```

#### API配置（功能完整）

1. 访问[飞书开放平台](https://open.feishu.cn)
2. 创建企业自建应用
3. 获取App ID和App Secret
4. 配置应用权限

```env
FEISHU_APP_ID=cli_xxxxxxxxxx
FEISHU_APP_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxx
FEISHU_ENCRYPT_KEY=your_encrypt_key  # 可选，用于事件加密
```

## 🚀 快速开始

### 检查配置

```bash
python config.py
```

### 发送第一条消息

#### 使用Webhook（推荐初学者）

```python
from src.webhook import FeishuWebhookBot
from config import FeishuConfig

# 创建机器人
bot = FeishuWebhookBot(FeishuConfig.WEBHOOK_URL)

# 发送消息
bot.send_text("Hello from Cursor! 🎉")
```

#### 使用API

```python
from src.api_client import FeishuAPIClient
from config import FeishuConfig

# 创建客户端
client = FeishuAPIClient(
    FeishuConfig.APP_ID,
    FeishuConfig.APP_SECRET
)

# 发送消息
client.send_text_message(
    "user_open_id",
    "Hello from Cursor API! 🚀"
)
```

## 📚 使用示例

### 运行示例脚本

项目提供了多个示例脚本，展示不同的使用场景：

```bash
# Webhook示例
python examples/webhook_example.py

# API示例
python examples/api_example.py

# Cursor集成示例
python examples/cursor_integration.py
```

### 常见使用场景

#### 1. 代码完成通知

```python
from examples.cursor_integration import CursorFeishuIntegration

integration = CursorFeishuIntegration()
integration.notify_code_completion(
    file_path="src/main.py",
    changes="def new_function():\n    pass"
)
```

#### 2. 错误告警

```python
integration.notify_error(
    error_msg="ImportError: No module named 'xxx'",
    context="运行测试时发生错误"
)
```

#### 3. 测试结果报告

```python
integration.notify_test_results(
    total=100,
    passed=95,
    failed=5,
    details=[...]
)
```

#### 4. 发送Markdown卡片

```python
bot.send_markdown(
    title="项目进度",
    markdown_text="## 本周完成\n- ✅ 功能A\n- ✅ 功能B"
)
```

## 🔧 高级功能

### 事件订阅处理

```python
from src.api_client import FeishuEventHandler

handler = FeishuEventHandler(api_client)

# 注册消息处理函数
@handler.register_handler("im.message.receive_v1")
def handle_message(event):
    print(f"收到消息: {event}")

# 处理飞书回调
handler.handle_event(request_data)
```

### 签名验证

```python
# Webhook签名验证
bot = FeishuWebhookBot(webhook_url, secret="your_secret")

# API事件签名验证
is_valid = client.verify_signature(
    timestamp, nonce, signature, body
)
```

## 📁 项目结构

```
feishu-integration/
├── src/
│   ├── webhook.py          # Webhook机器人实现
│   └── api_client.py        # API客户端实现
├── examples/
│   ├── webhook_example.py   # Webhook使用示例
│   ├── api_example.py       # API使用示例
│   └── cursor_integration.py # Cursor集成示例
├── config.py                # 配置管理
├── .env.example             # 环境变量模板
├── requirements.txt         # 项目依赖
└── README.md               # 项目文档
```

## 🔐 安全建议

1. **不要将密钥提交到代码仓库**
   - 使用 `.env` 文件管理敏感信息
   - 将 `.env` 添加到 `.gitignore`

2. **使用签名验证**
   - Webhook建议启用签名验证
   - API事件订阅建议启用加密

3. **权限最小化**
   - 只申请必要的API权限
   - 定期审查和更新权限设置

## 🐛 故障排查

### 常见问题

**Q: Webhook发送失败**
- 检查Webhook URL是否正确
- 确认机器人是否被移除或禁用
- 检查网络连接

**Q: API认证失败**
- 确认App ID和App Secret正确
- 检查应用是否已审核通过
- 确认应用权限配置

**Q: 收不到消息**
- 检查接收者ID是否正确
- 确认消息类型和格式
- 查看飞书开放平台的错误日志

## 📖 相关文档

- [飞书开放平台文档](https://open.feishu.cn/document)
- [Webhook机器人指南](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)
- [服务端API文档](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN)

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

感谢飞书开放平台提供的API支持。

---

**提示**: 这是一个示例项目，在生产环境使用前请进行充分的测试和安全审查。