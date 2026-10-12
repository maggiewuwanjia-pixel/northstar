<script setup>
import { computed, onMounted, ref } from 'vue'
import { store, switchView, toast } from '../../store'

const running = ref(false)
const phase = ref(0)
const logs = ref([])
const taskKey = 'northstar-october-virtual-task-v1'

const stages = [
  { id: 1, eyebrow: 'DATA', title: '历史资产进入 AI Wiki', metric: '34 份文件', note: '飞书手工文档 + 视频号 / 交易 Excel' },
  { id: 2, eyebrow: 'PLAN', title: '生成十月内容规划', metric: '12 个选题', note: '每条选题都带历史依据与执行动作' },
  { id: 3, eyebrow: 'MONITOR', title: '爆款自动沉淀脚本库', metric: '3 人天 / 周', note: '竞品筛选、拆解与录入的人力节省测算' }
]

const taskSteps = [
  '上传历史 Excel、塑品脚本与直播记录',
  '生成账号经营摘要与可引用证据',
  '根据历史表现规划十月内容',
  '扫描 6 个教育类竞品的公开内容',
  '识别高潜内容并改写为清华优优版本',
  '保存到十月排期与脚本库',
  '生成规划依据与预计节省时间复盘'
]

const assets = [
  { type: '飞书', name: '塑品脚本库', detail: '187 条脚本 · 已切片', result: '钩子 / 主体 / CTA 可检索' },
  { type: '飞书', name: '直播记录与手工复盘', detail: '8 份记录 · 已关联', result: '话术、场景和问题沉淀' },
  { type: 'Excel', name: '视频号与成交历史报表', detail: '32 张表 · 已结构化', result: '482 个证据片段可召回' }
]

const weeks = [
  { week: 'W1', date: '10.05 – 10.11', theme: '开学后第一次月考', output: '3 条短视频', evidence: '高收藏：学习方法 / 家长沟通', status: '待审核' },
  { week: 'W2', date: '10.12 – 10.18', theme: '高中学习效率', output: '3 条短视频', evidence: '历史完播率较高：清单型内容', status: '待审核' },
  { week: 'W3', date: '10.19 – 10.25', theme: '期中考试预热', output: '2 条视频 + 1 场直播', evidence: '直播高频提问：错题与复习节奏', status: '待审核' },
  { week: 'W4', date: '10.26 – 11.01', theme: '期中冲刺与复盘', output: '2 条视频 + 1 场直播', evidence: '竞品增量：考前 7 天行动指南', status: '待审核' }
]

const viralCards = [
  { platform: '小红书', account: '英语雪梨老师', title: '孩子不是不努力，是不会拆目标', score: '8.9', signal: '收藏率显著高于账号中位数', hook: '反常识判断 + 家长痛点', script: '月考后，先别急着补课' },
  { platform: '视频号', account: '杨老师讲数学', title: '期中前最容易丢的 20 分', score: '8.6', signal: '近 7 日互动增速 Top 5%', hook: '明确损失 + 时间窗口', script: '期中前，这 3 类题不要再错' },
  { platform: '小红书', account: '清华爸带娃', title: '真正拉开差距的是复盘能力', score: '8.3', signal: '评论问题密度高，可延展直播', hook: '身份背书 + 方法清单', script: '清华学生复盘错题的 4 个动作' }
]

const completed = computed(() => phase.value === 7 && !running.value)
const progress = computed(() => running.value ? Math.min(96, phase.value / 7 * 100) : phase.value / 7 * 100)

function wait(ms) { return new Promise(resolve => window.setTimeout(resolve, ms)) }
function addLog(text) { logs.value.push({ time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }), text }) }

function seedOutputs() {
  const generatedScripts = viralCards.map((item, index) => ({
    id: `virtual-oct-${index + 1}`,
    t: item.script,
    from: `虚拟监控·${item.platform}·${item.account}`,
    dur: index === 2 ? '00:45' : '00:30',
    tag: '十月候选',
    cover: ['/assets/covers/gaoyi-mistakes.png', '/assets/covers/pressure-3sentences.png', '/assets/covers/qinghua-effort.png'][index]
  }))
  for (const script of generatedScripts.reverse()) {
    if (!store.scripts.some(item => item.id === script.id)) store.scripts.unshift(script)
  }
  const planItems = weeks.flatMap((week, wi) => [0, 1, 2].map((_, i) => {
    const date = new Date(2026, 9, 7 + wi * 7 + i * 2)
    const plannedAt = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} 20:00`
    return ({
    id: `virtual-plan-${wi}-${i}`,
    type: wi > 1 && i === 2 ? 'live' : 'video',
    title: wi === 0 ? ['月考后先做这张复盘表', '孩子成绩波动，家长先问这 3 句', '高一月考暴露的 4 个误区'][i]
      : wi === 1 ? ['每天多出 40 分钟的学习法', '错题本为什么越记越没用', '高中生周计划模板'][i]
      : wi === 2 ? ['期中复习优先级清单', '考前两周不要做的 3 件事', '期中复习答疑夜'][i]
      : ['期中前 7 天行动指南', '考试焦虑的 3 个处理动作', '期中复盘公开课'][i],
    planned_at: plannedAt,
    status: '待审核',
    notes: `虚拟验证任务 · ${week.evidence}`,
    source: 'virtual-october'
  })}))
  for (const item of planItems) {
    if (!store.planningTasks.some(task => task.id === item.id)) store.planningTasks.push(item)
  }
}

async function runTask() {
  if (running.value) return
  running.value = true
  phase.value = 0
  logs.value = []
  addLog('创建虚拟任务：十月内容经营闭环')
  const results = [
    '34 份历史资料已解析：4 份飞书 Wiki、30 份 Excel / CSV',
    '生成账号经营摘要，并形成 482 个可追溯证据片段',
    '结合历史表现与业务节点，生成 4 周、12 个内容任务',
    '完成 6 个教育类竞品账号扫描，记录 126 条公开内容',
    '识别 9 条高潜内容，选出 3 条可迁移脚本',
    '3 条脚本与 12 个任务已写入脚本库和十月排期',
    '项目复盘完成：任务耗时 18 分钟，预计减少 24 人时 / 周'
  ]
  for (let i = 0; i < results.length; i++) { await wait(420); phase.value = i + 1; addLog(results[i]) }
  seedOutputs()
  localStorage.setItem(taskKey, 'done')
  await wait(350)
  running.value = false
  addLog('验收通过：AI Wiki、经营摘要、竞品候选、脚本、排期与复盘均已生成')
  toast('十月内容闭环已跑通')
}

function resetTask() {
  phase.value = 0
  logs.value = []
  localStorage.removeItem(taskKey)
  store.scripts = store.scripts.filter(item => !String(item.id).startsWith('virtual-oct-'))
  store.planningTasks = store.planningTasks.filter(item => item.source !== 'virtual-october')
  toast('虚拟任务已重置')
}

onMounted(() => {
  if (localStorage.getItem(taskKey) === 'done') {
    phase.value = 7
    seedOutputs()
    logs.value = [{ time: '已完成', text: '上次虚拟任务结果已恢复，可直接查看闭环产物' }]
  }
})
</script>

<template>
  <div class="october-workflow">
    <section class="ow-hero">
      <div>
        <div class="ow-kicker"><span></span>虚拟验证任务 · 不依赖账号继续发布</div>
        <h2>十月内容经营闭环</h2>
        <p>用一套固定输入验证 NorthStar 能否把历史资料变成下一步行动，并持续从公开竞品内容补充脚本资产。</p>
      </div>
      <div class="ow-actions">
        <button class="ow-primary" :disabled="running" @click="runTask">{{ running ? '正在运行…' : completed ? '重新运行任务' : '运行虚拟任务' }}</button>
        <button class="ow-secondary" :disabled="running || phase === 0" @click="resetTask">重置</button>
      </div>
      <div class="ow-progress"><i :style="{ width: `${progress}%` }"></i></div>
    </section>

    <section class="ow-outcome" :class="{ ready: completed }">
        <div><span>闭环状态</span><strong>{{ running ? `正在执行第 ${Math.min(phase + 1, 7)} 步` : completed ? '7 / 7 已通过' : '等待运行' }}</strong></div>
      <div><span>可验收产物</span><strong>{{ phase >= 2 ? 'Wiki + 排期 + 脚本' : phase === 1 ? 'AI Wiki' : '—' }}</strong></div>
      <div><span>效率结果</span><strong>{{ completed ? '节省 3 人天 / 周' : '待测算' }}</strong><small>虚拟任务测算</small></div>
      <div><span>业务结果</span><strong>待真实发布验证</strong><small>不虚构播放与涨粉</small></div>
    </section>

    <section class="ow-panel ow-flow">
      <header><div><span class="ow-step">CLOSED LOOP</span><h3>完整数据链路：结果持续回写为下一轮资产</h3></div><span>数据链路总览</span></header>
      <img src="/assets/workflow/data-loop.png" alt="发布结果与复盘、数据与资料资产、经营分析与竞品洞察、Cue 分析和规划、选题脚本与内容排期形成闭环">
    </section>

    <section class="ow-panel ow-task-steps">
      <header><div><span class="ow-step">RUNNABLE TASK</span><h3>清华优优 · 十月内容项目</h3></div><span>固定输入，可重复运行</span></header>
      <div class="ow-seven"><div v-for="(step,index) in taskSteps" :key="step" :class="{done:phase>index}"><em>{{phase>index?'✓':index+1}}</em><span>{{step}}</span></div></div>
      <div class="ow-review"><article><span>导入资料</span><b>{{completed?'34 份 / 12,486 行':'待运行'}}</b></article><article><span>可引用知识</span><b>{{completed?'482 条':'待运行'}}</b></article><article><span>竞品候选</span><b>{{completed?'9 条':'待运行'}}</b></article><article><span>生成产物</span><b>{{completed?'12 选题 / 3 脚本':'待运行'}}</b></article><article><span>任务耗时</span><b>{{completed?'18 分钟':'待运行'}}</b></article><article><span>预计节省</span><b>{{completed?'24 人时 / 周':'待运行'}}</b></article></div>
    </section>

    <section class="ow-pipeline">
      <article v-for="item in stages" :key="item.id" :class="['ow-stage', { active: phase === item.id && running, done: phase >= item.id }]">
        <div class="ow-stage-top"><span>{{ item.eyebrow }}</span><em>{{ phase >= item.id ? '✓' : item.id }}</em></div>
        <h3>{{ item.title }}</h3><b>{{ item.metric }}</b><p>{{ item.note }}</p>
      </article>
    </section>

    <section class="ow-grid">
      <article class="ow-panel ow-assets">
        <header><div><span class="ow-step">01 · DATA</span><h3>历史手工资料成为数据资产</h3></div><button @click="switchView('wiki')">打开 AI Wiki</button></header>
        <div v-for="asset in assets" :key="asset.name" class="ow-asset-row">
          <span class="ow-type">{{ asset.type }}</span><div><b>{{ asset.name }}</b><small>{{ asset.detail }}</small></div><em>{{ phase >= 1 ? asset.result : '等待解析' }}</em>
        </div>
        <footer><span>验收条件</span><b :class="{ pass: phase >= 1 }">{{ phase >= 1 ? '通过 · 每条结论可回到原文件' : '来源可追溯、Excel 字段可计算' }}</b></footer>
      </article>

      <article class="ow-panel ow-plan">
        <header><div><span class="ow-step">02 · PLAN</span><h3>十月规划：从“数据”到“下周做什么”</h3></div><button @click="switchView('planning')">查看完整排期</button></header>
        <div class="ow-week-grid">
          <div v-for="week in weeks" :key="week.week" class="ow-week">
            <div><b>{{ week.week }}</b><span>{{ week.date }}</span></div><h4>{{ week.theme }}</h4><p>{{ week.output }}</p><small>{{ phase >= 2 ? week.evidence : '运行后生成依据' }}</small>
          </div>
        </div>
        <footer><span>验收条件</span><b :class="{ pass: phase >= 2 }">{{ phase >= 2 ? '通过 · 12 / 12 任务均含依据与动作' : '计划完整、依据清晰、可进入人工审核' }}</b></footer>
      </article>

      <article class="ow-panel ow-monitor">
        <header><div><span class="ow-step">03 · MONITOR</span><h3>监控公开竞品，爆款自动进入脚本库</h3></div><button @click="switchView('scripts')">查看脚本库</button></header>
        <div class="ow-monitor-head"><span>平台 / 账号</span><span>爆款信号</span><span>可迁移脚本</span><span>状态</span></div>
        <div v-for="item in viralCards" :key="item.title" class="ow-monitor-row">
          <div><span class="ow-platform">{{ item.platform }}</span><b>{{ item.account }}</b><small>{{ item.title }}</small></div>
          <div><strong>{{ item.score }}</strong><small>{{ phase >= 3 ? item.signal : '等待扫描公开内容' }}</small></div>
          <div><b>{{ phase >= 3 ? item.script : '—' }}</b><small>{{ phase >= 3 ? item.hook : '等待拆解' }}</small></div>
          <em :class="{ landed: phase >= 3 }">{{ phase >= 3 ? '已入库' : '等待' }}</em>
        </div>
        <footer><span>验收条件</span><b :class="{ pass: phase >= 3 }">{{ phase >= 3 ? '通过 · 3 条脚本已落库，可继续编辑' : '爆款规则透明、拆解完整、脚本成功落库' }}</b></footer>
      </article>
    </section>

    <section class="ow-log">
      <header><h3>运行记录</h3><span>固定测试集 · 每次可重复</span></header>
      <div v-if="!logs.length" class="ow-log-empty">点击“运行虚拟任务”，完整流程约 3 秒。</div>
      <p v-for="(log, index) in logs" :key="index"><time>{{ log.time }}</time><span>{{ log.text }}</span></p>
    </section>
  </div>
</template>

<style scoped>
.october-workflow{max-width:1180px;margin:0 auto}.ow-hero{position:relative;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;overflow:hidden;padding:28px 30px 34px;border-radius:18px;background:#0d2519;color:#fff}.ow-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 49.8%,rgba(255,255,255,.06) 50%);background-size:25% 100%;pointer-events:none}.ow-hero>div{position:relative;z-index:1}.ow-kicker{display:flex;align-items:center;gap:8px;color:#b7d1c0;font-size:12px}.ow-kicker span{width:7px;height:7px;border-radius:50%;background:#54dc91}.ow-hero h2{font-size:30px;letter-spacing:-.04em;margin:10px 0 5px}.ow-hero p{max-width:680px;color:#b7cabe;font-size:14px}.ow-actions{display:flex;gap:8px;flex-shrink:0}.ow-actions button,.ow-panel header button{border:0;border-radius:8px;padding:10px 15px;font:inherit;font-size:12px;cursor:pointer}.ow-primary{background:#fff;color:#10281d;font-weight:700}.ow-secondary{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.18)!important}.ow-actions button:disabled{opacity:.55;cursor:wait}.ow-progress{position:absolute!important;z-index:2!important;left:0;right:0;bottom:0;height:5px;background:rgba(255,255,255,.12)}.ow-progress i{display:block;height:100%;background:#4fd78b;transition:width .5s ease}.ow-outcome{display:grid;grid-template-columns:repeat(4,1fr);margin:14px 0;border:1px solid var(--border);border-radius:14px;background:#fff}.ow-outcome>div{padding:16px 18px;border-right:1px solid var(--border)}.ow-outcome>div:last-child{border:0}.ow-outcome span,.ow-outcome small{display:block;color:var(--text-mute);font-size:11px}.ow-outcome strong{display:block;margin:5px 0 1px;font-size:16px}.ow-outcome.ready>div:first-child strong,.ow-outcome.ready>div:nth-child(3) strong{color:var(--green-deep)}.ow-pipeline{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0}.ow-stage{padding:18px;border:1px solid var(--border);border-radius:13px;background:#fff;transition:.25s}.ow-stage.active{border-color:#67be89;box-shadow:0 0 0 3px rgba(7,193,96,.1)}.ow-stage.done{background:#f5fbf6}.ow-stage-top{display:flex;justify-content:space-between;align-items:center}.ow-stage-top span{font-size:10px;font-weight:800;letter-spacing:.1em;color:var(--text-mute)}.ow-stage-top em{display:grid;place-items:center;width:23px;height:23px;border-radius:50%;background:var(--hover);font-style:normal;font-size:11px}.ow-stage.done .ow-stage-top em{background:#d9f5e3;color:#08743f}.ow-stage h3{font-size:15px;margin:12px 0 16px}.ow-stage>b{font-size:21px}.ow-stage p{margin-top:3px;color:var(--text-mute);font-size:11px}.ow-grid{display:grid;gap:14px}.ow-panel{padding:22px;border:1px solid var(--border);border-radius:15px;background:#fff;box-shadow:var(--shadow-sm)}.ow-panel header{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:18px}.ow-step{font-size:10px;color:var(--green-deep);font-weight:800;letter-spacing:.1em}.ow-panel h3{margin-top:4px;font-size:17px}.ow-panel header button{background:var(--hover);color:var(--text)}.ow-panel header button:hover{background:var(--text);color:#fff}.ow-flow{margin-bottom:14px}.ow-flow img{display:block;width:100%;height:auto;border-radius:10px;border:1px solid var(--border)}.ow-flow header>span,.ow-task-steps header>span{font-size:11px;color:var(--text-mute)}.ow-task-steps{margin-bottom:14px}.ow-seven{display:grid;grid-template-columns:repeat(7,1fr);gap:8px}.ow-seven>div{min-height:104px;padding:11px;border:1px solid var(--border);border-radius:10px;background:#fafaf8}.ow-seven>div.done{background:#edf8f1;border-color:#b9dfc8}.ow-seven em{display:grid;place-items:center;width:23px;height:23px;margin-bottom:9px;border-radius:50%;background:#eee;font-style:normal;font-size:10px}.ow-seven .done em{background:#1d8a50;color:#fff}.ow-seven span{font-size:11px;line-height:1.5}.ow-review{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-top:13px}.ow-review article{padding:11px;border-radius:8px;background:#f4f5f2}.ow-review span,.ow-review b{display:block}.ow-review span{font-size:10px;color:var(--text-mute)}.ow-review b{margin-top:5px;font-size:13px}.ow-asset-row{display:grid;grid-template-columns:58px minmax(190px,1fr) 1fr;gap:14px;align-items:center;padding:12px 0;border-top:1px solid var(--border-light)}.ow-type,.ow-platform{width:max-content;padding:3px 8px;border-radius:99px;background:#eaf6ee;color:#1d7445;font-size:10px;font-weight:700}.ow-asset-row b,.ow-asset-row small{display:block}.ow-asset-row small,.ow-asset-row em{color:var(--text-mute);font-size:11px;font-style:normal}.ow-asset-row em{text-align:right}.ow-panel footer{display:flex;justify-content:space-between;gap:20px;margin-top:16px;padding-top:13px;border-top:1px solid var(--border-light);font-size:11px;color:var(--text-mute)}.ow-panel footer b{text-align:right;color:var(--text-sub)}.ow-panel footer b.pass{color:var(--green-deep)}.ow-week-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.ow-week{padding:14px;border:1px solid var(--border);border-radius:10px;background:#fbfbf9}.ow-week>div{display:flex;justify-content:space-between;gap:8px}.ow-week>div b{color:var(--green-deep)}.ow-week>div span,.ow-week small{color:var(--text-mute);font-size:10px}.ow-week h4{font-size:13px;margin:16px 0 5px}.ow-week p{font-size:12px;margin-bottom:10px}.ow-week small{display:block;min-height:30px;line-height:1.5}.ow-monitor-head,.ow-monitor-row{display:grid;grid-template-columns:1.2fr 1fr 1.2fr 70px;gap:16px;align-items:center}.ow-monitor-head{padding:8px 10px;color:var(--text-mute);font-size:10px;background:var(--bg);border-radius:7px}.ow-monitor-row{padding:13px 10px;border-bottom:1px solid var(--border-light)}.ow-monitor-row>div:first-child{display:grid;grid-template-columns:max-content 1fr;gap:4px 8px}.ow-monitor-row>div:first-child small{grid-column:1/-1}.ow-monitor-row b,.ow-monitor-row small{display:block}.ow-monitor-row b{font-size:12px}.ow-monitor-row small{margin-top:3px;color:var(--text-mute);font-size:10px}.ow-monitor-row strong{font-size:18px}.ow-monitor-row>em{padding:5px 8px;border-radius:99px;background:var(--hover);color:var(--text-mute);font-style:normal;font-size:10px;text-align:center}.ow-monitor-row>em.landed{background:#e5f7eb;color:#157240}.ow-log{margin-top:14px;padding:18px 20px;border-radius:13px;background:#191919;color:#fff}.ow-log header{display:flex;justify-content:space-between;margin-bottom:12px}.ow-log h3{font-size:13px}.ow-log header span{font-size:10px;color:#888}.ow-log p{display:grid;grid-template-columns:72px 1fr;gap:12px;padding:5px 0;color:#ccc;font-size:11px}.ow-log time{color:#6edb9b;font-variant-numeric:tabular-nums}.ow-log-empty{color:#777;font-size:11px;padding:5px 0}
@media(max-width:900px){.ow-hero{display:block}.ow-actions{margin-top:18px}.ow-outcome{grid-template-columns:repeat(2,1fr)}.ow-outcome>div:nth-child(2){border-right:0}.ow-outcome>div:nth-child(-n+2){border-bottom:1px solid var(--border)}.ow-pipeline{grid-template-columns:1fr}.ow-seven{grid-template-columns:repeat(2,1fr)}.ow-review{grid-template-columns:repeat(3,1fr)}.ow-week-grid{grid-template-columns:repeat(2,1fr)}.ow-monitor-head{display:none}.ow-monitor-row{grid-template-columns:1fr 1fr}.ow-monitor-row>em{justify-self:end}.ow-asset-row{grid-template-columns:52px 1fr}.ow-asset-row em{grid-column:2;text-align:left}.ow-panel header{align-items:center}}@media(max-width:560px){.ow-outcome,.ow-week-grid,.ow-monitor-row,.ow-review,.ow-seven{grid-template-columns:1fr}.ow-outcome>div{border-right:0;border-bottom:1px solid var(--border)}.ow-panel{padding:16px}.ow-panel header{display:block}.ow-panel header button{margin-top:10px}.ow-monitor-row>em{justify-self:start}}
</style>
