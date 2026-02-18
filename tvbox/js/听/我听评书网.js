var rule = {
    title:'我听评书网',
    host:'https://www.zipingshu.com',
    url:'/fyclassfyfilter/indexfypage.html[/fyclassfyfilter/index.html]',
    filter_url:'{{fl.tid}}',
    searchUrl:'?q=**',
    detailUrl:'',
    class_name:'评书&相声&百家讲坛&小品&戏曲&故事&琴书&评弹&二人转&京剧&小说',
    class_url:'pingshu&xiangsheng&baijiajiangtan&xiaopin&xiqu&gushi&qinshu&pingtan&2renzhuan&jingju&xiaoshuo',
    filter:{
        "pingshu":[{"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"单田芳","v":"/shantianfang"},{"n":"刘兰芳","v":"/liulanfang"},{"n":"田连元","v":"/tianlianyuan"},{"n":"袁阔成","v":"/yuankuocheng"},{"n":"刘立福","v":"/liulifu"},{"n":"连丽如","v":"/lianliru"},{"n":"张少佐","v":"/zhangshaozuo"},{"n":"陈青远","v":"/chenqingyuan"},{"n":"田战义","v":"/tianzhanyi"},{"n":"李鑫荃","v":"/lixinquan"}]}],
        "xiangsheng":[{"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"郭德纲","v":"/guodegang"},{"n":"于谦","v":"/yuqian"},{"n":"岳云鹏","v":"/yueyunpeng"},{"n":"德云社","v":"/deyunshe"}]}]
    },
    searchable:1,
    quickSearch:1,   
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),'body&&.item');            
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'a&&title'),
                desc:pdfh(it,'.btm&&Text').replaceAll(' ','•'),
                img:pdfh(it,'img&&src'),
                url:pdfh(it,'a&&href')
            })
        })  
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),'body&&.hotcontent:eq(1)&&.item');            
        list.forEach(it=>{            
            d.push({
                title:pdfh(it,'a&&title'),
                desc:pdfh(it,'.btm&&Text').replaceAll(' ','•'),
                img:pdfh(it,'img&&src'),
                url:pdfh(it,'a&&href')
            })
        })  
        setResult(d)
    }),
    二级:$js.toString(()=>{
        let html=request(input);
        let info=pdfa(html,'#info&&p');                            
        VOD.vod_name=pdfh(html,'.lazy&&alt');
        VOD.vod_pic=pdfh(html,'img&&.5tpsw&&src');
        VOD.vod_actor=pdfh(info[0],'Text').replace('作者：','').replaceAll(' ',',');
        VOD.vod_year=pdfh(info[4],'Text').split('|')[1]+pdfh(info[3],'Text');
        VOD.vod_remarks=pdfh(info[4],'Text');
        VOD.vod_content=pdfh(html,'#intro&&Text'); 
        VOD.vod_play_from='我听评书';          
        VOD.vod_play_url=pdfa(html,'.book-info-main&&li').map(it=>{return pdfh(it,'a&&title')+'$'+HOST+pdfh(it,'a&&href')}).join('#');
    }),
    搜索:$js.toString(()=>{
        let d=[];
        if(MY_PAGE==1){
            let list=pdfa(request('https://cn.bing.com/search?q=site%3Azipingshu.com+'+getQuery(input).q),'body&&a:has(h2)');            
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,'a&&Text'),              
                    img:'https://i04piccdn.sogoucdn.com/62fa7fb2f3e866df',
                    url:pdfh(it,'a&&href')
                })
            })
        }  
        setResult(d)
    }),
}