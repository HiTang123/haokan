globalThis.utf16to8=function (str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
out +=String.fromCharCode(0x80|((c >>6) & 0x3F));
           out += String.fromCharCode(0x80 | ((c >>0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >>6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >>0) & 0x3F));
        }
    }
    return out;
}

globalThis.str2hex=function (str){
var val="";
var i=0;
for(; i < str.length; i++){
val += str.charCodeAt(i).toString(16);
}
return val;
}
var rule = { 
title:'走磁力', 
info: `此站源为磁力搜索引擎，请在搜索栏输入关键词进行搜索使用，或搭配豆瓣源使用`,
host:'', 
searchUrl:'/search?q=**&p=fypage', 
detailUrl:'fyid',
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
    VOD.vod_content=input;
    VOD.vod_play_from= '走磁力';
    VOD.vod_play_url=input;
  }
  }),
搜索:$js.toString(() => {
        let key=getQuery(input);
        let url1='https://www.zoucili.top/search_index/'+str2hex(utf16to8(key.q))+'_'+key.p+'_id/';
		let list = pdfa(request(url1),'body&&.panel:not(.visible-xs)');
		let d = [];
		list.forEach(it=>{		    
			d.push({			     
				title: pdfh(it,'h3&&Text'),
				img:'https://mms0.baidu.com/it/u=3173718406,594851588&fm=253&app=138&f=JPEGw=800&h=500',
				desc:pdfh(it,'h4&&Text').replace('磁力链接 ',''),
				url: pdfh(it,'h4&&a&&href')
			})
		})
		setResult(d);
	}), 
}