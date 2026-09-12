<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { store, toast } from '../store'
import { fetchQrcode, startQrLogin, syncLiveHistory, captureLiveEvidence, syncStatus } from '../api'

const status = ref({ login: { logged_in: false }, login_task: { running: false }, history_task: { status: '未开始' } })
const qrSrc = ref('')
let timer
async function poll() {
  status.value = await syncStatus()
  if (status.value.login_task?.running) {
    try { const next = await fetchQrcode(); if (qrSrc.value) URL.revokeObjectURL(qrSrc.value); qrSrc.value = next } catch (e) { /* 等待后端生成 */ }
  }
}
onMounted(() => { poll(); timer = setInterval(poll, 1800) })
onUnmounted(() => { clearInterval(timer); if (qrSrc.value) URL.revokeObjectURL(qrSrc.value) })
const scanning = computed(() => status.value.login_task?.running)
const loggedIn = computed(() => status.value.login?.logged_in)
const task = computed(() => status.value.history_task || {})
const evidenceTask = computed(() => status.value.evidence_task || {})
async function login() { const r = await startQrLogin(); if (!r.started) toast(r.message || '无法启动扫码') }
async function start() { const r = await syncLiveHistory(); if (!r.started) toast(r.message || '无法启动同步'); else toast('已开始同步直播历史') }
async function capture() { const r = await captureLiveEvidence(); if (!r.started) toast(r.message || '无法启动逐场采集'); else toast('已开始逐场采集真实回放证据') }
</script>

<template>
  <div class="sa-mask" @click.self="store.syncAssistantOpen = false">
    <section class="sa-card">
      <header><div><h2>数据导入助手</h2><p>当前不具备视频号官方数据接口权限，不能承诺自动同步历史短视频或下载视频文件。</p></div><button @click="store.syncAssistantOpen = false">×</button></header>
      <div class="sa-note"><strong>当前可用方式</strong><span>从视频号后台导出 CSV / XLSX 后导入：直播场次、成交与收入会写入真实数据；短视频报表会写入已验证视频列表。视频画面仍需你提供本地文件或公开链接。</span></div>
      <div class="sa-step"><b>1</b><div><strong>导入视频号后台报表</strong><span>支持直播、商品、经营与短视频数据报表；无需扫码后再等待不确定的同步任务。</span></div><button @click="store.syncAssistantOpen = false; store.channelsOpen = true">前往导入</button></div>
      <div v-if="false" class="sa-step" :class="{done: loggedIn}"><b>1</b><div><strong>{{ loggedIn ? '视频号已连接' : '扫码登录视频号' }}</strong><span>登录态仅用于当前已绑定账号的同步任务。</span></div><button v-if="!loggedIn" :disabled="scanning" @click="login">{{ scanning ? '等待扫码…' : '显示二维码' }}</button></div>
      <div v-if="scanning" class="qr"><img v-if="qrSrc" :src="qrSrc" alt="视频号登录二维码"><span v-else>正在生成二维码…</span><span>请用微信扫一扫完成授权</span></div>
      <div v-if="false" class="sa-step" :class="{done: task.status === '完成'}"><b>2</b><div><strong>同步全部历史直播</strong><span>{{ task.message || '发现每场直播的数据详情链接，并进入队列分析。' }}</span></div><button :disabled="!loggedIn || task.running" @click="start">{{ task.running ? '同步中…' : '开始同步' }}</button></div>
      <div v-if="false && (task.running || task.total)" class="progress"><div><span>{{ task.status || '排队中' }}</span><span>{{ task.done || 0 }} / {{ task.total || '—' }}</span></div><i><em :style="{width: task.total ? Math.round((task.done || 0) / task.total * 100) + '%' : '8%'}"></em></i></div>
      <div v-if="false" class="sa-step" :class="{done: evidenceTask.status === '完成'}"><b>3</b><div><strong>逐场采集真实回放证据</strong><span>{{ evidenceTask.message || '仅保存该场后台实际可见的播放器画面；没有回放则明确留空。' }}</span></div><button :disabled="!loggedIn || evidenceTask.running" @click="capture">{{ evidenceTask.running ? '采集中…' : '开始采集' }}</button></div>
      <div v-if="false && (evidenceTask.running || evidenceTask.total)" class="progress"><div><span>{{ evidenceTask.status || '排队中' }}</span><span>{{ evidenceTask.done || 0 }} / {{ evidenceTask.total || '—' }}</span></div><i><em :style="{width: evidenceTask.total ? Math.round((evidenceTask.done || 0) / evidenceTask.total * 100) + '%' : '8%'}"></em></i></div>
      <div class="sa-note"><strong>不会再做的事</strong><span>不会再显示“逐场采集回放”任务，也不会使用演示封面冒充已同步视频。</span></div>
    </section>
  </div>
</template>

<style scoped>
.sa-mask{position:fixed;inset:0;z-index:1100;background:rgba(10,20,14,.55);display:grid;place-items:center}.sa-card{width:560px;max-width:92vw;background:#fff;border-radius:16px;padding:24px;box-shadow:0 24px 60px #0003}.sa-card header{display:flex;justify-content:space-between;gap:18px;margin-bottom:20px}.sa-card h2{margin:0;font-size:19px}.sa-card p,.sa-step span,.sa-note span{display:block;color:#8b9097;font-size:12px;line-height:1.6;margin-top:4px}.sa-card header button{border:0;background:none;font-size:24px;cursor:pointer}.sa-step{display:flex;align-items:center;gap:12px;border:1px solid #e8e8e4;border-radius:12px;padding:14px;margin-top:10px}.sa-step b{display:grid;place-items:center;width:26px;height:26px;background:#f1f2ee;border-radius:50%;font-size:12px}.sa-step.done b{background:#dff7e8;color:#159447}.sa-step div{flex:1}.sa-step strong{font-size:14px}.sa-step button{border:0;border-radius:8px;background:#1a1a1a;color:#fff;padding:9px 12px;cursor:pointer;font-weight:600;font-size:12px}.sa-step button:disabled{opacity:.45;cursor:default}.qr{text-align:center;padding:14px}.qr img{width:164px;height:164px;display:block;margin:auto;border:1px solid #eee}.qr span{font-size:12px;color:#888;margin-top:6px;display:block}.progress{padding:12px 3px}.progress>div{display:flex;justify-content:space-between;font-size:12px}.progress i{display:block;height:6px;background:#eef0ec;border-radius:5px;margin-top:8px;overflow:hidden}.progress em{display:block;height:100%;background:#07c160;border-radius:5px}.sa-note{margin-top:6px;background:#f5fbf6;border-radius:10px;padding:13px}.sa-note strong{font-size:12px;color:#198754}
</style>
