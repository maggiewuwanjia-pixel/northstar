<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { store, createPlanningTask, updateGuestPlanningTask, deleteGuestPlanningTask, toast } from '../../store'
import ConfirmDialog from '../ConfirmDialog.vue'
import { productionPlanLanes } from '../../data/planningPeriods'
const deleteConfirm=ref(false)

const now = new Date()
const monthValue = ref(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`)
const form = reactive({ type: 'video', title: '', dateChoice: '0', planned_at: '', notes: '' })
const saving = ref(false)
const selectedGanttTask = ref(null)
const isEditing = ref(false)
const ganttEdit = reactive({ name: '', type: 'video', lane: '', notes: '' })
const mentionOpen = ref(false)
const mentionQuery = ref('')
const ganttMentionOpen = ref(false)
const ganttMentionQuery = ref('')
const hiddenTemplateKeys = ref(new Set(JSON.parse(localStorage.getItem('northstar-hidden-planning-templates') || '[]')))
const baseMentionItems = [
  { label: '知识库 / 清华优优 AI Wiki', kind: '知识库' },
  { label: '短视频脚本', kind: '子库' },
  { label: '直播复盘', kind: '子库' },
  { label: '内容生产', kind: '子库' },
  { label: '转化变现', kind: '子库' },
  { label: '竞品研究', kind: '子库' },
  { label: '短视频脚本 / 11月短视频脚本.pdf', kind: '文档' },
  { label: '直播复盘 / 优优账号X直播记录【咨询+精讲课产品销售】.pdf', kind: '文档' },
  { label: '内容生产 / 直播SOP.pdf', kind: '文档' },
  { label: '转化变现 / 精讲课塑品脚本.pdf', kind: '文档' },
  { label: '竞品研究 / 汪舅舅-教育内容脚本转写.txt', kind: '文档' },
  { label: '竞品研究 / 雪梨老师-英语学习内容脚本转写.txt', kind: '文档' }
]
const mentionItems=computed(()=>[...baseMentionItems,...store.demoKnowledgeDocuments.map(doc=>({label:doc.title,kind:'文档'}))])
const filteredMentions = computed(() => {
  const q = mentionQuery.value.trim().toLowerCase()
  return q ? mentionItems.value.filter(item => item.label.toLowerCase().includes(q)) : mentionItems.value
})
const filteredGanttMentions = computed(() => {
  const q = ganttMentionQuery.value.trim().toLowerCase()
  return q ? mentionItems.value.filter(item => item.label.toLowerCase().includes(q)) : mentionItems.value
})
function onMentionInput() {
  const at = form.notes.lastIndexOf('@')
  mentionOpen.value = at >= 0
  mentionQuery.value = at >= 0 ? form.notes.slice(at + 1).trim() : ''
}
function pickMention(item) {
  const at = form.notes.lastIndexOf('@')
  form.notes = at >= 0 ? `${form.notes.slice(0, at)}@${item.label} ` : `${form.notes} @${item.label} `
  mentionOpen.value = false
}
function onGanttMentionInput() {
  const at = ganttEdit.notes.lastIndexOf('@')
  ganttMentionOpen.value = at >= 0
  ganttMentionQuery.value = at >= 0 ? ganttEdit.notes.slice(at + 1).trim() : ''
}
function pickGanttMention(item) {
  const at = ganttEdit.notes.lastIndexOf('@')
  ganttEdit.notes = at >= 0 ? `${ganttEdit.notes.slice(0, at)}@${item.label} ` : `${ganttEdit.notes} @${item.label} `
  ganttMentionOpen.value = false
}
const page = ref(0)
const touchStartX = ref(null)
let wheelLocked = false
const tasks = computed(() => [...store.planningTasks].sort((a, b) => String(a.planned_at).localeCompare(String(b.planned_at))))
const hotspots = computed(() => (store.hotspots || []).slice(0, 8))
const FUTURE_GANTT = {
  1: [
    [{name:'期中后先做哪一件事',s:0,e:0,t:'video'},{name:'家长会前 3 个沟通点',s:1,e:1,t:'video'},{name:'孩子写作业磨蹭怎么办',s:2,e:2,t:'video'},{name:'11 月学习目标清单',s:3,e:3,t:'video'}],
    [{name:'期中复盘 60 秒脚本',s:0,e:0,t:'script'},{name:'家长会沟通脚本',s:1,e:1,t:'script'},{name:'11 月目标脚本',s:3,e:3,t:'script'}],
    [{name:'期中后复盘（发布）',s:0,e:0,t:'video'},{name:'家长会沟通（发布）',s:1,e:2,t:'video'},{name:'11 月目标清单（发布）',s:3,e:3,t:'video'}],
    [{name:'期中后家长答疑',s:1,e:1,t:'live'},{name:'11 月学习规划专场',s:3,e:3,t:'live'}],
    [{name:'期中复盘开播',s:1,e:1,t:'live'},{name:'学习规划开播',s:3,e:3,t:'live'}]
  ],
  2: [
    [{name:'期中卷怎么帮孩子看',s:0,e:0,t:'video'},{name:'英语 140 的复盘步骤',s:1,e:1,t:'video'},{name:'高一学生别踩的 3 个坑',s:2,e:2,t:'video'},{name:'月末学习状态自检',s:3,e:3,t:'video'}],
    [{name:'期中试卷讲解脚本',s:0,e:0,t:'script'},{name:'英语复盘脚本',s:1,e:1,t:'script'},{name:'月末自检脚本',s:3,e:3,t:'script'}],
    [{name:'期中卷讲解（发布）',s:0,e:0,t:'video'},{name:'英语复盘（发布）',s:1,e:1,t:'video'},{name:'月末自检（发布）',s:3,e:3,t:'video'}],
    [{name:'期中试卷直播讲解',s:0,e:0,t:'live'},{name:'月末答疑直播',s:3,e:3,t:'live'}],
    [{name:'试卷讲解开播',s:0,e:0,t:'live'},{name:'月末答疑开播',s:3,e:3,t:'live'}]
  ]
}
const weekStart = computed(() => {
  const [year, month] = monthValue.value.split('-').map(Number)
  if(year===now.getFullYear()&&month===now.getMonth()+1){const offset=(now.getDay()+6)%7;return new Date(year,month-1,now.getDate()-offset)}
  const first = new Date(year, month - 1, 1)
  const mondayOffset = (first.getDay() + 6) % 7
  return new Date(year, month - 1, 1 - mondayOffset)
})
function fmt(d) { return `${d.getMonth() + 1}/${d.getDate()}` }
function taskWeek(task) {
  const date = new Date(String(task.planned_at).replace(' ', 'T'))
  return Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate()) - weekStart.value) / (7 * 86400000))
}
const allWeeks = computed(() => Array.from({ length: 12 }, (_, i) => {
  const start = new Date(weekStart.value.getFullYear(), weekStart.value.getMonth(), weekStart.value.getDate() + i * 7)
  const current=new Date(now.getFullYear(),now.getMonth(),now.getDate()-(now.getDay()+6)%7)
  return { start, t: +start===+current ? '本周' : `W${String(start.getMonth() + 1).padStart(2, '0')}-${i + 1}`, d: fmt(start) }
}))
const totalPages = computed(() => Math.ceil(allWeeks.value.length / 4))
function weeksFor(index) { return allWeeks.value.slice(index * 4, index * 4 + 4) }
const periods = computed(() => Array.from({ length: totalPages.value }, (_, index) => {
  const first = allWeeks.value[index * 4]
  const last = allWeeks.value[index * 4 + 3]
  const end=new Date(last.start.getFullYear(),last.start.getMonth(),last.start.getDate()+6)
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate())
  const kind=end<today?'历史周期':first.start>today?'后续周期':'当前周期'
  return { value: index, label: `${kind} · ${first.d} – ${fmt(end)}` }
}))
const selectableWeeks=computed(()=>allWeeks.value.slice(page.value*4,page.value*4+4).map((week,index)=>({value:String(page.value*4+index),label:week.t+' · '+week.d+' 起'})))
watch(page,()=>{form.dateChoice=String(page.value*4)})
watch(monthValue,()=>{page.value=0;form.dateChoice='0'})
function selectPeriod(value){if(value==='september'){monthValue.value='2026-09';page.value=0}else if(value==='current'){monthValue.value=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;page.value=0}else page.value=Number(value)}
function lanesFor(index) {
  const lanes = productionPlanLanes(store.gantt||[],weekStart.value,index).map((lane, laneIndex) => {
    const sourceItems = lane.items.map(item=>{const templateKey=`${index}:${laneIndex}:${item.name}:${item.s}:${item.e}`;return {...item,...(templateEdits.value[templateKey]||{}),templateKey}})
    const items = sourceItems
      .map(item => ({ ...item, templateKey: item.templateKey }))
      .filter(item => !hiddenTemplateKeys.value.has(item.templateKey))
    return { ...lane, items }
  })
  const scheduled=tasks.value.filter(task=>{const slot=taskWeek(task)-index*4;return slot>=0&&slot<4})
  for(const type of ['video','live']){
    const lane=lanes[type==='live'?4:2],matching=scheduled.filter(task=>task.type===type)
    for(let slot=0;slot<4;slot++){
      const task=matching.filter(task=>taskWeek(task)-index*4===slot).at(-1)
      if(!task)continue
      lane.items=lane.items.filter(item=>!(item.s<=slot&&item.e>=slot))
      lane.items.push({taskId:task.id,notes:task.notes,document_id:task.document_id,name:task.title,s:slot,e:slot,t:type})
    }
  }
  return lanes.map(lane=>({...lane,items:lane.items.slice().sort((a,b)=>a.s-b.s)}))
}
const overflowTasks=computed(()=>{
 const shown=new Set(lanesFor(page.value).flatMap(lane=>lane.items.map(item=>item.taskId).filter(Boolean)))
 return tasks.value.filter(task=>taskWeek(task)>=page.value*4&&taskWeek(task)<page.value*4+4&&!shown.has(task.id))
})
const scheduledTaskCount = computed(() => {
  const [year, month] = monthValue.value.split('-').map(Number)
  const monthStart = new Date(year, month - 1, 1)
  const monthEnd = new Date(year, month, 0, 23, 59, 59, 999)
  let count = 0
  for (let periodIndex = 0; periodIndex < totalPages.value; periodIndex++) {
    for (const lane of lanesFor(periodIndex)) {
      for (const item of lane.items || []) {
        const startWeek = allWeeks.value[periodIndex * 4 + Number(item.s || 0)]?.start
        const endWeek = allWeeks.value[periodIndex * 4 + Number(item.e ?? item.s ?? 0)]?.start
        if (!startWeek || !endWeek) continue
        const itemEnd = new Date(endWeek.getFullYear(), endWeek.getMonth(), endWeek.getDate() + 6, 23, 59, 59, 999)
        if (startWeek <= monthEnd && itemEnd >= monthStart) count++
      }
    }
  }
  return count
})
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
function toggleEditMode() {
  isEditing.value = !isEditing.value
  selectedGanttTask.value = null
  toast(isEditing.value ? '已进入编辑态，请选择一张排期卡片' : '已退出编辑态')
}
function createFromToolbar() {
  document.querySelector('.plan-create')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  window.setTimeout(() => document.querySelector('.plan-create input')?.focus(), 350)
}
function isSelectedGanttItem(item){
 const selected=selectedGanttTask.value
 if(!selected)return false
 if(item.taskId||selected.taskId)return !!item.taskId&&item.taskId===selected.taskId
 return !!item.templateKey&&item.templateKey===selected.templateKey
}
function openGanttEditor(item, lane) {
  isEditing.value=true
  selectedGanttTask.value = item
  ganttEdit.name = item.name
  ganttEdit.type = item.t === 'live' ? 'live' : 'video'
  ganttEdit.lane = lane
  const doc=store.demoKnowledgeDocuments.find(d=>d.id===item.document_id||d.title===item.name||d.local_content===item.notes)
  ganttEdit.notes = doc?'@'+doc.title+'\n\n'+doc.local_content:item.notes || `内容任务：${lane}。可补充脚本链接、拍摄要求或 @ 知识库资料。`
}
const templateEdits=ref(JSON.parse(localStorage.getItem('northstar-planning-template-edits')||'{}'))
function saveGanttEditor() {
  if (!selectedGanttTask.value) return
  const original = selectedGanttTask.value
  const fallbackNotes = `内容任务：${ganttEdit.lane}。拍摄时先用一句问题建立共鸣，再给出一个可执行步骤；可 @ 引用知识库资料。`
  original.name = ganttEdit.name.trim() || original.name
  original.t = ganttEdit.type
  original.notes = ganttEdit.notes.trim() || original.notes || fallbackNotes
  for (const lane of store.gantt || []) {
    const matched = lane.items?.find(item => item === original || item.name === original.name)
    if (matched) { matched.name = original.name; matched.t = original.t; matched.notes = original.notes }
  }
  if(original.templateKey){templateEdits.value={...templateEdits.value,[original.templateKey]:{name:original.name,t:original.t,notes:original.notes}};localStorage.setItem('northstar-planning-template-edits',JSON.stringify(templateEdits.value))}
  if(original.taskId)updateGuestPlanningTask(original.taskId,{title:original.name,type:original.t,notes:original.notes})
  toast('排期卡片已更新')
}
function deleteGanttTask() {
  if(selectedGanttTask.value)deleteConfirm.value=true
}
function confirmDeleteGanttTask() {
  if (!selectedGanttTask.value) return
  const task = selectedGanttTask.value
  deleteConfirm.value=false
  if (task.taskId) deleteGuestPlanningTask(task.taskId)
  else if (task.templateKey) {
    hiddenTemplateKeys.value = new Set([...hiddenTemplateKeys.value, task.templateKey])
    localStorage.setItem('northstar-hidden-planning-templates', JSON.stringify([...hiddenTemplateKeys.value]))
  }
  selectedGanttTask.value = null
  toast('排期已删除')
}
async function save() {
  const week=allWeeks.value[Number(form.dateChoice)]
  const date=form.dateChoice==='custom'?form.planned_at:week?week.start.getFullYear()+'-'+String(week.start.getMonth()+1).padStart(2,'0')+'-'+String(week.start.getDate()).padStart(2,'0')+'T20:00':''
  if (!form.title.trim() || !date) { toast('请填写标题，并选择计划日期'); return }
  saving.value = true; const r = await createPlanningTask({ type: form.type, title: form.title, planned_at: date, notes: form.notes }); saving.value = false
  if (r.ok) { form.title = ''; form.planned_at = ''; form.notes = '' }
}
</script>

<template>
  <div class="plan-page">
    <section class="plan-hero"><div><span class="pill green">清华优优</span><h2>内容生产排期</h2><p>短视频与直播落到同一条生产线；左右滑动即可查看后续周期。</p></div><div class="plan-summary"><label>排期月份<input v-model="monthValue" type="month"></label><div class="plan-task-count" title="统计所选月份内甘特图展示的全部排期卡片"><b>{{ scheduledTaskCount }}</b><span>本月排期任务</span></div></div></section>
    <section class="card plan-create"><div class="card-h"><h3>新增内容</h3><span class="sub">保存后立刻进入甘特与 Cue 提醒</span></div><div class="plan-form"><select v-model="form.type" class="plan-input"><option value="video">短视频</option><option value="live">直播</option></select><select v-model="form.dateChoice" class="plan-input"><option v-for="week in selectableWeeks" :key="week.value" :value="week.value">{{week.label}}</option><option value="custom">自选日期</option></select><input v-if="form.dateChoice === 'custom'" v-model="form.planned_at" class="plan-input" type="date"><input v-model="form.title" class="plan-input wide" placeholder="标题或直播主题"><div class="mention-wrap wide"><input v-model="form.notes" class="plan-input" placeholder="输入 @ 引用知识库、子库或文档" @input="onMentionInput" @focus="onMentionInput" @keydown.esc="mentionOpen=false"><div v-if="mentionOpen" class="mention-menu"><div class="mention-head">引用知识库资料 <small>输入名称筛选</small></div><button v-for="item in filteredMentions" :key="item.label" type="button" @mousedown.prevent="pickMention(item)"><span>{{ item.label }}</span><em>{{ item.kind }}</em></button><p v-if="!filteredMentions.length">没有匹配的知识库资料</p></div></div><button class="wiki-sum-btn" :disabled="saving" @click="save">{{ saving ? '保存中…' : '加入排期' }}</button></div></section>
    <section class="card"><div class="card-h"><div><h3>全量内容排期</h3><span class="sub">双指左右滑动甘特表切换周期；每次聚焦 4 周</span></div><label class="period-picker"><span>查看周期</span><select :value="page" @change="selectPeriod($event.target.value)"><option v-if="monthValue!=='2026-09'" value="september">历史周期 · 九月（8/31 – 9/27）</option><option v-if="monthValue==='2026-09'" value="current">当前周期 · 十月</option><option v-for="period in periods" :key="period.value" :value="period.value">{{ period.label }}</option></select></label></div><div class="gantt-carousel swipe-gantt" @wheel="onScheduleWheel" @touchstart="onScheduleTouchStart" @touchend="onScheduleTouchEnd"><div class="gantt-slides" :style="{ transform: `translateX(-${page * 100}%)` }"><div v-for="period in periods" :key="period.value" class="gantt-slide"><div class="gantt full-gantt"><div class="gantt-head"><div class="lane">生产任务</div><div class="weeks"><div v-for="week in weeksFor(period.value)" :key="week.t" class="w" :class="{ cur: week.t === '本周' }"><div>{{ week.t }}</div><div style="font-weight:400;font-size:11px;color:var(--text-mute)">{{ week.d }}</div></div></div></div><div v-for="lane in lanesFor(period.value)" :key="lane.lane" class="gantt-row"><div class="lane">{{ lane.lane }}</div><div class="gantt-track"><button v-for="(item, index) in lane.items" :key="`${item.name}-${index}`" type="button" class="gantt-bar" :class="[item.t,{muted:isEditing && !isSelectedGanttItem(item),'editing-card':isEditing && isSelectedGanttItem(item)}]" :style="{ gridColumn: (item.s + 1) + ' / ' + (item.e + 2) }" @click.stop="openGanttEditor(item, lane.lane)">{{ item.name }}</button></div></div></div></div></div></div><div v-if="overflowTasks.length" class="additional-plans"><span>同周期其他任务</span><button v-for="task in overflowTasks" :key="task.id" @click="openGanttEditor({taskId:task.id,name:task.title,t:task.type,notes:task.notes},task.type==='live'?'直播 · 开播':'短视频 · 拍摄发布')">{{task.title}}</button></div><div class="gantt-footer"><div class="gantt-legend"><span class="lg"><span class="sw" style="background:var(--green-deep)"></span>短视频</span><span class="lg"><span class="sw" style="background:var(--text)"></span>直播</span><span class="lg"><span class="sw" style="background:#C9CBC2"></span>脚本筹备</span></div><div class="gantt-toolbar"><button type="button" :class="{active:isEditing}" @click="toggleEditMode">{{isEditing?'完成编辑':'编辑'}}</button><button type="button" @click="createFromToolbar">＋ 新增内容</button></div></div><div v-if="!tasks.length" class="plan-empty">上方还未添加真实任务；当前展示的是内容模板，新增任务会自动放到对应周与生产线。</div><section v-if="selectedGanttTask" class="gantt-editor"><div class="gantt-editor-head"><div><span class="pill green">正在编辑</span><h3>{{ ganttEdit.lane }}</h3></div><button type="button" class="editor-close" @click="selectedGanttTask=null">取消选择</button></div><div class="gantt-editor-grid"><label>内容标题<input :value="ganttEdit.name || selectedGanttTask?.name" @input="ganttEdit.name=$event.target.value"></label><label>内容类型<select v-model="ganttEdit.type"><option value="video">短视频</option><option value="live">直播</option><option value="script">脚本筹备</option></select></label><label class="editor-notes">执行备注 / 资料引用<div class="gantt-mention-wrap"><textarea :value="ganttEdit.notes || selectedGanttTask?.notes || `内容任务：${ganttEdit.lane}。拍摄时先用一句问题建立共鸣，再给出一个可执行步骤；可 @ 引用知识库资料。`" @input="ganttEdit.notes=$event.target.value;onGanttMentionInput()" placeholder="可填写拍摄要求，或 @ 引用知识库资料" @focus="onGanttMentionInput" @keydown.esc="ganttMentionOpen=false"></textarea><div v-if="ganttMentionOpen" class="gantt-mention-menu"><div class="mention-head">引用知识库资料 <small>输入名称筛选</small></div><button v-for="item in filteredGanttMentions" :key="item.label" type="button" @mousedown.prevent="pickGanttMention(item)"><span>{{item.label}}</span><em>{{item.kind}}</em></button><p v-if="!filteredGanttMentions.length">没有匹配的知识库资料</p></div></div></label></div><div class="gantt-editor-actions"><button type="button" class="editor-delete" @click="deleteGanttTask">删除排期</button><div><button type="button" @click="selectedGanttTask=null">取消</button><button type="button" class="editor-save" @click="saveGanttEditor">保存修改</button></div></div></section></section>
  </div>
<ConfirmDialog :open="deleteConfirm" title="删除这条排期？" :message="'将从内容排期中移除「'+(selectedGanttTask?.name||'')+'」。'" confirm-label="确认删除" @cancel="deleteConfirm=false" @confirm="confirmDeleteGanttTask" /></template>

<style scoped>.plan-hero .plan-summary{display:flex;align-items:center;gap:20px;flex:none}.plan-summary .plan-task-count{display:grid;gap:4px;text-align:center;min-width:76px}.plan-hero .plan-summary label{color:#bad4c4}.plan-hero .plan-summary input{color:#173a27;font-size:13px;min-width:150px}.plan-task-count b{line-height:1.1;font-size:28px}.plan-task-count span{white-space:nowrap}@media(max-width:600px){.plan-hero .plan-summary{flex-wrap:wrap;width:auto}}.plan-summary label{display:grid;gap:5px;font-size:12px;color:var(--text-mute)}.plan-summary input{border:1px solid var(--border);border-radius:8px;padding:8px;background:#fff}.full-gantt .gantt-bar{font-size:13px;line-height:1.35;padding:10px 12px;min-height:42px;display:flex;align-items:center}.full-gantt .gantt-row{min-height:78px}.full-gantt .lane{font-size:14px}.full-gantt .w{font-size:14px;padding:14px 8px}.card-h h3{font-size:20px}.mention-wrap{position:relative}.mention-wrap .plan-input{width:100%;box-sizing:border-box}.mention-menu{position:absolute;z-index:30;top:calc(100% + 4px);left:0;right:0;max-height:280px;overflow:auto;padding:6px;border:1px solid var(--border);border-radius:10px;background:#fff;box-shadow:0 12px 28px rgba(20,42,29,.16)}.mention-head{padding:7px 9px;color:var(--text-sub);font-size:12px}.mention-head small{margin-left:7px;color:var(--text-mute)}.mention-menu button{display:flex;width:100%;justify-content:space-between;gap:12px;padding:9px;border:0;border-radius:6px;background:transparent;text-align:left;color:var(--text);font-size:13px}.mention-menu button:hover{background:#edf6ee}.mention-menu em{flex:none;font-style:normal;color:#21814e;font-size:11px}.mention-menu p{margin:8px;color:var(--text-mute);font-size:12px}.full-gantt .gantt-bar{border:0;cursor:default;text-align:left;font-family:inherit;transition:filter .16s,opacity .16s,background .16s}.full-gantt .gantt-bar.muted{background:#d4d6d0!important;color:#8a9089!important;opacity:.75}.full-gantt .gantt-bar.editing-card{box-shadow:0 0 0 3px #bce9ca!important;opacity:1}.full-gantt .gantt-bar:hover{filter:brightness(.93);box-shadow:0 0 0 2px rgba(18,85,46,.18)}.gantt-footer{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}.gantt-toolbar{display:flex;gap:8px}.gantt-toolbar button{padding:8px 14px;border:1px solid var(--border);border-radius:8px;background:#fff;color:var(--text);cursor:pointer}.gantt-toolbar button.active{background:#176f40;border-color:#176f40;color:#fff}.gantt-editor{margin:18px 0 0;padding:20px;border:1px solid #cde5d3;border-radius:14px;background:#f7fbf7}.gantt-editor-head,.gantt-editor-actions{display:flex;justify-content:space-between;align-items:center;gap:12px}.gantt-editor-head h3{margin:8px 0 0;font-size:18px}.editor-close,.gantt-editor-actions button{padding:8px 12px;border:1px solid var(--border);border-radius:8px;background:#fff;cursor:pointer}.gantt-editor-grid{display:grid;grid-template-columns:1fr 220px;gap:12px;margin:16px 0}.gantt-editor label{display:grid;gap:6px;font-size:12px;color:var(--text-sub)}.gantt-editor input,.gantt-editor select,.gantt-editor textarea{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--border);border-radius:8px;background:#fff;color:var(--text);font:inherit}.gantt-editor textarea{min-height:84px;resize:vertical}.editor-notes{grid-column:1/-1}.gantt-mention-wrap{position:relative}.gantt-mention-menu{position:absolute;z-index:40;left:0;right:0;bottom:calc(100% + 5px);max-height:250px;overflow:auto;padding:6px;border:1px solid var(--border);border-radius:10px;background:#fff;box-shadow:0 12px 28px rgba(20,42,29,.16)}.gantt-mention-menu button{display:flex;width:100%;justify-content:space-between;gap:12px;padding:9px;border:0;border-radius:6px;background:transparent;text-align:left;color:var(--text);font-size:13px}.gantt-mention-menu button:hover{background:#edf6ee}.gantt-mention-menu em{font-style:normal;color:#21814e;font-size:11px}.gantt-mention-menu p{margin:8px;color:var(--text-mute);font-size:12px}.gantt-editor-actions>div{display:flex;gap:8px}.editor-delete{color:#b33a2f!important;border-color:#e8b5af!important;background:#fff7f5!important}.editor-save{background:#13713e!important;color:white!important;border-color:#13713e!important}@media(max-width:700px){.gantt-footer{align-items:flex-start;flex-direction:column}.gantt-editor-grid{grid-template-columns:1fr}.editor-notes{grid-column:auto}}</style>

<style scoped>.additional-plans{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:12px 0;color:#89938d;font-size:12px}.additional-plans button{border:1px solid #d9e1db;border-radius:8px;padding:7px 10px;background:#f6f8f5;color:#42544a}.gantt-track{align-content:center}.full-gantt .gantt-row{min-height:78px}</style>

<style scoped>.full-gantt .gantt-track{grid-auto-flow:row dense;grid-template-rows:64px;padding:10px 0;align-content:center;align-items:center}.full-gantt .gantt-bar{grid-row:1;box-sizing:border-box;height:64px;min-height:0;margin:0 6px;padding:10px 12px;border:0;border-radius:6px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:44px}.full-gantt .gantt-bar.script{background:#c9cbc2;color:white}.full-gantt .gantt-row{min-height:84px}</style>
