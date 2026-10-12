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
  const request={...opts,headers:{...authHeaders(),...(opts.headers||{})}}
  let res
  try{res=await fetch(BASE+path,request)}
  catch(error){
    // 仅重试无写入副作用的模型请求；保存/排期等操作不自动重复提交。
    if(!['/cue/guest','/cue/intent'].includes(path))throw error
    try{res=await fetch(BASE+path,request)}catch{throw new Error('与本地服务的连接中断，请点击重新生成重试。问题和引用资料已保留。')}
  }
  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    const validation = Array.isArray(error.detail)
      ? error.detail.map(item => {
          const field = Array.isArray(item.loc) ? item.loc[item.loc.length - 1] : '内容'
          const labels = { title: '资料名称', text: '正文', source: '来源', url: '链接' }
          return `${labels[field] || field}填写不完整`
        }).join('；')
      : ''
    const failure=new Error(typeof error.detail==='string'?error.detail:error.detail?.message||validation||`接口 ${path} 返回 ${res.status}`)
    failure.canContinue=error.detail?.can_continue===true
    failure.code=error.detail?.code
    throw failure
  }
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
export async function updatePlanningTask(id, task) {
  return getJson('/planning-tasks/' + id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task) })
}
export async function deletePlanningTask(id) { return del('/planning-tasks/' + id) }

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
export async function addChannel(name, finderUin = '', platform = 'wechat', profile = '') {
  return postJson('/channels', { name, finder_uin: finderUin, platform, profile })
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

// ---------- Knowledge / grounded Cue ----------
export const knowledgeList = () => getJson('/knowledge')
export const knowledgeDetail = id => getJson('/knowledge/' + id)
export const knowledgeAnalyze = id => postJson('/knowledge/' + id + '/analyze', {})
export const knowledgeDelete = id => del('/knowledge/' + id)
export const knowledgeUpdate = (id, body) => getJson('/knowledge/' + id, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
export const knowledgeText = body => postJson('/knowledge/text', body)
export const knowledgeFeishu = body => postJson('/knowledge/feishu', body)
export const knowledgeCreateSpace = body => postJson('/knowledge/spaces', body)
export const knowledgeAddMember = (spaceId, body) => postJson(`/knowledge/spaces/${spaceId}/members`, body)
export const knowledgeGraph = () => getJson('/knowledge/graph')
export async function knowledgeUpload(file) {
  const body = new FormData()
  body.append('file', file)
  return getJson('/knowledge/upload', { method: 'POST', body })
}
export const cueAsk = (question, context = '', history = [], options = {}) => postJson('/cue', { question, context, history, ...options })
export const cueConversations = () => getJson('/cue/conversations')
export const cueConversation = id => getJson('/cue/conversations/' + id)
export const cueNewConversation = body => postJson('/cue/conversations', body)
export const cueTasks = () => getJson('/cue/tasks')
export const cueCreateTask = body => postJson('/cue/tasks', body)
export const cueSaveArtifact = body => postJson('/cue/artifacts', body)

export const cueGuestAsk = (question, context = '', history = [], options = {}) => postJson('/cue/guest', { question, context, history, ...options })
export const cueClassifyIntent = (question,page) => postJson('/cue/intent',{question,page})
