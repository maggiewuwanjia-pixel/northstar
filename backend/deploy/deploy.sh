#!/usr/bin/env bash
# 北极星 NorthStar · 腾讯云轻量服务器一键部署脚本（裸机方案）
# 用法：把整个 northstar/ 目录上传到服务器 /opt/northstar 后，在 backend/ 下执行：
#   bash deploy/deploy.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"        # deploy.sh 上两级，即 northstar/
BACKEND="$ROOT/backend"
FRONTEND="$ROOT/frontend"

# 域名配置：优先用环境变量，缺省用 northstar-copilot.com
# 用法：DOMAIN=你的域名 bash deploy/deploy.sh
DOMAIN="${DOMAIN:-northstar-copilot.com}"
# 是否自动申请 HTTPS 证书（1=开启，需域名已解析到本机且 80 端口可访问）
ENABLE_HTTPS="${ENABLE_HTTPS:-1}"

# Ubuntu 服务器通常以 ubuntu 用户登录；自动为需要 root 的步骤加 sudo。
if [ "$(id -u)" -eq 0 ]; then
  SUDO=""
else
  SUDO="sudo"
fi

echo "==> [1/6] 更新系统包"
$SUDO apt-get update -y >/dev/null
$SUDO apt-get install -y python3 python3-venv python3-pip nginx >/dev/null 2>&1 || true

echo "==> [2/6] 创建 Python 虚拟环境并装依赖"
if [ ! -d "$BACKEND/.venv" ]; then
  python3 -m venv "$BACKEND/.venv"
fi
"$BACKEND/.venv/bin/pip" install --upgrade pip >/dev/null
"$BACKEND/.venv/bin/pip" install -r "$BACKEND/requirements.txt" >/dev/null

echo "==> [3/6] 初始化 .env（若不存在，复制模板）"
if [ ! -f "$BACKEND/.env" ]; then
  cp "$BACKEND/.env.example" "$BACKEND/.env"
  echo "     已生成 $BACKEND/.env，请按需填入飞书/混元凭证"
fi

echo "==> [4/6] 构建前端（Node 22+）"
if command -v npm >/dev/null; then
  (cd "$FRONTEND" && npm install >/dev/null && npm run build >/dev/null)
else
  echo "     未检测到 npm，跳过前端构建（请预先构建 dist 再上传）"
fi

echo "==> [5/6] 配置 Nginx 反代 + 静态托管（域名：$DOMAIN）"
if [ -d "$FRONTEND/dist" ]; then
  NGINX_TARGET="/etc/nginx/sites-available/northstar"
  $SUDO mkdir -p /etc/nginx/sites-available
  $SUDO sed "s|root /usr/share/nginx/html|root $FRONTEND/dist|; \
             s|http://backend:8000|http://127.0.0.1:8000|g; \
             s|server_name _;|server_name $DOMAIN www.$DOMAIN;|" \
    "$BACKEND/deploy/nginx.conf" | $SUDO tee "$NGINX_TARGET" >/dev/null
  if [ -d /etc/nginx/sites-enabled ]; then
    $SUDO rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true
    $SUDO ln -sf "$NGINX_TARGET" /etc/nginx/sites-enabled/northstar 2>/dev/null || true
  fi
  $SUDO nginx -t && $SUDO systemctl reload nginx
else
  echo "     未找到 $FRONTEND/dist，跳过 Nginx 配置"
fi

echo "==> [6/7] 注册 systemd 服务并启动后端"
$SUDO sed "s|/opt/northstar|$ROOT|g" "$BACKEND/deploy/northstar.service" | $SUDO tee /etc/systemd/system/northstar.service >/dev/null
$SUDO systemctl daemon-reload
$SUDO systemctl enable --now northstar
sleep 2

echo "==> [7/7] 申请 HTTPS 证书（certbot）"
if [ "$ENABLE_HTTPS" = "1" ]; then
  if ! command -v certbot >/dev/null; then
    $SUDO apt-get install -y certbot python3-certbot-nginx >/dev/null 2>&1 || true
  fi
  if command -v certbot >/dev/null; then
    # 已存在证书时也需重新执行 Nginx installer：第 5 步可能刚重写过站点配置。
    if $SUDO certbot certificates 2>/dev/null | grep -q "$DOMAIN"; then
      $SUDO certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" \
        --non-interactive --agree-tos -m "admin@$DOMAIN" --redirect --reinstall || \
        echo "     ⚠️ HTTPS 配置恢复失败，先用 HTTP 访问"
    else
      $SUDO certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" \
        --non-interactive --agree-tos -m "admin@$DOMAIN" --redirect || \
        echo "     ⚠️ 证书申请失败（域名未解析或 80 端口不通），先用 HTTP 访问"
    fi
  else
    echo "     certbot 安装失败，跳过 HTTPS"
  fi
else
  echo "     已跳过（ENABLE_HTTPS != 1）"
fi

echo ""
echo "✅ 部署完成："
echo "   域名：     https://$DOMAIN"
echo "   后端健康： curl http://127.0.0.1:8000/api/health"
echo "   交互文档： https://$DOMAIN/docs"
echo "   查看日志： journalctl -u northstar -f"
echo ""
echo "   若证书未申请成功，可先访问 http://$DOMAIN"
echo "   待域名解析生效后手动执行："
echo "     sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect"
