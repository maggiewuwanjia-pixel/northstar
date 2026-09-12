<script setup>
import { store, SCRIPT_DOC } from '../../store'
</script>

<template>
  <div>
    <div class="src-line">
      <span>来源：</span>
      <a :href="SCRIPT_DOC" target="_blank">飞书·脚本库</a>
      <span class="src-tag feishu">飞书</span>
    </div>

    <div v-if="!store.scripts.length" style="text-align:center;color:var(--text-mute);padding:60px;background:#fff;border:1px solid var(--border);border-radius:8px">
      暂无已导入的真实短视频脚本。演示卡片已隐藏；后续从视频号后台报表或知识库导入后，会在这里显示。
    </div>

    <div v-else class="video-grid">
      <div v-for="s in store.scripts" :key="s.id" class="video-card">
        <div class="thumb"><img :src="s.cover" :alt="s.t" loading="lazy"><span class="dur">{{ s.dur }}</span></div>
        <div class="meta">
          <div class="title"><span class="tag">{{ s.tag }}</span>{{ s.t }}</div>
          <div class="stats"><span>来源：{{ s.from }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
