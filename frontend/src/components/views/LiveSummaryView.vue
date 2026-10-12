<script setup>
import { ref, computed, onUnmounted, watch } from 'vue'
import { store, toast, LIVE_SUMMARY_DOC } from '../../store'
import LiveTrendChart from '../LiveTrendChart.vue'
import manualLiveReviews from '../../data/manualLiveReviews.json'
const manualPdf='/demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf'
const manualReview=computed(()=>manualLiveReviews[selected.value?.d]||null)
const manualPdfUrl=computed(()=>encodeURI(manualPdf)+'#page='+(manualReview.value?.page||1))

const splitRatio=ref(Math.min(65,Math.max(35,Number(localStorage.getItem('northstar-live-split'))||52)))
const liveGrid=ref(null)
function moveSplit(event){const box=liveGrid.value?.getBoundingClientRect();if(box)splitRatio.value=Math.min(72,Math.max(28,(event.clientX-box.left)/box.width*100))}
function stopSplit(){window.removeEventListener('pointermove',moveSplit);window.removeEventListener('pointerup',stopSplit);localStorage.setItem('northstar-live-split',String(splitRatio.value))}
function startSplit(event){event.preventDefault();window.addEventListener('pointermove',moveSplit);window.addEventListener('pointerup',stopSplit)}
function keySplit(event){if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();splitRatio.value=Math.min(72,Math.max(28,splitRatio.value+(event.key==='ArrowRight'?2:-2)));localStorage.setItem('northstar-live-split',String(splitRatio.value))}}
onUnmounted(stopSplit)
const selectedDate = ref(store.liveSessions.find(s => s.d === '2025-11-15')?.d || (store.liveSessions[2] ? store.liveSessions[2].d : (store.liveSessions[0] ? store.liveSessions[0].d : '')))
const selected = computed(() => store.liveSessions.find(s => s.d === selectedDate.value) || store.liveSessions[0])
const note = computed(() => selected.value ? (store.liveNotes[selected.value.d] || (manualReview.value ? {script:[{k:'手动复盘原文',v:manualReview.value.text}],source_uri:manualPdfUrl.value,source_page:manualReview.value.page} : null)) : null)
watch([selected, note], ([session, review]) => { store.liveReviewContext = session ? { session, review } : null }, { immediate: true })

// 让当前 8 场记录也能验证翻页；后续同步更多场次会继续按此大小分页。
const PAGE_SIZE = 6
const selectedMonth = ref(store.liveSessions.some(s => s.d.startsWith('2025-11')) ? '2025-11' : '')
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
  const d = new Date(String(date).slice(0,10)+'T12:00:00')
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
const revenueComparison = computed(() => monthlyRows.value.slice().reverse().map(row => ({label:row.label,gmv:row.gmv,current:row.label===selectedMonth.value})))
const revenuePeak = computed(() => Math.max(...revenueComparison.value.map(item => item.gmv), 1))

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
      visionSteps.value.push('已完成 · 已生成峰谷对应证据（内容数据）')
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
    { k: '观看人数', v: s.view ?? '未记录' }, { k: '最高在线', v: s.peak ?? '未记录' },
    { k: '总热度', v: s.hot ?? '未记录' }, { k: '成交金额', v: s.gmv ?? '未记录' }
  ]
})
const displayedTrend = computed(() => selected.value?.visual?.trend_image || selected.value?.visual?.demoTrendImage || null)
</script>

<template>
  <div>
    <div class="src-line">
      <span>来源：</span>
      <a :href="LIVE_SUMMARY_DOC" target="_blank" rel="noopener">打开飞书直播复盘文档 ↗</a>
      <span>· 清华优优直播复盘记录</span>
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
      <span class="live-count">{{ monthSessions.length }} 条复盘记录</span>
    </div>

    <div ref="liveGrid" class="live-grid" :style="{'--live-left-weight':splitRatio+'fr','--live-right-weight':(100-splitRatio)+'fr'}" :class="{ 'analysis-layout': analysisMode !== 'session' }">
      <div v-if="analysisMode !== 'session'" class="live-left analysis-panel"><section class="live-analysis-card">
      <div class="live-analysis-head">
        <div><h2>{{ analysisTitle }}</h2><span>来源：视频号直播历史数据.csv · {{ store.liveSessions.length }} 场（含测试场）</span></div>
        <span class="analysis-total">{{ analysisRows.length }} 个{{ analysisMode === 'month' ? '月度' : '自然周' }}周期</span>
      </div>
      <div class="live-analysis-kpis">
        <div><span>报表场次</span><strong>{{ analysisRows.reduce((sum, row) => sum + row.sessions, 0) }}</strong></div>
        <div><span>累计观看人次</span><strong>{{ formatNumber(analysisRows.reduce((sum, row) => sum + row.views, 0)) }}</strong></div>
        <div><span>最高在线峰值</span><strong>{{ formatNumber(Math.max(...analysisRows.map(row => row.peak), 0)) }}</strong></div>
        <div><span>累计成交</span><strong>{{ formatMoney(analysisRows.reduce((sum, row) => sum + row.gmv, 0)) }}</strong></div>
      </div>
      <div class="analysis-section-title"><strong>{{ analysisMode === 'month' ? '按月累计观看人次' : '按周累计观看人次' }}</strong><span>同一观众跨场会重复累计 · 点击周期查看场次</span></div>
      <div class="live-trend" aria-label="直播观看人数趋势">
        <button v-for="row in analysisRows.slice().reverse()" :key="row.label" class="live-trend-row"
          :class="{ drillable: analysisMode === 'month' }" @click="analysisMode === 'month' && drillIntoMonth(row.label)">
          <span>{{ row.label }}</span><div class="live-trend-bar"><i :style="{ width: (row.views / analysisPeak * 100) + '%' }"></i></div><b>{{ formatNumber(row.views) }}</b>
        </button>
      </div>
      <div class="month-gmv-compare"><header><span>按月成交金额对比</span><small>单位：元 · CSV 成交金额合计</small></header><div v-for="item in revenueComparison" :key="item.label" :class="{current:item.current}" class="gmv-compare-row"><span>{{item.label}}</span><div><i :style="{width:(item.gmv / revenuePeak * 100)+'%'}"></i></div><b>¥{{formatNumber(item.gmv)}}</b></div></div>
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

      <div class="live-column-divider" role="separator" tabindex="0" aria-label="调整直播经营分析与具体复盘宽度" aria-orientation="vertical" :aria-valuenow="Math.round(splitRatio)" aria-valuemin="28" aria-valuemax="72" @pointerdown="startSplit" @keydown="keySplit"><span></span></div>
      <!-- 右侧详情 -->
      <div class="live-right">
        <div class="live-detail-head">
          <span class="hint">选择具体场次查看完整复盘</span>
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
            <div v-if="note?.data.highlight" class="ai-highlight">
              <span class="ai-highlight-label">AI分析 · 金句高光</span>
              <strong>“{{ note.data.highlight }}”</strong>
              <p>{{ note.data.aiAnalysis }}</p>
            </div>
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
            <div v-if="!selected.visual.replay_frames?.length" class="pic-row">
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

            <div v-if="selected.visual.isDemoVisual" class="demo-evidence-note">回放画面：尚未上传该场真实回放截图，不作为复盘证据。</div>

            <div v-if="displayedTrend" class="replay-trend-proof">
              <div class="proof-label">{{ selected.visual.trend_image ? '该场直播趋势图 · 视频号后台证据' : '趋势图 · 等待后台截图' }}</div>
              <LiveTrendChart v-if="selected.d === '2025-11-15'" />
              <img v-else :src="displayedTrend" alt="该场直播趋势图">
            </div>
            <div v-if="selected.visual.replay_frames?.length" class="replay-frame-grid">
              <div v-for="frame in selected.visual.replay_frames" :key="frame.kind" class="replay-frame">
                  <span>{{ ({ online_peak:'A', gmv_peak:'B', audience_drop:'C' })[frame.kind] }} · {{ (frame.label || '回放画面').replace(/^\d+\s*·\s*/, '') }}</span>
                <img :src="frame.url" :alt="frame.kind + ' 回放证据'">
                <div class="node-analysis"><p>话题：{{ frame.topic }}</p><strong v-if="frame.quote">金句：“{{ frame.quote }}”</strong><p><b>AI分析：</b>{{ frame.analysis }}</p></div>
              </div>
            </div>

            <div v-if="selected.visual.funnel" class="conversion-funnel">
              <div class="detail-h"><span class="bar"></span><span>转化漏斗</span><span class="right-tag">成交额 {{ selected.gmv }}</span></div>
              <div class="funnel-grid">
                <div v-for="funnel in [selected.visual.funnel.flow, selected.visual.funnel.product]" :key="funnel.title" class="funnel-card">
                  <div class="funnel-card-head"><strong>{{ funnel.title }}</strong><span>整体转化率 {{ funnel.overall }}</span></div>
                  <div v-for="(step, index) in funnel.steps" :key="step.label" class="funnel-step">
                    <div class="funnel-step-label"><span>{{ step.label }}</span><b>{{ step.value }}</b></div>
                    <div class="funnel-bar"><i :style="{ width: Math.max(24, 100 - index * (funnel.steps.length === 5 ? 17 : 22)) + '%' }"></i></div>
                    <small v-if="step.rate">→ {{ step.rate }}</small>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="!selected.source_uri" class="vision-zone">
              <div class="vz-h"><span class="dot"></span>回放采集状态</div>
              <div class="vz-row"><span class="vz-note">仅当该场授权后台回放可访问时，才会写入对应画面与语音证据。</span></div>
              <div v-if="visionSteps.length" class="vz-steps show">
                <div v-for="(st, i) in visionSteps" :key="i" :class="{ ok: st.startsWith('已完成') }">{{ st }}</div>
              </div>
            </div>
          </div>

          <!-- 脚本复盘 -->
          <section v-if="manualReview" class="detail-block source-review">
            <h3>手动复盘 · 原始 PDF</h3>
            <a :href="manualPdfUrl" target="_blank" rel="noopener">查看手动复盘 PDF · 第 {{ manualReview.page }} 页 ↗</a>
            <pre style="white-space:pre-wrap;line-height:1.8">{{ manualReview.text }}</pre>
            <details><summary>展开对应 PDF 页</summary><iframe :src="manualPdfUrl" :title="selected.d+'手动复盘 PDF'" style="width:100%;height:540px;border:1px solid #dce7df;margin-top:12px"></iframe></details>
          </section>
          <div v-if="note && !manualReview" class="detail-block">
            <div class="detail-h"><span class="bar"></span><span>脚本直播复盘</span>
              <a v-if="!manualReview" class="review-source-link" :href="LIVE_SUMMARY_DOC" target="_blank" rel="noopener">打开飞书复盘文档 ↗</a>
            </div>
            <ul class="script-ul">
              <li v-for="line in note.script" :key="line.k"><span class="li-k">{{ line.k }}：</span><span>{{ line.v }}</span></li>
            </ul>
          </div>
          <div v-else-if="!manualReview" class="detail-block detail-empty">
            <div class="detail-empty-inner">
              <div class="big">·</div>
              <div class="t">这场还没有手动复盘</div>
              <div class="sub">从视频号复盘回看同步，AI 自动抽取峰谷画面与话术</div>
            </div>
          </div>
          <section v-if="selected.source_uri" class="detail-block source-review"><h3>原始复盘记录与截图</h3><a v-if="/\.csv(?:$|[?#])/i.test(selected.source_uri)" :href="selected.source_uri" download>下载原始 CSV</a><a v-else :href="selected.source_uri" target="_blank">打开对应复盘页 · 第 {{selected.source_page}} 页 ↗</a><details v-if="/\.pdf(?:$|[?#])/i.test(selected.source_uri)"><summary>展开原始复盘页</summary><iframe :src="selected.source_uri" :title="selected.d+'原始复盘'" style="width:100%;height:540px;border:1px solid #dce7df;margin-top:12px"></iframe></details><details><summary>查看完整文字记录</summary><pre style="white-space:pre-wrap;line-height:1.8">{{selected.source_text}}</pre></details></section>
        </template>
      </div>
    </div>
  </div>
</template>
