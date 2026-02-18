var rule = {
    title:'中国天气网',
    host:'https://www.weather.com.cn',
    homeUrl: '/video/index.shtml',
    url:'/pubm/fyfilter.htm?p=fypage',
    detailUrl:'fyid',
    searchUrl:'',
    searchable:2,
    quickSearch:1,
    class_name: '天气实况&天气预报&热点&生活&科普',
    class_url: '实况&预报&1&2&3',
    filterable: 1,
    filter_url: '{{fl.tid}}',
    filter: {
        "预报":[
            {"key":"tid","name":"分类","value":[{"n":"新闻联播预报","v":"video_lianbo_2021"},{"n":"朝闻天下预报","v":"zhaowen"},{"n":"午间新闻预报","v":"wujian"},{"n":"第一印象预报","v":"diyiyinxiang"},{"n":"CCTV4天气预报","v":"cctv4"},{"n":"体育天气","v":"tiyu"},{"n":"CCTV7天气预报","v":"cctv7"},{"n":"CGTNWeather","v":"cgtn"}]}
        ]
    },
    filter_def:{
        预报:{tid:'video_lianbo_2021'}
    },
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:10000,
    limit:6,
    推荐: $js.toString(() => {
        let d=[];
        let list=pdfa(request(input),'.videojuzhenlist:eq(0)&&.vjcard'); 
          list.forEach(it=>{
            d.push({
                    title:pdfh(it,'.zhuanticardtitle&&Text'),
                    desc:pdfh(it,'.date&&Text'),
                    pic_url:pdfh(it,'img&&src'),
                    url:'视频'+'|'+pdfh(it,'a,1&&href'),
                })
            })
        setResult(d)
    }),
    一级: $js.toString(() => {
        let d=[];
        let list=[];
        if(MY_CATE=='预报'){     
            let datas=request(input).replace(/(getLbDatas\(|\))/gi,'');         
            list=JSON.parse(datas).data;
            let map={
            'xianggang':'index_summer.png',
            'zhaowen':'cwtx.jpg',
            'wujian':'wjtqyb.jpg',
            'diyiyinxiang':'cctv2.jpg',
            'cctv4':'cctv4.jpg',
            'tiyu':'cctv5.jpg',
            'cctv7':'cctv7.jpg',
            'cgtn':'cgtnweather.jpg?4'
            }
            if(MY_PAGE==1){
                list.forEach(it=>{
                    d.push({
                        title:it.title,
                        desc:it.pubDate,
                        pic_url:'https://i.i8tq.com/video/'+map[it.type],
                        url:'预报'+'|'+it.title+'|'+it.url
                    })
                })
            }
        }else if(MY_CATE=='实况'){  
            let icomfort = {
                '9999':'',
                '4':'很热，极不适应',
                '3':'热，很不舒适',
                '2':'暖，不舒适',
                '1':'温暖，较舒适',
                '0':'舒适，最可接受',
                '-1':'凉爽，较舒适',
                '-2':'凉，不舒适',
                '-3':'冷，很不舒适',
                '-4':'很冷，极不适应'
            };
            let host='http://www.nmc.cn';
            let position=JSON.parse(request(host+'/rest/position?_='+Date.now()));
            let data=JSON.parse(request(host+'/rest/weather?stationid='+position.code+'&_='+Date.now())).data;
            let real=data.real;
            let area=data.radar.title;
            let weather='当前'+real.weather.info+'•气温'+real.weather.temperature+'℃•体感'+real.weather.feelst+'℃•湿度'+real.weather.humidity+'%';
            let weatherType=icomfort[real.weather.icomfort];
            let wind=real.wind.direct+'•'+real.wind.power+'•风速'+real.wind.speed+'m/s•降水量'+real.weather.rain+'mm';
            let warn='\n\n〖预警发布〗\n'+real.warn.alert.replace('9999','暂无')+'\n〖预警详情〗\n'+real.warn.issuecontent.replace('9999','暂无')+'\n〖部门指示〗\n'+real.warn.fmeans.replace('9999','暂无')+'\n';
            let day=data.tempchart.map(it=>{
                return it.time.replaceAll(it.time.split('/')[0]+'/','')+'•'+(it.day_text=='9999'?'':it.day_text+'~')+it.night_text+'•'+it.min_temp+'~'+it.max_temp+'℃'
            }).slice(7).join('\n');
           if(MY_PAGE==1){                                   
                let tqzb=[{
                        title:'气象频道',
                        desc:'🟢直播中',
                        pic_url:'http://upload.qianlong.com/2018/1130/1543569765187.png',
                        url:'直播'+'|'+'气象频道'+'|'+'https://hls.weathertv.cn/tslslive/qCFIfHB/hls/live_sd.m3u8'
                    },{
                        title:position.city+'天气',
                        desc:real.publish_time,
                        pic_url:host+data.radar.image,
                        url:'图文'+'|'+weather+'|'+weatherType+'|'+wind+'|'+warn+'|'+day+'|'+area+'|'+'https://ghproxy.net/https://raw.githubusercontent.com/HiTang123/xyz/master/live/3.mp3'
                    }]             
               let yuntu=pdfa(request(host),'#navbar_sub_1&&li');
               yuntu.push(
                    `<a href="/publish/typhoon/probability-img2.html">台风路径预报</a>`,
                    `<a href="/publish/satellite/China_Northwest_Pacific_Ocean.html">海区红外云图</a>`
               )
               yuntu.forEach(it=>{
                d.push({
                    title:pdfh(it,'a&&Text'),
                    desc:'实时更新',
                    url:'云图'+'|'+host+pdfh(it,'a&&href')
                })
               })
               d=tqzb.concat(d)
           }              
        }else{
            list=pdfa(request(HOST+'/video/index.shtml'),'.videojuzhenlist:eq('+MY_CATE+')&&.vjcard')    
            if(MY_PAGE==1){
                list.forEach(it=>{
                    d.push({
                        title:pdfh(it,'.zhuanticardtitle&&Text'),
                        desc:pdfh(it,'.date&&Text'),
                        pic_url:pdfh(it,'img&&src'),
                        url:'视频'+'|'+pdfh(it,'a,1&&href'),
                    })
                })
            }
        }
        setResult(d)
    }),
    二级: $js.toString(() => {
        let info=input.split('|');
        let tid=info[0];
        if(tid.includes('视频')){
            let html=request(info[1]);
            let desc=pdfh(html,'.detail-txt&&Text').split('：');
            VOD={
                vod_year:desc[4],
                vod_actor:desc[3].replace('发布时间',''),
                vod_director:desc[2].replace('编辑',''),
                vod_content: desc[1].replace('来源',''),
                vod_play_from:'中国天气网',
                vod_play_url:pdfh(html,'h1&&Text')+'$'+pdfh(html,'#my-video&&source&&src')
            }
        }else if(tid.includes('云图')){
             let data=pdfa(request(info[1]),'.timeWrap&&.time')[0];           
             VOD={              
                vod_pic:pdfh(data,'.time&&data-img'),
                vod_content:'查看详细信息，请访问中央气象台官网\nhttp://www.nmc.cn',        
                vod_play_from:'中央气象台',
                vod_play_url:'更新时间•'+pdfh(data,'.time&&data-time')+'$'+'https://ghproxy.net/https://raw.githubusercontent.com/HiTang123/xyz/master/live/3.mp3'
            }           
        }else if(tid.includes('图文')){
              VOD={  
                vod_area:info[6],
                type_name:info[2],                       
                vod_remarks:info[1],
                vod_content:info[3]+'\n\n'+info[5]+info[4].replaceAll('。','。\n').replaceAll('：','：\n').replaceAll('；','；\n'),
                vod_play_from:'中央气象台',
                vod_play_url:info[6]+'•雷达图$'+info[7]
             }
        }else{      
            VOD={           
                vod_play_from:'中国天气网',
                vod_play_url:info[1]+'$'+info[2]
            }
        }                       
    }),
    搜索: '',
}