// 北极星 NorthStar 前端全局状态（reactive store）
import { reactive } from 'vue'
import { demoTopicAnalysisDocument } from './data/demoBusinessDocuments'
import liveHistory from './data/liveHistory.json'
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
  planning: '内容排期', 'live-summary': '直播复盘', 'live-script': '直播脚本', bench: '对标账号', 'bench-compare': '竞品对比' 
}
export const DESCS = {
  dashboard: '数据来自视频号助手后台 · 22.4w 粉',
  wiki: '跨场景共享 · 分类 / 搜索 / 溯源 / AI 总结',
  scripts: '短视频脚本 · 持续沉淀',
  planning: '全量内容甘特 · 热点标注 · 下一步提醒',
  'live-summary': '清华优优· 直播数据与画面复盘',
  'live-script': '直播脚本模板',
  bench: '对标监控 + 爆款抓取',
  'bench-compare': '账号、数据、内容与 AI 洞察（内容数据)' 
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

const DEMO_VIDEOS = [
  {t:'月考后，先抓住这 3 个失分点',dur:'00:60',like:'9,642',tag:'月考复盘',cover:'/assets/covers/pressure-3sentences.png'},
  {t:'家长如何看懂孩子的月考卷',dur:'00:50',like:'6,284',tag:'家长沟通',cover:'/assets/covers/qinghua-vlog.png'},
  {t:'期中前一周，复习节奏怎么排',dur:'00:45',like:'7,891',tag:'期中冲刺',cover:'/assets/covers/english-140.png'}
]

const DEMO_LIVE_SESSIONS = [
  { date:'2026-10-07', title:'月考后，先抓住这 3 个失分点', dur:'1小时02分钟', views:'12,846', peak:'1,236', hot:'3,980', gmv:'¥4,820', status:'直播复盘', visual:{light:'窗侧柔光',setup:'书桌 + 白板',body:'深绿针织衫',gesture:'板书指示',role:'学习规划顾问'} },
  { date:'2026-10-04', title:'高一第一次月考后，家长怎么沟通', dur:'52分钟', views:'9,560', peak:'864', hot:'2,760', gmv:'¥3,160', status:'直播复盘', visual:{light:'正面柔光',setup:'书架背景',body:'浅色衬衫',gesture:'手势引导',role:'家长沟通助手'} },
  { date:'2026-09-28', title:'期中考前一周，复习节奏怎么排', dur:'58分钟', views:'15,321', peak:'1,482', hot:'4,560', gmv:'¥5,240', status:'直播复盘', visual:{light:'暖光',setup:'平板 + 白板',body:'米色西装',gesture:'步骤卡片',role:'学习方法讲解'} }
]
const DEMO_LIVE_SCRIPTS = [
  {t:'新学期第一场·高中数学',d:'10-08',len:'60m',blocks:'开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)'},
  {t:'高二数学答疑',d:'10-12',len:'60m',blocks:'痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)'},
  {t:'暑假收心专场',d:'10-18',len:'48m',blocks:'互动开场(3m) → 收心方法(15m) → 家长答疑(30m)'},
  {t:'高一家长会·破冰',d:'10-23',len:'50m',blocks:'高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)'},
  {t:'高三一轮启动·直播脚本',d:'10-29',len:'90m',blocks:'开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)'}
]

// 后端字段名 → 前端视图字段名 的归一化映射
function normalize(dashboard, wiki, live, bench, scripts) {
  const kpis = (dashboard.kpis || []).map(k => ({ ...k, up: !!k.up, warm: !!k.warm }))
  // 短视频尚未通过官方接口或报表导入验证前，不展示种子封面，避免把示例误认成真实作品。
  const importedVideos = (dashboard.top_videos || []).filter(v => Number(v.verified) === 1).map(v => ({ t: v.title, dur: v.dur, like: v.likes, tag: v.tag, cover: videoCover(v.title) }))
  const videos = importedVideos.length ? importedVideos : DEMO_VIDEOS
  const ganttWeeks = (dashboard.gantt_weeks || []).map(w => ({ ...w, cur: !!w.cur }))
  const calendar = (wiki.calendar || [])
  const benchmarks = (bench.benchmarks || []).map(b => ({ ...b, update: b.updated, img: benchImg(b.name) }))
  const virals = (bench.virals || []).map(v => ({ t: v.t, from: v.src, like: v.likes, dur: v.dur, cover: benchImg(v.src) || videoCover(v.t) }))
  const liveSessions = liveHistory.map((row, i) => { const previous=(live.sessions||[]).find(s=>s.date===row.date); const s={...previous,...row}; return ({
    d: s.date, title: s.title, dur: compactDuration(s.dur), raw_duration:s.dur, view: s.views,
    id:s.id, start_time:s.start_time, peak:s.peak,
    hot: s.hot, gmv:s.gmv, status: s.status, source_text:s.source_text, source_page:s.source_page, source_uri:s.source_uri,
    visual: {
      // 回放图只接受该场授权后台实际采集到的证据；绝不回退为占位封面。
      // 不把帐号头像或直播列表缩略图伪装成回放画面；仅展示逐场实际采集的证据。
      thumb: s.visual?.replay_image || null,
      isDemoVisual: false,
      demoTrendImage: null,
      shot: s.visual?.dashboard_shot || null,
      ...(s.visual || {}),
      ...(s.date === '2025-11-15' ? {
        trend_image: '/assets/live/1115/overview-chart.png',
        funnel: {
          flow: { title: '流量转化', overall: '0.29%', steps: [
            { label: '直播观看人数', value: '3,449', rate: '23.08%' },
            { label: '商品曝光人数', value: '796', rate: '13.07%' },
            { label: '商品点击人数', value: '104', rate: '12.50%' },
            { label: '创建订单数', value: '13', rate: '76.92%' },
            { label: '成交人数', value: '10', rate: '' }
          ] },
          product: { title: '商品转化', overall: '0.94%', steps: [
            { label: '商品曝光次数', value: '1,176', rate: '16.07%' },
            { label: '商品点击次数', value: '189', rate: '7.94%' },
            { label: '创建订单数', value: '15', rate: '73.33%' },
            { label: '成交订单数', value: '11', rate: '' }
          ] }
        },
        replay_frames: [
          { kind: 'online_peak', label: '1 · 在线峰值 131人', url: '/assets/live/1115/peak-frame.png', topic: '中档题的重要性', quote: '不要跨阶段刷题', analysis: '高光话题：清晰的阶段判断与金句形成内容记忆点，建议保留并复用。' },
          { kind: 'gmv_peak', label: '2 · 成交高峰 · 成交额破3000', url: '/assets/live/1115/sales-frame.png', topic: '与观众互动，自然塑品', analysis: '有效销售：互动承接学习需求，顺势介绍产品，建议沉淀为“回应观众 → 匹配需求 → 自然塑品”的 SOP。' },
          { kind: 'audience_drop', label: '3 · 在线人数迅速下滑', url: '/assets/live/1115/drop-frame.png', topic: '计算问题，节奏拖沓', analysis: '风险点：建议及时改话题，或切换其他内容与互动拉回人数，缩短连续计算讲解。' }
        ]
      } : {})
    }
  })})
  const liveNotes = {}
  ;(live.notes || []).forEach(n => {
    liveNotes[n.date] = {
      day: n.day, time: n.time,
      data: { cards: n.cards || [], remark: n.remark },
      script: n.script || [], visual: n.visual || {}
    }
  })
  if (liveNotes['2025-11-15']) {
    liveNotes['2025-11-15'] = {
      ...liveNotes['2025-11-15'],
      data: {
        cards: [
          { k: '观看人数', v: '3,449', tip: '直播间累计观看' },
          { k: '峰值在线', v: '131', tip: '话题：中档题的重要性' },
          { k: '平均在线', v: '75', tip: '峰值后需及时换题' },
          { k: '成交金额', v: '¥3,729', tip: '11单 / 10位成交用户' }
        ],
        remark: '峰值在线 131 人；计算问题段迅速掉人；成交额破 3000 的互动塑品段值得沉淀为 SOP。',
        highlight: '不要跨阶段刷题',
        aiAnalysis: '这句金句与“中档题的重要性”话题同时出现，在线峰值达到 131 人；建议保留为下次直播的高光话术。'
      },
      script: [
        { k: '高光话题', v: '中档题的重要性；金句“不要跨阶段刷题”，对应在线峰值 131 人。' },
        { k: '风险点', v: '计算问题段节奏拖沓，在线人数迅速下滑；建议改话题或切换到其他内容拉回人数。' },
        { k: '有效销售', v: '成交额破 3000 时与观众互动、自然塑品，形成 11 单 / 10 位成交；建议沉淀为销售 SOP。' },
        { k: '下次动作', v: '保留“中档题 → 金句 → 互动问答 → 自然塑品”链路，计算类内容拆成短段并设置换题节点。' }
      ]
    }
  }
  const wikiTrunks = (wiki.trunks || []).map(t => ({ key: t.key, name: t.name, desc: t.desc, group: t.grp }))
  const scriptList = (scripts.scripts || []).filter(s => Number(s.verified) === 1).map((s, i) => {
    const benchSrc = (s.src || '').replace(/^对标·/, '')
    return { id: s.id, t: s.t, from: s.src, dur: s.dur, tag: s.tag, cover: benchImg(benchSrc) || OWN_COVERS[i % OWN_COVERS.length] }
  })

  return {
    kpis, trend: dashboard.trend || [], actions: dashboard.actions || [],
    northstar: dashboard.northstar || [], ganttWeeks, gantt: dashboard.gantt || [], planningTasks: [...new Map([...(dashboard.planning_tasks || []), ...localPlanningTasks()].map(task=>[JSON.stringify([task.type,task.title,task.planned_at,task.notes||'']),task])).values()],
    portraits: dashboard.portraits || [], videos,
    wikiTrunks, wikiFiles: wiki.files || [], calendar, hotspots: wiki.hotspots || [],
    liveSessions, liveNotes, liveScripts: (live.scripts && live.scripts.length ? live.scripts : DEMO_LIVE_SCRIPTS),
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
  benchCompare: null,
  benchmarks: [], virals: [],
  scripts: [], library: [],
  scriptContext: null,
  cueRequest: null,
  benchAnalysisContext: null,
  liveReviewContext: null,
  demoKnowledgeDocuments: [],
  wikiDocumentRequest:null,
  courseDocuments: [],
  businessDocuments: [],
  knowledgeSaveDraft: null,
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
export async function bindChannel(name, finderUin, platform = 'wechat', profile = '') {
  if (!name.trim()) { toast('请填写账号名称'); return }
  try {
    const ch = await apiAddChannel(name.trim(), finderUin.trim(), platform, profile)
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

const DEMO_PLANNING_STORAGE = 'northstar_demo_planning_tasks'
function localPlanningTasks() { try { return JSON.parse(localStorage.getItem(DEMO_PLANNING_STORAGE) || '[]') } catch { return [] } }
function saveLocalPlanning(tasks) { localStorage.setItem(DEMO_PLANNING_STORAGE, JSON.stringify(tasks)) }
export async function createPlanningTask(task) {
  const r = await apiAddPlanningTask(task)
  if (r.ok) {
    store.planningTasks.push(r.task)
    toast('已加入内容排期')
    return r
  }
  const localTask = { ...task, id: 'demo-local-' + Date.now(), source: 'local-demo', status: '待准备', created_at: new Date().toISOString() }
  store.planningTasks.push(localTask)
  saveLocalPlanning([...localPlanningTasks(), localTask])
  toast('后端暂不可用，已保存到本地排期')
  return { ok: true, task: localTask, local: true }
}
export function updateLocalPlanningTask(task) {
  const items = localPlanningTasks().map(item => item.id === task.id ? task : item)
  saveLocalPlanning(items)
}
export function removeLocalPlanningTask(id) { saveLocalPlanning(localPlanningTasks().filter(item => item.id !== id)) }


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

let courseLoad
export function loadCourseDocuments() {
  if (!courseLoad) courseLoad = fetch('/product-courses/manifest.json').then(response => {
    if (!response.ok) throw new Error('产品课程资料加载失败')
    return response.json()
  }).then(data => { store.courseDocuments = data.documents || []; return store.courseDocuments })
    .catch(error => { courseLoad = null; throw error })
  return courseLoad
}

export function saveGuestPlanningTask(task) {
  const existing=store.planningTasks.find(item=>item.title===task.title&&item.planned_at===task.planned_at&&item.notes===task.notes)
  if(existing)return {task:existing,created:false}
  const item={...task,id:'demo-local-'+Date.now(),source:'Cue',status:'待准备',created_at:new Date().toISOString()}
  const items=[...localPlanningTasks(),item]
  saveLocalPlanning(items)
  store.planningTasks.push(item)
  return {task:item,created:true}
}

let businessLoad
export function loadBusinessDocuments(){
 if(!businessLoad)businessLoad=fetch('/business-data/manifest.json').then(r=>{if(!r.ok)throw new Error('经营数据加载失败');return r.json()}).then(data=>{store.businessDocuments=[demoTopicAnalysisDocument,...(data.documents||[])];return store.businessDocuments}).catch(e=>{businessLoad=null;throw e})
 return businessLoad
}

export function updateGuestPlanningTask(id,changes){
 const task=store.planningTasks.find(item=>item.id===id);if(task)Object.assign(task,changes)
 const saved=localPlanningTasks();const item=saved.find(item=>item.id===id);if(item){Object.assign(item,changes);saveLocalPlanning(saved)}
}

export function deleteGuestPlanningTask(id){
 const index=store.planningTasks.findIndex(item=>item.id===id)
 if(index>=0)store.planningTasks.splice(index,1)
 saveLocalPlanning(localPlanningTasks().filter(item=>item.id!==id))
}
