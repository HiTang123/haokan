var rule = {
    title:'中文播客榜',
    host:'https://xyzrank.com',
    url:'/api/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'热门节目&热门播客&新锐节目&新锐播客',
    class_url:'0&1&2&3',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    //推荐:'*',
    一级:$js.toString(()=>{
        //let js=request(pdfh(request(HOST),'head&&script:eq(1)&&src'));
        let d=[];
        if(MY_CATE=='0'||MY_CATE=='2'){
            if(MY_CATE=='0'){
                //input=js.match(/(?<=mI=").*?(?=",)/)[0];
                input=input.replace('0','episodes');
            }else{
                //input=js.match(/(?<=_I=").*?(?=";)/)[0];
                input=input.replace('2','new-episodes');
            }
            input=input+'?offset='+(MY_PAGE-1)*50+'&limit=50';
            let list=JSON.parse(request(input)).items;
            list.forEach(it=>{
                d.push({
                    title:it.title,
                    desc:(it.playCount/10000>1?(it.playCount/10000).toFixed(1)+'万':it.playCount)+'•'+it.podcastName+'•'+(it.primaryGenreName??'-')+'•'+it.lastReleaseDateDayCount.toFixed(1)+'天前',
                    img:it.logoURL.replace('100x100','400x400'),
                    url:'€单集€'+it.link
                })
            })
        }else{
            if(MY_CATE=='1'){
                //input=js.match(/(?<=pI=").*?(?=",)/)[0];
                input=input.replace('1','podcasts');
            }else{
                //input=js.match(/(?<=gI=").*?(?=",)/)[0];
                input=input.replace('3','new-podcasts');
            }
            input=input+'?offset='+(MY_PAGE-1)*50+'&limit=50';
            let list=JSON.parse(request(input)).items;
            list.forEach(it=>{
                d.push({
                    title:it.name,
                    desc:(it.avgPlayCount/10000>1?(it.avgPlayCount/10000).toFixed(1)+'万':it.avgPlayCount)+'•'+it.authorsText+'•'+(it.primaryGenreName??'-')+'•'+it.lastReleaseDateDayCount.toFixed(1)+'天前',
                    img:it.logoURL.replace('100x100','400x400'),
                    url:'€专辑€'+it.links[0].url
                })
            })
        }
        setResult(d)
    }),
    二级:$js.toString(()=>{
        let info=input.split('€');
        VOD.vod_play_from='中文播客榜';
        if(info[1]=='单集'){
            let data=JSON.parse(pdfh(request(info[2]),'head&&script:eq(0)&&Html'));
            VOD.vod_year=data.datePublished.split('T')[0];
            VOD.vod_actor=data.partOfSeries.name;
            VOD.vod_content=data.description;           
            VOD.vod_play_url=data.name+'$'+data.associatedMedia.contentUrl;
        }else{
            let data=JSON.parse(pdfh(request(info[2]),'body&&script&&Html')).props.pageProps.podcast;
            VOD.vod_year=data.latestEpisodePubDate.split('T')[0];
            VOD.vod_actor=data.brief;
            VOD.vod_content=data.description;           
            VOD.vod_play_url=data.episodes.map(it=>{return it.title+'$'+it.enclosure.url}).join('#');
        }
    }),
    搜索:$js.toString(()=>{}),
}