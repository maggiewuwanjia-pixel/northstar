"""独立扫码测试脚本 —— 不依赖 web，直接调用 scraper。

用法：
  /Users/maggieewu/.workbuddy/binaries/python/envs/northstar/bin/python /Users/maggieewu/WorkBuddy/2026-08-28-23-40-33/northstar/backend/qr_login.py

成功后会写登录态到 data/browser/<user_id>.json。
"""
import sys, time
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from app.services import scraper

USER_ID = sys.argv[1] if len(sys.argv) > 1 else "manual_test_user"
TIMEOUT = int(sys.argv[2]) if len(sys.argv) > 2 else 300  # 默认 5 分钟

print(f"[qr] 启动扫码登录，user_id={USER_ID}, timeout={TIMEOUT}s")
print(f"[qr] 5 分钟内不扫会超时。弹出的窗口必须能看见二维码。")

# 先确保 storage 目录在
state = scraper.config.state_path(USER_ID)
print(f"[qr] storage 路径：{state}")

ok, msg = scraper.ensure_login(USER_ID, timeout_seconds=TIMEOUT)
print(f"[qr] 结果：ok={ok}, msg={msg}")
print(f"[qr] storage 文件存在：{state.exists()}")
