var rule = {
    title:'歌曲宝',
    host :'https://www.gequke.com',
    homeUrl:'/hot-music',
    url:'/fyclass?page=fypage',
    searchUrl:'/ss/**?page=fypage',
    //detailUrl:'#fyid',
    searchable:1,
    quickSearch:1,
    class_name:'飙升榜&新歌榜&抖音榜&怀旧榜&电音榜&DJ榜',
    class_url:'top/surge&top/new&top/douyin&top/jingdian&top/dianyin&top/wwdj',
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
                img:pdfh(it,'img&&src'),              
                url:pdfh(it,'a&&href')+'€单曲'
            })
        })        
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[],list=[];
        if(cateObj.tid.endsWith('_clicklink')&&MY_PAGE==1){
            cateObj.tid=cateObj.tid.split('_')[0];     
            list=pdfa(request(HOST+'/ss/'+cateObj.tid+'?page='+MY_PAGE),'tbody&&tr');
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,'a&&Text'),
                    //desc:pdfh(it,'.col-8&&Text').split('-')[1],
                    img:'https://mms2.baidu.com/it/u=690130528,3699877876&fm=253&app=138&f=PNGw=1000&h=1000',
                    url:pdfh(it,'a&&href')+'€单曲'
                })
            })
        }else{  
            list=pdfa(request(input),'tbody&&tr');
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,'a&&Text'),
                    img:pdfh(it,'img&&src'),
                    url:pdfh(it,'a&&href')+'€单曲'
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
            let actor=pdfh(data,'h2&&Text').split('-')[1].trim();   
            VOD.vod_actor='[a=cr:'+JSON.stringify({'id':actor+'_clicklink','name':'〖'+actor+'〗的专辑列表'})+'/]'+actor+'[/a]';
            VOD.vod_pic=pdfh(data,'#aplayer&&img&&src');
            VOD.vod_content=pdfh(data,'#content-lrc2&&Text').split('[').map(it=>{return it.split(']')[1]}).join('\n')
            VOD.vod_play_from='歌曲宝';          
            VOD.vod_play_url=pdfh(data,'h1&&Text')+'$'+info[0];           
        }
       
    }),
    搜索:$js.toString(()=>{
        let d=[];        
        let list=pdfa(request(input),'tbody&&tr');
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'a&&Text'),
                desc:pdfh(it,'Text'),
                img:'https://mms2.baidu.com/it/u=690130528,3699877876&fm=253&app=138&f=PNGw=1000&h=1000',
                url:pdfh(it,'a&&href')+'€单曲'
            })
        })
        setResult(d)
    }),
}