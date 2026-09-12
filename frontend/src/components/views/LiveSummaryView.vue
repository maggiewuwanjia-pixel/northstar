<script setup>
import { ref, computed, onUnmounted, watch } from 'vue'
import { store, toast, LIVE_SUMMARY_DOC } from '../../store'

const selectedDate = ref(store.liveSessions[2] ? store.liveSessions[2].d : (store.liveSessions[0] ? store.liveSessions[0].d : ''))
const selected = computed(() => store.liveSessions.find(s => s.d === selectedDate.value) || store.liveSessions[0])
const note = computed(() => selected.value ? store.liveNotes[selected.value.d] : null)

// 让当前 8 场记录也能验证翻页；后续同步更多场次会继续按此大小分页。
const PAGE_SIZE = 6
const selectedMonth = ref('')
const selectedWeek = ref('')
const page = ref(1)
// 首屏先展示汇总复盘，逐场明细作为可切换的下钻视图。
const analysisMode = ref('month')
const months = computed(() => [...new Set(store.liveSessions.map(s => s.d.slice(0, 7)).filter(Boolean))].sort().reverse())
const monthSessions = computed(() => store.liveSessions.filter(s => s.d.startsWith(selectedMonth.value)))
const pageCount = computed(() => Math.max(1, Math.ceil(monthSessions.value.length / PAGE_SIZE)))
const visibleSessions = computed(() => monthSessions.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))

watch(months, values => {
  if (!values.includes(selectedMonth.value)) selectedMonth.value = values[0] || ''
}, { immediate: true })
watch(selectedMonth, () => {
  page.value = 1
  selectedDate.value = monthSessions.value[0]?.d || ''
})
watch(page, () => {
  if (!visibleSessions.value.some(s => s.d === selectedDate.value)) selectedDate.value = visibleSessions.value[0]?.d || ''
})

function changeMonth(event) { selectedMonth.value = event.target.value }
function prevPage() { if (page.value > 1) page.value-- }
function nextPage() { if (page.value < pageCount.value) page.value++ }

function select(d) { selectedDate.value = d }
function drillIntoMonth(month) {
  selectedMonth.value = month
  analysisMode.value = 'week'
  const first = store.liveSessions.find(session => session.d.startsWith(month))
  if (first) selectedDate.value = first.d
}

function numberValue(value) {
  return Number(String(value ?? '').replace(/[^\d.-]/g, '')) || 0
}
function formatNumber(value) { return Math.round(value || 0).toLocaleString('zh-CN') }
function formatMoney(value) { return '¥' + formatNumber(value) }
function weekKey(date) {
  const d = new Date(String(date).replace(' ', 'T'))
  if (Number.isNaN(d.getTime())) return '未知周'
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7))
  const firstThursday = new Date(d.getFullYear(), 0, 4)
  const week = 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getDay() + 6) % 7)) / 7)
  return `${d.getFullYear()} W${String(week).padStart(2, '0')}`
}
function aggregate(label, sessions) {
  const views = sessions.reduce((sum, s) => sum + numberValue(s.view), 0)
  const gmv = sessions.reduce((sum, s) => sum + numberValue(s.gmv), 0)
  const peaks = sessions.map(s => numberValue(s.peak))
  return { label, sessions: sessions.length, views, gmv, peak: peaks.length ? Math.max(...peaks) : 0,
    average: sessions.length ? Math.round(views / sessions.length) : 0 }
}
function groupedRows(keyFor) {
  const groups = new Map()
  store.liveSessions.forEach(session => {
    const key = keyFor(session)
    if (!key) return
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(session)
  })
  return [...groups.entries()].map(([label, sessions]) => aggregate(label, sessions)).sort((a, b) => b.label.localeCompare(a.label))
}
const monthlyRows = computed(() => groupedRows(s => s.d.slice(0, 7)))
const weeklyRows = computed(() => {
  const groups = new Map()
  store.liveSessions.filter(session => !selectedMonth.value || session.d.startsWith(selectedMonth.value)).forEach(session => {
    const key = weekKey(session.d)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(session)
  })
  return [...groups.entries()].map(([label, sessions]) => aggregate(label, sessions)).sort((a, b) => b.label.localeCompare(a.label))
})
const weeks = computed(() => weeklyRows.value.map(row => row.label))
watch(weeks, values => { if (!values.includes(selectedWeek.value)) selectedWeek.value = values[0] || '' }, { immediate: true })
watch(selectedWeek, value => {
  if (analysisMode.value === 'week') {
    const first = store.liveSessions.find(session => weekKey(session.d) === value)
    if (first) selectedDate.value = first.d
  }
})
const analysisRows = computed(() => analysisMode.value === 'month' ? monthlyRows.value : weeklyRows.value)
const analysisPeak = computed(() => Math.max(...analysisRows.value.map(row => row.views), 1))
const analysisTitle = computed(() => analysisMode.value === 'month' ? '按月直播经营分析' : '按周直播经营分析')

// 视觉抽帧动画
const visionSteps = ref([])
const visionRunning = ref(false)
let timer = null
function runVision(s) {
  if (visionRunning.value) return
  visionRunning.value = true
  visionSteps.value = []
  const seq = [
    '1. 同步助手：在已登录的视频号复盘页定位回放时间轴（时长 ' + s.dur + '）',
    '2. 按曲线峰谷抽取对应关键画面（不下载整场视频）',
    '3. 解析画面与同时间段话术 → 光线 / 服装 / 手势 / 布场',
    '4. 回填证据链与复盘字段 → 号主无需上传录像'
  ]
  let i = 0
  timer = setInterval(() => {
    if (i < seq.length) { visionSteps.value.push(seq[i]); i++ }
    else {
      clearInterval(timer); timer = null
      visionSteps.value.push('已完成 · 已生成峰谷对应证据（演示数据）')
      visionRunning.value = false
      toast('视觉特征已自动回填')
    }
  }, 450)
}
onUnmounted(() => { if (timer) clearInterval(timer) })

const featLines = computed(() => {
  if (!selected.value) return []
  const s = selected.value
  const n = note.value
  if (n) return [
    { k: '光线', v: (n.visual.light || '-') + ' / 后台:' + (n.visual.setup || '-') },
    { k: '服装', v: n.visual.body || '-' },
    { k: '手势', v: n.visual.gesture || '-' },
    { k: '角色', v: n.visual.role || '-' }
  ]
  return [
    { k: '光线', v: s.visual.light }, { k: '布场', v: s.visual.setup },
    { k: '服装', v: s.visual.body }, { k: '手势', v: s.visual.gesture },
    { k: '状态', v: s.visual.energy || '-' }
  ]
})

const dataCards = computed(() => {
  if (!selected.value) return []
  if (note.value) return note.value.data.cards
  const s = selected.value
  return [
    { k: '观看人数', v: s.view }, { k: '最高在线', v: s.peak },
    { k: '总热度', v: s.hot }, { k: '成交金额', v: s.gmv }
  ]
})
const displayedTrend = computed(() => selected.value?.visual?.trend_image || selected.value?.visual?.demoTrendImage || null)
</script>

<template>
  <div>
    <div class="src-line">
      <span>来源：</span>
      <a :href="LIVE_SUMMARY_DOC" target="_blank" rel="noopener">打开飞书直播复盘文档 ↗</a>
      <span>· 当前为直播复盘记录</span>
      <span class="src-tag">视频号</span>
    </div>

    <div class="live-toolbar">
      <div class="live-analysis-tabs" role="tablist" aria-label="直播分析维度">
        <button :class="{ on: analysisMode === 'month' }" @click="analysisMode = 'month'">按月</button>
        <button :class="{ on: analysisMode === 'week' }" @click="analysisMode = 'week'">按周</button>
        <button :class="{ on: analysisMode === 'session' }" @click="analysisMode = 'session'">按场次</button>
      </div>
      <div class="month-control">
        <span>直播月份</span>
        <select :value="selectedMonth" @change="changeMonth">
          <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
        </select>
      </div>
      <div v-if="analysisMode === 'week'" class="month-control">
        <span>直播周</span>
        <select v-model="selectedWeek"><option v-for="week in weeks" :key="week" :value="week">{{ week }}</option></select>
      </div>
      <div class="month-control session-picker">
        <span>具体场次</span>
        <select :value="selectedDate" @change="select($event.target.value)">
          <option v-for="s in monthSessions" :key="s.d" :value="s.d">{{ s.d }} · {{ s.title }}</option>
        </select>
      </div>
      <span class="live-count">{{ monthSessions.length }} 场直播</span>
    </div>

    <div class="live-grid">
      <div v-if="analysisMode !== 'session'" class="live-left analysis-panel"><section class="live-analysis-card">
      <div class="live-analysis-head">
        <div><h2>{{ analysisTitle }}</h2><span>基于已同步的 {{ store.liveSessions.length }} 场真实直播数据</span></div>
        <span class="analysis-total">{{ analysisRows.length }} 个{{ analysisMode === 'month' ? '月度' : '自然周' }}周期</span>
      </div>
      <div class="live-analysis-kpis">
        <div><span>直播场次</span><strong>{{ analysisRows.reduce((sum, row) => sum + row.sessions, 0) }}</strong></div>
        <div><span>累计观看</span><strong>{{ formatNumber(analysisRows.reduce((sum, row) => sum + row.views, 0)) }}</strong></div>
        <div><span>最高在线峰值</span><strong>{{ formatNumber(Math.max(...analysisRows.map(row => row.peak), 0)) }}</strong></div>
        <div><span>累计成交</span><strong>{{ formatMoney(analysisRows.reduce((sum, row) => sum + row.gmv, 0)) }}</strong></div>
      </div>
      <div class="live-trend" aria-label="直播观看趋势">
        <button v-for="row in analysisRows.slice().reverse()" :key="row.label" class="live-trend-row"
          :class="{ drillable: analysisMode === 'month' }" @click="analysisMode === 'month' && drillIntoMonth(row.label)">
          <span>{{ row.label }}</span><div class="live-trend-bar"><i :style="{ width: (row.views / analysisPeak * 100) + '%' }"></i></div><b>{{ formatNumber(row.views) }}</b>
        </button>
      </div>
    </section></div>

    <div v-else class="live-left">
      <!-- 左侧列表 -->
        <div class="live-table-head">
          <span>直播信息</span><span>时长</span><span>观看</span><span>峰值</span><span>成交</span>
        </div>
        <div class="live-table-body">
            <div v-for="s in visibleSessions" :key="s.d" class="live-row"
               :class="{ on: selectedDate === s.d }" @click="select(s.d)">
            <div class="live-info">
              <img v-if="s.visual.thumb" class="thumb-mini" :src="s.visual.thumb" alt="直播封面">
              <span v-else class="thumb-mini thumb-empty">待</span>
              <div>
                <div class="t-title">{{ s.title }}</div>
                <div class="t-sub">{{ s.d }}</div>
              </div>
            </div>
            <span>{{ s.dur }}</span><span>{{ s.view }}</span><span>{{ s.peak }}</span><span class="gmv">{{ s.gmv }}</span>
          </div>
        </div>
        <div class="src-line" style="margin:10px 14px;font-size:11px">
          <span style="color:var(--text-mute)">共 {{ monthSessions.length }} 场 · 当前筛选月份</span>
          <div class="live-pagination" v-if="pageCount > 1">
            <button @click="prevPage" :disabled="page === 1">上一页</button>
            <span>{{ page }} / {{ pageCount }}</span>
            <button @click="nextPage" :disabled="page === pageCount">下一页</button>
          </div>
        </div>
      </div>

      <!-- 右侧详情 -->
      <div class="live-right">
        <div class="live-detail-head">
          <span class="hint">点击左侧任意一场查看完整复盘</span>
        </div>

        <template v-if="selected">
          <!-- 数据 -->
          <div class="detail-block">
            <div class="detail-h"><span class="bar"></span><span>数据</span></div>
            <div class="detail-cards">
              <div v-for="c in dataCards" :key="c.k" class="d-card">
                <div class="d-k">{{ c.k }}</div>
                <div class="d-v">{{ c.v }}</div>
                <div v-if="c.tip" class="d-t">{{ c.tip }}</div>
              </div>
            </div>
            <div v-if="note && note.data.remark" class="detail-remark">{{ note.data.remark }}</div>
            <div v-if="selected.visual.shot" class="backend-shot">
              <div class="bs-label">视频号助手 · 后台数据截图（{{ selected.d }}）</div>
              <img :src="selected.visual.shot" alt="视频号助手后台数据">
            </div>
          </div>

          <!-- 画面复盘 -->
          <div class="detail-block">
            <div class="detail-h"><span class="bar"></span><span>画面复盘</span>
              <span class="right-tag">对应直播：{{ selected.d }}</span>
            </div>
            <div class="pic-row">
              <img v-if="selected.visual.thumb" class="pic-frame" :src="selected.visual.thumb" alt="该场直播回放画面">
              <div v-else class="replay-pending">
                <div class="replay-pending-icon">□</div>
                <strong>该场尚无回放画面</strong>
                <span>完成视频号授权及逐场采集后显示</span>
              </div>
              <div class="pic-feats">
                <div v-for="l in featLines" :key="l.k" class="feat">
                  <span class="feat-k">{{ l.k }}</span><span class="feat-v">{{ l.v }}</span>
                </div>
              </div>
            </div>

            <div v-if="selected.visual.isDemoVisual" class="demo-evidence-note">演示画面：尚未上传该场真实回放截图，不作为复盘证据。</div>

            <div v-if="displayedTrend" class="replay-trend-proof">
              <div class="proof-label">{{ selected.visual.trend_image ? '该场直播趋势图 · 视频号后台证据' : '趋势图演示 · 等待真实后台截图' }}</div>
              <img :src="displayedTrend" alt="该场直播趋势图">
            </div>
            <div v-if="selected.visual.replay_frames?.length" class="replay-frame-grid">
              <div v-for="frame in selected.visual.replay_frames" :key="frame.kind" class="replay-frame">
                  <span>{{ frame.label || ({ online_peak: '在线峰值', gmv_peak: '成交高峰', audience_drop: '人数下滑' })[frame.kind] || '回放画面' }}</span>
                <img :src="frame.url" :alt="frame.kind + ' 回放证据'">
              </div>
            </div>

            <div class="vision-zone">
              <div class="vz-h"><span class="dot"></span>回放采集状态</div>
              <div class="vz-row"><span class="vz-note">仅当该场授权后台回放可访问时，才会写入对应画面与语音证据。</span></div>
              <div v-if="visionSteps.length" class="vz-steps show">
                <div v-for="(st, i) in visionSteps" :key="i" :class="{ ok: st.startsWith('已完成') }">{{ st }}</div>
              </div>
            </div>
          </div>

          <!-- 脚本复盘 -->
          <div v-if="note" class="detail-block">
            <div class="detail-h"><span class="bar"></span><span>脚本直播复盘</span>
              <a class="review-source-link" :href="LIVE_SUMMARY_DOC" target="_blank" rel="noopener">打开飞书复盘文档 ↗</a>
            </div>
            <ul class="script-ul">
              <li v-for="line in note.script" :key="line.k"><span class="li-k">{{ line.k }}：</span><span>{{ line.v }}</span></li>
            </ul>
          </div>
          <div v-else class="detail-block detail-empty">
            <div class="detail-empty-inner">
              <div class="big">·</div>
              <div class="t">这场还没有手动复盘</div>
              <div class="sub">从视频号复盘回看同步，AI 自动抽取峰谷画面与话术</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
