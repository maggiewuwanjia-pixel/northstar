// 北极星 NorthStar 前端全局状态（reactive store）
import { reactive } from 'vue'
import {
  fetchAll, me as apiMe,
  addLibraryItem as apiAddLibrary, addScriptItem as apiAddScript, addPlanningTask as apiAddPlanningTask,
  listChannels as apiListChannels, addChannel as apiAddChannel, removeChannel as apiRemoveChannel
} from './api'

// 飞书文档源（与后端 seed 一致）
export const SCRIPT_DOC = 'https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic'
export const LIVE_SUMMARY_DOC = 'https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b'
export const LIVE_SCRIPT_DOC = 'https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg'

export const TITLES = {
  dashboard: '经营看板', wiki: '知识库', scripts: '短视频脚本',
  planning: '内容排期', 'live-summary': '直播复盘', 'live-script': '直播脚本', bench: '对标账号', library: '素材库'
}
export const DESCS = {
  dashboard: '数据来自视频号助手后台 · 22.4w 粉',
  wiki: '跨场景共享 · 分类 / 搜索 / 溯源 / AI 总结',
  scripts: '短视频脚本 · 持续沉淀',
  planning: '全量内容甘特 · 热点标注 · 下一步提醒',
  'live-summary': '真实直播数据 + 画面复盘',
  'live-script': '直播脚本模板',
  bench: '对标监控 + 爆款抓取',
  library: '素材库 · 拖入自动归类'
}

// 直播缩略图与封面（本地真实素材）
const OWN_COVERS = [
  '/assets/covers/qinghua-vlog.png',
  '/assets/covers/xinhua-repost.png',
  '/assets/covers/qinghua-effort.png',
  '/assets/covers/pressure-3sentences.png',
  '/assets/covers/english-140.png',
  '/assets/covers/gaoyi-mistakes.png'
]
const VIDEO_COVERS = {
  '考清华是因为努力还是天赋': '/assets/covers/qinghua-effort.png',
  '优优的学习方法被新华社转发': '/assets/covers/xinhua-repost.png',
  '高中生压力大，送给他这3句话': '/assets/covers/pressure-3sentences.png',
  '清华生活vlog': '/assets/covers/qinghua-vlog.png',
  '英语上140': '/assets/covers/english-140.png',
  '高一学生是怎样毁掉自己的': '/assets/covers/gaoyi-mistakes.png'
}
const videoCover = t => {
  for (const k in VIDEO_COVERS) { if (t.includes(k)) return VIDEO_COVERS[k] }
  return OWN_COVERS[Math.abs([...t].reduce((s, c) => s + c.charCodeAt(0), 0)) % OWN_COVERS.length]
}
const BENCH_IMGS = {
  '汪舅舅': '/assets/bench/wangjiujiu.jpg',
  '清华杨奇函语文说': '/assets/bench/yangqihan.jpg',
  '杨奇函': '/assets/bench/yangqihan.jpg',
  '学霸来了': '/assets/bench/xueba-laille.png',
  '杨老师讲数学': '/assets/bench/yang-laoshi-math.png',
  '清华爸带娃': '/assets/bench/qinghua-dad.png',
  '高考冲刺日记': '/assets/bench/gaokao-diary.png'
}
const benchImg = name => {
  for (const k in BENCH_IMGS) { if (name.includes(k)) return BENCH_IMGS[k] }
  return null
}

// 视频号后台返回“1小时58分钟29秒”一类文本；列表只需清晰的小时/分钟粒度。
const compactDuration = value => {
  const text = String(value || '')
  const hours = text.match(/(\d+)小时/)
  const minutes = text.match(/(\d+)分钟/)
  if (hours) return `${hours[1]}h${minutes ? minutes[1] : '0'}min`
  if (minutes) return `${minutes[1]}min`
  const seconds = text.match(/(\d+)秒/)
  return seconds ? '<1min' : text
}

// 后端字段名 → 前端视图字段名 的归一化映射
function normalize(dashboard, wiki, live, bench, scripts) {
  const kpis = (dashboard.kpis || []).map(k => ({ ...k, up: !!k.up, warm: !!k.warm }))
  // 短视频尚未通过官方接口或报表导入验证前，不展示种子封面，避免把示例误认成真实作品。
  const videos = (dashboard.top_videos || []).filter(v => Number(v.verified) === 1).map(v => ({ t: v.title, dur: v.dur, like: v.likes, tag: v.tag, cover: videoCover(v.title) }))
  const ganttWeeks = (dashboard.gantt_weeks || []).map(w => ({ ...w, cur: !!w.cur }))
  const calendar = (wiki.calendar || [])
  const benchmarks = (bench.benchmarks || []).map(b => ({ ...b, update: b.updated, img: benchImg(b.name) }))
  const virals = (bench.virals || []).map(v => ({ t: v.t, from: v.src, like: v.likes, dur: v.dur, cover: benchImg(v.src) || videoCover(v.t) }))
  const liveSessions = (live.sessions || []).map((s, i) => ({
    d: s.date, title: s.title, dur: compactDuration(s.dur), view: s.views, peak: s.peak,
    hot: s.hot, gmv: s.gmv, status: s.status,
    visual: {
      // 回放图只接受该场授权后台实际采集到的证据；绝不回退为演示封面。
      // 不把帐号头像或直播列表缩略图伪装成回放画面；仅展示逐场实际采集的证据。
      thumb: s.visual?.replay_image || '/assets/live/demo-replay.svg',
      isDemoVisual: !s.visual?.replay_image,
      demoTrendImage: s.visual?.trend_image ? null : '/assets/live/demo-trend.svg',
      shot: s.visual?.dashboard_shot || null,
      ...(s.visual || {})
    }
  }))
  const liveNotes = {}
  ;(live.notes || []).forEach(n => {
    liveNotes[n.date] = {
      day: n.day, time: n.time,
      data: { cards: n.cards || [], remark: n.remark },
      script: n.script || [], visual: n.visual || {}
    }
  })
  const wikiTrunks = (wiki.trunks || []).map(t => ({ key: t.key, name: t.name, desc: t.desc, group: t.grp }))
  const scriptList = (scripts.scripts || []).filter(s => Number(s.verified) === 1).map((s, i) => {
    const benchSrc = (s.src || '').replace(/^对标·/, '')
    return { id: s.id, t: s.t, from: s.src, dur: s.dur, tag: s.tag, cover: benchImg(benchSrc) || OWN_COVERS[i % OWN_COVERS.length] }
  })

  return {
    kpis, trend: dashboard.trend || [], actions: dashboard.actions || [],
    northstar: dashboard.northstar || [], ganttWeeks, gantt: dashboard.gantt || [], planningTasks: dashboard.planning_tasks || [],
    portraits: dashboard.portraits || [], videos,
    wikiTrunks, wikiFiles: wiki.files || [], calendar, hotspots: wiki.hotspots || [],
    liveSessions, liveNotes, liveScripts: live.scripts || [],
    benchmarks, virals,
    scripts: scriptList, library: scripts.library || []
  }
}

export const store = reactive({
  loading: true,
  error: null,
  // 数据
  kpis: [], trend: [], actions: [], northstar: [], ganttWeeks: [], gantt: [], planningTasks: [], portraits: [], videos: [],
  wikiTrunks: [], wikiFiles: [], calendar: [], hotspots: [],
  liveSessions: [], liveNotes: {}, liveScripts: [],
  benchmarks: [], virals: [],
  scripts: [], library: [],
  // UI 状态
  activeView: 'dashboard',
  // 移动端抽屉（iPhone 等窄屏）
  sidebarOpen: false,
  copilotMobileOpen: false,
  isMobile: false,
  wikiTrunk: 'all',
  wikiQuery: '',
  wikiSum: null,
  northStar: 'fans',
  copilotOpen: true,
  chat: [],
  // 登录态
  authUser: null,
  loginOpen: false,
  dataSource: 'api',   // 'api' | 'static'（静态部署无后端时登录不可用）
  // 绑定的视频号账号
  channels: [],
  channelsOpen: false,
  syncAssistantOpen: false,
  // 全局浮层
  toasts: [],
  modal: null
})

// 启动时检查登录态（有 token 则回填用户信息）
export async function initAuth() {
  const user = await apiMe()
  if (user) {
    store.authUser = user
    loadChannels()
  }
}
export function setAuthUser(user) {
  store.authUser = user
  store.loginOpen = false
  // 登录 / 注册成功后：带 token 重新拉一次数据（后端按用户隔离）
  loadData(false)
  loadChannels()
}
export function clearAuthUser() {
  store.authUser = null
  store.channels = []
  // 退出后回到 demo 模板数据
  loadData(false)
}

// ---- 视频号账号绑定 ----
export async function loadChannels() {
  if (!store.authUser) { store.channels = []; return }
  store.channels = await apiListChannels()
}
export function openChannels() {
  if (!store.authUser) {
    store.loginOpen = true
    toast('请先登录再绑定视频号')
    return
  }
  store.channelsOpen = true
  loadChannels()
}
export function closeChannels() { store.channelsOpen = false }
export async function bindChannel(name, finderUin) {
  if (!name.trim()) { toast('请填写账号名称'); return }
  try {
    const ch = await apiAddChannel(name.trim(), finderUin.trim())
    store.channels.push(ch.channel || ch)
    toast('已绑定「' + name.trim() + '」')
    return true
  } catch (e) {
    toast('绑定失败：' + (e.message || '请稍后重试'))
    return false
  }
}
export async function unbindChannel(id) {
  try {
    await apiRemoveChannel(id)
    store.channels = store.channels.filter(c => c.id !== id)
    toast('已解绑')
  } catch (e) {
    toast('解绑失败：' + (e.message || '请稍后重试'))
  }
}

export async function createPlanningTask(task) {
  const r = await apiAddPlanningTask(task)
  if (r.ok) {
    store.planningTasks.push(r.task)
    toast('已加入内容排期')
  } else toast('保存排期失败：' + (r.error || '请稍后重试'))
  return r
}

// ---- 响应式：与 CSS 断点严格一致（MOBILE_BREAKPOINT） ----
// 手机 → 移动端（抽屉 + 全屏 Cue）；平板/电脑 → 网页端（侧栏常驻 + 右侧 Cue）
export const MOBILE_BREAKPOINT = 768

export function initResponsive() {
  // 用 matchMedia 而不是 innerWidth，保证 JS 判定与 CSS @media 完全一致
  const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
  const apply = (matches) => {
    store.isMobile = matches
    // 切到桌面端时关掉抽屉，避免残留遮罩
    if (!matches) { store.sidebarOpen = false; store.copilotMobileOpen = false }
  }
  // 只信 matchMedia，与 CSS 的 @media (max-width:768px) 完全同源，
  // 不再用 innerWidth 或 orientation 另做判断，避免出现「样式移动、交互桌面」的错位。
  apply(mq.matches)
  if (mq.addEventListener) {
    mq.addEventListener('change', (e) => apply(e.matches))
  } else {
    // Safari < 14 兜底
    window.addEventListener('resize', () => apply(mq.matches))
    window.addEventListener('orientationchange', () => apply(mq.matches))
  }
}
export function toggleSidebar() { store.sidebarOpen = !store.sidebarOpen }
export function closeSidebar() { store.sidebarOpen = false }
export function toggleCopilotMobile() { store.copilotMobileOpen = !store.copilotMobileOpen }
export function closeCopilotMobile() { store.copilotMobileOpen = false }
// 切视图：移动端自动收起侧栏
export function switchViewMobile(v) {
  switchView(v)
  if (store.isMobile) closeSidebar()
}

export async function loadData(showLoading = true) {
  // 刷新（登录/退出后重载）不再打全屏 loading，避免白屏闪烁
  if (showLoading) store.loading = true
  store.error = null
  try {
    const { dashboard, wiki, live, bench, scripts, source } = await fetchAll()
    const n = normalize(dashboard, wiki, live, bench, scripts)
    Object.assign(store, n)
    store.dataSource = source || 'api'
    // 刷新后重置知识库二级页，避免停留在不存在的文件详情
    store.wikiSum = null
  } catch (e) {
    store.error = e.message
  } finally {
    store.loading = false
  }
}

// ---- 全局 toast ----
export function toast(msg) {
  const id = Date.now() + Math.random()
  store.toasts.push({ id, msg })
  setTimeout(() => {
    store.toasts = store.toasts.filter(t => t.id !== id)
  }, 2200)
}

// ---- 全局 modal ----
export function openModal(title, fields, onSave) {
  store.modal = { title, fields, onSave }
}
export function closeModal() {
  store.modal = null
}

// ---- 跨视图操作 ----
export function switchView(v) {
  store.activeView = v
}
export function addToScript(title, from) {
  const benchSrc = (from || '').replace(/^对标·/, '')
  const localId = 's' + Date.now()
  store.scripts.unshift({ id: localId, t: title, from: from || 'WIKI', dur: '00:30', tag: '新选题', cover: benchImg(benchSrc) || videoCover(title) })
  toast('已加入「短视频脚本」')
  // 已登录：落库到自己的空间（失败则保留本地，不打断操作）
  if (store.authUser) {
    apiAddScript({ t: title, src: from || 'WIKI', dur: '00:30', tag: '新选题' }).then(r => {
      if (r.ok && r.script) {
        const i = store.scripts.findIndex(x => x.id === localId)
        if (i >= 0) store.scripts[i] = { ...store.scripts[i], id: r.script.id }
      }
    })
  }
}
export function landScript(title, from) {
  addToScript(title, from)
  switchView('scripts')
  toast('已落地到「短视频脚本」工作台')
}
export function convertToScript(v) {
  const localId = 's' + Date.now()
  store.scripts.unshift({ id: localId, t: v.t, from: '对标·' + v.from, dur: v.dur, tag: '对标爆款', cover: v.cover || videoCover(v.t) })
  toast('已加入「短视频脚本」')
  if (store.authUser) {
    apiAddScript({ t: v.t, src: '对标·' + v.from, dur: v.dur, tag: '对标爆款' }).then(r => {
      if (r.ok && r.script) {
        const i = store.scripts.findIndex(x => x.id === localId)
        if (i >= 0) store.scripts[i] = { ...store.scripts[i], id: r.script.id }
      }
    })
  }
}
export function removeLibraryItem(item) {
  store.library = store.library.filter(x => x.id !== item.id)
  toast('已移除')
}
// 新增素材：登录后落库，游客仅本地
export function persistLibrary(item) {
  if (!store.authUser) return
  apiAddLibrary(item).then(r => {
    if (r.ok && r.item) {
      const i = store.library.findIndex(x => x.id === item.id)
      if (i >= 0) store.library[i] = { ...store.library[i], id: r.item.id }
    }
  })
}

// ---- 素材库拖拽归类 ----
const shortURL = u => u.length > 60 ? u.slice(0, 57) + '…' : u
function classifyURL(u) {
  if (/feishu\.cn|larksuite\.com/.test(u)) return 'feishu'
  if (/finder|channels\.weixin|video.*weixin/.test(u)) return 'bench'
  if (/xiaohongshu\.com|douyin\.com|tiktok\.com|weibo\.com/.test(u)) return 'bench'
  if (/mp\.weixin\.qq\.com/.test(u)) return 'wiki'
  return 'library'
}
const bucketLabel = b => ({ feishu: '知识库 / 脚本', bench: '对标账号', wiki: '知识库', library: '素材库' }[b] || '素材库')

export function handleDrop(dt) {
  let fcount = 0
  if (dt.files && dt.files.length) {
    ;[...dt.files].forEach(f => {
      const ext = f.name.split('.').pop().toLowerCase()
      const item = { id: 'l' + Date.now() + Math.random(), type: 'file', name: f.name, meta: (f.size / 1024).toFixed(1) + ' KB · ' + ext.toUpperCase() }
      store.library.unshift(item)
      persistLibrary(item)
      fcount++
    })
  }
  if (dt.items) {
    ;[...dt.items].forEach(it => {
      if (it.kind !== 'string') return
      it.getAsString(s => {
        if (!s || !s.startsWith('http')) return
        const bucket = classifyURL(s)
        const item = { id: 'l' + Date.now() + Math.random(), type: bucket === 'feishu' ? 'feishu' : 'link', name: shortURL(s), meta: bucketLabel(bucket), url: s }
        store.library.unshift(item)
        persistLibrary(item)
        toast('已归到「' + bucketLabel(bucket) + '」')
      })
    })
  }
  if (fcount) toast('已加入 ' + fcount + ' 个文件到素材库')
}
