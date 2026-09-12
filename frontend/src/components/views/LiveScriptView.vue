<script setup>
import { store, LIVE_SCRIPT_DOC } from '../../store'
</script>

<template>
  <div>
    <div class="src-line">
      <span>来源：</span>
      <a :href="LIVE_SCRIPT_DOC" target="_blank">飞书·直播脚本</a>
      <span class="src-tag feishu">飞书</span>
    </div>

    <div v-for="s in store.liveScripts" :key="s.t" class="node-card">
      <div class="head">
        <span class="m">{{ s.t }}</span>
        <span class="pills">
          <span class="pill">{{ s.d }}</span>
          <span class="pill green">{{ s.len }}</span>
        </span>
      </div>
      <div class="headline">{{ s.blocks }}</div>
    </div>
  </div>
</template>
