const rows = [
  ['月份','话题类型','家长问题及评论提及数','关注占比','发布视频数','播放量','内容归因新增关注','新增关注占比','播放关注率','数据性质'],
  ['2026-09','开学收心与适应',386,'31.4%',4,284600,486,'38.3%','0.171%','演示数据'],
  ['2026-09','学习规划与时间管理',302,'24.6%',3,213800,324,'25.5%','0.152%','演示数据'],
  ['2026-09','月考备考与错题复盘',234,'19.0%',2,154200,251,'19.8%','0.163%','演示数据'],
  ['2026-09','学科方法',184,'15.0%',2,121900,146,'11.5%','0.120%','演示数据'],
  ['2026-09','亲子沟通',123,'10.0%',1,68100,62,'4.9%','0.091%','演示数据'],
  ['2026-09','合计',1229,'100.0%',12,842600,1269,'100.0%','0.151%','演示数据']
]

const sections = rows.map((row, index) => ({
  locator: `话题归因 · 第 ${index + 1} 行`,
  text: row.join(' | ')
}))

export const demoTopicAnalysisDocument = {
  id: 'business-demo-2026-09-topic-attribution',
  title: '9月家长话题与视频涨粉归因（演示数据）.csv',
  subspace: '经营数据',
  space_name: '清华优优 AI Wiki',
  doc_type: 'dataset',
  source_group: 'demo-topic-analysis-2026-09',
  imported_file: true,
  relative_path: '演示数据/9月家长话题与视频涨粉归因（演示数据）.csv',
  uri: '/business-data/demo/9月家长话题与视频涨粉归因（演示数据）.csv',
  chunk_count: rows.length,
  sections,
  local_content: sections.map(section => `${section.locator}\n${section.text}`).join('\n'),
  parse_status: 'completed',
  analyzed: false,
  is_demo_data: true,
  sheets: [{ name: '话题归因', rows }]
}
