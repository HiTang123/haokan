# coding=utf-8
# !/usr/bin/python
import sys

sys.path.append('..')
from base.spider import Spider
from lxml import etree
import json
import time
import base64


class Spider(Spider):

    def init(self, extend=""):
        print("============{0}============".format(extend))
        pass
        
    def destroy(self):
        pass

    def homeContent(self, filter):
        result = {}
        cateManual = {
            "电影": "1",
            "剧集": "2",
            "综艺": "3",
            "动漫": "4"
        }
        classes = []
        for k in cateManual:
            classes.append({
                'type_name': k,
                'type_id': cateManual[k]
            })
        result['class'] = classes
        return result

    host = "http://item.xpgtv.xyz"
    header = {
        'User-Agent': 'okhttp/3.12.11',
        'version': 'XPGBOX com.phoenix.tv1.3.3',
        'token': 'dlsrzQiVkxgxYnpvfhTfMJlsPK3Y9zlHl+hovVfGeMNNEkwoyDQr1YEuhaAKbhz0SmxUfIXFGORrWeQrfDJQZtBxGWY/wnqwKk1McYhZES5fuT4ODVB13Cag1mDiMRIi8JQuZCJxQLfu8EEFUShX8dXKMHAT5jWTrDSQTJXwCDT2KRB4TUA7QF0pZbpvQPLVVzXf',
        'user_id': 'XPGBOX',
        'token2': 'XFxIummRrngadHB4TCzeUaleebTX10Vl/ftCvGLPeI5tN2Y/liZ5tY5e4t8=',
        'hash': 'c56f',
        'timestamp': '1727236846'
    }

    def homeVideoContent(self):
        rsp = self.fetch("{0}/api.php/v2.main/androidhome".format(self.host), headers=self.header)
        root = rsp.json()['data']['list']
        videos = []
        for vodd in root:
            for vod in vodd['list']:
                videos.append({
                    "vod_id": vod['id'],
                    "vod_name": vod['name'],
                    "vod_pic": vod['pic'],
                    "vod_remarks": vod['score']
                })
        result = {
            'list': videos
        }
        return result

    def categoryContent(self, tid, pg, filter, extend):
        result = {}
        url = '{0}/api.php/v2.vod/androidfilter10086?page={1}&type={2}'.format(self.host, pg, tid)
        rsp = self.fetch(url, headers=self.header)
        root = rsp.json()['data']
        videos = []
        for vod in root:
            videos.append({
                "vod_id": vod['id'],
                "vod_name": vod['name'],
                "vod_pic": vod['pic'],
                "vod_remarks": vod['score']
            })
        result['list'] = videos
        result['page'] = pg
        result['pagecount'] = 9999
        result['limit'] = 90
        result['total'] = 999999
        return result

    def detailContent(self, ids):
        id=ids[0]
        url = '{0}/api.php/v3.vod/androiddetail2?vod_id={1}'.format(self.host, id)
        rsp = self.fetch(url, headers=self.header)
        root = rsp.json()['data']
        node = root['urls']
        d = [it['key'] + "$" + f"http://c.xpgtv.net/m3u8/{it['url']}.m3u8" for it in node]
        vod = {
            "vod_name": root['name'],
            'vod_play_from': '小苹果',
            'vod_play_url': '#'.join(d),
        }
        print(vod)
        result = {
            'list': [
                vod
            ]
        }
        return result

    def searchContent(self, key, quick, pg='1'):
        url = '{0}/api.php/v2.vod/androidsearch10086?page={1}&wd={2}'.format(self.host, pg, key)
        rsp = self.fetch(url, headers=self.header)
        root = rsp.json()['data']
        videos = []
        for vod in root:
            videos.append({
                "vod_id": vod['id'],
                "vod_name": vod['name'],
                "vod_pic": vod['pic'],
                "vod_remarks": vod['score']
            })
        result = {
            'list': videos
        }
        return result

    def playerContent(self, flag, id, vipFlags):
        print(id)
        result = {}
        result["parse"] = 0
        result["url"] = f'http://127.0.0.1:9978/proxy?do=py&url={id}'
        result["header"] = self.header
        return result

    def localProxy(self, param):
        url = param['url']
        data = self.fetch(url, headers=self.header).content
        data_str = data.decode('utf-8')
        action = data_str.replace('URI="', f'URI="{self.host}')
        return [200, "application/vnd.apple.mpegurl", action]
