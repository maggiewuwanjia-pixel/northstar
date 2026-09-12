<script setup>
import { computed } from 'vue'
import { store, convertToScript, openModal, toast } from '../../store'

const monitored = computed(() => store.benchmarks.filter(b => b.state === '监控中'))
const discovered = computed(() => store.benchmarks.filter(b => b.state === 'AI 发现'))

function addBench() {
  openModal('添加对标账号', [
    { label: '账号名称 / 主页链接', key: 'name', placeholder: '如：汪舅舅 或 视频号链接' },
    { label: '备注（可选）', key: 'note', type: 'textarea', placeholder: '为什么想监控这个账号？' }
  ], () => toast('已加入监控列表（演示）'))
}
</script>

<template>
  <div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <span style="color:var(--text-mute);font-size:12px">监控中 {{ monitored.length }} · AI 发现 {{ discovered.length }}</span>
      <a style="cursor:pointer;color:var(--text-link);font-size:13px" @click="addBench">+ 添加对标</a>
    </div>

    <div class="section-h"><h2>监控中</h2></div>
    <div v-for="b in monitored" :key="b.name" class="acc-card">
      <div class="ava"><img v-if="b.img" :src="b.img" :alt="b.name"><template v-else>{{ b.name[0] }}</template></div>
      <div class="body">
        <div class="name">{{ b.name }}
          <span class="pill" :class="b.health === 'green' ? 'green' : 'warn'">{{ b.health === 'green' ? '健康' : '需关注' }}</span>
        </div>
        <div class="stat">{{ b.fans }} 粉 · {{ b.update }}更新 · 爆款 {{ b.viral }} 条{{ b.note ? ' · ' + b.note : '' }}</div>
      </div>
      <div class="actions"><span class="pill" style="cursor:pointer" @click="toast('已加入对比（演示）')">对比</span></div>
    </div>

    <div class="section-h" style="margin-top:24px"><h2>AI 发现</h2><span class="meta">基于选题相似度推荐</span></div>
    <div v-for="b in discovered" :key="b.name" class="acc-card">
      <div class="ava"><img v-if="b.img" :src="b.img" :alt="b.name"><template v-else>{{ b.name[0] }}</template></div>
      <div class="body">
        <div class="name">{{ b.name }} <span class="pill green">AI 发现</span></div>
        <div class="stat">{{ b.fans }} 粉 · {{ b.update }}更新 · 爆款 {{ b.viral }} 条{{ b.why ? ' · ' + b.why : '' }}</div>
      </div>
      <div class="actions"><span class="pill" style="cursor:pointer" @click="toast('已加入监控（演示）')">+ 监控</span></div>
    </div>

    <div class="section-h" style="margin-top:24px"><h2>爆款抓取</h2><span class="meta">仅公开短视频 · 点赞/收藏 ≥ 2 万，或播放 ≥ 100 万</span></div>
    <div class="video-grid">
      <div v-for="v in store.virals" :key="v.t" class="video-card">
        <div class="thumb"><img :src="v.cover" :alt="v.t" loading="lazy"><span class="dur">{{ v.dur }}</span></div>
        <div class="meta">
          <div class="title"><span class="tag">爆款</span>{{ v.t }}</div>
          <div class="stats">
            <span>♡ {{ v.like }} · {{ v.from }}</span>
            <a class="action" @click="convertToScript(v)">拆脚本</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
