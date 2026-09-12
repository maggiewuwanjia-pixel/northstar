<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { store, bindChannel, unbindChannel, closeChannels, toast, loadData } from '../store'
import { startQrLogin, syncStatus, runScrape, fetchQrcode, importCsvText, importCsvFile } from '../api'

const name = ref('')
const finderUin = ref('')
const busy = ref(false)
const importBusy = ref(false)
const scrapeBusy = ref(false)
const lastStatus = ref({ login: { logged_in: false }, login_task: { running: false, result: null } })
const showImport = ref(false)
const pasteText = ref('')
const fileInput = ref(null)
const qrSrc = ref('')
const scanMessage = ref('')

let pollTimer = null
async function pollOnce() {
  lastStatus.value = await syncStatus()
  if (lastStatus.value?.login_task?.running) {
    try {
      const next = await fetchQrcode()
      if (qrSrc.value) URL.revokeObjectURL(qrSrc.value)
      qrSrc.value = next
    } catch (e) { /* 等待后端生成二维码 */ }
  }
  // 一旦看到扫码完成（running=false 且 result.ok=true），立刻刷新数据
  const r = lastStatus.value?.login_task?.result
  if (r && r.ok && r.scrape) {
    toast('登录成功，已自动同步数据')
    loadData(false)
  }
}
onMounted(async () => {
  await pollOnce()
  pollTimer = setInterval(pollOnce, 2000)
  // 已绑定但未登录时，打开连接面板就自动发起授权；用户无需再额外点一次按钮。
  if (store.channels.length && !lastStatus.value?.login?.logged_in && !lastStatus.value?.login_task?.running) scan()
})
onUnmounted(() => { if (pollTimer) clearInterval(pollTimer); if (qrSrc.value) URL.revokeObjectURL(qrSrc.value) })

const anyLoggedIn = computed(() => lastStatus.value?.login?.logged_in)
const scanning = computed(() => !!lastStatus.value?.login_task?.running)

async function add() {
  if (busy.value) return
  busy.value = true
  const ok = await bindChannel(name.value, finderUin.value)
  busy.value = false
  if (ok) { name.value = ''; finderUin.value = '' }
}

async function scan() {
  if (scanning.value) return
  scanMessage.value = '正在请求服务器生成授权二维码…'
  const r = await startQrLogin()
  if (r?.started) {
    scanMessage.value = r.message || '二维码正在生成，请稍候。'
    // 不等两秒轮询周期，点击后立即刷新状态和二维码。
    pollOnce()
  } else {
    scanMessage.value = '无法启动授权：' + (r?.message || '服务器未返回任务状态')
    toast(scanMessage.value)
  }
}

async function syncNow() {
  if (scrapeBusy.value) return
  scrapeBusy.value = true
  const r = await runScrape()
  scrapeBusy.value = false
  if (r?.ok) {
    toast('数据已同步：' + JSON.stringify(r.data || {}))
    loadData(false)
  } else {
    toast(r?.error || '同步失败：请先扫码登录')
  }
}

async function doImport() {
  const text = pasteText.value.trim()
  if (!text) { toast('请先粘贴或输入表格数据'); return }
  importBusy.value = true
  const r = await importCsvText(text)
  importBusy.value = false
  if (r?.ok) {
    toast(`导入成功：${r.type === 'kpis' ? '指标' : '视频'} ${r.rows} 条`)
    pasteText.value = ''
    loadData(false)
  } else {
    toast('导入失败：' + (r?.error || '请检查表头格式'))
  }
}
async function onFile(e) {
  const f = e.target.files?.[0]
  if (!f) return
  importBusy.value = true
  const r = await importCsvFile(f)
  importBusy.value = false
  if (r?.ok) {
    toast(`导入成功：${r.type === 'kpis' ? '指标' : '视频'} ${r.rows} 条`)
    loadData(false)
  } else {
    toast('导入失败：' + (r?.error || '请检查文件格式'))
  }
  e.target.value = ''
}
function fillTemplate(kind) {
  pasteText.value = kind === 'kpi'
    ? 'label,value,delta,up,warm\n关注者,22.4w,+1200,1,0\n昨日播放,8.6w,+12%,1,0\n带货GMV,¥0,0,0,0'
    : 'title,dur,likes,tag\n新学期怎么规划,01:20,3.2k,干货\n数学130分攻略,03:40,5.1k,干货'
}

const stateLabel = (st) => ({
  '已登录': '已登录',
  '未登录': '未连接',
  '扫码失败': '连接失败',
  '扫码中': '扫码中…',
}[st] || st || '未连接')
const loginText = st => stateLabel(st)
const fmtTime = t => (t || '').replace('T', ' ').slice(0, 16)
</script>

<template>
  <div class="ch-mask" @click.self="closeChannels">
    <div class="ch-card">
      <div class="ch-head">
        <div>
          <div class="ch-eyebrow">NORTHSTAR CONNECT</div>
          <div class="ch-title">连接视频号后台</div>
          <p class="ch-sub">扫码授权后，自动同步直播与内容数据</p>
        </div>
        <button class="ch-close" @click="closeChannels">×</button>
      </div>

      <!-- 已绑定列表 -->
      <div v-if="store.channels.length" class="ch-list">
        <div v-for="c in store.channels" :key="c.id" class="ch-item">
          <span class="ch-ava">{{ (c.name || '号').slice(0, 1) }}</span>
          <div class="ch-info">
            <div class="ch-name">
              {{ c.name }}
              <span class="pill" :class="c.login_state === '已登录' ? 'green' : (c.login_state === '扫码失败' ? 'warn' : 'outline')">
                {{ loginText(c.login_state) }}
              </span>
            </div>
            <div class="ch-meta">
              <span v-if="c.finder_uin">ID：{{ c.finder_uin }}</span>
              <span v-else class="ch-none">未填视频号 ID</span>
              <span v-if="c.last_login_at"> · 上次登录 {{ fmtTime(c.last_login_at) }}</span>
            </div>
          </div>
          <button class="ch-unbind" @click="unbindChannel(c.id)">解绑</button>
        </div>
      </div>
      <div v-else class="ch-empty">
        还没有绑定账号。填写视频号名称后，即可开始授权同步。
      </div>

      <!-- 主操作：扫码（Playwright 自动抓） -->
      <div v-if="store.channels.length" class="ch-actions">
        <button class="ch-scan" :disabled="scanning" @click="scan">
          {{ scanning ? '二维码已生成' : (anyLoggedIn ? '重新授权' : '获取登录二维码') }}
        </button>
        <button class="ch-sync" :disabled="!anyLoggedIn || scrapeBusy" @click="syncNow">
          {{ scrapeBusy ? '同步中…' : '同步最新数据' }}
        </button>
      </div>
      <div v-if="scanMessage" class="ch-scan-message" :class="{ error: scanMessage.startsWith('无法') }">
        {{ scanMessage }}
      </div>

      <!-- 扫码中的二维码实时显示 -->
      <div v-if="scanning" class="ch-qr">
        <div class="ch-qr-tip">
          <span class="dot"></span>
          使用视频号管理员微信扫码
        </div>
        <img class="ch-qr-img" :src="qrSrc" alt="视频号登录二维码">
        <div class="ch-qr-sub">确认后自动完成授权，不需要输入视频号密码</div>
      </div>

      <!-- 备用手动导入 -->
      <div v-if="store.channels.length" class="ch-section">
        <div class="ch-section-head">
          <span class="ch-section-title">已有数据文件？从这里导入</span>
          <button class="ch-toggle" @click="showImport = !showImport">
            {{ showImport ? '收起' : '展开' }}
          </button>
        </div>
        <div v-if="showImport" class="ch-import">
          <div class="ch-import-row">
            <button class="ch-file-btn" :disabled="importBusy" @click="fileInput?.click()">
              {{ importBusy ? '导入中…' : '选择 CSV / XLSX' }}
            </button>
            <input ref="fileInput" type="file" accept=".csv,.txt,.tsv,.xlsx,.xlsm" hidden @change="onFile">
            <span class="ch-or">或</span>
            <button class="ch-tpl" @click="fillTemplate('kpi')">填指标模板</button>
            <button class="ch-tpl" @click="fillTemplate('video')">填视频模板</button>
          </div>
          <textarea v-model="pasteText" class="ch-textarea" rows="5"
            placeholder="指标表：label,value,delta,up,warm&#10;视频表：title,dur,likes,tag"></textarea>
          <button class="ch-import-btn" :disabled="importBusy || !pasteText.trim()" @click="doImport">
            {{ importBusy ? '导入中…' : '导入到我的空间' }}
          </button>
          <div class="ch-help">支持视频号导出的 CSV / XLSX：直播数据会写入场次与成交金额；收入明细会保留原始记录并汇总到看板。画面证据目前明确标为演示占位。</div>
        </div>
      </div>

      <!-- 新增表单 -->
      <div class="ch-form">
        <div class="ch-field">
          <label>账号名称</label>
          <input v-model="name" placeholder="如：清华优优" @keydown.enter="add">
        </div>
        <div class="ch-field">
          <label>视频号 ID（可选）</label>
          <input v-model="finderUin" placeholder="如：sphxxxxxxxx" @keydown.enter="add">
        </div>
        <button class="ch-add" :disabled="busy" @click="add">
          {{ busy ? '绑定中…' : '+ 绑定账号' }}
        </button>
      </div>

      <p class="ch-tip">授权仅用于读取当前账号后台数据；可随时解绑，登录状态约 7 天后需要重新扫码。</p>
    </div>
  </div>
</template>

<style scoped>
.ch-mask { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; background: rgba(8, 16, 12, .48); backdrop-filter: blur(12px); }
.ch-card { width: 520px; max-width: calc(100vw - 32px); max-height: 88vh; overflow-y: auto; background: #fff; border-radius: 24px; padding: 28px; box-shadow: 0 32px 96px rgba(0, 0, 0, .25); border: 1px solid rgba(255,255,255,.8); }
.ch-head { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
.ch-eyebrow { color: #07a850; font-size: 10px; font-weight: 800; letter-spacing: .12em; margin-bottom: 6px; }
.ch-title { font-size: 22px; font-weight: 800; color: #171917; letter-spacing: -.035em; }
.ch-sub { font-size: 13px; color: #91969c; margin-top: 5px; }
.ch-close { margin-left: auto; width: 28px; height: 28px; border: none; background: transparent; font-size: 20px; color: var(--text-mute, #9BA0A6); cursor: pointer; border-radius: 6px; line-height: 1; }
.ch-close:hover { background: #F4F4F1; color: #191919; }
.ch-scan-message { margin: 10px 0 2px; padding: 9px 11px; border-radius: 10px; background: #F2FAF4; color: #178448; font-size: 12px; line-height: 1.5; }
.ch-scan-message.error { background: #FFF3F1; color: #BD3F2B; }

.ch-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.ch-item { display: flex; align-items: center; gap: 12px; border: 1px solid #e7ebe7; border-radius: 16px; padding: 14px; background: linear-gradient(135deg,#fbfdfb,#f4faf5); }
.ch-ava { width: 38px; height: 38px; border-radius: 13px; background: #172019; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #fff; flex-shrink: 0; }
.ch-info { flex: 1; min-width: 0; }
.ch-name { font-size: 13.5px; font-weight: 600; display: flex; align-items: center; gap: 7px; }
.ch-meta { font-size: 11.5px; color: var(--text-mute, #9BA0A6); margin-top: 3px; }
.ch-none { color: #C4C7CB; }
.ch-unbind { border: 1px solid #E9E9E5; background: #fff; color: #5F6368; border-radius: 7px; padding: 5px 11px; font-size: 12px; cursor: pointer; flex-shrink: 0; }
.ch-unbind:hover { border-color: #DC2626; color: #DC2626; }

.ch-empty { border: 1px dashed #E0E0DA; border-radius: 10px; padding: 18px; text-align: center; font-size: 12.5px; color: var(--text-mute, #9BA0A6); margin-bottom: 16px; }

.ch-actions { display: flex; gap: 8px; margin: 14px 0; padding: 0; border: 0; background: transparent; }
.ch-scan, .ch-sync { flex: 1; padding: 10px 12px; border: 1px solid #E9E9E5; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; }
.ch-scan { background: #172019; color: #fff; border-color: #172019; }
.ch-scan:hover:not(:disabled) { background: #000; }
.ch-sync { background: #fff; color: #191919; }
.ch-sync:hover:not(:disabled) { background: #F4F4F1; }
.ch-scan:disabled, .ch-sync:disabled { opacity: .45; cursor: default; }

.ch-qr { margin-bottom: 16px; padding: 20px; border: 1px solid #dceee2; border-radius: 18px; background: linear-gradient(145deg,#f2fbf4,#fff); text-align: center; }
.ch-qr-tip { font-size: 13px; color: var(--text, #191919); font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 12px; }
.ch-qr-tip .dot { width: 8px; height: 8px; border-radius: 50%; background: #07C160; animation: chpulse 1.2s ease-in-out infinite; }
@keyframes chpulse { 0%, 100% { opacity: 1; } 50% { opacity: .35; } }
.ch-qr-img { width: 176px; height: 176px; object-fit: contain; display: block; margin: 14px auto 0; border: 8px solid #fff; border-radius: 16px; background: #fff; box-shadow: 0 10px 28px rgba(28,71,37,.12); }
.ch-qr-sub { font-size: 11.5px; color: var(--text-mute, #9BA0A6); margin-top: 10px; }

.ch-section { margin: 18px 0; border: 1px solid #eceeea; border-radius: 14px; padding: 13px 14px; background: #fafbf9; }
.ch-section-head { display: flex; align-items: center; }
.ch-section-title { font-size: 12px; font-weight: 600; color: #5F6368; }
.ch-toggle { margin-left: auto; border: 1px solid #E9E9E5; background: #fff; color: #5F6368; border-radius: 6px; padding: 3px 10px; font-size: 11px; cursor: pointer; }
.ch-toggle:hover { background: #F4F4F1; }

.ch-import { margin-top: 12px; }
.ch-import-row { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; flex-wrap: wrap; }
.ch-file-btn { border: 1px solid #1A1A1A; background: #1A1A1A; color: #fff; border-radius: 7px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer; }
.ch-file-btn:hover:not(:disabled) { background: #000; }
.ch-file-btn:disabled { opacity: .5; cursor: default; }
.ch-or { font-size: 11.5px; color: var(--text-mute, #9BA0A6); }
.ch-tpl { border: 1px solid #E9E9E5; background: #fff; color: #5F6368; border-radius: 6px; padding: 5px 10px; font-size: 11.5px; cursor: pointer; }
.ch-tpl:hover { background: #F4F4F1; }

.ch-textarea { width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #E9E9E5; border-radius: 8px; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; line-height: 1.6; resize: vertical; outline: none; }
.ch-textarea:focus { border-color: #191919; box-shadow: 0 0 0 3px rgba(25,25,25,.06); }
.ch-import-btn { width: 100%; margin-top: 10px; padding: 10px; border: none; border-radius: 8px; background: #1A1A1A; color: #fff; font-size: 13.5px; font-weight: 600; cursor: pointer; }
.ch-import-btn:hover:not(:disabled) { background: #000; }
.ch-import-btn:disabled { opacity: .45; cursor: default; }
.ch-help { font-size: 11px; color: var(--text-mute, #9BA0A6); margin-top: 8px; line-height: 1.5; }

.ch-form { border-top: 1px solid #F0F0EC; padding-top: 16px; }
.ch-field { margin-bottom: 10px; }
.ch-field label { display: block; font-size: 12px; color: var(--text-mute, #9BA0A6); margin-bottom: 4px; }
.ch-field input { width: 100%; padding: 9px 12px; border: 1px solid #E9E9E5; border-radius: 8px; font-size: 13.5px; box-sizing: border-box; outline: none; transition: border-color .12s, box-shadow .12s; }
.ch-field input:focus { border-color: #191919; box-shadow: 0 0 0 3px rgba(25,25,25,.06); }
.ch-add { width: 100%; padding: 10px; border: none; border-radius: 8px; cursor: pointer; background: #1A1A1A; color: #fff; font-size: 13.5px; font-weight: 600; }
.ch-add:hover { background: #000; }
.ch-add:disabled { opacity: .55; cursor: default; }

.ch-tip { font-size: 11.5px; color: var(--text-mute, #9BA0A6); margin-top: 12px; line-height: 1.6; }
</style>
