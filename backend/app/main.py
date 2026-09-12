"""北极星 NorthStar 后端入口"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from .database import init_db, seed_if_empty, migrate_add_user_id
from .routers import dashboard, wiki, live, bench, scripts, auth, sync, feishu, cue, channels

# 启动即建表 + 空库灌种子数据 + 多用户隔离迁移
init_db()
seed_if_empty()
migrate_add_user_id()

app = FastAPI(title="北极星 NorthStar API", version="0.1.0")
app.mount("/api/replays", StaticFiles(directory=str((__import__('pathlib').Path(__file__).resolve().parent.parent / "data" / "replays")), check_dir=False), name="replays")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard.router)
app.include_router(wiki.router)
app.include_router(live.router)
app.include_router(bench.router)
app.include_router(scripts.router)
app.include_router(auth.router)
app.include_router(channels.router)
app.include_router(sync.router)
app.include_router(feishu.router)
app.include_router(cue.router)


@app.get("/")
def root():
    return {"name": "北极星 NorthStar", "slogan": "盯住那一颗星", "status": "ok"}


@app.get("/api/health")
def health():
    return {"status": "ok", "name": "北极星 NorthStar"}
