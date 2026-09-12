# 北极星 NorthStar · 腾讯云轻量部署手册

两种部署方式：**Docker 编排**（推荐，一次到位）或 **裸机 systemd**（腾讯云轻量经典做法）。

## 前置

1. 一台腾讯云轻量服务器（Ubuntu 22.04 / Debian 12，2C2G 起步）。
2. 本地把 `northstar/` 整个目录上传到服务器（scp / 宝塔 / Git 均可），例如放到 `/opt/northstar`。
3. 前端先构建：`cd northstar/frontend && npm run build`（产出 `dist/`）。

## 方案 A · Docker Compose

```bash
cd /opt/northstar/backend
cp .env.example .env          # 按需填飞书/混元凭证
docker compose -f deploy/docker-compose.yml up -d --build
```

- Nginx 容器托管前端 + 反代 `/api` 到后端容器。
- SQLite 与抓取器登录态通过 `../data` 卷持久化。

## 方案 B · 裸机（systemd + Nginx）

```bash
cd /opt/northstar/backend
bash deploy/deploy.sh
```

脚本自动完成：装依赖 → 建 venv → 生成 `.env` → 构建前端 → 配 Nginx → 注册 systemd 服务。

## 上线后检查

```bash
curl http://127.0.0.1:8000/api/health     # 后端：{"status":"ok"}
curl http://<IP>/api/dashboard            # 经 Nginx 反代
journalctl -u northstar -f                # 后端日志
```

## 凭证（.env）激活清单

| 能力 | 变量 | 不填时的行为 |
|---|---|---|
| 飞书知识库直连 | `FEISHU_APP_ID` / `FEISHU_APP_SECRET` | 降级到 SQLite 种子数据 |
| Cue 真实问答 | `HUNYUAN_API_KEY` | 降级到前端关键词规则 |
| 登录签名密钥 | `JWT_SECRET` | 用随机密钥（重启后需重新登录） |
| 视频号抓取器 | 无（开箱即用） | 首次需扫码，登录态约 7 天有效 |

## 抓取器注意

- 抓取器需要**有头浏览器**扫码，服务器上请用「本地有头模式首次扫码 → 登录态复用」。
- 无头/服务器场景更推荐用 **CSV 导入兜底**：`POST /api/sync/import` 上传指标或视频 CSV。
- 首次运行需下载浏览器内核：`playwright install --with-deps chromium`（Docker 镜像已内置）。

## HTTPS

腾讯云轻量可在控制台申请免费 SSL 证书，挂到 Nginx `listen 443 ssl` 即可（参考 `deploy/nginx.conf` 补 `ssl_certificate` 段）。
