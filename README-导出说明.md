# 北极星 NorthStar · 项目导出包

视频号经营 AI 助手。产品名「北极星 NorthStar」，AI 助手名「Cue」。

导出时间：2026-09-07

---

## 包内容

```text
northstar/
├── backend/              FastAPI 后端（Python）
│   ├── app/              应用代码（routers / services / models）
│   │   ├── main.py       入口
│   │   ├── config.py     凭证配置（.env 驱动，缺省降级）
│   │   ├── auth.py       登录注册（PBKDF2 + token）
│   │   ├── database.py   SQLite（19 张表 + users/sessions/sync_state/channels）
│   │   ├── routers/      9 组 API：dashboard/wiki/live/bench/scripts/auth/sync/feishu/cue
│   │   └── services/     scraper（Playwright 抓取）/ feishu / hunyuan
│   ├── data/             运行时数据（northstar.db 未打包，启动自动建表灌种子）
│   ├── deploy/           部署脚本
│   │   ├── deploy.sh     一键部署（含域名 + HTTPS）
│   │   ├── nginx.conf    Nginx 配置模板
│   │   └── northstar.service  systemd 单元
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/             Vue 3 + Vite 前端
│   ├── src/              源码
│   │   ├── components/   Sidebar / CopilotPanel / LoginPanel / ChannelPanel / views×7
│   │   ├── data/         wikiDetail.js（知识库空间结构 + 详情数据）
│   │   ├── store.js      全局状态 + 数据归一化 + 响应式判定
│   │   ├── api.js        所有后端接口封装
│   │   └── styles.css    Design System v3（暖白 + 近黑 + 微信绿点缀）
│   ├── public/assets/    真实图片（封面 / 竞品 / 后台截图）
│   ├── public/data.json  静态兜底快照（5 个 API 合并）
│   └── dist/             已构建产物（可直接静态托管）
│
├── docs/                 文档
│   ├── PRD.md
│   ├── 产品介绍.pptx
│   ├── 部署指南.md
│   ├── 域名配置-northstar-copilot.com.md
│   └── screenshots/
│
└── 服务器部署命令-106.53.42.148.md
```

未打包（太大或含敏感信息）：

- `frontend/node_modules/`
- `backend/.venv/`
- `backend/.env`（凭证）
- `backend/data/northstar.db`（运行时数据，启动自动重建）

---

## 本地启动

### 后端

```bash
cd northstar/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --port 8000
```

首次启动自动建表并灌入种子数据。

### 前端

```bash
cd northstar/frontend
npm install
npm run dev -- --port 5175
```

访问 `http://localhost:5175`。

> 前端 `/api` 走 Vite 代理到 `127.0.0.1:8000`。
> `dist/` 已有构建产物，可直接静态托管（无后端时自动回退 `data.json`）。

---

## 服务器部署

域名 `northstar-copilot.com` 已写入部署脚本（`DOMAIN` 变量，可用环境变量覆盖）。

```bash
# 上传
scp northstar-deploy.tar.gz ubuntu@106.53.42.148:/tmp/

# 服务器执行
sudo rm -rf /opt/northstar
sudo mkdir -p /opt/northstar
sudo tar -xzf /tmp/northstar-deploy.tar.gz -C /opt/northstar --strip-components=1
sudo chown -R ubuntu:ubuntu /opt/northstar
cd /opt/northstar/backend
bash deploy/deploy.sh
```

脚本自动完成：装依赖 → 建虚拟环境 → 生成 .env → 构建前端 → 配 Nginx（server_name 含域名）→ 注册 systemd 服务 → certbot 申请 HTTPS 证书。

详细见 `docs/域名配置-northstar-copilot.com.md`。

---

## 当前功能状态

| 模块 | 状态 |
|---|---|
| 经营看板（北极星指标 / KPI / 趋势 / 画像 / 甘特图） | ✅ 完成 |
| 知识库（主题分类 + 文件详情四视图） | ✅ 完成 |
| 短视频脚本 / 直播复盘 / 直播脚本 / 对标账号 / 素材库 | ✅ 完成 |
| 多账号登录（注册 / 登录 / 数据隔离） | ✅ 完成 |
| 视频号账号绑定 | ✅ 完成 |
| Playwright 抓取（headless 扫码 + 自动同步） | ✅ 完成（选择器需按真实后台校准） |
| 表格导入（CSV 粘贴 / 文件上传） | ✅ 完成 |
| Cue 助手（混元 / 关键词兜底） | ✅ 完成 |
| 移动端适配（断点 768px） | ✅ 完成 |
| 飞书接入 | ⚠️ 代码就位，需填 app_id/secret |
| 混元接入 | ⚠️ 代码就位，需填 API key |

---

## 关键设计决策

1. **断点统一 768px**：CSS `@media (max-width:768px)` 与 JS `matchMedia` 同源，避免样式与交互错位。
2. **静态兜底**：`dist/` 含 `data.json`，`api.js` 优先请求 `/api/*`，失败回退静态快照，同一产物既能联后端也能独立托管。
3. **按用户隔离**：所有业务数据带 `user_id`，游客只读 demo 数据，登录后写入自己空间。
4. **凭证降级**：飞书 / 混元未配置时自动返回种子数据，零配置也能跑。

---

## 待办

- 视频号后台真实 DOM 选择器校准（`scraper.py` 的 `SELECTORS`）
- 素材库「移除」走删除接口（当前仅本地删除）
- 飞书 / 混元凭证激活
- ICP 备案（中国大陆服务器）
