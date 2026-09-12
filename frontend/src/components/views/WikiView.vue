<script setup>
import { computed, ref } from 'vue'
import { store, toast, addToScript } from '../../store'
import { wikiDetail, SPACES } from '../../data/wikiDetail'

// 扁平化所有 libs，作为左侧主题分类
const allLibs = SPACES.flatMap(s => s.libs.map(l => ({ ...l, _space: s.key, _spaceName: s.name })))
const activeLib = ref(allLibs[0]?.key || 'topics')

const query = ref('')

function libFiles(l) {
  if (!l) return []
  if (l.fileIds) return store.wikiFiles.filter(f => l.fileIds.includes(f.id))
  return store.wikiFiles.filter(f => l.trunks.includes(f.trunk))
}
const lib = computed(() => allLibs.find(l => l.key === activeLib.value))
const files = computed(() => {
  const kw = query.value.trim().toLowerCase()
  return libFiles(lib.value).filter(f => !kw || (f.name + (f.meta || '')).toLowerCase().includes(kw))
})
const srcLabel = src => src === 'feishu' ? '飞书' : src === 'ima' ? 'ima' : '本地'

function pickLib(l) { activeLib.value = l.key; detailFile.value = null }

// ---- 详情层状态 ----
const detailFile = ref(null)
const tab = ref('raw')
const TABS = [
  { key: 'raw', label: '原始文件' },
  { key: 'summary', label: 'AI 摘要' },
  { key: 'kb', label: 'AI 知识库' },
  { key: 'graph', label: '知识图谱' }
]
const detail = computed(() => detailFile.value ? wikiDetail(detailFile.value) : null)

function openFile(f) { detailFile.value = f; tab.value = 'raw' }
function back() { detailFile.value = null }
function organize() {
  const first = files.value[0]
  if (!first) { toast('当前分类没有可整理的文档'); return }
  detailFile.value = first
  tab.value = 'summary'
  toast('已生成可查看的摘要、实体和主题索引')
}

// 知识图谱布局：中心 + 双环
const GRAPH_W = 760, GRAPH_H = 520
const graphNodes = computed(() => {
  if (!detail.value) return []
  const ns = detail.value.nodes
  const cx = GRAPH_W / 2, cy = GRAPH_H / 2
  const out = []
  const ring = (list, r, start) => list.forEach((n, i) => {
    const a = start + (i / list.length) * Math.PI * 2
    out.push({ ...n, x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) })
  })
  const center = ns.filter(n => n.type === 'center')
  const summaries = ns.filter(n => n.type === 'summary')
  const concepts = ns.filter(n => n.type === 'concept')
  const entities = ns.filter(n => n.type === 'entity')
  center.forEach(n => out.push({ ...n, x: cx, y: cy }))
  ring(summaries, 130, -Math.PI / 2)
  ring(concepts, 170, Math.PI / 4)
  ring(entities, 235, 0)
  return out
})
const nodePos = computed(() => Object.fromEntries(graphNodes.value.map(n => [n.id, n])))
const graphLinks = computed(() => {
  if (!detail.value) return []
  return detail.value.links.map(([a, b]) => [nodePos.value[a], nodePos.value[b]]).filter(([a, b]) => a && b)
})
const NODE_COLOR = { center: '#191919', summary: '#2563EB', entity: '#7C3AED', concept: '#D97706' }
</script>

<template>
  <!-- ============ 详情层 ============ -->
  <div v-if="detailFile && detail" class="kb-detail">
    <div class="kd-head">
      <a class="kd-back" @click="back">‹</a>
      <h2 class="kd-title">{{ detailFile.name }}</h2>
      <span class="pill outline">仅查看</span>
      <div class="kd-tabs">
        <button v-for="t in TABS" :key="t.key" :class="{ on: tab === t.key }" @click="tab = t.key">{{ t.label }}</button>
      </div>
    </div>

    <!-- 原始文件：chunk 列表 -->
    <div v-if="tab === 'raw'" class="kd-body">
      <div class="kd-meta-line">
        <span class="src-tag" :class="detailFile.src">{{ srcLabel(detailFile.src) }}</span>
        <span>{{ detailFile.time }}</span><span>{{ detailFile.meta }}</span>
        <span class="pill green">已切片 {{ detail.chunks.length }} 段</span>
        <span class="pill outline">已向量化</span>
        <a v-if="detailFile.url" :href="detailFile.url" target="_blank" style="margin-left:auto">打开原文 ↗</a>
      </div>
      <div v-for="(c, i) in detail.chunks" :key="i" class="chunk">
        <div class="chunk-h">
          <span class="chunk-no">#{{ i + 1 }}</span>
          <span class="chunk-t">{{ c.t }}</span>
          <span class="chunk-meta">{{ c.tokens }} 字 · 已入向量库</span>
        </div>
        <div class="chunk-body">{{ c.body }}</div>
      </div>
    </div>

    <!-- AI 摘要 -->
    <div v-else-if="tab === 'summary'" class="kd-body">
      <div class="sum-hero">
        <div class="sh-tag">知识总览</div>
        <h3>{{ detail.focus }}</h3>
        <p>{{ detail.overview.slice(0, 60) }}…</p>
        <div class="sh-stats">
          <div><b>{{ detail.stats.docs }}</b><span>来源文档</span></div>
          <div><b>{{ detail.stats.entities }}</b><span>关键实体</span></div>
          <div><b>{{ detail.stats.concepts }}</b><span>涉及概念</span></div>
          <div><b>{{ detail.stats.topics }}</b><span>主题分类</span></div>
        </div>
      </div>
      <div class="card" style="box-shadow:none">
        <div class="card-h"><h3>知识库概览</h3></div>
        <p style="font-size:13px;color:var(--text-sub);line-height:1.9">{{ detail.overview }}</p>
      </div>
      <div class="card-h" style="margin-top:4px"><h3>主题分区</h3><span class="sub">{{ detail.topics.length }} 个主题</span></div>
      <div class="topic-grid">
        <div v-for="t in detail.topics" :key="t.name" class="topic-card">
          <div class="tc-name"><span class="tc-dot"></span>{{ t.name }}</div>
          <div class="tc-desc">{{ t.desc }}</div>
          <div class="tc-meta">{{ t.docs }} 文档 · {{ t.entities }} 实体 · {{ t.concepts }} 概念</div>
        </div>
      </div>
    </div>

    <!-- AI 知识库 -->
    <div v-else-if="tab === 'kb'" class="kd-body kb-grid">
      <div class="kb-side">
        <div class="kb-side-item on">索引</div>
        <div class="kb-side-item">摘要 <span class="n">{{ detail.summaries.length }}</span></div>
        <div class="kb-side-item">实体 <span class="n">{{ detail.entities.length }}</span></div>
        <div class="kb-side-item">概念 <span class="n">{{ detail.stats.concepts }}</span></div>
      </div>
      <div>
        <div class="card" style="box-shadow:none">
          <div class="card-h"><h3>Wiki 索引</h3><span class="sub">随内容更新自动重排</span></div>
          <p style="font-size:13px;color:var(--text-sub);line-height:1.8">这是「{{ detailFile.name }}」的索引页。AI 已基于原文生成 {{ detail.summaries.length }} 条摘要、{{ detail.entities.length }} 个实体与 {{ detail.stats.concepts }} 个概念，并建立相互引用关系。</p>
        </div>
        <div class="card-h"><h3>摘要</h3><span class="sub">{{ detail.summaries.length }}</span></div>
        <div class="kb-line" v-for="s in detail.summaries" :key="s.k"><b>{{ s.k }}</b> — {{ s.v }}</div>
        <div class="card-h" style="margin-top:16px"><h3>实体</h3><span class="sub">{{ detail.entities.length }}</span></div>
        <div class="entity-cloud">
          <span v-for="e in detail.entities" :key="e" class="pill outline">{{ e }}</span>
        </div>
      </div>
    </div>

    <!-- 知识图谱 -->
    <div v-else class="kd-body">
      <div class="graph-wrap">
        <div class="graph-legend">
          <span><i style="background:#2563EB"></i>摘要</span>
          <span><i style="background:#7C3AED"></i>实体</span>
          <span><i style="background:#D97706"></i>概念</span>
          <span style="margin-left:auto">{{ graphNodes.length }} 个节点</span>
        </div>
        <svg :viewBox="`0 0 ${GRAPH_W} ${GRAPH_H}`" class="graph-svg">
          <line v-for="(l, i) in graphLinks" :key="i"
                :x1="l[0].x" :y1="l[0].y" :x2="l[1].x" :y2="l[1].y"
                stroke="#E4E4DE" stroke-width="1"/>
          <g v-for="n in graphNodes" :key="n.id">
            <circle :cx="n.x" :cy="n.y" :r="n.type === 'center' ? 26 : n.type === 'summary' ? 10 : n.type === 'concept' ? 8 : 6"
                    :fill="NODE_COLOR[n.type]" :fill-opacity="n.type === 'center' ? 1 : .85"/>
            <text :x="n.x" :y="n.y + (n.type === 'center' ? 42 : 20)" text-anchor="middle"
                  :font-size="n.type === 'center' ? 12 : 10.5"
                  :fill="n.type === 'center' ? '#191919' : '#5F6368'"
                  :font-weight="n.type === 'center' ? 700 : 400">{{ n.label }}</text>
          </g>
        </svg>
      </div>
    </div>
  </div>

  <!-- ============ 列表层 ============ -->
  <div v-else class="kb-layout">
    <!-- 主题分类侧栏 -->
    <aside class="kb-side-new">
      <div class="kbn-title">主题分类</div>
      <div v-for="s in SPACES" :key="s.key" class="kbn-group">
        <div class="kbn-space-label">
          {{ s.name }}
          <span class="kbn-count">{{ s.libs.reduce((n, l) => n + libFiles(l).length, 0) }}</span>
        </div>
        <div v-for="l in s.libs" :key="l.key"
             class="kbn-item" :class="{ on: activeLib === l.key }"
             @click="pickLib(l)">
          <span class="kbn-bar"></span>
          <span class="kbn-name">{{ l.name }}</span>
          <span class="kbn-num">{{ libFiles(l).length }}</span>
        </div>
      </div>

      <div class="kbn-foot">
        <button class="kbn-upload">+ 上传新文件</button>
      </div>
    </aside>

    <!-- 文件列表 -->
    <div class="kb-main">
      <div class="wiki-toolbar">
        <div class="wiki-search"><span class="ic"></span><input v-model="query" :placeholder="`在「${lib?.name || ''}」中搜索`"></div>
        <button class="wiki-sum-btn" @click="organize">AI 整理</button>
      </div>

      <div v-if="!files.length" class="kb-empty">
        该主题下暂无文件。可以点击左侧其他主题，或上传新文件。
      </div>

      <div v-for="f in files" :key="f.id" class="kb-file" @click="openFile(f)">
        <div class="kf-ava" :data-tag="f.trunk">{{ f.name.slice(0, 1) }}</div>
        <div class="kf-body">
          <div class="kf-name">{{ f.name }}</div>
          <div class="kf-meta">
            <span class="src-tag" :class="f.src">{{ srcLabel(f.src) }}</span>
            <span>{{ f.time }}</span>
            <span v-if="f.meta">{{ f.meta }}</span>
            <span class="pill green">已完成</span>
          </div>
        </div>
        <div class="kf-actions" @click.stop>
          <a class="kf-act" @click="addToScript(f.name, 'WIKI')">拆脚本</a>
          <a v-if="f.url" class="kf-act" :href="f.url" target="_blank">打开 ↗</a>
        </div>
      </div>
    </div>
  </div>
</template>
