export const scenarioPrompts = ['最近一个月涨了多少粉丝？','9月家长们最关心的话题是什么？我的视频中，哪种类型的话题涨粉最多？','@雪梨老师-英语背单词开窍.txt，拆解成爆款脚本给我，结合我过去英语讲课的知识，完成新的脚本','帮我生成下一次直播的脚本，关注10月国庆假期收心','把刚刚生成的脚本，加入到下周二晚的直播排期中']
export function fixedScenarioKind(question) {
 const normalize=value=>value.normalize('NFKC').replace(/\s+/g,'').replace(/(背单词开窍\.txt)(?:背单词开窍\.txt)+/g,'$1').replace(/[，,。.!！?？；;]/g,'')
 const canonical=normalize(question)
 const example=scenarioPrompts.find(prompt=>normalize(prompt)===canonical)
 return example?identifyScenario(example):null
}
export function identifyScenario(q) {
 if (/热点|热搜|热门/.test(q)) return 'hotspots'
 if (/排期|排入|加入.*直播/.test(q) && /脚本|刚刚|下周二/.test(q)) return 'schedule'
 if (/雪梨|竞品/.test(q) && /拆|背单词|脚本/.test(q)) return 'competitor'
 if (/直播/.test(q) && /收心|国庆|生成/.test(q)) return 'planning'
 if (/9月|九月/.test(q) && /话题|关心|涨粉/.test(q)) return 'analysis'
 if (/最近一个月|上个月/.test(q) && /粉|关注/.test(q)) return 'query'
 return null
}
export function nextTuesdayEvening(now = new Date()) {
 const date = new Date(now.toLocaleString('en-US',{timeZone:'Asia/Shanghai'}))
 date.setDate(date.getDate()-(date.getDay()+6)%7+8)
 return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0')+'T20:00:00'
}
export function scenarioResult(kind, data, courses=[]) {
 if(kind==='query') {
  const r=data.followers, net=r.follows-r.unfollows
  return {text:'“最近一个月”使用数据覆盖的最近一个完整自然月：2026 年 9 月（9/1–9/30）。\n\n净增粉丝 '+net.toLocaleString()+' 人。\n• 月初：'+r.start.toLocaleString()+' 人\n• 月末：'+r.end.toLocaleString()+' 人\n• 新增关注：'+r.follows.toLocaleString()+' 人\n• 取消关注：'+r.unfollows.toLocaleString()+' 人\n\n净增 = 月末 − 月初 = 新增关注 − 取消关注；两个计算结果一致。新增关注与净增是不同口径。[1]',sources:[{number:1,title:'视频号关注者增长详情数据.csv',locator:'2026-09-01–2026-09-30 / 原始CSV第3行表头',uri:r.uri||'/cue-scenarios/followers.csv',text:JSON.stringify(r)}],summary:'已实际计算期末减期初，并用关注减取消关注交叉校验。'}
 }
 if(kind==='analysis')return {text:'基于经营数据里的补充演示归因表，9月家长最关心的是“开学收心与适应”：共 386 次问题及评论提及，占 31.4%。其次是学习规划与时间管理（24.6%）和月考备考与错题复盘（19.0%）。[1]\n\n涨粉最多的也是“开学收心与适应”：4 条视频共带来 486 个内容归因新增关注，占样本归因关注的 38.3%；播放关注率为 0.171%，在五类话题中最高。学习规划与时间管理排第二，归因新增关注 324 人。[1]\n\n这份表是为产品演示补充的数据，不代表平台真实归因结果。账号9月实际新增关注仍以《视频号关注者增长详情数据.csv》的 1,569 人为准；演示表中的 1,269 人只表示可归因到这12条内容的关注样本。[2]',sources:[{number:1,title:data.topicAnalysis?.title||'9月家长话题与视频涨粉归因（演示数据）.csv',locator:'话题归因 · 第2–7行',uri:data.topicAnalysis?.uri,text:'开学收心与适应：提及386次，占31.4%；4条视频播放284,600，内容归因新增关注486，占38.3%，播放关注率0.171%。'},{number:2,title:data.followerSource?.title||'视频号关注者增长详情数据.csv',locator:'2026-09-01–2026-09-30',uri:data.followerSource?.uri,text:'9月账号新增关注1,569人，取消关注292人，净增1,277人。'}],summary:'汇总演示归因表的家长关注占比、内容归因新增关注与播放关注率，并与账号总关注口径区分。'}
 if(kind==='hotspots')return {text:'10月可以优先围绕国庆后学习节奏恢复做内容。[1]\n\n建议三条连续选题：\n1. 假期后第一晚：只整理明天必须完成的任务，减少同时启动的事项。\n2. 开学后一周：从一份最近的错题找出具体卡点，用短练习回测。\n3. 直播答疑：收集作息、作业启动、错题复盘三个方向的问题，现场演示三天行动表。\n\n这些是结合节假日节点和课程资料的内容建议。官方日历可以核验节点，但不能证明它们是热搜榜第一，也不能预测涨粉效果。',sources:[],summary:'将官方日历节点与知识库方法结合，区分可核验时间与内容选题建议。'}
 if(kind==='planning') {
  const course=courses.find(d=>d.subject==='数学'&&d.title==='数学课程ppt.pptx')
  return {text:data.live.content,draft:{...data.live,type:'live'},sources:course?[{number:1,title:course.title,locator:'产品课程 / 数学',uri:course.uri,text:course.local_content?.slice(0,700)}]:[],artifacts:[{type:'script',label:'查看完整直播脚本'},{type:'document',label:'加入知识库'}],summary:'把收心主题拆成开场、判断卡点、三天行动、答疑与课程承接。'}
 }
 if(kind==='competitor') return {text:data.competitor,draft:{title:'背单词开窍：拼读与1+1+1复习',content:data.competitor,type:'video'},sources:[{number:1,title:'雪梨老师｜背单词开窍',locator:'用户录屏 / 0:00–0:05',uri:'/competitor-videos/xueli-vocabulary.mp4',text:'第195集：只用这1招，让你背单词突然开窍；一找二切三拼；先找出元音字母（a e i o u）；元音前再找辅音。'},...courses.filter(d=>d.title==='英语课程ppt.pptx' && d.local_content?.trim()).slice(0,1).map(d=>({number:2,title:d.title,locator:'产品课程 / 英语原文',uri:d.uri,text:d.sections?.filter(s=>s.locator==='第 1 页'||s.locator==='第 7 页').map(s=>s.locator+'：'+s.text).join('\n').slice(0,1400)||d.local_content.slice(0,900)}))],artifacts:[{type:'script',label:'查看脚本稿'},{type:'document',label:'加入知识库'}],summary:'已核验5秒录屏的主题与可见字幕，结合英语课程原文组织扩写稿。'}
 return null
}
