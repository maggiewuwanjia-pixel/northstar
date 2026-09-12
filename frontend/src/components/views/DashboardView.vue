<script setup>
import { reactive, computed, ref } from 'vue'
import { store, toast, createPlanningTask } from '../../store'

// 图表 / 列表 视图切换状态（局部）
const mode = reactive({ trend: 'chart', portrait: {} })
const portraitMode = t => mode.portrait[t] || 'chart'

const north = computed(() => store.northstar.find(n => n.key === store.northStar) || store.northstar[0] || {})
const trendMax = computed(() => Math.max(...store.trend.map(d => d.v), 1))
const planForm = reactive({ type: 'live', title: '', planned_at: '', notes: '' })
const planBusy = ref(false)
const homeGanttPage = ref(0)
const homeTouchStartX = ref(null)
let homeWheelLocked = false
const upcomingPlans = computed(() => [...store.planningTasks]
  .filter(t => t.status !== '已完成').sort((a, b) => String(a.planned_at).localeCompare(String(b.planned_at))).slice(0, 6))
async function savePlan() {
  if (!planForm.title.trim() || !planForm.planned_at) { toast('请填写计划内容和时间'); return }
  planBusy.value = true
  const r = await createPlanningTask({ ...planForm })
  planBusy.value = false
  if (r.ok) { planForm.title = ''; planForm.planned_at = ''; planForm.notes = '' }
}
const homeWeekStart = computed(() => {
  const now = new Date(); const offset = (now.getDay() + 6) % 7
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - offset)
})
const homeWeeks = computed(() => Array.from({ length: 12 }, (_, i) => {
  const date = new Date(homeWeekStart.value.getFullYear(), homeWeekStart.value.getMonth(), homeWeekStart.value.getDate() + i * 7)
  return { t: i === 0 ? '本周' : `W${String(date.getMonth() + 1).padStart(2, '0')}-${i + 1}`, d: `${date.getMonth() + 1}/${date.getDate()}` }
}))
function homeWeeksFor(index) { return homeWeeks.value.slice(index * 4, index * 4 + 4) }
function homeTaskWeek(task) {
  const date = new Date(String(task.planned_at).replace(' ', 'T'))
  return Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate()) - homeWeekStart.value) / (7 * 86400000))
}
function homeLanesFor(index) {
  const lanes = (store.gantt || []).map(lane => ({ ...lane, items: index === 0 ? [...lane.items] : [] }))
  store.planningTasks.forEach(task => {
    const slot = homeTaskWeek(task) - index * 4
    const lane = lanes[task.type === 'live' ? 4 : 2]
    if (lane && slot >= 0 && slot < 4) lane.items.push({ name: task.title, s: slot, e: slot, t: task.type === 'live' ? 'live' : 'video' })
  })
  return lanes
}
function moveHomeGantt(direction) { homeGanttPage.value = Math.max(0, Math.min(2, homeGanttPage.value + direction)) }
function onHomeGanttWheel(event) {
  if (Math.abs(event.deltaX) < 24 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return
  event.preventDefault(); if (homeWheelLocked) return
  homeWheelLocked = true; moveHomeGantt(event.deltaX > 0 ? 1 : -1)
  window.setTimeout(() => { homeWheelLocked = false }, 280)
}
function onHomeGanttTouchStart(event) { homeTouchStartX.value = event.touches[0]?.clientX ?? null }
function onHomeGanttTouchEnd(event) {
  if (homeTouchStartX.value == null) return
  const delta = (event.changedTouches[0]?.clientX ?? homeTouchStartX.value) - homeTouchStartX.value
  homeTouchStartX.value = null
  if (Math.abs(delta) >= 45) moveHomeGantt(delta < 0 ? 1 : -1)
}

function trendSVG(data) {
  const w = 640, h = 180, pad = 28
  const max = Math.max(...data.map(d => d.v)) * 1.15
  const x = i => pad + i * (w - pad * 2) / (data.length - 1)
  const y = v => h - pad - (v / max) * (h - pad * 2)
  const pts = data.map((d, i) => `${x(i)},${y(d.v)}`).join(' ')
  const area = `M${x(0)},${h - pad} L${pts.split(' ').join(' L ')} L${x(data.length - 1)},${h - pad} Z`
  const lines = [0, .25, .5, .75, 1].map(t => `<line x1="${pad}" x2="${w - pad}" y1="${h - pad - t * (h - pad * 2)}" y2="${h - pad - t * (h - pad * 2)}" stroke="#F1F1ED"/>`).join('')
  const dots = data.map((d, i) => `<circle cx="${x(i)}" cy="${y(d.v)}" r="3.5" fill="#191919"/><text x="${x(i)}" y="${h - pad + 16}" font-size="11" text-anchor="middle" fill="#9BA0A6">${d.d}</text><text x="${x(i)}" y="${y(d.v) - 8}" font-size="10" text-anchor="middle" fill="#5F6368">${d.v}</text>`).join('')
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:${h}px">${lines}<path d="${area}" fill="#F4F4F1" fill-opacity=".9"/><polyline points="${pts}" fill="none" stroke="#191919" stroke-width="2"/>${dots}</svg>`
}

function pctWidth(p) {
  const max = Math.max(...p.data.map(d => d[1]), 1)
  return p.data.map(d => ({ ...d, w: Math.max(4, (d[1] / max) * 100) }))
}
function portraitTotal(p) {
  return p.data.reduce((s, d) => s + d[1], 0)
}
</script>

<template>
  <div>
    <!-- 三句结论 -->
    <div class="actions-strip">
      <div v-for="a in store.actions" :key="a.num" class="action-card">
        <span class="tag">{{ a.tag }}</span>
        <div class="title"><span class="num">{{ a.num }}</span>{{ a.title }}</div>
        <div class="body">{{ a.body }}</div>
      </div>
    </div>

    <!-- 北极星指标 -->
    <div class="northstar">
      <div class="ns-head">
        <div class="ns-label">北极星指标 · {{ north.label }}</div>
        <div class="ns-value">{{ north.value }}</div>
        <div class="ns-delta">{{ north.delta }}</div>
      </div>
      <div class="ns-body">
        <div class="ns-goal"><span>目标 {{ north.goal }}</span><span>完成 {{ north.pct }}%</span></div>
        <div class="ns-bar"><div class="fill" :style="{ width: north.pct + '%' }"></div></div>
      </div>
      <div class="ns-switch">
        <button v-for="n in store.northstar" :key="n.key"
                :class="{ on: n.key === store.northStar }"
                @click="store.northStar = n.key">{{ n.label }}</button>
      </div>
    </div>

    <!-- 首页保留一眼可读的四周排期；完整可编辑版本在「内容排期」页。 -->
    <div class="card">
      <div class="card-h">
        <h3>内容生产排期（未来 4 周）</h3>
        <a class="sub" style="cursor:pointer" @click="store.activeView = 'planning'">查看全量排期 ↗</a>
      </div>
      <div class="gantt-carousel swipe-gantt home-gantt" @wheel="onHomeGanttWheel" @touchstart="onHomeGanttTouchStart" @touchend="onHomeGanttTouchEnd"><div class="gantt-slides" :style="{ transform: `translateX(-${homeGanttPage * 100}%)` }"><div v-for="period in 3" :key="period" class="gantt-slide"><div class="gantt"><div class="gantt-head"><div class="lane">生产任务</div><div class="weeks"><div v-for="week in homeWeeksFor(period - 1)" :key="week.t" class="w" :class="{ cur: week.t === '本周' }"><div>{{ week.t }}</div><div style="font-weight:400;font-size:11px;color:var(--text-mute)">{{ week.d }}</div></div></div></div><div v-for="lane in homeLanesFor(period - 1)" :key="lane.lane" class="gantt-row"><div class="lane">{{ lane.lane }}</div><div class="gantt-track"><div v-for="(item, index) in lane.items" :key="`${item.name}-${index}`" class="gantt-bar" :class="item.t" :style="{ gridColumn: (item.s + 1) + ' / ' + (item.e + 2) }">{{ item.name }}</div></div></div></div></div></div></div>
      <div class="gantt-legend"><span class="lg"><span class="sw" style="background:var(--green-deep)"></span>短视频</span><span class="lg"><span class="sw" style="background:var(--text)"></span>直播</span><span class="lg"><span class="sw" style="background:#C9CBC2"></span>脚本筹备</span></div>
    </div>

    <!-- KPI -->
    <div class="kpi-row">
      <div v-for="k in store.kpis" :key="k.label" class="kpi">
        <div class="label">{{ k.label }}</div>
        <div class="value">{{ k.value }}</div>
        <div class="delta" :class="k.up ? 'up' : (k.warm ? 'warm' : 'down')">{{ k.delta }}</div>
      </div>
    </div>

    <!-- 近 7 日播放趋势 -->
    <div class="card">
      <div class="card-h">
        <h3>近 7 日播放趋势</h3>
        <div style="display:flex;gap:10px;align-items:center">
          <span class="sub">峰值 {{ trendMax }} · 8/25</span>
          <div class="view-toggle">
            <button :class="{ on: mode.trend === 'chart' }" @click="mode.trend = 'chart'">图表</button>
            <button :class="{ on: mode.trend === 'list' }" @click="mode.trend = 'list'">列表</button>
          </div>
        </div>
      </div>
      <div v-if="mode.trend === 'chart'" v-html="trendSVG(store.trend)"></div>
      <table v-else class="tbl-list">
        <thead><tr><th>日期</th><th class="r">播放量</th><th class="r">占比</th><th class="r">热力</th></tr></thead>
        <tbody>
          <tr v-for="d in store.trend" :key="d.d">
            <td class="n">{{ d.d }}</td>
            <td class="r n">{{ d.v.toLocaleString() }}</td>
            <td class="r">{{ (d.v / trendMax * 100).toFixed(0) }}%</td>
            <td class="r">{{ d.v >= 7500 ? '热' : d.v >= 6000 ? '温' : '冷' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 画像分布 -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px">
      <div v-for="p in store.portraits" :key="p.title" class="card">
        <div class="card-h">
          <h3>{{ p.title }}</h3>
          <div class="view-toggle">
            <button :class="{ on: portraitMode(p.title) === 'chart' }" @click="mode.portrait[p.title] = 'chart'">图表</button>
            <button :class="{ on: portraitMode(p.title) === 'list' }" @click="mode.portrait[p.title] = 'list'">列表</button>
          </div>
        </div>
        <template v-if="portraitMode(p.title) === 'chart'">
          <div v-for="d in pctWidth(p)" :key="d[0]" class="bar-row">
            <div class="name">{{ d[0] }}</div>
            <div class="bar"><div class="fill" :style="{ width: d.w + '%' }"></div></div>
            <div class="val">{{ d[1] }}{{ p.unit }}</div>
          </div>
        </template>
        <table v-else class="tbl-list">
          <thead><tr><th>分组</th><th class="r">占比</th><th class="r">人数估算</th><th class="r">条数</th></tr></thead>
          <tbody>
            <tr v-for="d in p.data" :key="d[0]">
              <td class="n">{{ d[0] }}</td>
              <td class="r n">{{ d[1] }}{{ p.unit }}</td>
              <td class="r">{{ Math.round(d[1] / 100 * 224000).toLocaleString() }}</td>
              <td class="r">{{ Math.round(d[1] / 100 * 187) }}</td>
            </tr>
            <tr>
              <td class="n" colspan="2" style="font-weight:600;background:#FAFAFA">合计 {{ p.data.length }} 项 · {{ portraitTotal(p).toFixed(2) }}{{ p.unit }}</td>
              <td class="r" style="background:#FAFAFA" colspan="2">22.4w 粉 · 187 条视频</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 甘特图 -->
    <div v-if="false" class="card">
      <div class="card-h"><h3>下一步内容计划</h3><span class="sub">真实排期 · 会成为下次直播和拍摄提醒</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
        <select v-model="planForm.type" class="plan-input"><option value="live">下一场直播</option><option value="video">下一条短视频</option></select>
        <input v-model="planForm.planned_at" class="plan-input" type="datetime-local">
        <input v-model="planForm.title" class="plan-input" style="grid-column:1 / -1" :placeholder="planForm.type === 'live' ? '例如：初三家长答疑 + 教辅讲解' : '例如：月考后英语提分的 3 个误区'">
        <input v-model="planForm.notes" class="plan-input" style="grid-column:1 / -1" placeholder="复用的知识库笔记、脚本方向或备注（可选）">
      </div>
      <button class="wiki-sum-btn" :disabled="planBusy" @click="savePlan">{{ planBusy ? '保存中…' : '加入排期' }}</button>
      <div v-if="upcomingPlans.length" style="margin-top:14px;display:grid;gap:7px">
        <div v-for="task in upcomingPlans" :key="task.id" style="display:flex;gap:10px;align-items:center;padding:9px 10px;border:1px solid var(--border);border-radius:8px">
          <span class="pill" :class="task.type === 'live' ? 'green' : ''">{{ task.type === 'live' ? '直播' : '短视频' }}</span>
          <strong style="font-size:13px;flex:1">{{ task.title }}</strong><span class="sub">{{ task.planned_at.replace('T', ' ') }}</span>
        </div>
      </div>
      <div v-else class="sub" style="margin-top:12px">还没有排期。创建后会显示下一场直播和下一条短视频的待办。</div>
    </div>
    <div v-if="false" class="card">
      <div class="card-h">
        <h3>内容生产排期（未来 4 周）</h3>
        <span class="sub">短视频 × 直播 · 甘特视图</span>
      </div>
      <div class="gantt">
        <div class="gantt-head">
          <div class="lane">生产任务</div>
          <div class="weeks">
            <div v-for="w in store.ganttWeeks" :key="w.d" class="w" :class="{ cur: w.cur }">
              <div>{{ w.t }}</div>
              <div style="font-weight:400;font-size:11px;color:var(--text-mute)">{{ w.d }}</div>
            </div>
          </div>
        </div>
        <div v-for="lane in store.gantt" :key="lane.lane" class="gantt-row">
          <div class="lane">{{ lane.lane }}</div>
          <div class="gantt-track">
            <div v-for="(it, idx) in lane.items" :key="idx"
                 class="gantt-bar" :class="it.t"
                 :style="{ gridColumn: (it.s + 1) + ' / ' + (it.e + 2) }">{{ it.name }}</div>
          </div>
        </div>
      </div>
      <div class="gantt-legend">
        <span class="lg"><span class="sw" style="background:var(--green-deep)"></span>短视频</span>
        <span class="lg"><span class="sw" style="background:var(--text)"></span>直播</span>
        <span class="lg"><span class="sw" style="background:#C9CBC2"></span>脚本筹备</span>
      </div>
    </div>

    <!-- 内容表现 TOP -->
    <div class="card">
      <div class="card-h">
        <h3>内容表现 TOP</h3>
        <span class="sub">仅显示已验证导入内容</span>
      </div>
      <div v-if="store.videos.length" class="video-grid">
        <div v-for="v in store.videos" :key="v.t" class="video-card">
          <div class="thumb"><img :src="v.cover" :alt="v.t" loading="lazy"><span class="dur">{{ v.dur }}</span></div>
          <div class="meta">
            <div class="title"><span class="tag">{{ v.tag }}</span>{{ v.t }}</div>
            <div class="stats"><span>♡ {{ v.like }} · 播放</span></div>
          </div>
        </div>
      </div>
      <div v-else class="video-grid video-placeholders">
        <div v-for="item in ['短视频截图占位 01', '短视频截图占位 02', '短视频截图占位 03']" :key="item" class="video-card placeholder-card">
          <div class="thumb"><img src="/assets/live/demo-replay.svg" :alt="item"><span class="dur">演示占位</span></div>
          <div class="meta"><div class="title"><span class="tag">待导入</span>{{ item }}</div><div class="stats"><span>上传视频号短视频报表、文件或公开链接后替换</span></div></div>
        </div>
      </div>
    </div>
  </div>
</template>
