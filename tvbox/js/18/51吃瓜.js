var rule = {
    title:'',
    host:'',
    url:'',
    searchUrl:'',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'',
    class_url:'',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];
        let list=JSON.parse(request());            
        list.forEach(it=>{
            d.push({
                title:,
                desc:,
                img:,
                url:
            })
        })  
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[];
        let list=JSON.parse(request());            
        list.forEach(it=>{
            d.push({
                title:,
                desc:,
                img:,
                url:
            })
        })  
        setResult(d)
    }),
    二级:$js.toString(()=>{                                
        VOD.vod_name=;
        VOD.vod_pic=;
        VOD.vod_actor=;
        VOD.vod_content=; 
        VOD.vod_play_from=;          
        VOD.vod_play_url=;
    }),
    搜索:$js.toString(()=>{
        let d=[];
        let list=JSON.parse(request());            
        list.forEach(it=>{
            d.push({
                title:,
                desc:,
                img:,
                url:
            })
        })  
        setResult(d)
    }),
}