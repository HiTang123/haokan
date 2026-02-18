globalThis.className='黄梅戏&京剧&豫剧&曲剧&秦腔&潮剧&沪剧&昆曲&淮剧&婺剧&河南大鼓书&滇剧&老年大学&绍剧&曲艺晚会&皮影戏&四平调&吕剧&柳琴戏&莆仙戏&宛梆&锡剧&大平调&话剧&西秦戏&川剧&赣剧&太康道情&闽剧&梅花大鼓&吉剧&白字戏&越剧&评剧&坠子&河北梆子&粤剧&二夹弦&河南琴书&戏曲&二人台&越调&乐腔&扬剧&京韵大鼓&彩调&琼剧&蒲剧&西河大鼓&湘剧&麦田乡韾&评书&庐剧&单弦&花鼓戏&相声&四股弦&保定老调&晋剧&其他&正字戏&楚剧';
globalThis.classUrl='hmx&jingju&yuju&quju&qinq&chaoju&huju&kunqu&huaiju&wuju&hndgs&dianju&WK&shaojv&else&pyx&spd&lvjv&liuqx&pxx&wb&xiju&dpd&huaju&xqx&chuanju&tagId&tkdq&minju&mhdg&jiju&bzx&yueju&pingju&hnzz&hbbz&gddx&ejx&hnqs&xq&ERT&yued&lq&yangju&jydg&caidiao&qiongju&pujv&xhdg&xj&mtxy&pingshu&luju&danxian&huagx&xiang&sgx&bdld&jinju&other&zzx&chuju';
let filter={};
let filterdef={};
classUrl.split('&').forEach(it=>{
            filter[it]=[
                {"key": "area", "name": "地区", "value": [{"n":"全部","v":"0"},{"n":"免费","v":"1"},{"n":"VIP","v":"2"}]},
                {"key":"sort","name":"排序","value":[{"n":"最热","v":"hot"},{"n":"最新","v":"online"}]}
            ];
            filterdef[it]={sort:'hot'}
        })
globalThis.filterData=filter;
globalThis.filterDef=filterdef;
var rule = {
    title: '梨园行',
    host: 'https://fly.daoran.tv',
    url: '?channel=fyclass',
    class_name:className,
    class_url:classUrl,
    filterable: 1,
    filter_url: '&area={{fl.area}}&sort={{fl.sort}}',
    filter:filterData,
    filter_def:filterDef,
    detailUrl: 'fyid',
    searchUrl: '?wd=**',
    searchable: 1,
    quickSearch: 0,
    headers: {
        'md5': 'SkvyrWqK9QHTdCT12Rhxunjx+WwMTe9y4KwgeASFDhbYabRSPskR0Q==',
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Length': '192',
        'Host': 'fly.daoran.tv',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'User-Agent': 'okhttp/3.12.10'
    },
    timeout: 5000,
    limit: 6,
    play_parse: true,
    lazy: $js.toString(() => {
        let data={"item": "y9","mask": 0,"nodeCode": "001000","project": "lyhxcx","px": 2,"resCode": input,"userId": "92315ec6e58a45ba7f47fd143b3d7956"};
        let html=post(HOST+'/API_ROP/play/get/playurl',{headers: rule.headers,body: data});
        let playurl=JSON.parse(html).playres.playurl;
        input = {jx:0,parse:0,url:playurl }     
    }),
    推荐: $js.toString(()=>{
        let d = [];
        let cateData ={'cur': 1,'free': 0,'orderby': 'hot','pageSize': 30,'resType': 1,'sect': '','tagId': 0,'userId': '92315ec6e58a45ba7f47fd143b3d7956','channel': 'vivo','item': 'y9','nodeCode': '001000','project': 'lyhxcx'};      
        let html = post(HOST+'/API_ROP/search/album/screen',{headers: rule.headers,body: cateData});
        let list=JSON.parse(html).pb.dataList; 
        list.forEach(it => {
            d.push({
                title: it.name,                   
                desc: it.publishTime,
                img: 'https://ottphoto.daoran.tv/HD/' + it.imgsec,
                url: '|'+it.code
            })
        })
        setResult(d)
    }),
    一级: $js.toString(()=>{
        let d = [];
        let fl=getQuery(input);
        let cateData ={'cur': MY_PAGE,'free': fl.area,'orderby': fl.sort,'pageSize': 30,'resType': 1,'sect': fl.channel,'tagId': 0,'userId': '92315ec6e58a45ba7f47fd143b3d7956','channel': 'vivo','item': 'y9','nodeCode': '001000','project': 'lyhxcx'};      
        let html = post(HOST+'/API_ROP/search/album/screen',{headers: rule.headers,body: cateData});
        let list=JSON.parse(html).pb.dataList; 
        list.forEach(it => {
            d.push({
                title: it.name,                   
                desc: it.publishTime,
                img: 'https://ottphoto.daoran.tv/HD/' + it.imgsec,
                url: '|'+it.code
            })
        })
        setResult(d)
    }),
    二级: $js.toString(() => {
        let data={"albumCode": input.split('|')[1],"cur": 1,"pageSize": 100,"userId": "92315ec6e58a45ba7f47fd143b3d7956","channel": "vivo","item": "y9","nodeCode": "001000","project": "lyhxcx"};
        let html=post(HOST+'/API_ROP/album/res/list',{headers: rule.headers,body: data});
        let desc=JSON.parse(html).album;
        let playUrls=JSON.parse(html).pb.dataList.map(it=>{return it.name+'$'+it.code}).join('#');          
        VOD.vod_year=desc.publishTime;
        VOD.vod_actor=desc.artistName;
        VOD.vod_content=desc.des;
        VOD.vod_play_from='梨园行';
        VOD.vod_play_url=playUrls;    
    }),
    搜索: $js.toString(() => {
            let key=getQuery(input).wd;
            let d=[];
            let body={"cur":MY_PAGE,"free":0,"item":"y9","keyword":key,"nodeCode":"001000","orderby":"hot","pageSize":10,"project":"lyhxcx","px":2,"sect":[],"userId":"92315ec6e58a45ba7f47fd143b3d7956"}; 
            let html = post(HOST+'/API_ROP/search/album/list',{headers: rule.headers,body: body});       
            let list = JSON.parse(html).pb.dataList; 
            list.forEach(data => {
                    d.push({
                        title: data.name,
                        desc: data.publishTime,
                        content: data.des,
                        img: 'https://ottphoto.daoran.tv/HD/' + data.imgsec,
                        url:'|'+data.code       
                    })
                })            
            setResult(d);
    }),
}
    