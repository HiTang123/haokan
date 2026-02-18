var rule = {
    title:'牛牛美剧',
    host:'https://www.nnmeiju.xyz',
    url:'/index.php/movie_bt_cat/fyclass/page/fypage/[/index.php/movie_bt_cat/fyclass/]',
    searchUrl:'',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'美剧&英剧',
    class_url:'america&england',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:'*',
    一级:'body&&li:has(img);img&&alt;img&&data-original;;a&&href',
    二级:$js.toString(()=>{                                
        let html=request(input);
        let it=pdfa(html,'.moviedteail_list&&li')
        VOD={
            vod_remarks:'又名：'+pdfh(it[0],'a&&Text'),
            vod_name:pdfh(html,'.moviedteail_tt&&h1&&Text'),
            vod_year:pdfh(it[3],'a&&Text'),
            vod_area:pdfh(it[2],'a&&Text'),
            type_name:pdfh(it[1],'a&&Text'),            
            vod_pic:pdfh(html,'.dyimg&&img&&src'),
            vod_director:pdfh(it[5],'li&&Text').replace('导演：',''),
            vod_actor:pdfh(it[7],'li&&Text').replace('主演：',''),
            vod_content:pdfh(html,'.yp_context&&Text')           
        }
        let a=[]; 
        pdfa(html,'table#cili&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('thunder:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'a&&Text')+'$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='牛牛美剧';    
        VOD.vod_play_url=a.join('#');
    }),
    搜索:$js.toString(()=>{
       /* let d=[];
        let list=JSON.parse(request());            
        list.forEach(it=>{
            d.push({
                title:,
                desc:,
                img:,
                url:
            })
        })  
        setResult(d)*/
    }),
}