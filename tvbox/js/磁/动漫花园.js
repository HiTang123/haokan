var rule = {
    title:'动漫花园',
    host:'https://www.dongmanhuayuan.com',
    url:'/fyclass',
    searchUrl:'/search/**/fypage.html',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'最近更新',
    class_url:' ',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    推荐:'*',
    一级:'ul.uk-list&&li;a&&Text;;.uk-width-small&&Text;a&&href',
    二级:$js.toString(()=>{                                
       let a=[];
       let html=request(input);
       pdfa(html,'body&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('thunder:')||b.startsWith('ed2k:')){
                a.push('动漫花园$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='动漫花园';    
        VOD.vod_play_url=a.join('#');
    }),
    搜索:'*',    
}