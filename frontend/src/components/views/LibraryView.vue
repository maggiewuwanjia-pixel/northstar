<script setup>
import { store, removeLibraryItem, handleDrop } from '../../store'

function onDragOver(e) { e.preventDefault(); e.currentTarget.classList.add('over') }
function onDragLeave(e) { e.currentTarget.classList.remove('over') }
function onDrop(e) { e.preventDefault(); e.currentTarget.classList.remove('over'); handleDrop(e.dataTransfer) }
const iconText = item => item.type === 'feishu' ? '飞书' : item.type === 'file' ? '文件' : '链接'
</script>

<template>
  <div>
    <div class="dropzone" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
      <div class="tip">拖入链接或文件，自动归类</div>
      <div class="hint">视频号 / 飞书 / 小红书 / 抖音链接 → 自动归到对应板块 · PDF / DOCX / XLSX → 素材库</div>
    </div>

    <div style="margin:8px 0 12px;color:var(--text-mute);font-size:12px">已收集 {{ store.library.length }} 项</div>

    <div v-for="item in store.library" :key="item.id" class="lib-item">
      <div class="icon">{{ iconText(item).slice(0, 2) }}</div>
      <div class="body">
        <div class="name">{{ item.name }}</div>
        <div class="meta">{{ item.meta }}</div>
      </div>
      <div class="actions">
        <a v-if="item.url" :href="item.url" target="_blank">打开</a>
        <a style="cursor:pointer" @click="removeLibraryItem(item)">移除</a>
      </div>
    </div>
  </div>
</template>
