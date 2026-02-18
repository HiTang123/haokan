var rule = {
    title:'西瓜视频',
    host:'https://www.ixigua.com',
    homeUrl: '',
    url:'/api/feedv2/feedById?channelId=fyclass&count=9&queryCount=fypage',
    detailUrl:'fyid',
    searchUrl:'/?wd=**',
    searchable:2,
    quickSearch:1,
    class_name: '游戏',
    class_url: '94349546935',
    headers:{
        'User-Agent':'PC_UA',
        'Referer':HOST
    },
    timeout:5000,
    limit:15,
    推荐: '',
    一级: $js.toString(() => {
        let d=[]; 
        let list=JSON.parse(request(input+'&maxTime='+Date.now())).data.channelFeed.Data;       
        list.forEach(it=>{              
            d.push({
                   title:it.data.title,
                   desc:it.data.user_info.name,               
                   pic_url:it.data.image_url,           
                   url:it.key
                })
        })            
        setResult(d)
    }),
    二级: $js.toString(() => {
        VOD.vod_actor=input.split('€')[3];
        VOD.vod_play_from='abc';
        VOD.vod_play_url='abc$video://'+input;
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
                   url:'€'+'好看视频'+'€'+it.title+'#video://'+it.url+'€'+it.author
                })  
         });        
        setResult(d)
      }),
}