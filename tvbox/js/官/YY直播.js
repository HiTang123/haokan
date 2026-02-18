var rule = {
    title: 'YY直播[官]',
    host: 'https://www.yy.com',
    homeUrl: '/more/page.action?biz=sing&subBiz=idx&page=1&moduleId=308&pageSize=24',
    url: '?tid=fyclass',
    class_name: '综合&音乐&脱口秀&舞蹈&户外&颜值&喊麦&体育&二次元&王者荣耀',
    class_url: 'zonghe_&sing_308&talk_328&dance_313&red_1872&pretty_449237&mc_322&sport_449359&car_1877&game_1180',
    detailUrl: '#fyid',
    searchUrl: '/apiSearch/doSearch.json?q=**&t=120&n=fypage',
    searchable: 2,
    quickSearch: 1,
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    limit: 8,
    play_parse: true,
    lazy: `js:
        let flag=input.split('|');
        if (flag[0]=='parse') {
            input = { jx: 0, parse: 1, url: HOST+'/'+flag[1]+'/'+flag[1]}
        } else if(flag[0]=='jx') {   
           /* let jxurl="http://cfss.cc/Cf/yy/"+flag[1]+".flv";
            let a=request(jxurl);
            let b=a.match(/(?<=url: ').*?(?=',)/)[0];   
            let c=b.startsWith('//') ? "http:"+b : b;  */  
            input = { jx: 0, parse: 0, url: 'https://yylunbo.ottiptv.cc/yy/'+flag[1] }
        }
    `,
    推荐: `js:
        let d=[];      
        let jo=JSON.parse(request(input)).data.data;        
        jo.forEach(it => {      
                d.push({
                    url: it.sid+'#'+it.desc,
                    title: it.desc,
                    img: it.thumb,
                    desc: (it.users>=10000?(it.users/10000).toFixed(1)+'万':it.users)+'•'+it.name,
                })
        });
        setResult(d);
    `,
    一级: `js:
        let d=[],jo=[];
        let info=getQuery(input).tid.split('_');
        if(info[0]=='zonghe'){
            jo=JSON.parse(request(HOST+'/apiSearch/doSearch.json?q=综合&t=120&n='+MY_PAGE)).data.searchResult.response["120"].docs;         
        }else{
            jo=JSON.parse(request(HOST+'/more/page.action?biz='+info[0]+'&subBiz=idx&page='+MY_PAGE+'&moduleId='+info[1]+'&pageSize=24')).data.data;
        }
        jo.forEach(it => {  
                let name=it.desc ?? it.channelName;          
                d.push({
                    url: it.sid+'#'+name,
                    title: name,
                    img: it.thumb ?? it.posterurl,
                    desc: (it.users>=10000?(it.users/10000).toFixed(1)+'万':it.users)+'•'+it.name,
                })
        });
        setResult(d);
    `,
    二级: `js:
       let info=input.split('#');       
       VOD.vod_content=HOST+'/'+info[1];
       VOD.vod_play_from='解析$$$嗅探';     
       VOD.vod_play_url=info[2]+'$jx|'+info[1]+'$$$'+info[2]+'$parse|'+info[1];
    `,
    搜索: `js:
        var d = [];
        let jo = JSON.parse(request(input)).data.searchResult.response["120"].docs;
        jo.forEach(it => {
            d.push({
                url: it.sid+'#'+it.channelName,
                title: it.channelName,
                img: it.posterurl,
                desc:(it.users>=10000?(it.users/10000).toFixed(1)+'万':it.users)+'•'+ it.name,
            })
        });
        setResult(d);
    `,
}