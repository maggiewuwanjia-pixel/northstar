<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { store, landScript } from '../store'
import { cueAsk } from '../api'

const props = defineProps({ mobile: { type: Boolean, default: false } })
const mobile = props.mobile

const input = ref('')
const bodyEl = ref(null)

function scrollBottom() {
  nextTick(() => {
    if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight
  })
}

function pushMsg(role, html, artifact) {
  store.chat.push({ role, html, artifact: artifact || null, quick: [] })
  scrollBottom()
}
function pushQuick(arr, attachTo) {
  // quick 追加到上一条消息
  const last = store.chat[store.chat.length - 1]
  if (last) last.quick = arr
  scrollBottom()
}

function toggleCopilot() {
  store.copilotOpen = !store.copilotOpen
  if (store.copilotOpen && !store.chat.length) greet()
}

function greet() {
  const count = store.liveSessions.length
  const plans = store.planningTasks.length
  pushMsg('ai', `我是 <b>Cue</b>。当前已挂载 <span class="ref">${count} 场直播数据</span>、知识库与 <span class="ref">${plans} 条内容排期</span>。我会基于实际数据给结论，并告诉你下一步该追问什么。`)
  pushQuick(['下条视频拍什么', '为什么互动率低', '带货怎么破零', '最近直播卖得怎么样', '帮我拆一条爆款脚本'])
}

const currentMonth = () => {
  const m = new Date().getMonth() + 1
  return store.calendar[m - 1] || store.calendar[0] || { m: '8月', name: '暑假收心', topics: [] }
}

function findAnswer(q) {
  const cur = currentMonth()
  const t0 = cur.topics && cur.topics[0]
  if (/下条拍什么|选题|拍啥|拍什么|做什么/.test(q)) return {
    html: `当前在 <span class="ref">${cur.m}·${cur.name}</span> 节点，结合 <span class="ref">${t0 ? t0.t : '开学季'}</span> 这个家长最高频搜索的选题，建议下一条拍：<br><br>「<b>${t0 ? t0.t : '开学收心计划'}</b>」（${t0 ? t0.why : '家长焦虑高峰'}）<br>预计完播率高于你近 7 日均值 23%。`,
    artifact: { label: '落地到工作台 · 生成脚本', from: 'WIKI·' + cur.m, title: t0 ? t0.t : '开学收心计划' },
    followup: ['拆成脚本', '看看热点', '对标账号有没有相关爆款']
  }
  const sessions = [...store.liveSessions]
  const best = sessions.slice().sort((a, b) => Number(String(b.gmv).replace(/[^\d.]/g, '')) - Number(String(a.gmv).replace(/[^\d.]/g, '')))[0]
  const peak = sessions.slice().sort((a, b) => Number(b.peak) - Number(a.peak))[0]
  const next = [...store.planningTasks].sort((a,b) => String(a.planned_at).localeCompare(String(b.planned_at)))[0]
  if (/为什么|掉量|互动|播放|下滑|下降|低/.test(q)) return {
    html: `结论：目前不能用演示播放趋势判断掉量；已同步的真实直播中，最高在线是 <span class="ref">${peak?.peak || '-'} 人（${peak?.d || '-' }）</span>。下一步应先导入短视频播放报表，再把“前 3 秒/完播/互动”做成可验证诊断。`,
    followup: ['给我 3 条钩子改写', '列出高互动选题']
  }
  if (/带货|破零|商品|卖货|选品|挂车/.test(q)) return {
    html: `结论：当前已同步直播里成交最高的是 <span class="ref">${best?.d || '-'} · ${best?.gmv || '¥0'}</span>。先复用这场的复盘话术与节奏，再导入商品/收入明细核验每个商品的成交；没有商品报表前，不给出虚构选品结论。`,
    followup: ['看高意向粉丝', '给我选品清单']
  }
  if (/对标|爆款|监控|别人/.test(q)) {
    const top = store.virals[0] || { t: '新学期语数英如何规划', from: '汪舅舅', like: '1.2w' }
    return {
      html: `监控的 3 个对标账号近 7 日共 <span class="ref">${store.virals.length} 条爆款</span>。最热：<br>「<b>${top.t}</b>」by ${top.from}，${top.like} 赞<br>这条与你的「${t0 ? t0.t : '开学季'}」选题高度重合，建议拆解。`,
      artifact: { label: '落地到工作台 · 拆脚本', from: '对标·' + top.from, title: top.t },
      followup: ['拆这条爆款', '还有其他爆款吗']
    }
  }
  if (/直播|gmv|卖了多少|业绩/.test(q)) return {
    html: `结论：已同步 <span class="ref">${sessions.length} 场</span>直播；成交最高为 <span class="ref">${best?.gmv || '¥0'}（${best?.d || '-'}）</span>，最高在线为 <span class="ref">${peak?.peak || '-'} 人</span>。下一步：${next ? `把「${next.title}」排在 ${String(next.planned_at).replace('T',' ')}，并复用高成交场的复盘。` : '先到内容排期创建下一场直播，再生成针对性的复盘清单。'}`,
    followup: ['看 11-13 复盘', '对标的直播怎么做的']
  }
  if (/拆.*脚本|分镜|脚本怎么/.test(q)) {
    const v = store.virals[0] || { t: '新学期语数英如何规划', from: '汪舅舅' }
    return {
      html: `基于 <span class="ref">${v.t}</span>（${v.from}）的拆解框架：<br>· 钩子（0-3s）：抛出冲突问题<br>· 痛点（3-10s）：场景化共鸣<br>· 干货（10s-结尾）：3 步方法`,
      artifact: { label: '落地到工作台 · 拆脚本', from: '对标·' + v.from, title: v.t },
      followup: ['展开分镜', '换一条拆']
    }
  }
  if (/节点|现在什么|当前/.test(q)) return {
    html: `当前：<span class="ref">${cur.m}·${cur.name}</span>（${cur.type || '开学'}）<br>${cur.topics ? cur.topics.length : 0} 条候选选题<br>距下一节点「9月·秋季学期」还有 28 天。`,
    followup: ['下条拍什么', '看看 9 月']
  }
  return {
    html: `可以试试：<span class="ref">下条视频拍什么</span> / <span class="ref">带货怎么破零</span> / <span class="ref">最近直播卖得怎么样</span>`,
    followup: ['下条视频拍什么', '带货怎么破零', '最近直播卖得怎么样']
  }
}

// 组装给混元的账号数据上下文（简洁摘要）
function buildContext() {
  const cur = currentMonth()
  const fans = store.kpis.find(k => k.label === '关注者')?.value || '22.4w'
  const play = store.kpis.find(k => k.label === '昨日播放')?.value || '6011'
  const gmv = store.kpis.find(k => k.label === '带货 GMV')?.value || '¥0'
  return [
    `账号：清华优优，教育博主，${fans} 粉，粉丝 40-49 岁妈妈占 55%、女性 56%。`,
    `昨日播放 ${play}，带货 GMV ${gmv}，当前节点「${cur.m}·${cur.name}」。`,
    `真实直播共 ${store.liveSessions.length} 场；下一条计划：${store.planningTasks[0]?.title || '尚未排期'}。`
  ].join('\n')
}

async function sendChat(q) {
  const text = (q || input.value).trim()
  if (!text) return
  input.value = ''
  pushMsg('user', text)

  // 优先走混元（后端已配 key 时）；否则降级到前端关键词规则
  const res = await cueAsk(text, buildContext())
  if (res.ready && res.answer) {
    const html = res.answer.replace(/\n/g, '<br>')
    pushMsg('ai', html)
    pushQuick(['下条视频拍什么', '带货怎么破零'])
    return
  }
  const a = findAnswer(text)
  pushMsg('ai', a.html, a.artifact)
  if (a.followup) pushQuick(a.followup)
}

function onArtifact(artifact) {
  landScript(artifact.title, artifact.from)
}

onMounted(() => {
  if (!store.chat.length) greet()
})
</script>

<template>
  <aside class="copilot-panel"
         :class="{ collapsed: !store.copilotOpen && !mobile, mobile: mobile }">
    <template v-if="!mobile">
      <div class="cp-toggle" @click="toggleCopilot">{{ store.copilotOpen ? '◀' : '▶' }}</div>
      <div class="cp-collapsed-bar">
        <span class="vt">Cue · 帮你盯方向</span>
        <span class="dot"></span>
      </div>
      <div class="cp-header">
        <span class="badge">✦</span>
        <h3>Cue</h3>
        <span class="source">已挂载 WIKI</span>
      </div>
    </template>
    <div class="cp-inner">
      <div class="cp-body" ref="bodyEl">
        <div v-for="(m, i) in store.chat" :key="i" class="cp-msg" :class="m.role">
          <div class="role">{{ m.role === 'user' ? '你' : 'Cue' }}</div>
          <div class="bubble" v-html="m.html"></div>
          <div v-if="m.artifact" class="artifact-row">
            <span class="land" @click="onArtifact(m.artifact)">{{ m.artifact.label }}</span>
          </div>
          <div v-if="m.quick && m.quick.length" class="quick-row">
            <span v-for="t in m.quick" :key="t" class="qpill" @click="sendChat(t)">{{ t }}</span>
          </div>
        </div>
      </div>
      <div class="cp-input">
        <input v-model="input" placeholder="问 Cue：下条拍什么…" @keydown.enter="sendChat()">
        <button class="send" @click="sendChat()">发送</button>
      </div>
    </div>
  </aside>
</template>
