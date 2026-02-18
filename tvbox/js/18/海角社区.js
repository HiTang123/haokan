var rule = {
    title: '海角社区',
    /*https://mimi.mimiyanxishe.cc/*/
    host:'https://action.dretjssz.xyz',
    url: '/',    
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_name: '海角首页',
    class_url: '',
    limit: 6,
    推荐: '*',
    double: true, 
    一级:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),"body&&.xqbj-list-rows:has(h3)");
        list.forEach(it=>{
            d.push({
                //title:pdfh(it,"h3&&Text"),                   
                title:pdfh(it,"img&&z-image-loader-url").replaceAll("`",""),
                url:pdfh(it,"a&&href")
            })
        })
        setResult(d)
    }),
    二级: $js.toString(() => {
        //VOD.vod_play_from="秘密研习社";
        //VOD.vod_play_url='立即播放$'+getQuery(HOST+pdfh(request(input.replace("detail","conter")),'iframe&&src')).Play;
    }),
}