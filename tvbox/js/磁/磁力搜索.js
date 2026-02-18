var rule = { 
title:'磁力搜索', 
info: `此站源为磁力搜索引擎，请在搜索栏输入关键词进行搜索使用，或搭配豆瓣源使用`,
host:'https://cilisousuo.com', 
searchUrl:'/search?q=**', 
searchable:2, 
headers:{ 'User-Agent':'MOBILE_UA' },
limit:5, 
timeout:5000,
推荐: $js.toString(() => {
    let info = [{
      vod_name: '使用说明',
      vod_id: 'info',
      vod_pic: 'https://keai.cm/wp-content/plugins/movieku/php/images/loading.png'
    }];
    VODS = [];
    VODS = info.concat(VODS);
  }),
一级: '',
二级: $js.toString(() => {
  if (orId === 'info') {
    VOD = {
        vod_content: rule.info.trim(),
        vod_name: '使用说明',
        type_name: '使用说明',
        vod_pic: 'https://resource-cdn.tuxiaobei.com/video/FtWhs2mewX_7nEuE51_k6zvg6awl.png',
        vod_play_from: '随心看',
        vod_play_url: '随机小视频$http://api.yujn.cn/api/zzxjj.php',
    };
  }else{
    let data=pdfh(request(input),'.input-magnet&&value');
    VOD.vod_play_from= '磁力搜索';
    VOD.vod_play_url=data;
    VOD.vod_content=data;
  }
  }),
搜索:`js:
		let list = pdfa(request(input),'body&&li');
		let d = [];
		list.forEach(it=>{
		    if(pdfh(it,'.result-title&&Text')!=''){
			d.push({			    
				title: pdfh(it,'.result-title&&Text'),
				img:'https://mms0.baidu.com/it/u=3173718406,594851588&fm=253&app=138&f=JPEGw=800&h=500',
				desc: "大小：" + pdfh(it,'.size&&Text'),
				url: pdfh(it,'a&&href')
			})}
		})
		setResult(d);
	`, 
}