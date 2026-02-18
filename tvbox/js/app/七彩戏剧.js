var rule = {
    title: '七彩戏剧',
    host: 'http://bestv.com',
    url: '?fyfilter',
    homeUrl:'',
    class_name:'京剧&昆剧&越剧&沪剧&淮剧&评弹&滑稽戏&电视栏目',
    class_url: '京剧&昆剧&越剧&沪剧&淮剧&评弹&滑稽戏&电视栏目',
    filterable: 1,
    filter_url: 'channel={{fl.channel}}',
    filter:{   
     "京剧":[{"key":"channel","name":"分类","value":[{"n":"传统戏","v":"73648@73649@"},{"n":"新编历史戏","v":"73648@73650@"},{"n":"现代戏","v":"73648@73651@"},{"n":"名段欣赏","v":"73648@73652@"}]}],
     "昆剧":[{"key":"channel","name":"分类","value":[{"n":"传统戏","v":"73653@73689@"},{"n":"现代戏","v":"73653@73690@"},{"n":"新编历史戏","v":"73653@73691@"},{"n":"其他","v":"73653@73692@"}]}],
     "越剧":[{"key":"channel","name":"分类","value":[{"n":"袁派","v":"73654@73676@"},{"n":"尹派","v":"73654@73677@"},{"n":"范派","v":"73654@73678@"},{"n":"傅派","v":"73654@73679@"},{"n":"徐派","v":"73654@73680@"},{"n":"王派","v":"73654@73681@"},{"n":"张派老生","v":"73654@73682@"},{"n":"陆派","v":"73654@73683@"},{"n":"吕派","v":"73654@73684@"},{"n":"金派","v":"73654@73685@"},{"n":"戚派","v":"73654@73686@"},{"n":"毕派","v":"73654@73687@"},{"n":"张派旦角","v":"73654@73688@"}]}],
     "沪剧":[{"key":"channel","name":"分类","value":[{"n":"风华多彩","v":"73655@73675@"},{"n":"黄金一代","v":"73655@73673@"},{"n":"中生代","v":"73655@73674@"},{"n":"流派创始","v":"73655@73672@"}]}],
     "淮剧":[{"key":"channel","name":"分类","value":[{"n":"传统戏","v":"73656@73669@"},{"n":"新编历史戏","v":"73656@73670@"},{"n":"都市淮剧","v":"73656@73671@"},{"n":"现代戏","v":"73656@73733@"}]}],
     "评弹":[{"key":"channel","name":"分类","value":[{"n":"短篇与开篇","v":"73657@73668@"},{"n":"中篇","v":"73657@73667@"},{"n":"长篇","v":"73657@73666@"},{"n":"专场演出","v":"73657@73734@"}]}],
     "滑稽戏":[{"key":"channel","name":"分类","value":[{"n":"大戏","v":"73658@73664@"},{"n":"独脚戏","v":"73658@73665@"},{"n":"古装大戏","v":"73658@73735@"},{"n":"电影","v":"73658@73736@"}]}],
     "电视栏目":[{"key":"channel","name":"分类","value":[{"n":"名家名段","v":"73659@73660@"},{"n":"演唱盛会","v":"73659@73661@"},{"n":"电视书苑","v":"73659@73662@"},{"n":"梨园擂台","v":"73659@73663@"}]}]
	},		
   filter_def: {
        京剧:{channel:'73648@73649@'},
        昆剧:{channel:'73653@73689@'},
        越剧:{channel:'73654@73676@'},
        沪剧:{channel:'73655@73675@'},
        淮剧:{channel:'73656@73669@'},
        评弹:{channel:'73657@73668@'},
        滑稽戏:{channel:'73658@73664@'},
        电视栏目:{channel:'73659@73660@'}
    },
    detailUrl: 'fyid',
    searchUrl: 'https://b2cv3search.bestv.com.cn/V4/Search?UserID=023909999999999&UserGroup=OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1$QCXJ_SHAFA&PageSize=10&PageIndex=fypage&Keywords=**',
    searchable: 1,
    quickSearch: 0,
    headers: {
        "User_Agent":"MOBILE_UA"
    },
    timeout: 5000,
    limit: 6,
    推荐: $js.toString(()=>{
        let d = [];
        let post_obj={'CategoryCode':'73648#73649#','PageIndex':1,'PageSize':12,'UserGroup':'OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1'}; 
        let post_data=buildUrl('', post_obj).slice(1);         
        let html = post('http://b2cv3epg.bestv.com.cn/epg/OttService/QueryProgramee',{headers: rule.headers,body:post_data});
       let data = JSON.parse(html).Response.Body;
       data.Items.forEach(it => {     
            d.push({
                url: '|'+it.Code,
                title: it.Title,
                img: 'http://ottpic.bbtv.cn'+it.BigImage1,
               desc: it.Director,
            })
       })   
       setResult(d)
    }),
    一级: $js.toString(()=>{
        let d = [];
        let fl=getQuery(input);
        let post_obj = {'CategoryCode':fl.channel.replaceAll('@','#'),'PageIndex':MY_PAGE,'PageSize':50,'UserGroup':'OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1'}; 
        let post_data=buildUrl('', post_obj).slice(1);         
        let html = post('http://b2cv3epg.bestv.com.cn/epg/OttService/QueryProgramee',{headers: rule.headers,body:post_data});
       let data = JSON.parse(html).Response.Body;
       let total=data.TotalCount;
       let totalPages=Math.ceil(total/50);
       if(MY_PAGE<=totalPages){  
           data.Items.forEach(it => {     
                d.push({
                    url: '|'+it.Code,
                    title: it.Title,
                    img: 'http://ottpic.bbtv.cn'+it.BigImage1,
                   desc: it.Director,
                })
           })   
       }     
       setResult(d)
    }),
    二级: $js.toString(()=>{
        let info=input.split('|');
        let post_obj = {'ItemCode':info[1],'ItemType':0,'UserID':'023909999999999','UserToken':'19e0b9b622fb4607aa7ccd653e79b39f','TVID':'BESTVOEM$QCXJFF_BESTVINSIDE$QCXJFF221436FEBA1C','UserGroup':'OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1$QCXJ_SHAFA'}; 
        let post_obj1= {'ItemCode':info[1],'UserGroup':'OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1$QCXJ_SHAFA'};
        let post_data=buildUrl('', post_obj).slice(1);
        let post_data1=buildUrl('', post_obj1).slice(1);    
        let html = post('http://b2cv3ps.bestv.com.cn/ps/OttService/Auth',{headers: rule.headers,body:post_data});
        let html1 = post('https://b2cv3epg.bestv.com.cn/epg/OttService/QueryDetailV2',{headers: rule.headers,body:post_data1});
       let playurl = JSON.parse(html).Response.Body.PlayURL;
       let detail = JSON.parse(html1).Response.Body;
       VOD.vod_name=detail.name;
       VOD.vod_pic='http://ottpic.bbtv.cn'+detail.poster;
       VOD.vod_content=detail.desc;
       VOD.vod_remarks='评分：'+detail.rating.level;
       VOD.type_name=detail.programType.replace(';',',');
       VOD.vod_director=detail.director;
       VOD.vod_actor=detail.actor.replaceAll(' ',',');
       VOD.vod_year=detail.issueYear;
       VOD.vod_area=detail.region;
       VOD.vod_play_from=detail.cpDisplayName ?? '七彩戏剧';
       VOD.vod_play_url=detail.name+'$'+playurl;
    }),
    搜索: $js.toString(()=>{
       let d=[];
       let data = JSON.parse(request(input)).Response.Body.Items;
       data.forEach(it => {     
            d.push({
                url: '|'+it.Code,
                title: it.Title,
                img: 'http://ottpic.bbtv.cn'+it.BigImage1,
                desc: it.ProgramType,
            })
       })     
       setResult(d)
    }),
}
    