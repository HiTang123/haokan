var rule = { 
title:'iptv搜索引擎', 
info: `此站源为磁力搜索引擎，请在搜索栏输入关键词进行搜索使用`,
host:'http://tonkiang.us', 
url:'/',
detailUrl:'fyid',
searchUrl:'?page=fypage&iptv=**', 
searchable:2, 
headers:{
    'User-Agent':'PC_UA'
},
limit:5, 
timeout:1000,
class_name:'cctv1',
class_url:'cctv1',
推荐: $js.toString(() => {
    let info = [{
      vod_name: '使用说明',
      vod_id: 'info',
      vod_pic: 'https://keai.cm/wp-content/plugins/movieku/php/images/loading.png'
    }];
    VODS = [];
    VODS = info.concat(VODS);
  }),
一级:`js:
		let list =pdfa(request(input),'body&&.resultplus:has(.tip)');
		let d = [];
		for (let it of list) {
			d.push({
				title: pdfh(it,'.tip&&Text'),
				//title:input,
				desc: pdfh(it,'i&&Text'),
				url: '|'+pdfh(it,'.tip&&Text')+'|'+pdfh(it,'tba:eq(1)&&Text')
				//url:''
			});
		}
		setResult(d);
	`,
二级: $js.toString(() => {
  if (orId === 'info') {
    VOD = {
        vod_content: request('http://tonkiang.us/?page=2&iqtv=%E5%B9%BF%E4%B8%9C%E7%8F%A0%E6%B1%9F'),
        vod_name: '使用说明',
        type_name: '使用说明',
        vod_pic: 'https://resource-cdn.tuxiaobei.com/video/FtWhs2mewX_7nEuE51_k6zvg6awl.png',
        vod_play_from: '随心看',
        vod_play_url: '随机小视频$http://api.yujn.cn/api/zzxjj.php',
    };
  }
  else{
    VOD={
        vod_content:input.split('|')[2],
        vod_play_from: 'IPTV',
        vod_play_url: input.split('|')[1]+'$'+input.split('|')[2]
    }
  }
  }),
搜索:'*',
}