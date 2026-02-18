var rule = {
    title:'八一视频',
    host:'http://tv.81.cn',
    url:'/fyclassfyfilter/index_fypage.html[/fyclassfyfilter/index.html]',
    detailUrl:'fyid',  
    class_name:'军事最前沿&军旅微影像&八一竖品&军报每天读&嘉宾面对面&迷彩舞台&中国军视&直播',
    class_url:'jszqy&jlwyx&bysp&jbmtd_211970&jbmdm&mcwt&zgjs&zb',
    filter_url:'{{fl.tid}}',
    filter:{
        "zgjs":[{"key":"tid","name":"分类","value":[{"n":"军事报道","v":"/jsbd"},{"n":"国防军事早报","v":"/gfjszb"},{"n":"军事纪实","v":"/jsjs"},{"n":"防务新观察","v":"/fwxgc"},{"n":"讲武堂","v":"/jwt"},{"n":"军迷行天下","v":"/jmxtx"},{"n":"军事科技","v":"/jskj"},{"n":"老兵你好","v":"/lbnh"},{"n":"谁是终极英雄","v":"/sszjyx"},{"n":"军事制高点","v":"/jszgd"}]}]
    },
    filter_def:{
        zgjs:{tid:'/jsbd'}
    },
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),"body&&.pic-text-list");
        list.forEach(it=>{
            d.push({
                title:pdfh(it,".text-list&&Text"),                   
                img:HOST+pdfh(it,"img&&src"),
                url:pdfh(it,"a&&href")
            })
        })
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[],list=[];
        if(MY_CATE==='zb'){
            list=pdfa(request(input),"body&&.m-b-md");
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,"img&&alt"),
                    desc:pdfh(it,".time&&Text"),
                    img:HOST+pdfh(it,"img&&src"),
                    url:pdfh(it,"a&&href")
                })
            })
        }else{
            list=pdfa(request(input),"body&&.content-box");            
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,"i&&.title&&Text"),
                    desc:pdfh(it,"small&&Text")+"●"+pdfh(it,".video-des&&span&&Text"),
                    img:HOST+pdfh(it,"img&&src"),
                    url:pdfh(it,".video-des&&href")+"○"+pdfh(it,".desc&&Text")+"○"+pdfh(it,"small&&Text")
                })
            })
        }  
        setResult(d)
    }),
    二级:$js.toString(()=>{  
        let a=input.split("○");                                             
        VOD.vod_year=a[2];          
        VOD.vod_content=a[1]; 
        VOD.vod_play_from="八一视频";          
        VOD.vod_play_url="点击播放$"+a[0];        
    }),
    搜索:$js.toString(()=>{
        
    }),
}