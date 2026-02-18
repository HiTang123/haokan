var rule = {
    title:'好看视频',
    host:'https://haokan.baidu.com',
    homeUrl: '/videoui/list/tab?newtpl=1&source=wise-channel&subTab=recommend&direction=down&bt=1564577165&refreshType=1',
    url:'/videoui/list/tab?newtpl=1&source=wise-channel&subTab=fyclass&direction=down&bt=1564577165&refreshType=1',
    detailUrl:'fyid',
    searchUrl:'/?wd=**',
    searchable:2,
    quickSearch:1,
    class_name: '放映厅&影视&音乐&VLOG&游戏&搞笑&综艺&娱乐&动漫&生活&广场舞&美食&宠物&三农&军事&社会&体育&科技&时尚&汽车&亲子&文化&旅游&秒懂',
    class_url: 'projection_hall&yingshi&yinyue&vlog&youxi&gaoxiao&zongyi&yule&dongman&shenghuo&guangchangwu&meishi&chongwu&sannong&junshi&shehui&tiyu&keji&shishang&qiche&qinzi&wenhua&lvyou&miaodong',  
    headers:{'User-Agent':'IOS_UA'},
    timeout:5000,
    limit:15,
    play_parse: true,
    lazy: `js:
        if (/m3u8|mp4/.test(input)) {
            input = { jx: 0, parse: 0, url: input }
        } else {       
            input = { jx: 0, parse: 1, url: input }
        }
    `,
    推荐: '*',
    一级: $js.toString(() => {
        let d=[]; 
        while(d==''){ //强制获取数据
          try {
            let list=JSON.parse(request(input+'&_='+(Date.now()/1000).toString().split('.')[0]+'000')).data.list;       
            list.forEach(it=>{
                let q=it.videoInfo.clarityUrl;
                let qn=[],qu=[];
                q.forEach(i=>{
                    qn.push(i.title);
                    qu.push(it.title+'#'+i.url)
                });
                d.push({
                       title:it.title,
                       desc:it.durationText+'•'+it.playcntText,
                       pic_url:it.thumbnail,
                       url:'€'+qn.reverse().join('###')+'€'+qu.reverse().join('###')+'€'+it.author,
                    })
            })
          }catch(e){}
          if(d==''){continue}else{break}          
        }  
        setResult(d)
    }),
    二级: $js.toString(() => {
        VOD.vod_actor=input.split('€')[3];
        VOD.vod_play_from=input.split('€')[1].replaceAll('#','$');
        VOD.vod_play_url=input.split('€')[2].replaceAll('#','$');
    }),
    搜索:$js.toString(() => {     
        let d=[];
        let key=getQuery(input).wd;
        let ctime=Date.now();
        input=HOST+'/haokan/ui-search/pc/search/video?pn='+MY_PAGE+'&rn=10&type=video&query='+key+'&sign='+md5(MY_PAGE+'_'+encodeUrl(key)+'_10_'+ctime+'_1')+'&version=1&timestamp='+ctime;      
        let list=JSON.parse(request(input)).data.list;
        list.forEach(it=>{
            d.push({
                   title:it.title,
                   desc:it.duration+'•'+it.read_num+'•'+it.publishTimeText,
                   pic_url:it.cover_src,
                   url:'€'+'好看视频'+'€'+it.title+'#'+it.url+'€'+it.author
                })  
         });        
        setResult(d)
      }),
}