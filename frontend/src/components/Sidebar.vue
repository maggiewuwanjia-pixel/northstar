<script setup>
import { computed } from 'vue'
import { store, switchViewMobile, openChannels, closeSidebar } from '../store'

const navItems = [
  { key: 'dashboard', label: '经营看板' },
  { key: 'wiki', label: '知识库', count: () => store.wikiFiles.length },
  { key: 'planning', label: '内容排期', count: () => store.planningTasks.length },
  { key: 'scripts', label: '短视频脚本', count: () => store.scripts.length },
  { key: 'live-summary', label: '直播复盘', count: () => store.liveSessions.length },
  { key: 'live-script', label: '直播脚本', count: () => store.liveScripts.length },
  { key: 'bench', label: '对标账号', count: () => store.benchmarks.length },
  { key: 'library', label: '素材库', count: () => store.library.length }
]

// 侧栏底部：展示当前使用的视频号（已绑定优先，否则示例账号）
const bound = computed(() => store.channels[0])
const accountName = computed(() => bound.value ? bound.value.name : '清华优优')
const accountDesc = computed(() => {
  if (bound.value) return '已绑定 · ' + (bound.value.login_state || '待扫码')
  return store.authUser ? '未绑定 · 点击绑定你的号' : '示例账号 · 登录可绑定'
})
// 移动端：点导航/账号后自动收起抽屉
function onNav(key) {
  switchViewMobile(key)
  if (store.isMobile) closeSidebar()
}
function onAccount() {
  openChannels()
  if (store.isMobile) closeSidebar()
}
</script>

<template>
  <aside class="sidebar" :class="{ open: store.sidebarOpen }">
    <div class="side-brand">
      <span class="logo">星</span>
      <div>
        <div class="nm">北极星</div>
        <div class="sub">NorthStar</div>
      </div>
    </div>
    <nav class="side-nav">
      <a v-for="it in navItems" :key="it.key"
         :class="{ active: store.activeView === it.key }"
         @click="onNav(it.key)">
        {{ it.label }}
        <span v-if="it.count" class="count">{{ it.count() }}</span>
      </a>
    </nav>
    <div class="side-foot">
      <div class="user clickable" @click="onAccount">
        <div class="ava">{{ accountName.slice(0, 1) }}</div>
        <div class="u-info">
          <div class="nm">{{ accountName }}</div>
          <div class="rl">{{ accountDesc }}</div>
        </div>
        <span class="bind-ic">›</span>
      </div>
    </div>
  </aside>
</template>
