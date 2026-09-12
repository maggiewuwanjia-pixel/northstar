<script setup>
import { computed, reactive, ref } from 'vue'
import { store, createPlanningTask, toast } from '../../store'

const form = reactive({ type: 'video', title: '', dateChoice: 'tomorrow', planned_at: '', notes: '' })
const saving = ref(false)
const page = ref(0)
const touchStartX = ref(null)
let wheelLocked = false
const tasks = computed(() => [...store.planningTasks].sort((a, b) => String(a.planned_at).localeCompare(String(b.planned_at))))
const hotspots = computed(() => (store.hotspots || []).slice(0, 8))
const weekStart = computed(() => {
  const today = new Date()
  const mondayOffset = (today.getDay() + 6) % 7
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() - mondayOffset)
})
function fmt(d) { return `${d.getMonth() + 1}/${d.getDate()}` }
function taskWeek(task) {
  const date = new Date(String(task.planned_at).replace(' ', 'T'))
  return Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate()) - weekStart.value) / (7 * 86400000))
}
const allWeeks = computed(() => Array.from({ length: 12 }, (_, i) => {
  const start = new Date(weekStart.value.getFullYear(), weekStart.value.getMonth(), weekStart.value.getDate() + i * 7)
  return { t: i === 0 ? '本周' : `W${String(start.getMonth() + 1).padStart(2, '0')}-${i + 1}`, d: fmt(start) }
}))
const totalPages = computed(() => Math.ceil(allWeeks.value.length / 4))
function weeksFor(index) { return allWeeks.value.slice(index * 4, index * 4 + 4) }
const periods = computed(() => Array.from({ length: totalPages.value }, (_, index) => {
  const first = allWeeks.value[index * 4]
  const last = allWeeks.value[index * 4 + 3]
  return { value: index, label: `${index === 0 ? '本周起' : '查看'} · ${first.d} – ${last.d}` }
}))
function lanesFor(index) {
  const lanes = (store.gantt || []).map(lane => ({ ...lane, items: index === 0 ? [...lane.items] : [] }))
  tasks.value.forEach(task => {
    const slot = taskWeek(task) - index * 4
    const lane = lanes[task.type === 'live' ? 4 : 2]
    if (lane && slot >= 0 && slot < 4) lane.items.push({ name: task.title, s: slot, e: slot, t: task.type === 'live' ? 'live' : 'video' })
  })
  return lanes
}
function changePeriod(direction) {
  const next = Math.max(0, Math.min(totalPages.value - 1, page.value + direction))
  if (next !== page.value) page.value = next
}
function onScheduleWheel(event) {
  if (Math.abs(event.deltaX) < 24 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return
  event.preventDefault()
  if (wheelLocked) return
  wheelLocked = true
  changePeriod(event.deltaX > 0 ? 1 : -1)
  window.setTimeout(() => { wheelLocked = false }, 280)
}
function onScheduleTouchStart(event) { touchStartX.value = event.touches[0]?.clientX ?? null }
function onScheduleTouchEnd(event) {
  if (touchStartX.value == null) return
  const distance = (event.changedTouches[0]?.clientX ?? touchStartX.value) - touchStartX.value
  touchStartX.value = null
  if (Math.abs(distance) >= 45) changePeriod(distance < 0 ? 1 : -1)
}
async function save() {
  const base = new Date(); const shift = { today: 0, tomorrow: 1, weekend: (6 - base.getDay() + 7) % 7 || 7 }[form.dateChoice]
  const date = form.dateChoice === 'custom' ? form.planned_at : new Date(base.getFullYear(), base.getMonth(), base.getDate() + shift, 20, 0).toISOString().slice(0, 16)
  if (!form.title.trim() || !date) { toast('请填写标题，并选择计划日期'); return }
  saving.value = true; const r = await createPlanningTask({ type: form.type, title: form.title, planned_at: date, notes: form.notes }); saving.value = false
  if (r.ok) { form.title = ''; form.planned_at = ''; form.notes = '' }
}
</script>

<template>
  <div class="plan-page">
    <section class="plan-hero"><div><span class="pill green">优先工作台</span><h2>内容排期与热点</h2><p>直播、短视频和热点都落到同一条生产线，按周期一键切换查看。</p></div><div class="plan-summary"><b>{{ tasks.length }}</b><span>已排期任务</span><b>{{ hotspots.length }}</b><span>热点信号</span></div></section>
    <section class="card plan-create"><div class="card-h"><h3>新增内容</h3><span class="sub">保存后立刻进入甘特与 Cue 提醒</span></div><div class="plan-form"><select v-model="form.type" class="plan-input"><option value="video">短视频</option><option value="live">直播</option></select><select v-model="form.dateChoice" class="plan-input"><option value="today">今天晚上</option><option value="tomorrow">明天晚上</option><option value="weekend">本周末晚上</option><option value="custom">自选日期</option></select><input v-if="form.dateChoice === 'custom'" v-model="form.planned_at" class="plan-input" type="date"><input v-model="form.title" class="plan-input wide" placeholder="标题或直播主题"><input v-model="form.notes" class="plan-input wide" placeholder="脚本、知识库链接或执行备注（可选）"><button class="wiki-sum-btn" :disabled="saving" @click="save">{{ saving ? '保存中…' : '加入排期' }}</button></div></section>
    <section class="card"><div class="card-h"><div><h3>全量内容排期</h3><span class="sub">双指左右滑动甘特表切换周期；每次聚焦 4 周</span></div><label class="period-picker"><span>查看周期</span><select v-model.number="page"><option v-for="period in periods" :key="period.value" :value="period.value">{{ period.label }}</option></select></label></div><div class="gantt-carousel swipe-gantt" @wheel="onScheduleWheel" @touchstart="onScheduleTouchStart" @touchend="onScheduleTouchEnd"><div class="gantt-slides" :style="{ transform: `translateX(-${page * 100}%)` }"><div v-for="period in periods" :key="period.value" class="gantt-slide"><div class="gantt full-gantt"><div class="gantt-head"><div class="lane">生产任务</div><div class="weeks"><div v-for="week in weeksFor(period.value)" :key="week.t" class="w" :class="{ cur: week.t === '本周' }"><div>{{ week.t }}</div><div style="font-weight:400;font-size:11px;color:var(--text-mute)">{{ week.d }}</div></div></div></div><div v-for="lane in lanesFor(period.value)" :key="lane.lane" class="gantt-row"><div class="lane">{{ lane.lane }}</div><div class="gantt-track"><div v-for="(item, index) in lane.items" :key="`${item.name}-${index}`" class="gantt-bar" :class="item.t" :style="{ gridColumn: (item.s + 1) + ' / ' + (item.e + 2) }">{{ item.name }}</div></div></div></div></div></div></div><div class="gantt-legend"><span class="lg"><span class="sw" style="background:var(--green-deep)"></span>短视频</span><span class="lg"><span class="sw" style="background:var(--text)"></span>直播</span><span class="lg"><span class="sw" style="background:#C9CBC2"></span>脚本筹备</span></div><div v-if="!tasks.length" class="plan-empty">上方还未添加真实任务；当前展示的是内容模板，新增任务会自动放到对应周与生产线。</div></section>
  </div>
</template>
