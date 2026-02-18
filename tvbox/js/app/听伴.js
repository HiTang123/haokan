//let key='e41c8e362210fd9249e24b88f1b2c3e0';
//globalThis.arr=['appid=jg8444','deviceid=4cea09ddf9b8370456cdae2d1de5f610','openid=jg84442024090210038819','os=android','packagename=com.edog.car']; 
//globalThis.sign=md5(key+arr.map((x,y)=>{return y+x}).join('')+key);
globalThis.body='&appid=jg8444&openid=jg84442024090210039525&deviceid=8535c76203154ac2619b9001736d3fc5&os=android&packagename=com.edog.car&sign=317eb8c2a1dd6d4836829cc4a2f2603f';
var rule = {
    title: '听伴',
    host: 'https://open.kaolafm.com',
    url:'/v2/album/list?cid=fyclass&sorttype=1&pagenum=fypage&pagesize=20'+body+'&channel=fyfilter',
    searchUrl: '/v2/resource/voice/searchall?sign=187c9285558e8c48ecc3822bcc5d1822&q={"category":"","albumName":"","artist":"","audioName":"","field":2,"tag":1,"text":"**","keyword":"**"}'+body,
    detailUrl:'fyid',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    filter:{
        "广播":[
          {"key":"channel","name":"频道","value":[{"n":"北京","v":"1_2_1"},{"n":"重庆","v":"1_2_20"},{"n":"上海","v":"1_2_28"},{"n":"天津","v":"1_2_2"},{"n":"安徽","v":"1_2_12"},{"n":"福建","v":"1_2_25"},{"n":"广东","v":"1_2_26"},{"n":"甘肃","v":"1_2_17"},{"n":"广西","v":"1_2_27"},{"n":"贵州","v":"1_2_23"},{"n":"河北","v":"1_2_7"},{"n":"湖北","v":"1_2_21"},{"n":"河南","v":"1_2_8"},{"n":"湖南","v":"1_2_22"},{"n":"海南","v":"1_2_31"},{"n":"黑龙江","v":"1_2_6"},{"n":"吉林","v":"1_2_3"},{"n":"江苏","v":"1_2_13"},{"n":"江西","v":"1_2_11"},{"n":"辽宁","v":"1_2_29"},{"n":"内蒙","v":"1_2_4"},{"n":"宁夏","v":"1_2_18"},{"n":"青海","v":"1_2_30"},{"n":"四川","v":"1_2_19"},{"n":"山东","v":"1_2_10"},{"n":"山西","v":"1_2_9"},{"n":"陕西","v":"1_2_5"},{"n":"云南","v":"1_2_24"},{"n":"浙江","v":"1_2_15"},{"n":"新疆","v":"1_2_14"},{"n":"西藏","v":"1_2_16"}]},
          {"key":"channel","name":"频道","value":[{"n":"网络台","v":"1_3_0"},{"n":"交通台","v":"2_6_0"},{"n":"经济台","v":"2_7_0"},{"n":"新闻台","v":"2_8_0"},{"n":"音乐台","v":"2_9_0"},{"n":"校园台","v":"2_10_0"},{"n":"娱乐台","v":"2_11_0"},{"n":"方言台","v":"2_12_0"},{"n":"曲艺台","v":"2_13_0"},{"n":"外语台","v":"2_14_0"},{"n":"文艺台","v":"2_15_0"},{"n":"旅游台","v":"2_16_0"},{"n":"体育台","v":"2_17_0"},{"n":"生活台","v":"2_18_0"},{"n":"都市台","v":"2_19_0"},{"n":"综合台","v":"2_20_0"},{"n":"民族台","v":"2_21_0"}]}
        ]
    },
    filter_url: '{{fl.channel}}',
    filter_def: {广播:{channel:'1_2_8'}},
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_name: '在线广播&精选节目&云听精制&头条新闻&小说广播剧&综艺幽默&曲艺评书&财经科技&音乐节目&历史人文&儿童宝贝&健康生活&交通汽车',
    class_url:'广播&精选&4488&4396&3822&3820&4607&3819&4608&3821&4397&3824&3825',    
    推荐: $js.toString(()=>{
    	let d=[];
        let data=JSON.parse(request(HOST+'/v2/radioLable/list?'+body)).result.dataList;         
        data.forEach(it => {    
            d.push({             
                url: '€广播€'+it.desc+'€'+it.audios.map(i=>{return i.audioName+'¥'+i.aacPlayUrl128}).join('#'),
                title: it.rname,
                img: it.image,
                desc: it.updateTime
            })
       })   
       setResult(d)
    }),
    一级: $js.toString(()=>{
        let d=[];
        if(MY_CATE=='广播'&&MY_PAGE==1){
            let info=getQuery(input).channel.split('_');
            input=HOST+'/v2/broadcast/list?type='+info[0]+'&classifyid='+info[1]+'&pagenum=1&pagesize=100&area='+info[2]+body;
            let data=JSON.parse(request(input)).result.dataList;   
            data.forEach(it => {    
              d.push({             
                url: '€广播€'+it.freq+'€'+it.name+'¥'+it.playUrl,
                title: it.name,
                img: it.img,
                desc:it.freq
              })
            })
        }else{
            if(MY_CATE=='精选'){
              input=HOST+'/v2/operate?pagenum='+MY_PAGE+'&pagesize=20'+body;
            }
            let data=JSON.parse(request(input)).result.dataList;   
            data.forEach(it => {    
              d.push({             
                url: '€有声€'+(it.rid??it.id)+'€'+(it.desc??''),
                title: it.rname??it.name,
                img: it.image??it.img,
                desc:it.listenNum>100000000?(it.listenNum/100000000).toFixed()+'亿':(it.listenNum>10000?(it.listenNum/10000).toFixed()+'万':it.listenNum)
              })
            }) 
        }       
        setResult(d)
    }),
    二级: $js.toString(()=>{
        let info=input.split('€');
        if(info[1]=='广播'){          
            VOD={
                vod_content:info[2],
                vod_play_from:'考拉FM',
                vod_play_url:info[3].replaceAll('¥','$')
            }                   
        }else{
            let data=JSON.parse(request(HOST+'/v2/audio/list?aid='+info[2]+'&sorttype=1&pagesize=100&pagenum=1'+body)).result;
            let sumpage=data.sumPage>10?10:data.sumPage;            
            let page=0,playUrls=[];
            while(page<sumpage){
                page+=1;
                let list=JSON.parse(request(HOST+'/v2/audio/list?aid='+info[2]+'&sorttype=1&pagesize=100&pagenum='+page+body)).result.dataList;
                list.forEach(it=>{playUrls.push(it)});
            }
            VOD.vod_content=info[3],
            VOD.vod_play_from='听伴';
            VOD.vod_play_url=playUrls.map(it=>{return it.audioName+'$'+it.aacPlayUrl128}).join('#');            
        }
    }),
    搜索: $js.toString(()=>{
        let d=[];
        if(MY_PAGE==1){
            let data=JSON.parse(request(input)).result.dataList;         
            data.forEach(it => {
                let a='';  
                if(it.type==0){
                    a='€有声€'+it.id+'€'+it.sourceName
                }else{
                    a='€广播€'+it.sourceName+'€'+it.name+'¥'+it.playUrl
                }
                d.push({             
                    url: a,
                    title: it.name,
                    img: it.img,
                    desc:it.listenNum>100000000?(it.listenNum/100000000).toFixed()+'亿':(it.listenNum>10000?(it.listenNum/10000).toFixed()+'万':it.listenNum)              
                })
           }) 
       }  
       setResult(d)
    }),
}