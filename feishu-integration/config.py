"""
配置管理模块
从环境变量或配置文件加载飞书相关配置
"""

import os
from typing import Optional
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()


class FeishuConfig:
    """飞书配置类"""
    
    # Webhook配置
    WEBHOOK_URL: str = os.getenv("FEISHU_WEBHOOK_URL", "")
    WEBHOOK_SECRET: Optional[str] = os.getenv("FEISHU_WEBHOOK_SECRET")
    
    # API配置
    APP_ID: str = os.getenv("FEISHU_APP_ID", "")
    APP_SECRET: str = os.getenv("FEISHU_APP_SECRET", "")
    ENCRYPT_KEY: Optional[str] = os.getenv("FEISHU_ENCRYPT_KEY")
    
    # 默认接收者配置
    DEFAULT_RECEIVER_ID: str = os.getenv("FEISHU_DEFAULT_RECEIVER_ID", "")
    DEFAULT_RECEIVER_TYPE: str = os.getenv("FEISHU_DEFAULT_RECEIVER_TYPE", "open_id")
    DEFAULT_CHAT_ID: str = os.getenv("FEISHU_DEFAULT_CHAT_ID", "")
    
    # 日志配置
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")
    
    @classmethod
    def validate_webhook_config(cls) -> bool:
        """验证Webhook配置是否完整"""
        return bool(cls.WEBHOOK_URL)
    
    @classmethod
    def validate_api_config(cls) -> bool:
        """验证API配置是否完整"""
        return bool(cls.APP_ID and cls.APP_SECRET)
    
    @classmethod
    def get_config_summary(cls) -> dict:
        """获取配置摘要"""
        return {
            "webhook_configured": cls.validate_webhook_config(),
            "api_configured": cls.validate_api_config(),
            "has_webhook_secret": bool(cls.WEBHOOK_SECRET),
            "has_encrypt_key": bool(cls.ENCRYPT_KEY),
            "has_default_receiver": bool(cls.DEFAULT_RECEIVER_ID),
            "has_default_chat": bool(cls.DEFAULT_CHAT_ID),
            "log_level": cls.LOG_LEVEL
        }


# 配置验证
def check_config():
    """检查配置是否完整"""
    config_summary = FeishuConfig.get_config_summary()
    
    print("=" * 50)
    print("飞书集成配置检查")
    print("=" * 50)
    
    if config_summary["webhook_configured"]:
        print("✅ Webhook配置: 已配置")
        if config_summary["has_webhook_secret"]:
            print("  - 签名验证: 已启用")
    else:
        print("❌ Webhook配置: 未配置")
        print("  - 请设置 FEISHU_WEBHOOK_URL")
    
    if config_summary["api_configured"]:
        print("✅ API配置: 已配置")
        if config_summary["has_encrypt_key"]:
            print("  - 事件加密: 已启用")
    else:
        print("❌ API配置: 未配置")
        print("  - 请设置 FEISHU_APP_ID 和 FEISHU_APP_SECRET")
    
    if config_summary["has_default_receiver"]:
        print(f"✅ 默认接收者: 已设置 ({FeishuConfig.DEFAULT_RECEIVER_TYPE})")
    else:
        print("ℹ️ 默认接收者: 未设置")
    
    if config_summary["has_default_chat"]:
        print("✅ 默认群组: 已设置")
    else:
        print("ℹ️ 默认群组: 未设置")
    
    print(f"\n日志级别: {config_summary['log_level']}")
    print("=" * 50)
    
    return config_summary


if __name__ == "__main__":
    check_config()