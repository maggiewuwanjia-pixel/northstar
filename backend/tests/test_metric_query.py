import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
from app import database
from app.services import knowledge
from app.services.metric_query import answer_followers, parse_rows, monthly_rows, is_follower_query

class MetricQueryTests(unittest.TestCase):
    def test_real_six_months(self):
        result = answer_followers('过去六个月粉丝量的趋势图')
        points = result['chart']['points']
        self.assertEqual([p['label'] for p in points], ['2026-04','2026-05','2026-06','2026-07','2026-08','2026-09'])
        self.assertEqual([p['value'] for p in points], [218414,219640,221121,222922,223977,225254])
        self.assertNotIn('需要补充',result['answer'])
        self.assertTrue(result['sources'][0]['document_id'])

    def test_last_month_and_missing_month(self):
        self.assertIn('1,277', answer_followers('最近一个月涨了多少粉丝')['answer'])
        self.assertIn('没有所请求月份', answer_followers('2027年1月粉丝数量')['answer'])
        self.assertIn('未覆盖全部日期', answer_followers('2026年10月粉丝数量')['answer'])

    def test_scope_and_model_boundary(self):
        self.assertIsNone(answer_followers('粉丝趋势',document_ids=['unrelated-document']))
        self.assertIsNone(answer_followers('为什么粉丝增长慢'))
        self.assertFalse(is_follower_query('哪类话题涨粉最多'))
        self.assertTrue(is_follower_query('近半年关注者趋势'))

    def test_owned_report_isolation(self):
        with tempfile.TemporaryDirectory() as temp, patch.object(database,'DB_PATH',Path(temp)/'test.db'):
            knowledge.init_knowledge()
            own=knowledge.save_document('alice','关注者增长.csv','上传', [('CSV', '时间,净增关注,新增关注,取消关注,关注者总数\n2026/09/30,10,12,2,100')])
            knowledge.save_document('bob','关注者增长.csv','上传', [('CSV','2026/09/30,900,900,0,9999')])
            result=answer_followers('2026年9月粉丝数量',uid='alice',document_ids=[own['id']])
            self.assertIn('| 100 |',result['answer'])
            self.assertNotIn('9999',result['answer'])
            self.assertIsNone(answer_followers('2026年9月粉丝数量',uid='bob',document_ids=[own['id']]))

    def test_duplicate_records_and_consistency(self):
        rows=parse_rows('2026/08/31,0,0,0,90\n2026/09/01,10,12,2,100\n2026/09/01,10,12,2,100')
        self.assertEqual(len(rows),2)
        self.assertEqual(monthly_rows(rows)[-1]['net'],10)
