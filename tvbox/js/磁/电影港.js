var rule = {
	title:'电影港[磁]',
	编码:'gb2312',
	搜索编码:'gb2312',
	host:'https://www.dygang.tv',
	homeUrl:'/',
	url: '/fyclass/index_fypage.htm?',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/e/search/index123.php#tempid=1&tbname=article&keyborad=**&show=title%2Csmalltext&Submit=%CB%D1%CB%F7;post',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'MOBILE_UA',
		'Referer': 'https://www.dygang.tv/'
	},
	timeout:5000,
	class_name:'最新电影&经典高清&国配电影&经典港片&国剧&日韩剧&美剧&综艺&动漫&纪录片&高清原盘&4K高清区&3D电影',
	class_url:'ys&bd&gy&gp&dsj&dsj1&yx&zy&dmq&jilupian&1080p&4K&3d',
	limit:6,
	推荐:'div#tl tr:has(>td>table.border1>tbody>tr>td>a>img);table.border1 img&&alt;table.border1 img&&src;table:eq(2)&&Text;a&&href',
	一级:$js.toString(()=>{
		let d = [];
		let turl = (MY_PAGE === 1)? '/' : '/index_'+ MY_PAGE + '.htm';
		input = rule.homeUrl + MY_CATE + turl;
		let html = request(input);
		let list = pdfa(html, 'tr:has(>td>table.border1)');
		list.forEach(it => {
			let title = pdfh(it, 'table.border1 img&&alt');
			if (title!==""){
				d.push({
					title: title,
					desc: pdfh(it, 'table:eq(1)&&Text'),
					img: pdfh(it, 'table.border1 img&&src'),
					url: pdfh(it, 'a&&href')
				});
			}
		})
		setResult(d);
	}),
	二级:$js.toString(()=>{
	    let html=request(input);
        let info=pdfh(html,'#dede_content&&Text').replace(/\s/g,'');   
        let it=function(s){return info.slice(info.indexOf(s)+s.length).split('◎')[0]}                           
        VOD={
            vod_remarks:'译名：'+it('译名'),
            vod_year:it('年代'),
            vod_area:it('产地'),
            type_name:it('类别'),            
            vod_pic:pdfh(html,'#dete_content&&img&&src'),
            vod_director:it('导演'),
            vod_actor:it('主演').replace(/[a-zA-Z-]+/g,'/').replace(',/',''),
            vod_content:it('简介').split('【')[0],             
        }
        let a=[]; 
        pdfa(html,'body&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('thunder:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'a&&Text')+'$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='电影港';    
        VOD.vod_play_url=a.join('#');
        
    }),
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let params = 'tempid=1&tbname=article&keyboard=' + KEY + '&show=title%2Csmalltext&Submit=%CB%D1%CB%F7';
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    method: "POST",
    body: params
};
delete(_fetch_params.headers['Content-Type']);
Object.assign(_fetch_params, postData);
log("dygang search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = request( HOST + '/e/search/index123.php', _fetch_params, true);
//log("dygang search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'table.border1');
dlist.forEach(function(it){
	let title = pdfh(it, 'img&&alt');
	if (searchObj.quick === true){
		if (false && title.includes(KEY)){
			title = KEY;
		}
	}
	let img = pd(it, 'img&&src', HOST);
	let content = pdfh(it, 'img&&alt');
	let desc = pdfh(it, 'img&&alt');
	let url = pd(it, 'a&&href', HOST);
	d.push({
		title:title,
		img:img,
		content:content,
		desc:desc,
		url:url
		})
});
setResult(d);
`,
}
