"""种子数据 —— 从 copilot-dashboard.html 硬编码数据迁移到数据库"""
import json

SCRIPT_DOC = "https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic"
LIVE_SUMMARY_DOC = "https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b"
LIVE_SCRIPT_DOC = "https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg"

KPIS = [
    {"label": "关注者", "value": "22.4w", "delta": "+1.2% 较上周", "up": 1, "warm": 0},
    {"label": "昨日播放", "value": "6,011", "delta": "-3.4% 较上周", "up": 0, "warm": 0},
    {"label": "互动率", "value": "0.58%", "delta": "低于 0.85% 同行", "up": 0, "warm": 1},
    {"label": "带货 GMV", "value": "¥0", "delta": "尚未破零", "up": 0, "warm": 1},
]

TREND = [
    {"d": "08/22", "v": 5210}, {"d": "08/23", "v": 6890}, {"d": "08/24", "v": 7100},
    {"d": "08/25", "v": 8230}, {"d": "08/26", "v": 6450}, {"d": "08/27", "v": 7990},
    {"d": "08/28", "v": 6011},
]

ACTIONS = [
    {"num": 1, "tag": "下周", "title": "下周该怎么做",
     "body": "主线回归「涨粉」北极星：押 9 月开学季选题，前 3 秒统一改成\"妈妈焦虑\"钩子，把 40-49 岁妈妈（占 55%）的完播率从 31% 拉到 45% 以上。"},
    {"num": 2, "tag": "下条", "title": "下条视频怎么拍",
     "body": "拍「开学前 7 天收心计划」：0-3s 抛\"你家孩子这学期会掉队吗\"，中段给 6 周节奏表 + \"评论区扣 1 领模板\"，结尾引导关注蹲直播。"},
    {"num": 3, "tag": "下场", "title": "下场直播改什么话题",
     "body": "别讲\"复习方法\"（近 8 场互动最低），改聊\"月考后家长怎么做\"——40-49 妈妈最高频咨询话题前置，挂车卖 9 月学习规划表。"},
]

NORTHSTAR = [
    {"key": "fans", "label": "涨粉", "goal": "30w 粉", "value": "22.4w", "delta": "+287/日 · 还差 7.6w", "pct": 75},
    {"key": "gmv", "label": "GMV", "goal": "1w/月", "value": "¥0", "delta": "尚未破零 · 先挂车", "pct": 0},
    {"key": "play", "label": "播放", "goal": "1w/日", "value": "6,011", "delta": "-3.4% · 距目标 40%", "pct": 60},
]

GANTT_WEEKS = [
    {"t": "本周", "d": "8/29", "cur": 1},
    {"t": "W36", "d": "9/5", "cur": 0},
    {"t": "W37", "d": "9/12", "cur": 0},
    {"t": "W38", "d": "9/19", "cur": 0},
]

GANTT = [
    {"lane": "短视频 · 选题", "items": [
        {"name": "开学收心 · 前3秒钩子", "s": 0, "e": 0, "t": "video"},
        {"name": "新学期第一周怎么过", "s": 1, "e": 1, "t": "video"},
        {"name": "9 月自律清单", "s": 2, "e": 2, "t": "video"},
        {"name": "第一次月考怎么准备", "s": 3, "e": 3, "t": "video"},
    ]},
    {"lane": "短视频 · 脚本", "items": [
        {"name": "收心计划脚本", "s": 0, "e": 0, "t": "draft"},
        {"name": "新学期规划脚本", "s": 1, "e": 1, "t": "draft"},
        {"name": "月考准备脚本", "s": 3, "e": 3, "t": "draft"},
    ]},
    {"lane": "短视频 · 拍摄发布", "items": [
        {"name": "收心计划（发布）", "s": 0, "e": 1, "t": "video"},
        {"name": "新学期规划（发布）", "s": 2, "e": 2, "t": "video"},
    ]},
    {"lane": "直播 · 选题脚本", "items": [
        {"name": "暑假收心专场", "s": 0, "e": 0, "t": "live"},
        {"name": "新学期第一场", "s": 1, "e": 1, "t": "live"},
        {"name": "月考答疑专场", "s": 3, "e": 3, "t": "live"},
    ]},
    {"lane": "直播 · 开播", "items": [
        {"name": "收心专场开播", "s": 0, "e": 0, "t": "live"},
        {"name": "新学期开播", "s": 1, "e": 1, "t": "live"},
    ]},
]

PORTRAIT = [
    {"title": "年龄分布", "unit": "%", "data": [["40-49", 55.11], ["30-39", 24.34], ["18-29", 12.45], ["50+", 8.10]]},
    {"title": "地域 TOP 5", "unit": "%", "data": [["广东", 14.67], ["江苏", 8.92], ["山东", 7.85], ["浙江", 6.73], ["四川", 5.92]]},
    {"title": "性别", "unit": "%", "data": [["女", 56.11], ["男", 43.89]]},
]

TOP_VIDEOS = [
    {"title": "考清华是因为努力还是天赋", "dur": "00:47", "likes": "6.8w", "tag": "热门"},
    {"title": "优优的学习方法被新华社转发", "dur": "01:05", "likes": "8.8k", "tag": "里程碑"},
    {"title": "高中生压力大，送给他这3句话", "dur": "00:54", "likes": "5.6k", "tag": "情感"},
    {"title": "清华生活vlog：优优学姐的一天", "dur": "02:21", "likes": "4.4k", "tag": "日常"},
    {"title": "英语上140，有哪几个步骤", "dur": "01:12", "likes": "3.9k", "tag": "干货"},
    {"title": "高一学生是怎样毁掉自己的", "dur": "00:37", "likes": "2.1k", "tag": "避坑"},
]

CALENDAR = [
    {"m": "1月", "type": "假期", "name": "寒假弯道超车", "topics": [{"t": "寒假计划模板（6周节奏）", "why": "家长搜索量 +180%"}, {"t": "薄弱学科补救清单", "why": "评论高频痛点"}, {"t": "春节家庭学习氛围", "why": "情感共鸣 + 完播高"}]},
    {"m": "2月", "type": "开学", "name": "春季开学·一轮启动", "topics": [{"t": "新学期第一周怎么过", "why": "家长焦虑高峰"}, {"t": "一轮复习时间表", "why": "高三刚需"}, {"t": "错题本使用方法", "why": "评论高频"}]},
    {"m": "3月", "type": "考试", "name": "月考·一模", "topics": [{"t": "月考复盘模板", "why": "刚需工具"}, {"t": "一模冲刺 30 天", "why": "高三转化高峰"}, {"t": "数学大题答题套路", "why": "高互动选题"}]},
    {"m": "4月", "type": "考试", "name": "期中考试", "topics": [{"t": "期中前 7 天逆袭计划", "why": "搜索量 +220%"}, {"t": "家长如何应对期中考", "why": "C 端共鸣"}, {"t": "语文作文素材包", "why": "高收藏率"}]},
    {"m": "5月", "type": "冲刺", "name": "二轮复习·模考", "topics": [{"t": "二轮重点题型精讲", "why": "刚需提分"}, {"t": "模考心理调节", "why": "评论高频"}, {"t": "理综答题节奏", "why": "干货必备"}]},
    {"m": "6月", "type": "考试", "name": "高考·中考季", "topics": [{"t": "高考前 3 天清单", "why": "搜索量 x10"}, {"t": "高考志愿填报指南", "why": "强转化节点"}, {"t": "中考家长陪伴指南", "why": "C 端共鸣"}]},
    {"m": "7月", "type": "假期", "name": "暑假·新高一衔接", "topics": [{"t": "新高一衔接计划", "why": "衔接期痛点"}, {"t": "暑假自律表", "why": "家长刚需"}, {"t": "中考后心理过渡", "why": "情感刚需"}]},
    {"m": "8月", "type": "开学", "name": "暑假收心·秋季开学", "current": 1, "topics": [{"t": "开学前 7 天收心计划", "why": "当下最高搜索"}, {"t": "新学期第一天怎么过", "why": "C 端共鸣"}, {"t": "高三一轮启动清单", "why": "高三家长刚需"}]},
    {"m": "9月", "type": "开学", "name": "秋季学期·月考", "topics": [{"t": "第一次月考怎么准备", "why": "高一/高三通用"}, {"t": "9 月自律清单", "why": "C 端共鸣"}, {"t": "一轮复习节奏表", "why": "高三刚需"}]},
    {"m": "10月", "type": "考试", "name": "月考·期中", "topics": [{"t": "期中考前 14 天计划", "why": "搜索量高峰"}, {"t": "理综/文综答题套路", "why": "干货提分"}, {"t": "家长如何与孩子沟通", "why": "情感共鸣"}]},
    {"m": "11月", "type": "考试", "name": "期中考试·一模", "topics": [{"t": "一模冲刺 30 天", "why": "强转化节点"}, {"t": "期中复盘模板", "why": "刚需工具"}, {"t": "数学压轴题套路", "why": "高完播"}]},
    {"m": "12月", "type": "冲刺", "name": "期末冲刺·模考", "topics": [{"t": "期末前 14 天逆袭", "why": "搜索量高峰"}, {"t": "期末复习时间表", "why": "刚需工具"}, {"t": "一模心理调节", "why": "情感刚需"}]},
]

HOTSPOTS = [
    {"t": "教育部新规：AI 进课堂", "tag": "政策", "ts": "2h", "cls": "green"},
    {"t": "防沉迷新规出台", "tag": "热点", "ts": "5h", "cls": "warn"},
    {"t": "2026 高考报名开始", "tag": "政策", "ts": "1d", "cls": "green"},
    {"t": "新高考 3+1+2 落地", "tag": "政策", "ts": "2d", "cls": "green"},
    {"t": "清华北大强基计划", "tag": "热点", "ts": "3d", "cls": "warn"},
    {"t": "中考分流新规，家长焦虑", "tag": "热点", "ts": "6h", "cls": "warn"},
    {"t": "高考数学试卷结构改革", "tag": "政策", "ts": "12h", "cls": "green"},
    {"t": "清华开学典礼回放刷屏", "tag": "热点", "ts": "1d", "cls": "green"},
    {"t": "985 高校新增 AI 专业", "tag": "热点", "ts": "2d", "cls": "green"},
    {"t": "教育部禁教师有偿补课", "tag": "政策", "ts": "3d", "cls": "warn"},
]

BENCH = [
    {"name": "汪舅舅", "fans": "32.1w", "updated": "昨日", "viral": 3, "health": "green", "state": "监控中", "note": "知识类大号 · 选题逻辑高度匹配"},
    {"name": "清华杨奇函语文说", "fans": "18.7w", "updated": "3 天前", "viral": 5, "health": "green", "state": "监控中", "note": "清华系账号 · 钩子结构可借鉴"},
    {"name": "学霸来了", "fans": "12.4w", "updated": "昨日", "viral": 2, "health": "warn", "state": "监控中", "note": "小学家长市场 · 可作关联账号"},
    {"name": "小数学家日记", "fans": "5.6w", "updated": "今日", "viral": 1, "health": "green", "state": "AI 发现", "why": "选题结构与你高度相似"},
    {"name": "清华爸带娃", "fans": "8.2w", "updated": "昨日", "viral": 2, "health": "green", "state": "AI 发现", "why": "评论区互动高，转化潜力大"},
    {"name": "初中家长圈", "fans": "6.7w", "updated": "今日", "viral": 1, "health": "green", "state": "AI 发现", "why": "初中家长群高频转发"},
    {"name": "杨老师讲数学", "fans": "14.2w", "updated": "2 天前", "viral": 3, "health": "green", "state": "监控中", "note": "干货派 · 时长较长结构稳定"},
    {"name": "高考冲刺日记", "fans": "9.8w", "updated": "昨日", "viral": 2, "health": "warn", "state": "AI 发现", "why": "情感向 · 完播率结构好"},
]

VIRALS = [
    {"t": "清华学霸到底有多牛？天才只是见我的门槛", "src": "清华杨奇函语文说", "likes": "10w+", "dur": "03:44"},
    {"t": "家和万事兴的真正含义", "src": "汪舅舅", "likes": "9w", "dur": "03:12"},
    {"t": "高中作息时间表", "src": "高考冲刺日记", "likes": "7.1k", "dur": "02:12"},
    {"t": "小学三步法", "src": "学霸来了", "likes": "5.6k", "dur": "02:48"},
    {"t": "数学130错题本模板", "src": "杨老师讲数学", "likes": "5.4k", "dur": "04:50"},
    {"t": "高三家长最容易犯的错", "src": "清华爸带娃", "likes": "3.9k", "dur": "03:18"},
]

LIVE_SUMMARIES = [
    {"date": "2025-11-15", "title": "清华学霸分享 初中...", "dur": "1h58m29s", "views": "3449", "peak": "140", "hot": "3729", "gmv": "¥0", "status": "未开播",
     "visual": {"light": "台灯暖光", "setup": "卧室书桌 + 绿植", "body": "白T恤·盘腿", "gesture": "讲题时手指点习题册", "role": "单人主播", "energy": "平稳"}},
    {"date": "2025-11-14", "title": "清华学霸分享 初中...", "dur": "1h57m48s", "views": "2863", "peak": "118", "hot": "21", "gmv": "¥0", "status": "已结束",
     "visual": {"light": "白炽灯", "setup": "书桌前", "body": "白衬衫", "gesture": "双手交叉抱胸", "role": "单人主播", "energy": "略疲"}},
    {"date": "2025-11-13", "title": "清华学霸分享 初中...", "dur": "1h49m56s", "views": "3171", "peak": "143", "hot": "131", "gmv": "¥3930", "status": "已结束",
     "visual": {"light": "正面日光灯", "setup": "书桌 + 黑板贴纸", "body": "黑框眼镜·白T恤", "gesture": "拿笔指黑板", "role": "单人"}},
    {"date": "2025-11-11", "title": "清华学霸分享 初中...", "dur": "1h52m53s", "views": "2236", "peak": "109", "hot": "46", "gmv": "¥1395", "status": "已结束",
     "visual": {"light": "暖光台灯", "setup": "书桌", "body": "盘发·白T", "gesture": "比划举例", "role": "单人"}},
    {"date": "2025-11-10", "title": "清华学霸分享 初中...", "dur": "1h51m24s", "views": "3147", "peak": "127", "hot": "42", "gmv": "¥199", "status": "已结束",
     "visual": {"light": "偏暗暖光", "setup": "背景书墙", "body": "米色针织衫", "gesture": "托腮讲解", "role": "单人", "energy": "缓"}},
    {"date": "2025-11-08", "title": "清华学霸分享 初中...", "dur": "1h41m57s", "views": "2645", "peak": "121", "hot": "106", "gmv": "¥2531", "status": "已结束",
     "visual": {"light": "白光", "setup": "书桌+绿植", "body": "高马尾·蓝条纹衬衫", "gesture": "侧头看屏", "role": "单人"}},
    {"date": "2025-11-07", "title": "清华学霸分享 初中...", "dur": "1h52m42s", "views": "2599", "peak": "136", "hot": "58", "gmv": "¥597", "status": "已结束",
     "visual": {"light": "顶灯偏冷", "setup": "客厅书桌", "body": "白衬衫", "gesture": "翻习题册", "role": "单人", "energy": "较好"}},
    {"date": "2025-11-07c", "title": "ceshi", "dur": "49m18s", "views": "1", "peak": "1", "hot": "0", "gmv": "¥0", "status": "测流",
     "visual": {"light": "白", "setup": "白墙", "body": "黑T恤", "gesture": "试光线", "role": "单人", "energy": "测试"}},
]

LIVE_NOTES = {
    "2025-11-15": {"day": "Day20-11.15 · 周六", "time": "1h58m",
        "cards": [{"k": "有效送牌", "v": "2%", "tip": "低于同档 -1.4pp"}, {"k": "峰值在线", "v": "140", "tip": "对比 11-13 持平"}, {"k": "平均在线", "v": "37", "tip": "中段掉量明显"}, {"k": "成交金额", "v": "¥0", "tip": "未挂车"}],
        "remark": "周中段流量一般，后半段灰度高，互动率仅 0.31%",
        "script": [{"k": "主题", "v": "周回顾 + 下周预告 · 未挂车"}, {"k": "角色·表现", "v": "主播语速稳定，但 30m 后肢体动作减少"}, {"k": "互动钩子", "v": "设置\"这周最有感的题\"提问，回复量 +34%"}, {"k": "布场", "v": "白墙 + 绿植，背景偏单调"}],
        "visual": {"light": "台灯暖光(偏弱)", "setup": "卧室书桌+绿植", "body": "白T恤·盘腿", "gesture": "讲题时手指点习题册"}},
    "2025-11-14": {"day": "Day19-11.14 · 周五", "time": "1h57m",
        "cards": [{"k": "有效送牌", "v": "2.6%", "tip": ""}, {"k": "峰值在线", "v": "118", "tip": "中段"}, {"k": "平均在线", "v": "31", "tip": "前 30m 较好"}, {"k": "成交金额", "v": "¥0", "tip": "未挂车"}],
        "remark": "周五晚高峰预期更高，但因开学季用户注意力分散在线仅比周二低",
        "script": [{"k": "主题", "v": "错题类型分类 + 答疑 · 信息密度大"}, {"k": "角色·表现", "v": "语速快，学员跟读部分略弱"}, {"k": "互动钩子", "v": "抽 3 位连麦答疑，停留 +28%"}, {"k": "布场", "v": "白炽灯偏黄，色温不统一"}],
        "visual": {"light": "白炽灯偏黄", "setup": "书桌前", "body": "白衬衫", "gesture": "双手交叉抱胸"}},
    "2025-11-13": {"day": "Day18-11.13 · 周四", "time": "1h49m",
        "cards": [{"k": "有效送牌", "v": "4%", "tip": "高于同档 +2.1pp"}, {"k": "峰值在线", "v": "143", "tip": "全场 Top 25%"}, {"k": "平均在线", "v": "40+", "tip": ""}, {"k": "成交金额", "v": "¥3930", "tip": "本月新高"}],
        "remark": "开局流量一般但有效送牌率高，结尾变阵告成",
        "script": [{"k": "还流量", "v": "用\"小明妈妈\"案例铺垫，激发家长焦虑"}, {"k": "角色·表现", "v": "主聊表情自然，偶有翻页停顿"}, {"k": "收益话术", "v": "强调\"同桌都在用\"\"班级前三都在用\""}, {"k": "小琳桥段", "v": "插入\"小琳妈当场咨询\"引发群内追评"}, {"k": "布场", "v": "背景加\"清华录取截图\"贴纸"}],
        "visual": {"light": "顶光偏白·均匀", "setup": "卧室书桌 + 书架", "body": "白T恤·盘发", "gesture": "笔指屏幕"}},
    "2025-11-11": {"day": "Day17-11.11 · 周二", "time": "1h52m",
        "cards": [{"k": "有效送牌", "v": "3.2%", "tip": ""}, {"k": "峰值在线", "v": "109", "tip": "中等"}, {"k": "平均在线", "v": "33", "tip": ""}, {"k": "成交金额", "v": "¥1395", "tip": "中位数"}],
        "remark": "选品挂车 1 件（教辅），转化依赖一句话钩子",
        "script": [{"k": "主题", "v": "高一数学 → 教辅书推荐"}, {"k": "收益话术", "v": "提到\"清华附中同款\"购买意愿 +27%"}, {"k": "布场", "v": "讲台摆教辅实物，转化最显眼"}, {"k": "互动钩子", "v": "限时优惠口令 + 福利券"}],
        "visual": {"light": "暖光台灯(中)", "setup": "书桌", "body": "盘发·白T", "gesture": "比划举例"}},
    "2025-11-10": {"day": "Day16-11.10 · 周一", "time": "1h51m",
        "cards": [{"k": "有效送牌", "v": "2.4%", "tip": ""}, {"k": "峰值在线", "v": "127", "tip": ""}, {"k": "平均在线", "v": "34", "tip": ""}, {"k": "成交金额", "v": "¥199", "tip": "挂车未走心"}],
        "remark": "周一晚高峰预期达 127，但互动深度不足，30m 后流失快",
        "script": [{"k": "主题", "v": "新教材改版 · 对比解读"}, {"k": "角色·表现", "v": "主播略显疲惫(开场即抱头)"}, {"k": "互动钩子", "v": "投票题\"你们新教材是哪个版本\"互动 +18%"}, {"k": "布场", "v": "背景书墙略显杂乱"}],
        "visual": {"light": "偏暗暖光", "setup": "背景书墙", "body": "米色针织衫", "gesture": "托腮讲解"}},
    "2025-11-08": {"day": "Day15-11.08 · 周六", "time": "1h41m",
        "cards": [{"k": "有效送牌", "v": "3.4%", "tip": ""}, {"k": "峰值在线", "v": "121", "tip": ""}, {"k": "平均在线", "v": "39", "tip": "留存好"}, {"k": "成交金额", "v": "¥2531", "tip": "第二高"}],
        "remark": "保留推荐路径：主聊 + 学员 + 实时弹幕反馈，效果突出",
        "script": [{"k": "主题", "v": "高二一轮复习启动 · 答疑场"}, {"k": "收益话术", "v": "现场连麦 3 位家长，痛点匹配精准"}, {"k": "互动钩子", "v": "弹幕抽奖(2 名 1v1 答疑)"}, {"k": "布场", "v": "书桌+绿植，光线明亮，背景干净"}],
        "visual": {"light": "白光(均匀)", "setup": "书桌+绿植", "body": "高马尾·蓝条纹衬衫", "gesture": "侧头看屏"}},
    "2025-11-07": {"day": "Day14-11.07 · 周五", "time": "1h52m",
        "cards": [{"k": "有效送牌", "v": "2.8%", "tip": ""}, {"k": "峰值在线", "v": "136", "tip": "本周前列"}, {"k": "平均在线", "v": "38", "tip": ""}, {"k": "成交金额", "v": "¥597", "tip": "中等"}],
        "remark": "开局流量大，但中途未及时挂车，错过转化峰值",
        "script": [{"k": "主题", "v": "初中数学思维 · 试听场"}, {"k": "角色·表现", "v": "活力足，手势幅度大"}, {"k": "互动钩子", "v": "举\"豆豆妈\"真实案例，激发共鸣"}, {"k": "布场", "v": "客厅书桌，光线略冷"}],
        "visual": {"light": "顶灯偏冷", "setup": "客厅书桌", "body": "白衬衫", "gesture": "翻习题册"}},
    "2025-11-07c": {"day": "测流场 · 临时", "time": "49m",
        "cards": [{"k": "有效送牌", "v": "0%", "tip": "测流无人"}, {"k": "峰值在线", "v": "1", "tip": "自身测试"}, {"k": "平均在线", "v": "1", "tip": ""}, {"k": "成交金额", "v": "¥0", "tip": ""}],
        "remark": "内部设备/网络测试，不计入内容场次",
        "script": [{"k": "主题", "v": "画面 + 麦克风测流"}, {"k": "互动钩子", "v": "无"}, {"k": "布场", "v": "白墙，无布景"}],
        "visual": {"light": "白光", "setup": "白墙", "body": "黑T", "gesture": "挥手示意"}},
}

LIVE_SCRIPTS = [
    {"t": "新学期第一场·高中数学", "d": "08-25", "len": "1h", "blocks": "开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)"},
    {"t": "高二数学答疑", "d": "08-20", "len": "1h", "blocks": "痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)"},
    {"t": "暑假收心专场", "d": "08-15", "len": "48m", "blocks": "互动开场(3m) → 收心方法(15m) → 家长答疑(30m)"},
    {"t": "高一家长会·破冰", "d": "09-02", "len": "50m", "blocks": "高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)"},
    {"t": "高三一轮启动·直播脚本", "d": "09-10", "len": "90m", "blocks": "开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)"},
    {"t": "初三数学答疑专场", "d": "10-15", "len": "1h", "blocks": "家长开场(5m) → 中考考情(20m) → 真题演练(15m) → Q&A(20m)"},
    {"t": "初一数学查漏补缺", "d": "11-02", "len": "45m", "blocks": "学情诊断(10m) → 错题共性(15m) → 提分方法(20m)"},
    {"t": "11-13 高成交复刻·挂车版", "d": "11-13", "len": "1h", "blocks": "开场送牌(5m) → 案例铺垫(15m) → 教辅讲解(20m) → 限时福利(20m)"},
]

WIKI_TRUNKS = [
    {"key": "all", "name": "全部", "desc": "知识库所有文件", "grp": None},
    {"key": "video.script", "name": "短视频脚本", "desc": "脚本合集 / 选题", "grp": "短视频"},
    {"key": "video.calendar", "name": "选题日历", "desc": "全年教育节点", "grp": "短视频"},
    {"key": "video.hot", "name": "热点", "desc": "实时热点 / 政策", "grp": "短视频"},
    {"key": "video.bench", "name": "对标爆款", "desc": "对标账号 / 爆款", "grp": "短视频"},
    {"key": "live.script", "name": "直播脚本", "desc": "直播脚本模板", "grp": "直播"},
    {"key": "live.summary", "name": "直播复盘", "desc": "复盘 / 高光片段", "grp": "直播"},
    {"key": "live.sales", "name": "销售记录", "desc": "GMV / 转化明细", "grp": "直播"},
]

WIKI_FILES = [
    {"id": "f1", "trunk": "video.script", "name": "短视频脚本库（187 个脚本合集）", "src": "feishu", "url": SCRIPT_DOC, "time": "更新于 09-01", "meta": "飞书文档 · 187 条"},
    {"id": "f2", "trunk": "live.summary", "name": "直播复盘（含销售记录）", "src": "feishu", "url": LIVE_SUMMARY_DOC, "time": "更新于 08-25", "meta": "飞书文档 · 12 场"},
    {"id": "f3", "trunk": "live.script", "name": "直播脚本模板", "src": "feishu", "url": LIVE_SCRIPT_DOC, "time": "更新于 08-25", "meta": "飞书文档 · 3 套"},
    {"id": "f4", "trunk": "video.calendar", "name": "全年教育节点日历", "src": "local", "url": None, "time": "内置", "meta": "12 个月 · 36 条选题"},
    {"id": "f5", "trunk": "video.hot", "name": "教育热点榜（可接 ima）", "src": "ima", "url": None, "time": "实时", "meta": "5 条 · 政策/热点"},
    {"id": "f6", "trunk": "video.bench", "name": "对标账号监控库", "src": "local", "url": None, "time": "更新于 昨日", "meta": "3 监控 + 2 发现"},
    {"id": "f7", "trunk": "video.bench", "name": "对标爆款抓取", "src": "local", "url": None, "time": "更新于 昨日", "meta": "12 条爆款"},
    {"id": "f8", "trunk": "video.script", "name": "选题拆脚本记录", "src": "local", "url": None, "time": "持续更新", "meta": "来自 WIKI/对标"},
    {"id": "f9", "trunk": "video.hot", "name": "高考志愿填报资料包", "src": "ima", "url": None, "time": "6 月节点", "meta": "ima 知识库"},
    {"id": "f10", "trunk": "video.calendar", "name": "新教材改版解读", "src": "local", "url": None, "time": "9 月节点", "meta": "选题素材"},
    {"id": "f11", "trunk": "live.summary", "name": "直播高光片段（待剪辑）", "src": "local", "url": None, "time": "更新于 08-13", "meta": "8 段素材"},
    {"id": "f12", "trunk": "video.script", "name": "爆款钩子改写合集", "src": "local", "url": None, "time": "持续更新", "meta": "23 条钩子"},
    {"id": "f13", "trunk": "live.sales", "name": "直播销售记录（11 月明细）", "src": "local", "url": None, "time": "更新于 11-15", "meta": "8 场 · GMV/转化"},
    {"id": "f14", "trunk": "video.script", "name": "9 月开学季脚本模板", "src": "local", "url": None, "time": "09-01", "meta": "4 个主题分支"},
    {"id": "f15", "trunk": "video.script", "name": "年终盘点脚本（家长/学生向）", "src": "local", "url": None, "time": "12-15", "meta": "6 个主题"},
    {"id": "f16", "trunk": "live.script", "name": "11-13 高成交场复刻话术", "src": "local", "url": None, "time": "11-14", "meta": "话术 + 挂车方案"},
    {"id": "f17", "trunk": "video.hot", "name": "高考政策跟踪表", "src": "ima", "url": None, "time": "实时", "meta": "教育部门官网 · 抓取"},
    {"id": "f18", "trunk": "live.summary", "name": "直播场次健康度月报", "src": "local", "url": None, "time": "每月", "meta": "8 项指标 · 周对比"},
]

SCRIPTS = [
    {"id": "s1", "t": "清华学霸的学习方法", "src": "历史", "dur": "00:47", "tag": "干货"},
    {"id": "s2", "t": "高一学生避坑指南", "src": "历史", "dur": "00:37", "tag": "避坑"},
    {"id": "s3", "t": "开学前 7 天收心计划", "src": "对标·汪舅舅", "dur": "03:30", "tag": "工具"},
    {"id": "s4", "t": "数学想考 130 全流程", "src": "对标·杨奇函", "dur": "04:25", "tag": "干货"},
    {"id": "s5", "t": "高三家长最容易犯的错", "src": "对标·清华爸带娃", "dur": "03:18", "tag": "情感"},
    {"id": "s6", "t": "语文作文万能结构", "src": "对标·杨奇函", "dur": "05:02", "tag": "干货"},
    {"id": "s7", "t": "初二两极分化元凶", "src": "对标·初中家长圈", "dur": "03:46", "tag": "避坑"},
    {"id": "s8", "t": "考试粗心其实是能力问题", "src": "历史", "dur": "01:42", "tag": "干货"},
    {"id": "s9", "t": "新学期语数英如何规划", "src": "对标·汪舅舅", "dur": "04:11", "tag": "工具"},
    {"id": "s10", "t": "清华学霸到底有多牛", "src": "对标·杨奇函", "dur": "03:44", "tag": "热门"},
    {"id": "s11", "t": "初三家长群答疑·高频 5", "src": "WIKI·11 月", "dur": "02:20", "tag": "答疑"},
    {"id": "s12", "t": "9 月开学第一周怎么过", "src": "WIKI·9 月", "dur": "01:50", "tag": "情感"},
]

LIBRARY = [
    {"id": "l1", "type": "feishu", "name": "短视频脚本库（飞书）", "meta": "187 个脚本 · 09-01 更新", "url": SCRIPT_DOC},
    {"id": "l2", "type": "feishu", "name": "直播复盘（飞书）", "meta": "12 场直播 · 含销售记录", "url": LIVE_SUMMARY_DOC},
    {"id": "l3", "type": "feishu", "name": "直播脚本（飞书）", "meta": "8 套模板", "url": LIVE_SCRIPT_DOC},
    {"id": "l4", "type": "feishu", "name": "对标账号汇总表", "meta": "8 个对标账号 · 含备注", "url": SCRIPT_DOC},
    {"id": "l5", "type": "file", "name": "双 11 直播回放.mp4", "meta": "4.2 GB · 11-13 场", "url": None},
    {"id": "l6", "type": "link", "name": "抖音·汪舅舅主页", "meta": "短视频对标参考", "url": "https://www.douyin.com/"},
    {"id": "l7", "type": "file", "name": "9 月选题日历.xlsx", "meta": "12 个月节点", "url": None},
    {"id": "l8", "type": "link", "name": "小红书·学习方法合集", "meta": "热门笔记参考", "url": "https://www.xiaohongshu.com/"},
]

# 各表清空顺序（外键无关，但按依赖倒序更稳）
ALL_TABLES = [
    "kpis", "trend", "actions", "northstar", "gantt_weeks", "gantt", "portraits",
    "videos", "calendar", "hotspots", "benchmarks", "virals", "live_sessions",
    "live_notes", "live_scripts", "wiki_trunks", "wiki_files", "scripts", "library",
]


def seed(conn):
    for t in ALL_TABLES:
        conn.execute(f"DELETE FROM {t}")

    conn.executemany(
        "INSERT INTO kpis(label,value,delta,up,warm) VALUES(:label,:value,:delta,:up,:warm)",
        KPIS)
    conn.executemany("INSERT INTO trend(d,v) VALUES(:d,:v)", TREND)
    conn.executemany(
        "INSERT INTO actions(num,tag,title,body) VALUES(:num,:tag,:title,:body)", ACTIONS)
    conn.executemany(
        "INSERT INTO northstar(key,label,goal,value,delta,pct) VALUES(:key,:label,:goal,:value,:delta,:pct)",
        NORTHSTAR)
    conn.executemany(
        "INSERT INTO gantt_weeks(t,d,cur) VALUES(:t,:d,:cur)", GANTT_WEEKS)
    conn.executemany(
        "INSERT INTO gantt(lane,items) VALUES(:lane,:items)",
        [{"lane": g["lane"], "items": json.dumps(g["items"], ensure_ascii=False)} for g in GANTT])
    conn.executemany(
        "INSERT INTO portraits(title,unit,data) VALUES(:title,:unit,:data)",
        [{"title": p["title"], "unit": p["unit"], "data": json.dumps(p["data"])} for p in PORTRAIT])
    conn.executemany(
        "INSERT INTO videos(title,dur,likes,tag) VALUES(:title,:dur,:likes,:tag)", TOP_VIDEOS)
    conn.executemany(
        "INSERT INTO calendar(m,type,name,current,topics) VALUES(:m,:type,:name,:current,:topics)",
        [{"m": c["m"], "type": c["type"], "name": c["name"],
          "current": c.get("current", 0),
          "topics": json.dumps(c["topics"], ensure_ascii=False)} for c in CALENDAR])
    conn.executemany(
        "INSERT INTO hotspots(t,tag,ts,cls) VALUES(:t,:tag,:ts,:cls)", HOTSPOTS)
    conn.executemany(
        "INSERT INTO benchmarks(name,fans,updated,viral,health,state,note,why) "
        "VALUES(:name,:fans,:updated,:viral,:health,:state,:note,:why)",
        [{"name": b["name"], "fans": b["fans"], "updated": b["updated"], "viral": b["viral"],
          "health": b["health"], "state": b["state"],
          "note": b.get("note"), "why": b.get("why")} for b in BENCH])
    conn.executemany(
        "INSERT INTO virals(t,src,likes,dur) VALUES(:t,:src,:likes,:dur)", VIRALS)
    conn.executemany(
        "INSERT INTO live_sessions(date,title,dur,views,peak,hot,gmv,status,visual) "
        "VALUES(:date,:title,:dur,:views,:peak,:hot,:gmv,:status,:visual)",
        [{"date": s["date"], "title": s["title"], "dur": s["dur"], "views": s["views"],
          "peak": s["peak"], "hot": s["hot"], "gmv": s["gmv"], "status": s["status"],
          "visual": json.dumps(s["visual"], ensure_ascii=False)} for s in LIVE_SUMMARIES])
    conn.executemany(
        "INSERT INTO live_notes(date,day,time,cards,remark,script,visual) "
        "VALUES(:date,:day,:time,:cards,:remark,:script,:visual)",
        [{"date": d, "day": n["day"], "time": n["time"],
          "cards": json.dumps(n["cards"], ensure_ascii=False),
          "remark": n["remark"],
          "script": json.dumps(n["script"], ensure_ascii=False),
          "visual": json.dumps(n["visual"], ensure_ascii=False)} for d, n in LIVE_NOTES.items()])
    conn.executemany(
        "INSERT INTO live_scripts(t,d,len,blocks) VALUES(:t,:d,:len,:blocks)", LIVE_SCRIPTS)
    conn.executemany(
        "INSERT INTO wiki_trunks(key,name,desc,grp) VALUES(:key,:name,:desc,:grp)",
        [{"key": t["key"], "name": t["name"], "desc": t["desc"], "grp": t["grp"]} for t in WIKI_TRUNKS])
    conn.executemany(
        "INSERT INTO wiki_files(id,trunk,name,src,url,time,meta) "
        "VALUES(:id,:trunk,:name,:src,:url,:time,:meta)", WIKI_FILES)
    conn.executemany(
        "INSERT INTO scripts(id,t,src,dur,tag) VALUES(:id,:t,:src,:dur,:tag)", SCRIPTS)
    conn.executemany(
        "INSERT INTO library(id,type,name,meta,url) VALUES(:id,:type,:name,:meta,:url)", LIBRARY)

    conn.commit()


if __name__ == "__main__":
    import database as db
    db.init_db()
    conn = db.get_conn()
    seed(conn)
    conn.close()
    print("seeded OK ->", db.DB_PATH)
