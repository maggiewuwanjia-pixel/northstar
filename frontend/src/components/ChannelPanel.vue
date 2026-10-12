<script setup>
import { ref, computed, onMounted } from 'vue'
import { store, bindChannel, unbindChannel, closeChannels, loadChannels } from '../store'
const platform = ref('wechat'), name = ref(''), finderUin = ref(''), profile = ref(''), busy = ref(false)
const labels = { wechat: '视频号', xiaohongshu: '小红书' }
const accounts = computed(() => store.channels.filter(c => (c.platform || 'wechat') === platform.value))
onMounted(loadChannels)
async function add() {
  if (busy.value) return
  busy.value = true
  try { if (await bindChannel(name.value, finderUin.value, platform.value, profile.value)) { name.value = ''; finderUin.value = ''; profile.value = '' } }
  finally { busy.value = false }
}
function switchPlatform(value) { platform.value = value; name.value = ''; finderUin.value = ''; profile.value = '' }
function remove(c) { if (window.confirm('解绑「' + c.name + '」？已导入的资料会保留。')) unbindChannel(c.id) }
</script>
<template>
  <div class="ch-mask" @click.self="closeChannels"><div class="ch-card">
    <div class="ch-head"><div><div class="ch-eyebrow">NORTHSTAR ACCOUNTS</div><div class="ch-title">分平台管理账号</div><p class="ch-sub">登记账号资料，为内容经营建立清晰的来源。</p></div><button class="ch-close" @click="closeChannels">×</button></div>
    <div class="ch-actions"><button v-for="(label,key) in labels" :key="key" class="ch-sync" :style="platform === key ? 'background:#eaf6ee;border-color:#69a87d' : ''" @click="switchPlatform(key)">{{label}} · {{store.channels.filter(c => (c.platform || 'wechat') === key).length}}</button></div>
    <div v-for="c in accounts" :key="c.id" class="ch-item"><div class="ch-info"><div class="ch-name">{{c.name}} <span class="pill outline">{{labels[c.platform || 'wechat']}} · 已登记</span></div><div class="ch-meta">{{c.finder_uin || '未填平台账号 ID'}}</div><p v-if="c.profile" style="white-space:pre-wrap;font-size:13px">{{c.profile}}</p></div><button class="ch-unbind" @click="remove(c)">解绑</button></div>
    <div v-if="!accounts.length" class="ch-empty">尚未登记{{labels[platform]}}账号</div>
    <div class="ch-form"><div class="ch-field"><label>{{labels[platform]}}账号名称</label><input v-model="name" maxlength="100" placeholder="填写平台上的昵称"></div><div class="ch-field"><label>平台账号 ID（可选）</label><input v-model="finderUin" placeholder="填写视频号 ID 或小红书号"></div><div class="ch-field"><label>账号定位与目标（可选）</label><textarea v-model="profile" class="ch-textarea" maxlength="2000" rows="4" placeholder="例如：家居博主，面向租房人群，希望提高收藏率；每周更新 3 条。"></textarea></div><button class="ch-add" :disabled="busy || !name.trim()" @click="add">{{busy ? '保存中…' : '绑定' + labels[platform] + '账号'}}</button></div>
    <p class="ch-tip">绑定目前保存账号资料，不代表已授权连接平台后台。可从平台导出报表后导入；自动同步尚未验证。经营看板目前按 NorthStar 用户汇总，尚未按平台账号分开统计。</p>
    <button class="ch-sync" @click="closeChannels(); store.syncAssistantOpen = true">查看报表导入入口</button>
  </div></div>
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
