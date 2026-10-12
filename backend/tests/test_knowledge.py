import io
import json
import tempfile
import unittest
import zipfile
from pathlib import Path
from unittest.mock import patch

from app import database
from app.services import knowledge as kb
from app.services.cue_routing import classify


class KnowledgeTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.patch = patch.object(database, 'DB_PATH', Path(self.temp.name) / 'test.db')
        self.patch.start()
        kb.init_knowledge()

    def tearDown(self):
        self.patch.stop()
        self.temp.cleanup()

    def test_graph_revalidates_original_quotes(self):
        doc = kb.save_document('alice', '复习法', '文本', [('第7页', '复习法包含背诵。')])
        analysis = {'nodes': [{'id':'a','label':'复习法'}, {'id':'b','label':'背诵'}], 'edges': [{'source':'a','target':'b','relation':'包含','chunk':1,'quote':'复习法包含背诵。'}, {'source':'a','target':'b','relation':'虚构关系','chunk':1,'quote':'并不存在的引文'}]}
        with database.get_conn() as conn:
            conn.execute('UPDATE knowledge_documents SET analysis=? WHERE id=?', (json.dumps(analysis),doc['id']))
        graph = kb.knowledge_graph('alice')
        self.assertEqual(len(graph['edges']),1)
        self.assertEqual(graph['edges'][0]['chunk'],1)
        self.assertEqual(graph['edges'][0]['evidence_status'],'quote_verified')
        with database.get_conn() as conn:
            conn.execute('UPDATE knowledge_chunks SET text=? WHERE document_id=?', ('原文已经更新',doc['id']))
        self.assertEqual(kb.knowledge_graph('alice')['edges'],[])

    def test_user_isolation(self):
        first = kb.save_document('alice', '直播复盘', '文本', [('第1段', '直播成交提升需要优化商品讲解。')])
        kb.save_document('bob', '私密资料', '文本', [('第1段', '直播账号的私密营收数据。')])
        self.assertIsNone(kb.get_document('bob', first['id']))
        self.assertEqual(len(kb.list_documents('alice')), 1)
        results = kb.retrieve('alice', '直播成交')
        self.assertEqual(results[0]['document_id'], first['id'])
        self.assertNotIn('私密', str(results))
        self.assertEqual(kb.retrieve('alice', 'xyzunknown'), [])

    def test_chunk_completeness(self):
        content = ''.join(str(i % 10) for i in range(2001))
        chunks = kb.split_sections([('段1', content)])
        reconstructed = chunks[0]['text'] + ''.join(c['text'][100:] for c in chunks[1:])
        self.assertEqual(reconstructed, content)
        self.assertTrue(all(len(c['text']) <= 800 for c in chunks))

    def test_docx_paragraphs_and_table(self):
        blob = io.BytesIO()
        with zipfile.ZipFile(blob, 'w') as archive:
            archive.writestr('word/document.xml', '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:r><w:t>真实钩子</w:t></w:r></w:p><w:tbl><w:tr><w:tc><w:p><w:r><w:t>真实表格</w:t></w:r></w:p></w:tc></w:tr></w:tbl></w:body></w:document>')
        self.assertEqual([t for _, t in kb.parse_file('script.docx', blob.getvalue())], ['真实钩子', '真实表格'])

    def test_csv_encodings_and_limits(self):
        self.assertIn('观看人数', str(kb.parse_file('report.csv', '观看人数,200'.encode('gb18030'))))
        for name, content in [('old.doc', b'abc'), ('empty.txt', b' '), ('big.txt', b'x' * (kb.MAX_BYTES + 1))]:
            with self.assertRaises(ValueError):
                kb.parse_file(name, content)

    def test_xlsx(self):
        from openpyxl import Workbook
        workbook = Workbook()
        workbook.active.title = '直播'
        workbook.active.append(['日期', '成交额'])
        workbook.active.append(['2026-10-05', 250])
        blob = io.BytesIO()
        workbook.save(blob)
        result = kb.parse_file('live.xlsx', blob.getvalue())
        self.assertIn('直播', result[1][0])
        self.assertIn('250', result[1][1])

    def test_spaces_sources_and_sync_status(self):
        space = kb.ensure_default_space('alice')
        source = kb.create_source('alice', 'feishu', '塑品脚本库', 'https://example.feishu.cn/wiki/abc', space['id'])
        kb.start_sync_job('alice', source['id'], '正在从飞书同步')
        kb.finish_sync_job('alice', source['id'], False, '需要 Wiki 与文档只读权限')
        self.assertEqual(kb.list_spaces('alice')[0]['name'], '清华优优 AI Wiki')
        self.assertEqual(kb.list_sources('alice')[0]['status'], 'failed')
        self.assertIn('只读权限', kb.list_sync_jobs('alice')[0]['message'])

    def test_cue_routes_match_product_contract(self):
        self.assertEqual(classify('十月新增关注是多少？', 'analysis'), 'structured_query')
        self.assertEqual(classify('为什么十月关注下降？', 'analysis'), 'hybrid_analysis')
        self.assertEqual(classify('下周拍什么？', 'analysis'), 'hybrid_planning')
        self.assertEqual(classify('把这个竞品改成我的版本', 'analysis'), 'competitor_rewrite')
        self.assertEqual(classify('这条结论依据是什么？', 'analysis'), 'source_lookup')

if __name__ == '__main__':
    unittest.main()
