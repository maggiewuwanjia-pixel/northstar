"""Pure Cue task classification kept dependency-free for stable contract tests."""
import re


def classify(question, mode='analysis'):
    if mode == 'creative':
        return 'creative_generation'
    if mode == 'breakdown':
        return 'content_breakdown'
    if mode == 'drilldown':
        return 'metric_drilldown'
    if re.search(r'竞品.*(改|我的版本)|把.*(改成|改写).*版本', question):
        return 'competitor_rewrite'
    if re.search(r'依据|来源|哪份|原文', question):
        return 'source_lookup'
    if re.search(r'为什么|原因|下降|增长|变化', question):
        return 'hybrid_analysis'
    if re.search(r'多少|几条|几次|金额|粉丝|新增|完播|成交', question):
        return 'structured_query'
    if re.search(r'计划|下周|十月|排期', question):
        return 'hybrid_planning'
    if re.search(r'选题|脚本|怎么拍|改写|创意', question):
        return 'creative_generation'
    if re.search(r'拆解|钩子|结构|竞品', question):
        return 'content_breakdown'
    if re.search(r'下钻|细分|哪个|分布|明细', question):
        return 'metric_drilldown'
    return 'knowledge_qa'
