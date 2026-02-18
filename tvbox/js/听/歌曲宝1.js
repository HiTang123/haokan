var rule = {
    title:'歌曲宝',
    host :'https://www.gequbao.net',
    homeUrl:'/history/1',
    url:'/top/fyclass?page=fypage',
    searchUrl:'/s/**',
    //detailUrl:'#fyid',
    searchable:1,
    quickSearch:1,
    class_name:'昨日榜&本周榜&本月榜&上月榜',
    class_url:'yesterday&week&month&last-month',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];      
        let list=pdfa(request(input),'tbody&&tr');
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'a&&Text'),
                img:'https://mms2.baidu.com/it/u=690130528,3699877876&fm=253&app=138&f=PNGw=1000&h=1000',
                url:pdfh(it,'a&&href')+'€列表'
            })
        })        
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[],list=[];
        if(cateObj.tid.endsWith('_clicklink')&&MY_PAGE==1){
            cateObj.tid=cateObj.tid.split('_')[0];     
            list=pdfa(request(HOST+'/s/'+cateObj.tid),'body&&.row:has(.col-content)');
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,'.col-8&&Text').split('-')[0],
                    desc:pdfh(it,'.col-8&&Text').split('-')[1],
                    img:'https://mms2.baidu.com/it/u=690130528,3699877876&fm=253&app=138&f=PNGw=1000&h=1000',
                    url:pdfh(it,'a&&href')+'€单曲'
                })
            })
        }else{  
            list=pdfa(request(input),'tbody&&tr');
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,'a&&Text'),
                    img:'https://mms2.baidu.com/it/u=690130528,3699877876&fm=253&app=138&f=PNGw=1000&h=1000',
                    url:pdfh(it,'a&&href')+'€列表'
                })
            })
        }
        setResult(d)
    }),
    二级:$js.toString(()=>{
        let info=input.split('€');
        VOD={};
        if(info[1]=='列表'){
            VOD.vod_play_from='歌曲宝';          
            VOD.vod_play_url=pdfa(request(info[0]),'body&&.row:has(.col-content)').map(it=>{return pdfh(it,'.col-8&&Text')+'$'+HOST+pdfh(it,'a&&href')}).join('#');
        }else{
            let data=request(info[0]);
            let actor=pdfh(data,'#music-title&&button&&Text').split('-')[1].trim();   
            VOD.vod_actor='[a=cr:'+JSON.stringify({'id':actor+'_clicklink','name':'〖'+actor+'〗的专辑列表'})+'/]'+actor+'[/a]';
            VOD.vod_pic=pdfh(data,'#aplayer&&img&&src');
            VOD.vod_content=pdfh(data,'.content-lrc&&Text').split('[').map(it=>{return it.split(']')[1]}).join('\n')
            VOD.vod_play_from='歌曲宝';          
            VOD.vod_play_url=pdfh(data,'#music-title&&button&&Text')+'$'+info[0];           
        }
       
    }),
    搜索:$js.toString(()=>{
        let d=[];        
        let list=pdfa(request(input),'body&&.row:has(.col-content)');
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'.col-8&&Text').split('-')[0],
                desc:pdfh(it,'.col-8&&Text').split('-')[1],
                img:'https://mms2.baidu.com/it/u=690130528,3699877876&fm=253&app=138&f=PNGw=1000&h=1000',
                url:pdfh(it,'a&&href')+'€单曲'
            })
        })
        setResult(d)
    }),
}