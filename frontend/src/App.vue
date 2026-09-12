<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import {
  store, TITLES, DESCS, loadData, closeModal, handleDrop, toast,
  initAuth, clearAuthUser, initResponsive,
  toggleSidebar, closeSidebar, toggleCopilotMobile, closeCopilotMobile
} from './store'
import { logout } from './api'
import Sidebar from './components/Sidebar.vue'
import CopilotPanel from './components/CopilotPanel.vue'
import LoginPanel from './components/LoginPanel.vue'
import ChannelPanel from './components/ChannelPanel.vue'
import SyncAssistantPanel from './components/SyncAssistantPanel.vue'
import DashboardView from './components/views/DashboardView.vue'
import PlanningView from './components/views/PlanningView.vue'
import WikiView from './components/views/WikiView.vue'
import ScriptsView from './components/views/ScriptsView.vue'
import LiveSummaryView from './components/views/LiveSummaryView.vue'
import LiveScriptView from './components/views/LiveScriptView.vue'
import BenchView from './components/views/BenchView.vue'
import LibraryView from './components/views/LibraryView.vue'

const viewMap = {
  dashboard: DashboardView,
  planning: PlanningView,
  wiki: WikiView,
  scripts: ScriptsView,
  'live-summary': LiveSummaryView,
  'live-script': LiveScriptView,
  bench: BenchView,
  library: LibraryView
}
const viewComponent = computed(() => viewMap[store.activeView] || DashboardView)
const globalQuery = ref('')
const searchOpen = ref(false)
const searchResults = computed(() => {
  const q = globalQuery.value.trim().toLowerCase()
  if (!q) return []
  const entries = [
    ...store.liveSessions.map(item => ({ title: item.title, meta: item.d, view: 'live-summary', kind: '直播复盘' })),
    ...store.scripts.map(item => ({ title: item.t, meta: item.from, view: 'scripts', kind: '短视频脚本' })),
    ...store.wikiFiles.map(item => ({ title: item.name, meta: item.meta || '知识库', view: 'wiki', kind: '知识库' })),
    ...store.benchmarks.map(item => ({ title: item.name, meta: item.note || '', view: 'bench', kind: '对标账号' })),
    ...store.planningTasks.map(item => ({ title: item.title, meta: item.planned_at, view: 'planning', kind: item.type === 'live' ? '直播排期' : '短视频排期' }))
  ]
  return entries.filter(item => `${item.title} ${item.meta} ${item.kind}`.toLowerCase().includes(q)).slice(0, 6)
})
function chooseSearch(result) { store.activeView = result.view; globalQuery.value = ''; searchOpen.value = false }
function submitSearch() {
  if (searchResults.value[0]) chooseSearch(searchResults.value[0])
  else toast('没有找到已导入的真实内容')
}

onMounted(() => {
  initResponsive()
  // 先恢复浏览器里的登录态，再按该身份拉数据。原先反过来执行时，
  // 首屏会把 demo 的 8 场直播写进 store，真实账号的 291 场不会自动覆盖。
  initializeData()
  registerDrag()
})

async function initializeData() {
  await initAuth()
  await loadData()
}

function openLogin() { store.loginOpen = true }
async function doLogout() {
  await logout()
  clearAuthUser()
  toast('已退出登录')
}

// 全局拖拽（任意视图拖入链接/文件 → 素材库）
let dragCounter = 0
function onDragEnter(e) {
  const t = [...(e.dataTransfer?.types || [])]
  if (!t.includes('Files') && !t.includes('text/uri-list') && !t.includes('text/plain')) return
  dragCounter++
  toast('松手即可加入素材库（自动归类）')
}
function onDragLeave() { dragCounter--; if (dragCounter <= 0) dragCounter = 0 }
function onDragOver(e) { e.preventDefault() }
function onDocDrop(e) { e.preventDefault(); dragCounter = 0; handleDrop(e.dataTransfer) }
function registerDrag() {
  document.addEventListener('dragenter', onDragEnter)
  document.addEventListener('dragleave', onDragLeave)
  document.addEventListener('dragover', onDragOver)
  document.addEventListener('drop', onDocDrop)
}
onUnmounted(() => {
  document.removeEventListener('dragenter', onDragEnter)
  document.removeEventListener('dragleave', onDragLeave)
  document.removeEventListener('dragover', onDragOver)
  document.removeEventListener('drop', onDocDrop)
})
</script>

<template>
  <!-- 加载态 -->
  <div v-if="store.loading" class="loading-box">
    <div class="spin"></div>
    <span>正在加载数据…</span>
  </div>

  <!-- 错误态 -->
  <div v-else-if="store.error" class="error-box">
    <span>数据加载失败：{{ store.error }}</span>
    <span style="font-size:12px;color:var(--text-mute)">请确认后端已启动（uvicorn app.main:app --port 8000）</span>
    <button class="wiki-sum-btn" @click="loadData">重试</button>
  </div>

  <!-- 主界面 -->
  <div v-else class="app" :class="{ 'is-mobile': store.isMobile }">
    <!-- 移动端侧栏遮罩 -->
    <div v-if="store.isMobile && store.sidebarOpen" class="drawer-mask" @click="closeSidebar"></div>

    <Sidebar />

    <main class="main">
      <div class="workbench-head">
        <!-- 移动端汉堡按钮 -->
        <button v-if="store.isMobile" class="mb-menu" @click="toggleSidebar" aria-label="菜单">
          <span></span><span></span><span></span>
        </button>
        <h1>{{ TITLES[store.activeView] }}</h1>
        <span class="desc">{{ DESCS[store.activeView] }}</span>
        <div class="search-wrap"><div class="search"><span class="ic"></span><input v-model="globalQuery" placeholder="搜索复盘、知识库、排期" @focus="searchOpen = true" @keyup.enter="submitSearch"></div><div v-if="searchOpen && globalQuery" class="search-results"><button v-for="(result, index) in searchResults" :key="`${result.kind}-${result.title}-${index}`" @mousedown.prevent="chooseSearch(result)"><span><b>{{ result.title }}</b><small>{{ result.meta }}</small></span><em>{{ result.kind }}</em></button><p v-if="!searchResults.length">没有找到已导入的真实内容</p></div></div>
        <div class="auth-zone">
          <button v-if="store.authUser" class="auth-link" @click="store.syncAssistantOpen = true">同步助手</button>
          <template v-if="store.authUser">
            <span class="avatar">{{ (store.authUser.display_name || store.authUser.username || 'U').slice(0, 1) }}</span>
            <span class="uname">{{ store.authUser.display_name || store.authUser.username }}</span>
            <button class="auth-link" @click="doLogout">退出</button>
          </template>
          <button v-else-if="store.dataSource !== 'static'" class="auth-link" @click="openLogin">登录</button>
          <span v-else class="pill outline" style="font-size:12px">演示环境 · 静态数据</span>
        </div>
        <!-- 移动端 Cue 唤起按钮 -->
        <button v-if="store.isMobile" class="mb-cue" @click="toggleCopilotMobile" aria-label="Cue 助手">✦</button>
      </div>
      <div class="content">
        <component :is="viewComponent" />
      </div>
    </main>

    <CopilotPanel />

    <!-- 移动端 Cue 全屏抽屉 -->
    <div v-if="store.isMobile && store.copilotMobileOpen" class="cue-drawer">
      <div class="cd-head">
        <span class="cd-badge">✦</span>
        <span class="cd-title">Cue 助手</span>
        <button class="cd-close" @click="closeCopilotMobile">×</button>
      </div>
      <div class="cd-body"><CopilotPanel :mobile="true" /></div>
    </div>
  </div>

  <!-- 登录弹层 -->
  <LoginPanel v-if="store.loginOpen" />

  <!-- 绑定视频号账号弹层 -->
  <ChannelPanel v-if="store.channelsOpen" />
  <SyncAssistantPanel v-if="store.syncAssistantOpen" />

  <!-- 全局 toast -->
  <div class="toast-host">
    <div v-for="t in store.toasts" :key="t.id" class="toast">{{ t.msg }}</div>
  </div>

  <!-- 全局 modal -->
  <div class="modal-bg" :class="{ open: store.modal }" @click.self="closeModal">
    <div class="modal" v-if="store.modal">
      <h3>{{ store.modal.title }}</h3>
      <div class="field" v-for="f in store.modal.fields" :key="f.key">
        <label>{{ f.label }}</label>
        <textarea v-if="f.type === 'textarea'" :placeholder="f.placeholder"></textarea>
        <input v-else :placeholder="f.placeholder">
      </div>
      <div class="actions">
        <button @click="closeModal">取消</button>
        <button class="primary" @click="closeModal">确认</button>
      </div>
    </div>
  </div>
</template>
