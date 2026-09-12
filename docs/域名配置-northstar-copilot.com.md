# northstar-copilot.com 域名配置

服务器：`106.53.42.148`（腾讯云轻量，Ubuntu 24.04）

---

## 第一步：DNS 解析（在域名注册商 / DNSPod 控制台）

添加两条 A 记录：

| 主机记录 | 记录类型 | 记录值 | TTL |
|---|---|---|---|
| `@` | A | `106.53.42.148` | 600 |
| `www` | A | `106.53.42.148` | 600 |

解析通常在 1-10 分钟内生效。

验证是否生效（Mac 终端）：

```bash
dig +short northstar-copilot.com
dig +short www.northstar-copilot.com
```

应返回：

```text
106.53.42.148
106.53.42.148
```

> 如果域名是在腾讯云买的，控制台搜索「云解析 DNS」或「DNSPod」，找到域名后点「添加记录」。

---

## 第二步：上传并部署

Mac 终端（在 northstar 目录所在的上一层）：

```bash
cd /Users/maggieewu/WorkBuddy/2026-08-28-23-40-33

scp northstar/northstar-deploy.tar.gz ubuntu@106.53.42.148:/tmp/
```

输入服务器密码。

---

## 第三步：服务器 WebShell 执行

```bash
sudo rm -rf /opt/northstar
sudo mkdir -p /opt/northstar
sudo tar -xzf /tmp/northstar-deploy.tar.gz -C /opt/northstar --strip-components=1
sudo chown -R ubuntu:ubuntu /opt/northstar

cd /opt/northstar/backend
bash deploy/deploy.sh
```

脚本会自动：

1. 装系统依赖（python3 / nginx / certbot）
2. 建虚拟环境 + 装 Python 依赖
3. 生成 `.env`
4. 构建前端（如服务器有 npm；没有就用上传的 dist）
5. 配置 Nginx（server_name 自动设为 `northstar-copilot.com www.northstar-copilot.com`）
6. 注册 systemd 服务 `northstar` 并启动
7. 用 certbot 申请 HTTPS 证书并强制跳转 HTTPS

---

## 第四步：验证

Mac 终端：

```bash
curl -I https://northstar-copilot.com/
```

应返回：

```text
HTTP/2 200
```

浏览器打开：

```text
https://northstar-copilot.com
```

后端健康：

```bash
curl https://northstar-copilot.com/api/health
```

应返回：

```json
{"status":"ok","name":"北极星 NorthStar"}
```

---

## 常见问题

### 1. 证书申请失败

通常是解析还没生效，或 80 端口被占用。

先确认解析：

```bash
dig +short northstar-copilot.com
```

确认 80 端口：

```bash
sudo ss -ltnp | grep ':80'
```

应看到 `nginx`。如果是别的进程（比如 OpenClaw 网关），先停掉：

```bash
sudo systemctl stop openclaw 2>/dev/null || true
sudo systemctl disable openclaw 2>/dev/null || true
sudo systemctl restart nginx
```

然后手动申请证书：

```bash
sudo certbot --nginx -d northstar-copilot.com -d www.northstar-copilot.com --redirect
```

### 2. 访问 502

后端没起来：

```bash
sudo systemctl status northstar --no-pager
sudo journalctl -u northstar -n 50 --no-pager
```

重启：

```bash
sudo systemctl restart northstar
curl http://127.0.0.1:8000/api/health
```

### 3. 想换域名

部署时用环境变量覆盖：

```bash
DOMAIN=你的域名.com bash deploy/deploy.sh
```

### 4. 证书自动续期

certbot 装好后会自动配置定时任务。手动测试：

```bash
sudo certbot renew --dry-run
```

---

## 关于 ICP 备案

服务器在中国大陆地域，域名正式对外提供服务需要 ICP 备案。

- 备案期间：`https://northstar-copilot.com` 可能被拦截
- 临时方案：先用 `http://106.53.42.148:8080` 访问
- 长期方案：在腾讯云提交备案（约 7-20 个工作日）

如果不想备案，可以把服务器换到中国香港地域，然后重新解析。
