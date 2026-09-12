// 北极星 NorthStar 前端 API 封装
const BASE = '/api'
const TOKEN_KEY = 'northstar_token'

// ---------- 登录态 ----------
export function getToken() { return localStorage.getItem(TOKEN_KEY) || '' }
export function setToken(t) { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY) }
export function authHeaders() {
  const t = getToken()
  return t ? { Authorization: 'Bearer ' + t } : {}
}

async function getJson(path, opts = {}) {
  const res = await fetch(BASE + path, { ...opts, headers: { ...authHeaders(), ...(opts.headers || {}) } })
  if (!res.ok) throw new Error(`接口 ${path} 返回 ${res.status}`)
  return res.json()
}

async function postJson(path, body) {
  return getJson(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
}

async function del(path) {
  return getJson(path, { method: 'DELETE' })
}

// 静态兜底：没有后端时（cloudstudio 静态部署）从 /data.json 加载
async function getStaticBundle() {
  const res = await fetch('/data.json')
  if (!res.ok) throw new Error(`静态数据 data.json 返回 ${res.status}`)
  return res.json()
}

// 一次拉齐 5 个接口（并发）；若后端不可用则回退到打包时的 data.json 快照
export async function fetchAll() {
  try {
    const [dashboard, wiki, live, bench, scripts] = await Promise.all([
      getJson('/dashboard'),
      getJson('/wiki'),
      getJson('/live'),
      getJson('/bench'),
      getJson('/scripts')
    ])
    return { dashboard, wiki, live, bench, scripts, source: 'api' }
  } catch (e) {
    const bundle = await getStaticBundle()
    return { ...bundle, source: 'static' }
  }
}

// ---------- 登录 / 多账号 ----------
export async function login(username, password) {
  const r = await postJson('/auth/login', { username, password })
  setToken(r.token)
  return r.user
}
export async function register(username, password, displayName) {
  const r = await postJson('/auth/register', { username, password, display_name: displayName })
  setToken(r.token)
  return r.user
}
export async function logout() {
  // 通知服务端撤销会话（失败也清本地 token，不影响体验）
  try {
    await postJson('/auth/logout', {})
  } catch (e) { /* noop */ }
  setToken('')
}
export async function me() {
  try {
    const r = await getJson('/auth/status')
    return r.logged_in ? r.user : null
  } catch (e) {
    return null
  }
}

// ---------- 素材库 / 脚本（登录后落库，按用户隔离） ----------
export async function addLibraryItem(item) {
  try {
    const r = await postJson('/library', item)
    return { ok: true, item: r.item }
  } catch (e) {
    return { ok: false, error: e.message }
  }
}
export async function addScriptItem(script) {
  try {
    const r = await postJson('/scripts', script)
    return { ok: true, script: r.script }
  } catch (e) {
    return { ok: false, error: e.message }
  }
}

export async function addPlanningTask(task) {
  try {
    const r = await postJson('/planning-tasks', task)
    return { ok: true, task: r.task }
  } catch (e) {
    return { ok: false, error: e.message }
  }
}

// ---------- 抓取器 / 扫码登录 / 同步数据 ----------
export async function syncStatus() {
  try {
    return await getJson('/sync/status')
  } catch (e) {
    return { login: { logged_in: false }, login_task: { running: false } }
  }
}
export async function startQrLogin() {
  try {
    return await postJson('/sync/login', {})
  } catch (e) {
    return { started: false, message: e.message }
  }
}
export async function runScrape() {
  try {
    return await postJson('/sync/scrape', {})
  } catch (e) {
    return { ok: false, error: e.message }
  }
}
export async function syncLiveHistory() {
  try { return await postJson('/sync/live-history', {}) }
  catch (e) { return { started: false, message: e.message } }
}
export async function captureLiveEvidence() {
  try { return await postJson('/sync/live-evidence', {}) }
  catch (e) { return { started: false, message: e.message } }
}

// ---------- 视频号账号绑定 ----------
export async function listChannels() {
  try {
    const r = await getJson('/channels')
    return r.channels || []
  } catch (e) {
    return []
  }
}
export async function addChannel(name, finderUin = '') {
  return postJson('/channels', { name, finder_uin: finderUin })
}
export async function removeChannel(channelId) {
  return del('/channels/' + channelId)
}

// 粘贴表格文本导入（CSV / TSV 自动识别）
export async function importCsvText(text) {
  try {
    return await postJson('/sync/import-text', { text })
  } catch (e) {
    return { ok: false, error: e.message }
  }
}
// CSV 文件上传导入
export async function importCsvFile(file) {
  try {
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/sync/import', {
      method: 'POST',
      headers: authHeaders(),
      body: fd
    })
    if (!res.ok) throw new Error(`导入返回 ${res.status}`)
    return await res.json()
  } catch (e) {
    return { ok: false, error: e.message }
  }
}

// 二维码实时图（带 ts 防止浏览器缓存）
export async function fetchQrcode() {
  const res = await fetch('/api/sync/qrcode?ts=' + Date.now(), { headers: authHeaders() })
  if (!res.ok) throw new Error(`二维码返回 ${res.status}`)
  const blob = await res.blob()
  return URL.createObjectURL(blob)
}

// ---------- Cue（混元）----------
// 返回 { ready, answer }；ready=false 表示后端未接混元，走前端关键词规则
export async function cueAsk(question, context = '') {
  try {
    return await postJson('/cue', { question, context })
  } catch (e) {
    return { ready: false, answer: '' }
  }
}
