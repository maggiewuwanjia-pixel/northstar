"""数据库连接与表结构（SQLite，Phase 1 零运维单文件）"""
import sqlite3
import json
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
DB_PATH = DATA_DIR / "northstar.db"

# 所有存 JSON 的列名，读取时自动反序列化
JSON_COLS = {"items", "data", "topics", "visual", "cards", "script"}

SCHEMA = """
CREATE TABLE IF NOT EXISTS kpis (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT, value TEXT, delta TEXT, up INTEGER DEFAULT 0, warm INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS trend (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  d TEXT, v INTEGER
);
CREATE TABLE IF NOT EXISTS actions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  num INTEGER, tag TEXT, title TEXT, body TEXT
);
CREATE TABLE IF NOT EXISTS northstar (
  key TEXT PRIMARY KEY, label TEXT, goal TEXT, value TEXT, delta TEXT, pct INTEGER
);
CREATE TABLE IF NOT EXISTS gantt_weeks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  t TEXT, d TEXT, cur INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS gantt (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lane TEXT, items TEXT
);
CREATE TABLE IF NOT EXISTS portraits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT, unit TEXT, data TEXT
);
CREATE TABLE IF NOT EXISTS videos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT, dur TEXT, likes TEXT, tag TEXT, verified INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS calendar (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  m TEXT, type TEXT, name TEXT, current INTEGER DEFAULT 0, topics TEXT
);
CREATE TABLE IF NOT EXISTS hotspots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  t TEXT, tag TEXT, ts TEXT, cls TEXT
);
CREATE TABLE IF NOT EXISTS benchmarks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, fans TEXT, updated TEXT, viral INTEGER, health TEXT, state TEXT, note TEXT, why TEXT
);
CREATE TABLE IF NOT EXISTS virals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  t TEXT, src TEXT, likes TEXT, dur TEXT
);
CREATE TABLE IF NOT EXISTS live_sessions (
  date TEXT PRIMARY KEY, title TEXT, dur TEXT, views TEXT, peak TEXT, hot TEXT, gmv TEXT, status TEXT, visual TEXT
);
CREATE TABLE IF NOT EXISTS live_notes (
  date TEXT PRIMARY KEY, day TEXT, time TEXT, cards TEXT, remark TEXT, script TEXT, visual TEXT
);
CREATE TABLE IF NOT EXISTS live_scripts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  t TEXT, d TEXT, len TEXT, blocks TEXT
);
CREATE TABLE IF NOT EXISTS wiki_trunks (
  key TEXT PRIMARY KEY, name TEXT, desc TEXT, grp TEXT
);
CREATE TABLE IF NOT EXISTS wiki_files (
  id TEXT PRIMARY KEY, trunk TEXT, name TEXT, src TEXT, url TEXT, time TEXT, meta TEXT
);
CREATE TABLE IF NOT EXISTS scripts (
  id TEXT PRIMARY KEY, t TEXT, src TEXT, dur TEXT, tag TEXT
);
CREATE TABLE IF NOT EXISTS library (
  id TEXT PRIMARY KEY, type TEXT, name TEXT, meta TEXT, url TEXT
);
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, username TEXT UNIQUE, password_hash TEXT,
  display_name TEXT, account_key TEXT, created_at TEXT
);
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY, user_id TEXT, created_at TEXT, expires_at TEXT
);
CREATE TABLE IF NOT EXISTS sync_state (
  key TEXT PRIMARY KEY, value TEXT, updated_at TEXT
);

-- 用户绑定的视频号账号（多用户 / 多账号扩展位）
CREATE TABLE IF NOT EXISTS channels (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  name TEXT,
  finder_uin TEXT,
  login_state TEXT,
  last_login_at TEXT,
  created_at TEXT
);

-- 同步助手：采集任务、曲线点、回放证据与可追溯分析结果
CREATE TABLE IF NOT EXISTS sync_jobs (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, kind TEXT NOT NULL,
  status TEXT NOT NULL, progress INTEGER DEFAULT 0, total INTEGER DEFAULT 0,
  message TEXT, created_at TEXT NOT NULL, started_at TEXT, finished_at TEXT
);
CREATE TABLE IF NOT EXISTS live_metric_points (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, live_id TEXT NOT NULL,
  at_seconds INTEGER NOT NULL, online INTEGER, enter_count INTEGER,
  leave_count INTEGER, gmv REAL, order_count INTEGER, source_url TEXT,
  captured_at TEXT NOT NULL,
  UNIQUE(user_id, live_id, at_seconds)
);
CREATE TABLE IF NOT EXISTS live_evidence (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, live_id TEXT NOT NULL,
  at_seconds INTEGER NOT NULL, type TEXT NOT NULL, label TEXT,
  content TEXT, asset_url TEXT, source_url TEXT, captured_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS live_analyses (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, live_id TEXT NOT NULL,
  version TEXT NOT NULL, summary TEXT, findings TEXT NOT NULL,
  source_hash TEXT, created_at TEXT NOT NULL
);

-- 用户导入的收入原始明细。看板汇总从这里回溯，不能只保留一个总数。
CREATE TABLE IF NOT EXISTS income_records (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, occurred_at TEXT,
  amount REAL NOT NULL, source_file TEXT, source_row INTEGER,
  payload TEXT, imported_at TEXT NOT NULL,
  UNIQUE(user_id, source_file, source_row)
);

-- 内容生产计划：直播/短视频都由用户创建，甘特与下一步提醒均从此表读取。
CREATE TABLE IF NOT EXISTS planning_tasks (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, type TEXT NOT NULL,
  title TEXT NOT NULL, planned_at TEXT NOT NULL, status TEXT NOT NULL DEFAULT '待准备',
  notes TEXT, source TEXT NOT NULL DEFAULT 'manual', created_at TEXT NOT NULL
);

-- 竞品只存公开短视频快照；不采集其后台经营或直播数据
CREATE TABLE IF NOT EXISTS competitor_contents (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, platform TEXT NOT NULL,
  account_name TEXT NOT NULL, content_url TEXT NOT NULL, title TEXT,
  published_at TEXT, likes INTEGER, collects INTEGER, views INTEGER,
  comments INTEGER, is_viral INTEGER NOT NULL DEFAULT 0,
  viral_reason TEXT, hook TEXT, topic TEXT, script_outline TEXT,
  captured_at TEXT NOT NULL, UNIQUE(user_id, content_url)
);
"""

# ---------------- 多用户隔离 ----------------
# 业务表每一行都属于某个 user_id：
#   未登录 / 游客  -> 读取 DEMO_USER_ID（种子模板数据）
#   注册用户      -> 注册时复制 demo 数据作为「初始示例数据」
DEMO_USER_ID = "demo"

# 需要按用户隔离的业务表（不含 users / sessions / sync_state）
TENANT_TABLES = [
    "kpis", "trend", "actions", "northstar", "gantt_weeks", "gantt",
    "portraits", "videos", "calendar", "hotspots",
    "benchmarks", "virals", "live_sessions", "live_notes", "live_scripts",
    "wiki_trunks", "wiki_files", "scripts", "library", "channels",
    "sync_jobs", "live_metric_points", "live_evidence", "live_analyses",
    "competitor_contents", "income_records", "planning_tasks",
]


def _table_columns(conn, table):
    return [r["name"] for r in conn.execute(f"PRAGMA table_info({table})").fetchall()]


def _pk_columns(conn, table):
    pks = [r["name"] for r in conn.execute(f"PRAGMA table_info({table})").fetchall() if r["pk"]]
    if pks:
        return pks
    for idx in conn.execute(f"PRAGMA index_list({table})").fetchall():
        if idx["unique"]:
            cols = [r["name"] for r in conn.execute(f"PRAGMA index_info({idx['name']})").fetchall()]
            if cols:
                return cols
    return []


def migrate_add_user_id():
    """为业务表增加 user_id 列，并把已有数据标记为 demo 模板数据（可重复执行）。"""
    conn = get_conn()
    try:
        for t in TENANT_TABLES:
            cols = _table_columns(conn, t)
            if not cols:
                continue
            if "user_id" not in cols:
                conn.execute(f"ALTER TABLE {t} ADD COLUMN user_id TEXT")
            conn.execute(
                f"UPDATE {t} SET user_id = ? WHERE user_id IS NULL OR user_id = ''",
                (DEMO_USER_ID,),
            )
        # 旧库也必须区分初始化演示内容与用户从后台报表导入的真实短视频。
        if "verified" not in _table_columns(conn, "videos"):
            conn.execute("ALTER TABLE videos ADD COLUMN verified INTEGER DEFAULT 0")
        conn.commit()
    finally:
        conn.close()


def copy_user_data(from_user_id, to_user_id):
    """把某个用户的业务数据复制一份给新用户（注册初始化用）；跳过主键/唯一列避免撞键。"""
    conn = get_conn()
    copied = {}
    try:
        for t in TENANT_TABLES:
            cols = [c for c in _table_columns(conn, t) if c != "user_id"]
            if not cols:
                continue
            pk = _pk_columns(conn, t)
            copy_cols = [c for c in cols if c not in pk] or cols
            col_sql = ", ".join(copy_cols)
            placeholders = ", ".join("?" for _ in copy_cols)
            rows = conn.execute(
                f"SELECT {col_sql} FROM {t} WHERE user_id = ?", (from_user_id,)
            ).fetchall()
            n = 0
            for r in rows:
                conn.execute(
                    f"INSERT INTO {t} (user_id, {col_sql}) VALUES (?, {placeholders})",
                    [to_user_id] + [r[c] for c in copy_cols],
                )
                n += 1
            if n:
                copied[t] = n
        conn.commit()
        return copied
    finally:
        conn.close()


def get_conn():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_conn()
    conn.executescript(SCHEMA)
    conn.commit()
    conn.close()


def _load(v):
    if v is None:
        return None
    try:
        return json.loads(v)
    except (TypeError, ValueError):
        return v


def table_rows(conn, table, user_id=None):
    """读表数据，返回 list[dict]，JSON 列自动解析。

    user_id 为空时读整表（系统表用法）；
    传入 user_id 时按用户隔离读取（业务表用法）。
    """
    if user_id:
        rows = conn.execute(f"SELECT * FROM {table} WHERE user_id = ?", (user_id,)).fetchall()
    else:
        rows = conn.execute(f"SELECT * FROM {table}").fetchall()
    out = []
    for r in rows:
        d = dict(r)
        for k in list(d.keys()):
            if k in JSON_COLS:
                d[k] = _load(d[k])
        out.append(d)
    return out


def reconcile_feishu_live_notes(conn, user_id: str) -> int:
    """将已导入的飞书人工复盘按日期匹配到用户的真实直播。

    真实直播列表来自视频号，飞书负责人工总结。导入副本保存在系统的 ``demo``
    命名空间，但它是共享的人工文档来源，不是演示内容：对已绑定该视频号的用户，
    以开播自然日回填。只补充尚不存在的备注，绝不覆盖用户后来编辑的内容；同日
    ``ceshi`` 测流场使用飞书的 ``日期+c`` 键。
    """
    notes = {
        r["date"]: dict(r) for r in conn.execute(
            "SELECT date,day,time,cards,remark,script,visual FROM live_notes WHERE user_id=?",
            (DEMO_USER_ID,),
        ).fetchall()
    }
    if not notes:
        return 0
    existing = {r["date"] for r in conn.execute(
        "SELECT date FROM live_notes WHERE user_id=?", (user_id,)
    ).fetchall()}
    sessions = conn.execute(
        "SELECT date,title FROM live_sessions WHERE user_id=?", (user_id,)
    ).fetchall()
    inserted = 0
    for session in sessions:
        session_date = session["date"]
        if session_date in existing:
            continue
        key = session_date.split(" ", 1)[0]
        if (session["title"] or "").strip().lower() == "ceshi":
            key += "c"
        note = notes.get(key)
        if not note:
            continue
        conn.execute(
            """INSERT INTO live_notes (date,day,time,cards,remark,script,visual,user_id)
               VALUES (?,?,?,?,?,?,?,?)""",
            (session_date, note["day"], note["time"], note["cards"], note["remark"],
             note["script"], note["visual"], user_id),
        )
        inserted += 1
    if inserted:
        conn.commit()
    return inserted


def seed_if_empty():
    """空库时自动灌种子数据（保证起服务即有真实数据）"""
    conn = get_conn()
    n = conn.execute("SELECT COUNT(*) AS c FROM kpis").fetchone()["c"]
    if n == 0:
        from . import seed
        seed.seed(conn)
    conn.close()
