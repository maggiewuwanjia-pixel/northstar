<script setup>
import { computed, ref } from 'vue'
import { store, toast } from '../store'
import { knowledgeText } from '../api'
import { saveReplacement } from '../data/knowledgeLocalFiles'

const saving=ref(false)
const saveError=ref('')
const panel = computed(() => store.knowledgeSaveDraft)
const position = ref({ x: 0, y: 0 })
const size = ref({ w: 430, h: 520 })
let moving = false
let resizing = false
let start = null
function beginMove(e) { if (e.target.closest('button,input,textarea,select')) return; moving=true; start={x:e.clientX,y:e.clientY,px:position.value.x,py:position.value.y}; window.addEventListener('pointermove', move); window.addEventListener('pointerup', stop) }
function beginResize(e) { e.preventDefault(); resizing=true; start={x:e.clientX,y:e.clientY,w:size.value.w,h:size.value.h}; window.addEventListener('pointermove', move); window.addEventListener('pointerup', stop) }
function move(e) { if (moving) position.value={x:start.px+e.clientX-start.x,y:start.py+e.clientY-start.y}; if (resizing) size.value={w:Math.max(360,start.w+e.clientX-start.x),h:Math.max(360,start.h+e.clientY-start.y)} }
function stop() { moving=false; resizing=false; window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',stop) }
function close() { store.knowledgeSaveDraft=null }
async function save() {
 const d=panel.value;if(!d?.title?.trim()||!d?.content?.trim())return toast('请填写标题和内容')
 if(saving.value)return
 saving.value=true;saveError.value=''
 try{
  let doc
  if(store.authUser){
   const saved=await knowledgeText({title:d.title.trim(),text:d.content,source:'Cue 生成 · '+(d.subspace||'内容生产')})
   doc={...saved,subspace:d.subspace||'内容生产',local_content:d.content,parse_status:'completed'}
  }else{
   doc={id:`shared-save-${Date.now()}`,title:d.title.trim(),subspace:d.subspace||'短视频脚本',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:1,analyzed:false,local_content:d.content,parse_status:'completed'}
   await saveReplacement(doc.id,new File([doc.local_content],doc.title,{type:'text/plain'}),doc)
  }
  store.demoKnowledgeDocuments.unshift(doc);if(d.onSaved)d.onSaved(doc);toast(`《${d.title}》已保存到「${doc.subspace}」`);close()
 }catch(e){saveError.value='保存失败：'+e.message}
 finally{saving.value=false}

}
</script>
<template>
  <section v-if="panel" class="knowledge-save-panel" :style="{transform:`translate(${position.x}px, ${position.y}px)`,width:`${size.w}px`,height:`${size.h}px`}" aria-label="保存到知识库">
    <header @pointerdown="beginMove"><div><span>SAVE TO KNOWLEDGE</span><h3>保存到知识库</h3><small>拖动此处移动卡片；右下角可调整大小</small></div><button @click="close">×</button></header>
    <label>标题<input v-model="panel.title"></label><label class="content-field">内容<textarea v-model="panel.content"></textarea></label><label>存入子库<select v-model="panel.subspace"><option>短视频脚本</option><option>直播复盘</option><option>内容生产</option><option>转化变现</option><option>竞品研究</option></select></label>
    <p v-if="saveError" role="alert">{{saveError}}</p><footer><button @click="close">取消</button><button class="save" :disabled="saving" @click="save">{{saving?'保存中…':'保存'}}</button></footer><i class="resize-handle" @pointerdown="beginResize"></i>
  </section>
</template>
<style scoped>
.knowledge-save-panel{position:fixed;z-index:120;right:42px;top:126px;display:flex;min-width:360px;min-height:360px;flex-direction:column;padding:20px;border:1px solid #cbe3d0;border-radius:14px;background:#fff;box-shadow:0 20px 52px rgba(17,43,29,.22)}header{display:flex;justify-content:space-between;gap:12px;cursor:move;border-bottom:1px solid var(--border);padding-bottom:12px}header span{font-size:10px;letter-spacing:.13em;color:#187543}h3{margin:5px 0;font-size:18px}header small{color:var(--text-mute);font-size:10px}header button{border:0;background:transparent;font-size:26px;color:var(--text-mute);cursor:pointer}label{display:grid;gap:6px;margin:10px 0;font-size:12px;color:var(--text-sub)}input,textarea,select{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--border);border-radius:8px;background:#fff;color:var(--text);font:inherit}.content-field{flex:1;min-height:140px}textarea{height:100%;min-height:140px;resize:none;line-height:1.65}footer{display:flex;justify-content:flex-end;gap:9px;margin-top:8px}footer button{padding:9px 15px;border:1px solid var(--border);border-radius:8px;background:#fff;cursor:pointer}.save{background:#176f40!important;border-color:#176f40!important;color:#fff}.resize-handle{position:absolute;right:4px;bottom:4px;width:20px;height:20px;cursor:nwse-resize;background:linear-gradient(135deg,transparent 0 44%,#9ab5a2 45% 51%,transparent 52% 62%,#9ab5a2 63% 69%,transparent 70%)}
</style>
