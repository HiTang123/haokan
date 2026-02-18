var rule = {
    title:'高清电影',
    host:'https://www.gaoqing888.com',
    url:'/fyclass?page=fypagefyfilter',
    homeUrl:'/?page=1',
    searchUrl:'/search?kw=**',
    filter_url:'&tag={{fl.tag}}&sort={{fl.sort}}',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'每日电影&选电影',
    class_url:'&movie',
    filter:{
        'movie':[
            {"key":"tag","name":"标签","value":[{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"惊悚","v":"惊悚"},{"n":"动作","v":"动作"},{"n":"动画","v":"动画"},{"n":"犯罪","v":"犯罪"},{"n":"恐怖","v":"恐怖"},{"n":"纪录片","v":"纪录片"},{"n":"悬疑","v":"悬疑"},{"n":"冒险","v":"冒险"},{"n":"科幻","v":"科幻"},{"n":"奇幻","v":"奇幻"},{"n":"家庭","v":"家庭"},{"n":"传记","v":"传记"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"音乐","v":"音乐"},{"n":"同性","v":"同性"},{"n":"运动","v":"运动"}]},
            {"key":"sort","name":"排序","value":[{"n":"按热度排序","v":"recommend"},{"n":"按时间排序","v":"time"},{"n":"按评论排序","v":"rank"}]}
           ]
    },
    filter_def:{movie:{tag:'动作',sort:'recommend'}},
    headers:{
        'User-Agent':'MOBILE_UA',
        'X-Requested-With':'XMLHttpRequest'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];
        let html=request(input);
        let list=pdfa(JSON.parse(html).content,'a');
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'img&&alt'),
                desc:pdfh(it,'p&&Text'),
                img:pdfh(it,'img&&src'),
                url:pdfh(it,'a&&href')
            })
        })        
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[],list=[];
        let html=request(input);
        if(MY_CATE=='movie'){
            list=pdfa(html,'a')
        }else{
            list=pdfa(JSON.parse(html).content,'a')
        }
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'img&&alt'),
                desc:pdfh(it,'p&&Text'),
                img:pdfh(it,'img&&src'),
                url:pdfh(it,'a&&href')
            })
        })        
        setResult(d)
    }),
    二级:$js.toString(()=>{                                
        let html=request(input);
        let it=pdfa(html,'.info&&li')
        VOD={
            vod_remarks:pdfh(it[7],'li&&Text').replace(/\s/g,''),
            vod_name:pdfh(html,'img.img-fluid&&alt'),
            vod_year:pdfh(it[5],'li&&Text').replace('上映日期：',''),
            vod_area:pdfh(it[4],'li&&Text').replace(/国家\/地区：|\s/g,''),
            type_name:pdfh(it[3],'li&&Text').replace(/类型：|\s/g,''),            
            vod_pic:pdfh(html,'img.img-fluid&&src'),
            vod_director:pdfh(it[0],'li&&Text').replace(/导演：|\s/g,''),
            vod_actor:pdfh(it[2],'li&&Text').replace(/演员：|\s/g,''),
            vod_content:pdfh(html,'.video-detail&&p:eq(4)&&Text').replace(/\s/g,'')    
        }        
        let a=[]; 
        pdfa(html,'#download-list-all&&li').forEach(i=>{
            let b=pdfh(i,'li&&a&&href')
            if(b.startsWith('magnet:')||b.startsWith('thunder:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'li&&h6&&Text')+'$'+pdfh(i,'li&&a&&href'))
            }
        })      
        VOD.vod_play_from='高清电影';    
        VOD.vod_play_url=a.join('#');
    }),
    搜索:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),'.wp-content&&.video-row');            
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'img&&alt'),
                desc:pdfh(it,'.rate-num&&Text'),
                img:pdfh(it,'img&&src'),
                url:pdfh(it,'a&&href')
            })
        })  
        setResult(d)
    }),
}