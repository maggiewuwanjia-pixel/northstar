# 北极星 NorthStar · 后端

视频号经营 AI Copilot 的全栈后端（第一层）。数据从 `ai-demo/copilot-dashboard.html` 的硬编码常量迁移到 SQLite，通过 REST API 对外提供真实数据。

## 技术栈

- **FastAPI** + uvicorn（Python 3.13）
- **SQLite**（单文件零运维，Phase 1；上量后可换 PostgreSQL）
- 启动即自动建表 + 空库自动灌种子数据

## 目录结构

```
backend/
├── app/
│   ├── main.py            # 入口：建表、灌种子、注册路由、CORS
│   ├── config.py          # 环境变量 / .env 配置（飞书/混元/抓取器/登录）
│   ├── auth.py            # 登录 / 多账号 / 会话（PBKDF2 密码哈希 + uuid token）
│   ├── database.py        # 连接 + schema + JSON 字段自动解析
│   ├── seed.py            # 种子数据（8 场直播 / 12 视频 / 18 文件 / 8 对标 / 12 爆款 …）
│   ├── services/
│   │   ├── scraper.py     # 视频号后台抓取器（扫码登录 + 登录态复用 + CSV 兜底）
│   │   ├── feishu.py      # 飞书开放平台（拉取脚本库/直播总结/直播脚本文档）
│   │   └── hunyuan.py     # 混元大模型（Cue 问答 / 三句结论 / 拆脚本）
│   └── routers/
│       ├── dashboard.py   # /api/dashboard 看板
│       ├── wiki.py        # /api/wiki 知识库
│       ├── live.py        # /api/live 直播复盘 + 脚本
│       ├── bench.py       # /api/bench 对标 + 爆款
│       ├── scripts.py     # /api/scripts 脚本工作台 + 素材库
│       ├── auth.py        # /api/auth 注册/登录/登出/状态
│       ├── sync.py        # /api/sync 抓取器控制 + CSV 导入
│       ├── feishu.py      # /api/feishu 飞书文档拉取
│       └── cue.py         # /api/cue 混元问答
├── data/northstar.db      # SQLite（自动生成）
├── deploy/                # 腾讯云部署（Dockerfile / nginx / systemd / 一键脚本）
├── .env.example           # 配置模板
└── requirements.txt
```

## 运行

```bash
cd northstar/backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

或直接：

```bash
/Users/maggieewu/.workbuddy/binaries/python/envs/northstar/bin/python \
  -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

## API

| 端点 | 说明 | 数据 |
|---|---|---|
| `GET /` | 产品信息 | name / slogan / status |
| `GET /api/health` | 健康检查 | ok |
| `GET /api/dashboard` | 看板 | kpis / trend / actions / northstar / gantt / portraits / top_videos |
| `GET /api/wiki` | 知识库 | trunks / files / calendar / hotspots |
| `GET /api/live` | 直播 | sessions / notes / scripts |
| `GET /api/bench` | 对标 | benchmarks / virals |
| `GET /api/scripts` | 脚本 | scripts / library |
| `POST /api/auth/register` | 注册 | token + user |
| `POST /api/auth/login` | 登录 | token + user |
| `GET /api/auth/status` | 登录态 | logged_in + user |
| `GET /api/sync/status` | 抓取器状态 | login / last_sync |
| `POST /api/sync/login` | 扫码登录 | started |
| `POST /api/sync/scrape` | 抓取后台 | data |
| `POST /api/sync/import` | CSV 导入 | type / rows |
| `GET /api/feishu/docs` | 飞书文档 | ready / docs |
| `POST /api/cue` | Cue 问答 | ready / answer |

交互式文档：启动后访问 `http://127.0.0.1:8000/docs`（Swagger UI）。

## 配置（.env）

复制 `.env.example` 为 `.env` 并按需填写。**所有能力均可选**，不填则优雅降级：

| 能力 | 变量 | 降级行为 |
|---|---|---|
| 飞书直连 | `FEISHU_APP_ID` / `FEISHU_APP_SECRET` | 用 SQLite 种子数据 |
| Cue 真实问答 | `HUNYUAN_API_KEY` | 前端关键词规则 |
| 登录签名 | `JWT_SECRET` | 随机密钥（重启需重登） |
| 抓取器 | 无需配置 | 首次扫码登录（约 7 天有效） |

## 后续（Phase 3 已落地，待真实凭证激活）

- [x] 登录鉴权、多账号
- [x] 视频号后台抓取器（扫码 + 登录态复用 + CSV 兜底）
- [x] 飞书开放平台接入层
- [x] 混元接入层
- [x] 腾讯云轻量部署方案（deploy/）
- [ ] 填入飞书 / 混元真实凭证后跑通
- [ ] PostgreSQL（上量后替换 SQLite）
