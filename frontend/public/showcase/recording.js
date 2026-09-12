const recordingClips=[
 {file:'schedule',title:'内容排期与周期切换',range:'00:08–00:24',feature:4},
 {file:'review',title:'直播复盘与场次浏览',range:'00:35–00:55',feature:1},
 {file:'competitors',title:'竞品内容与脚本浏览',range:'01:03–01:20',feature:3},
 {file:'cue',title:'CUE 问答与资料查看',range:'01:21–01:39',feature:5},
 {file:'knowledge',title:'知识库分类与导航',range:'01:39–01:56',feature:2}
];
const recordingSection=document.createElement('section');
recordingSection.id='recordings';recordingSection.className='section recordings';
recordingSection.innerHTML=`<div class="section-top"><div><div class="eyebrow">NORTHSTAR IN ACTION</div><h2>看看 NorthStar 实际怎么操作</h2></div><button class="small-button" id="play-recordings">连续播放五段</button></div><div class="recording-layout"><video id="recording-player" controls playsinline muted preload="metadata" aria-label="NorthStar 操作录屏"></video><div id="recording-chapters" aria-label="录屏章节">${recordingClips.map((c,i)=>`<button data-recording="${i}" aria-pressed="false"><small>0${i+1} / ${c.range}</small><b>${c.title}</b><span>播放片段 →</span></button>`).join('')}</div></div><p id="recording-caption" class="source-note" aria-live="polite"></p><p class="source-note">用户提供的真实操作录屏节选，展示录制时的产品版本。画面中包含演示数据和原型功能；本页片段无音轨。</p>`;
document.querySelector('#experience').before(recordingSection);
const recordingPlayer=document.getElementById('recording-player');let recordingIndex=0,recordingContinuous=false;
function recordingSource(c){return typeof offlineClips!=='undefined'?offlineClips[c.file]:'media/'+c.file+'.mp4'}
function loadRecording(i,play=true){recordingIndex=i;const c=recordingClips[i];recordingPlayer.src=recordingSource(c);document.querySelectorAll('[data-recording]').forEach((b,n)=>b.setAttribute('aria-pressed',n===i));document.getElementById('recording-caption').textContent=`${c.title} · 原录屏 ${c.range}`;if(play)recordingPlayer.play().catch(()=>{document.getElementById('recording-caption').textContent+=' · 点击播放器开始播放'})}
function stopRecordingSequence(){recordingContinuous=false;document.getElementById('play-recordings').textContent='连续播放五段'}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.recording!==undefined){stopRecordingSequence();loadRecording(Number(b.dataset.recording))}if(b.dataset.featureRecording!==undefined){stopRecordingSequence();loadRecording(Number(b.dataset.featureRecording));recordingSection.scrollIntoView({behavior:'smooth'})}});
document.getElementById('play-recordings').onclick=()=>{if(recordingContinuous){stopRecordingSequence();recordingPlayer.pause();return}recordingContinuous=true;document.getElementById('play-recordings').textContent='暂停连续播放';loadRecording(0)};
recordingPlayer.addEventListener('ended',()=>{if(recordingContinuous&&recordingIndex<recordingClips.length-1)loadRecording(recordingIndex+1);else stopRecordingSequence()});
const recordingObserver=new MutationObserver(()=>{const title=document.getElementById('stage-title').textContent;const map={'内容甘特图':0,'直播复盘':1,'竞品观察':2,'AI 问答':3,'知识库':4};document.getElementById('feature-recording')?.remove();if(map[title]!==undefined){const button=document.createElement('button');button.id='feature-recording';button.className='small-button';button.dataset.featureRecording=map[title];button.textContent='▶ 播放操作片段';document.querySelector('.stage-bar').append(button)}});
recordingObserver.observe(document.getElementById('stage-title'),{childList:true});loadRecording(0,false);
document.addEventListener('visibilitychange',()=>{if(document.hidden){recordingPlayer.pause();stopRecordingSequence()}});
