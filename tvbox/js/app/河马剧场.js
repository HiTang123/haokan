globalThis.lyHost='https://fly.daoran.tv';
globalThis.hmHost='https://freevideo.zqqds.cn/free-video-portal/portal/';
globalThis.lyHeaders={
        'md5': 'SkvyrWqK9QHTdCT12Rhxunjx+WwMTe9y4KwgeASFDhbYabRSPskR0Q==',
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Length': '192',
        'Host': 'fly.daoran.tv',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'User-Agent': 'okhttp/3.12.10'
}
globalThis.hmHeaders={
        'datas': 'e5f22c6e2c82fe001738cb9ce4696eab0556d064a55aef402e0fbe6b29a083f6538e4567de38e67de2071a49d9751526bfba45314e1fd4702b11c76ab9a3b5f873262854ba66e6715ed51364dbc6ee62c7180e047fcbcdbfd49874fc8f28674b16d90ca71a02de76c70598e0b75e647c37c2c19287e49be5f2a259d727dfc4df3d28802388bf3c356576b342e17e30a2ab74859263dba4d1c8eba79990d22d60d60927fdacb2addf2f0eaadd8887585ca2eb87f603faf0c207dda18cf67dc25b2199d303baff9e6605b3314a7d2631f62864f48619daceb9452f2b7b0667773553741856df030cca68af3c57810f983d452bb428ef5fc32206aef4865ae06c629bee7f5135547304acc7ef4e7c6df887308f2e79c493fd2ee03488722861b5bb51b09cb8911dfc92c288d94e601c066d2f9d612ad2c8d4eeb4920b1d44aff3e13fd75229b857f64925df1cf12f75a00d438c422ec1726462b915903f1dd1f4bb7cdf82cc15a6d507f80c789903e710f39a62aef073f3f93a6c681e75d295428aa290d7e98f82e7e9ad6e2b23d9086dfe8c63c5d8550b13fd61a77291473a8bdd43c7c2639f264be69d9d07f0585de4342a399275a64e7d1d4400b8ed4421a2f289f622e40cdd1cfc916a0b9ce747c924ac33e32d24b91ed5d64772d6ad6896412f52724006eabf12aaecfd6e81dad432c7b3800bbf793a1c375e3e7b4fb3b097724b5fc88a8c9bcf3dbc10cbdb252965',
        'content-type': 'text/plain'
}
globalThis.hmHeaders1={
        'datas': 'e5f22c6e2c82fe001738cb9ce4696eab0556d064a55aef402e0fbe6b29a083f6538e4567de38e67de2071a49d9751526bfba45314e1fd4702b11c76ab9a3b5f873262854ba66e6715ed51364dbc6ee62c7180e047fcbcdbfd49874fc8f28674b16d90ca71a02de76c70598e0b75e647c37c2c19287e49be5f2a259d727dfc4df3d28802388bf3c356576b342e17e30a2ab74859263dba4d1c8eba79990d22d60d60927fdacb2addf2f0eaadd8887585ca2eb87f603faf0c207dda18cf67dc25b2199d303baff9e6605b3314a7d2631f62864f48619daceb9452f2b7b0667773553741856df030cca68af3c57810f983d452bb428ef5fc32206aef4865ae06c629bee7f5135547304acc7ef4e7c6df887308f2e79c493fd2ee03488722861b5bb51b09cb8911dfc92c288d94e601c066d2f9d612ad2c8d4eeb4920b1d44aff3e13fd75229b857f64925df1cf12f75a00d438c422ec1726462b915903f1dd1f4bb7cdf82cc15a6d507f80c789903e710f39a62aef073f3f93a6c681e75d295428aa290d7e98f82e7e9ad6e2b23d9086dfe8c63c5d8550b13fd61a77291473a8bdd43c7c2639f264be69d9d07f0585de4342a399275a64e7d1d4400b8ed4421a2f289f622e40cdd1cfc916a0b9ce747c924ac33e32d24b91ed5d64772d6ad6896412f52724006eabf12aaecfd6e81dad432c7b3800bbf793a1c375e3e7b4fb3b097724b5fc88a8c9bcf3dbc10cbdb252965',
        'content-type': 'application/json; charset=utf-8'
}
const key = CryptoJS.enc.Hex.parse("647a6b6a67667978677368796c677a6d");
const iv = CryptoJS.enc.Hex.parse("6170697570646f776e65646372797074");
globalThis.Decrypt=function(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
globalThis.Encrypt=function(plaintext) {
    var encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    return ciphertext.toUpperCase();
}
var rule = {
    title: 'App合集',
    host: 'http://heji.app',
    url: '?fyfilter',
    class_name:'梨园行&河马剧场&七彩京剧&七彩昆剧&七彩越剧&七彩沪剧&七彩淮剧&七彩评弹&七彩滑稽戏',
    class_url: '梨园行&河马&七彩京剧&七彩昆剧&七彩越剧&七彩沪剧&七彩淮剧&七彩评弹&七彩滑稽戏',
    filterable: 1,
    filter_url: 'channel={{fl.channel}}&area={{fl.area}}&sort={{fl.sort}}',
    filter:{
    "梨园行":[
        {"key":"channel","name":"分类","value":[{"n":"全部","v":""},{"n":"黄梅戏","v":"hmx"},{"n":"京剧","v":"jingju"},{"n":"曲剧","v":"quju"},{"n":"秦腔","v":"qinq"},{"n":"潮剧","v":"chaoju"},{"n":"沪剧","v":"huju"},{"n":"昆曲","v":"kunqu"},{"n":"淮剧","v":"huaiju"},{"n":"婺剧","v":"wuju"},{"n":"河南大鼓书","v":"hndgs"},{"n":"滇剧","v":"dianju"},{"n":"老年大学","v":"WK"},{"n":"绍剧","v":"shaojv"},{"n":"曲艺晚会","v":"else"},{"n":"皮影戏","v":"pyx"},{"n":"四平调","v":"spd"},{"n":"吕剧","v":"lvjv"},{"n":"柳琴戏","v":"liuqx"},{"n":"莆仙戏","v":"pxx"},{"n":"宛梆","v":"wb"},{"n":"锡剧","v":"xiju"},{"n":"大平调","v":"dpd"},{"n":"话剧","v":"huaju"},{"n":"西秦戏","v":"xqx"},{"n":"川剧","v":"chuanju"},{"n":"赣剧","v":"tagId"},{"n":"太康道情","v":"tkdq"},{"n":"闽剧","v":"minju"},{"n":"梅花大鼓","v":"mhdg"}]},
        {"key":"channel","name":"分类","value":[{"n":"吉剧","v":"jiju"},{"n":"白字戏","v":"bzx"},{"n":"豫剧","v":"yuju"},{"n":"越剧","v":"yueju"},{"n":"评剧","v":"pingju"},{"n":"坠子","v":"hnzz"},{"n":"河北梆子","v":"hbbz"},{"n":"粤剧","v":"gddx"},{"n":"二夹弦","v":"ejx"},{"n":"河南琴书","v":"hnqs"},{"n":"戏曲","v":"xq"},{"n":"二人台","v":"ERT"},{"n":"越调","v":"yued"},{"n":"乐腔","v":"lq"},{"n":"扬剧","v":"yangju"},{"n":"京韵大鼓","v":"jydg"},{"n":"彩调","v":"caidiao"},{"n":"琼剧","v":"qiongju"},{"n":"蒲剧","v":"pujv"},{"n":"西河大鼓","v":"xhdg"},{"n":"湘剧","v":"xj"},{"n":"麦田乡韾","v":"mtxy"},{"n":"评书","v":"pingshu"},{"n":"庐剧","v":"luju"},{"n":"单弦","v":"danxian"},{"n":"花鼓戏","v":"huagx"},{"n":"相声","v":"xiang"},{"n":"四股弦","v":"sgx"},{"n":"保定老调","v":"bdld"},{"n":"晋剧","v":"jinju"},{"n":"其他","v":"other"},{"n":"正字戏","v":"zzx"},{"n":"楚剧","v":"chuju"}]},
        {"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"免费","v":"1"},{"n":"VIP","v":"2"}]},
        {"key":"sort","name":"排序","value":[{"n":"最热","v":"hot"},{"n":"最新","v":"online"}]}
     ],
     "河马":[
        {"key":"channel","name":"分类","value":[{"n":"推荐","v":"308"},{"n":"新剧","v":"309"},{"n":"逆袭","v":"310"},{"n":"恋爱","v":"311"},{"n":"强者回归","v":"312"},{"n":"豪门恩怨","v":"313"},{"n":"古装","v":"314"},{"n":"重生","v":"315"},{"n":"萌宝","v":"316"},{"n":"复仇","v":"317"},{"n":"神医","v":"318"},{"n":"高手下山","v":"319"},{"n":"超能悬疑","v":"320"},{"n":"传承觉醒","v":"321"},{"n":"神豪","v":"322"},{"n":"民国","v":"323"}]}
     ],
     "七彩京剧":[
        {"key":"channel","name":"分类","value":[{"n":"传统戏","v":"73648@73649@"},{"n":"新编历史戏","v":"73648@73650@"},{"n":"现代戏","v":"73648@73651@"},{"n":"名段欣赏","v":"73648@73652@"}]}
     ],
     "七彩昆剧":[
        {"key":"channel","name":"分类","value":[{"n":"传统戏","v":"73653@73689@"},{"n":"现代戏","v":"73653@73690@"},{"n":"新编历史戏","v":"73653@73691@"},{"n":"其他","v":"73653@73692@"}]}
     ],
     "七彩越剧":[
        {"key":"channel","name":"分类","value":[{"n":"袁派","v":"73654@73676@"},{"n":"尹派","v":"73654@73677@"},{"n":"范派","v":"73654@73678@"},{"n":"傅派","v":"73654@73679@"},{"n":"徐派","v":"73654@73680@"},{"n":"王派","v":"73654@73681@"},{"n":"张派老生","v":"73654@73682@"},{"n":"陆派","v":"73654@73683@"},{"n":"吕派","v":"73654@73684@"},{"n":"金派","v":"73654@73685@"},{"n":"戚派","v":"73654@73686@"},{"n":"毕派","v":"73654@73687@"},{"n":"张派旦角","v":"73654@73688@"}]}
     ],
     "七彩沪剧":[
        {"key":"channel","name":"分类","value":[{"n":"流派创始","v":"73655@73672@"},{"n":"黄金一代","v":"73655@73673@"},{"n":"中生代","v":"73655@73674@"},{"n":"风华多彩","v":"73655@73675@"}]}
     ],
     "七彩淮剧":[
        {"key":"channel","name":"分类","value":[{"n":"传统戏","v":"73656@73669@"},{"n":"新编历史戏","v":"73656@73670@"},{"n":"都市淮剧","v":"73656@73671@"},{"n":"现代戏","v":"73656@73733@"}]}
     ],
     "七彩评弹":[
        {"key":"channel","name":"分类","value":[{"n":"长篇","v":"73657@73666@"},{"n":"中篇","v":"73657@73667@"},{"n":"短篇与开篇","v":"73657@73668@"},{"n":"专场演出","v":"73657@73734@"}]}
     ],
     "七彩滑稽戏":[
        {"key":"channel","name":"分类","value":[{"n":"大戏","v":"73658@73664@"},{"n":"独脚戏","v":"73658@73665@"},{"n":"古装大戏","v":"73658@73735@"},{"n":"电影","v":"73658@73736@"}]}
     ]
	},		
   filter_def: {
        梨园行:{sort:'hot'},
        河马:{channel:'308'}     
        },
    detailUrl: 'fyid',
    searchUrl: '?wd=**',
    searchable: 1,
    quickSearch: 0,
    headers: {
        "User_Agent":"MOBILE_UA"
    },
    timeout: 5000,
    limit: 6,
    play_parse: true,
    lazy: $js.toString(() => {
        let info=input.split('|');
        if(info[0]=='梨园行'){
            let data={
                "item": "y9",
                "mask": 0,
                "nodeCode": "001000",
                "project": "lyhxcx",
                "px": 2,
                "resCode": info[1],
                "userId": "92315ec6e58a45ba7f47fd143b3d7956"
            };
            let html=post(lyHost+'/API_ROP/play/get/playurl',{
                headers: lyHeaders,
                body: data
            });
            let playurl=JSON.parse(html).playres.playurl;
            input = {jx: 0, parse: 0, url: playurl }          
       }
       else if(info[0]=='河马'){      
        var data={
            "bookId": info[1],
            "chapterId": info[2],
            "confirmPay": 2,
            "autoPayFlag": true,
            "omap": {
                "channelName": "精选",
                "logId": "17a6500357709bb2547e1e122b438cfc",
                "originName": "书城",
                "recId": "bigdata_rec",
                "scene": "nsc_727",
                "sceneId": "dzmf_video_sc_reco",
                "strategyId": "g6y6b5sq"
            }
        }
       let body1=JSON.stringify(Object.assign({"unClockType": "pay"},data));
       let body2=JSON.stringify(Object.assign({"unClockType": "ad"},data));
       var body11 = Encrypt(body1); 
        var body22 = Encrypt(body2);
        var url = hmHost+'1133';
        var html = post(url, {
            headers: hmHeaders1,
            body: body11
        });
        var html1 = JSON.parse(html).data;
        var html11 = Decrypt(html1); 
        var type = JSON.parse(html11).chaptersPayType;
        if(type=='免费') {
            var data = JSON.parse(html11).chapterInfo;
            var d = [];
            data.forEach(item => {
                d.push(item.content);
            });
            var play = d[0].m3u8720p;
            input={jx:0,parse:0,url:play+'?免费章节'}
        }else if(type=='按章付费') {
            var html2 = post(url, {
                headers: hmHeaders1,
                body: body22
            });
            var html22 = JSON.parse(html2).data; 
            var html222 = Decrypt(html22);
            var ad = post(hmHost+'1141', {
                headers: hmHeaders1,
                body: `4e160fc6fecf9622f6eb724c0a93e153b7b0f0d48a5f27f02f36cefe52ba3496`
            }); 
            var html = post(url, {
                headers: hmHeaders1,
                body: body11,
            }); 
            var html1 = JSON.parse(html).data; 
            var html11 = Decrypt(html1); 
            var data = JSON.parse(html11).chapterInfo; 
            var d = [];
            data.forEach(item => {
                d.push(item.content);
            });
            var play = d[0].m3u8720p; 
            input={jx:0,parse:0,url:play+'?付费章节'}
        }
       }
    }),
    推荐: '',
    一级: $js.toString(()=>{
        let d = [];
        let fl=getQuery(input);
        if(MY_CATE=='梨园行'){
            let cateData ={
                    'cur': MY_PAGE,
                    'free': fl.area,
                    'orderby': fl.sort,
                    'pageSize': 30,
                    'resType': 1,
                    'sect': fl.channel,
                    'tagId': 0,
                    'userId': '92315ec6e58a45ba7f47fd143b3d7956',
                    'channel': 'vivo',
                    'item': 'y9',
                    'nodeCode': '001000',
                    'project': 'lyhxcx'
                };      
            let html = post(lyHost+'/API_ROP/search/album/screen', {
                headers: lyHeaders,
                body: cateData
            });
            let list=JSON.parse(html).pb.dataList; 
            try {
                list.forEach(it => {
                    d.push({
                        title: it.name,                   
                        desc: it.publishTime,
                        img: 'https://ottphoto.daoran.tv/HD/' + it.imgsec,
                        url: '|'+MY_CATE+'|'+it.code
                    })
                })
            } catch (e) {}
        }
        else if(MY_CATE=='河马'){
            let data=JSON.stringify({'channelId':fl.channel,'cnxhFlag':MY_PAGE});
            let body = Encrypt(data);
            let html = post(hmHost+'1121', {
                headers:hmHeaders,
                body: body
            }); 
            let html1 = JSON.parse(html).data;
            let html2 = Decrypt(html1);
            let list = JSON.parse(html2).columnData;
            list.forEach(videoDataArray => {
                videoDataArray.videoData.forEach(video => {
                    d.push({
                        title: video.bookName,
                        desc: '更新至'+video.updateNum+'集',
                        img: video.coverWap,
                        url:'|'+MY_CATE+'|'+video.bookId+'|'+video.chapterId+'|'+video.updateNum+'|'+video.chapterIndex                      
                    })
                })
            })
        }else if(MY_CATE.includes('七彩')){      
            let post_obj = {
                'CategoryCode':fl.channel.replaceAll('@','#'),
                'PageIndex':MY_PAGE,
                'PageSize':50,
                'UserGroup':'OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1'
            }; 
            let post_data=buildUrl('', post_obj).slice(1);         
            let html = post('http://b2cv3epg.bestv.com.cn/epg/OttService/QueryProgramee',{
                headers: rule.headers,
                body:post_data
            });
           let data = JSON.parse(html).Response.Body.Items;
           data.forEach(it => {     
                d.push({
                    url: '|'+'七彩'+'|'+it.Code+'|'+it.Title+'|'+it.Director+'|'+it.Actor+'|'+it.InsertTime,
                    title: it.Title,
                    img: 'http://ottpic.bbtv.cn'+it.BigImage1,
                   desc: it.Director,
                })
            })
        }
        setResult(d)
    }),
    二级: $js.toString(() => {
        let info=input.split('|');
        if(info[1]=='梨园行'){
            let data={
                "albumCode": info[2],
                "cur": 1,
                "pageSize": 100,
                "userId": "92315ec6e58a45ba7f47fd143b3d7956",
                "channel": "vivo",
                "item": "y9",
                "nodeCode": "001000",
                "project": "lyhxcx"
            };
            let html=post(lyHost+'/API_ROP/album/res/list',{
                headers: lyHeaders,
                body: data
            });
            let desc=JSON.parse(html).album;
            let playUrls=JSON.parse(html).pb.dataList.map(it=>{return it.name+'$'+info[1]+'|'+it.code}).join('#');          
            VOD.vod_year=desc.publishTime;
            VOD.vod_actor=desc.artistName;
            VOD.vod_content=desc.des;
            VOD.vod_play_from='梨园行';
            VOD.vod_play_url=playUrls;
        }
        else if(info[1]=='河马'){
            var body1 = JSON.stringify({"bookId":info[2]});
            var body11 = Encrypt(body1);
            var html1 = post(hmHost+'1131', {
                headers:hmHeaders,
                body: body11,
            });
            var html11 = JSON.parse(html1).data;
            var html111 = Decrypt(html11);
            var data = JSON.parse(html111).videoInfo;
            VOD.vod_remarks=data.finishStatusCn;
            VOD.vod_name=data.bookName;
            VOD.type_name=data.bookTags.join('•');
            VOD.vod_content=data.introduction;
            VOD.vod_pic=data.coverWap;
            var body2 = JSON.stringify({"bookId":info[2],"chapterMin":info[4],"chapterMax":info[5]});
            var body22 = Encrypt(body2);
            var html2 = post(hmHost+'1132', {
                headers: hmHeaders,
                body: body22
            });
            var html22 = JSON.parse(html2).data;
            var html222 = Decrypt(html22); 
            var data1 = JSON.parse(html222).chapterList;
            let playUrls=data1.map(it=>{
                return it.chapterName+'$'+info[1]+'|'+info[2]+'|'+it.chapterId
            }).join('#');
            VOD.vod_play_from='河马剧场';
            VOD.vod_play_url=playUrls; 
        }else if(info[1]=='七彩'){
            let post_obj = {
                'ItemCode':info[2],
                'ItemType':0,
                'UserID':'023909999999999',
                'UserToken':'19e0b9b622fb4607aa7ccd653e79b39f',
                'TVID':'BESTVOEM$QCXJFF_BESTVINSIDE$QCXJFF221436FEBA1C',
                'UserGroup':'OTT_GROUP_B2C_QCXJAPK$TerOut_265$null$011$BesTV_QCXJ_SHAFA_8.0.0.8.2406.4.1$QCXJ_SHAFA'
            }; 
            let post_data=buildUrl('', post_obj).slice(1);         
            let html = post('http://b2cv3ps.bestv.com.cn/ps/OttService/Auth',{
                headers: rule.headers,
                body:post_data
            });
           let playurl = JSON.parse(html).Response.Body.PlayURL;
           VOD.vod_director=info[4];
           VOD.vod_actor=info[5].replaceAll(' ',',');
           VOD.vod_year=TimestampToDate(info[6]);
           VOD.vod_play_from='七彩戏剧';
           VOD.vod_play_url=info[3]+'$'+playurl;        
        }
    }),
    搜索: $js.toString(() =>{
        let key=getQuery(input).wd;
       // let videos=[];
        //function soLy(key){
            let d=[];
            let body=JSON.stringify({"cur":MY_PAGE,"free":0,"item":"y9","keyword":key,"nodeCode":"001000","orderby":"hot","pageSize":10,"project":"lyhxcx","px":2,"sect":[],"userId":"92315ec6e58a45ba7f47fd143b3d7956"}); 
            let html = post('https://fly.daoran.tv/API_ROP/search/album/list', {
                headers:lyHeaders,
                body: body
            })           
            let list = JSON.parse(html).pb.dataList; 
            if(list!=''){
                list.forEach(data => {
                    d.push({
                        title: data.name,
                        desc: data.publishTime,
                        content: data.des,
                        img: 'https://ottphoto.daoran.tv/HD/' + data.imgsec,
                        url:'|梨园行|'+data.code                  
                    })
                })
            }                   
         //   return d
    //    }
      /* function soHm(key){
            let d=[];*/
            var body1 = Encrypt(JSON.stringify({"keyword":key,"page":MY_PAGE,"size":15}));
            var url = 'https://freevideo.zqqds.cn/free-video-portal/portal/1803';
            var html1 = post(url, {
                headers: hmHeaders,
                body: body1
            })
            var html2 = JSON.parse(html1).data; 
            var html3 = Decrypt(html2); 
            var list1 = JSON.parse(html3).searchVos; 
            if(list1!=''){
                list1.forEach(video => {
                    d.push({
                        title: video.bookName,
                        desc: video.updateNum,
                        img: video.coverWap,
                        url: '|河马|'+video.bookId+'|'+video.chapterId+'|'+video.updateNum+'|'+video.chapterIndex
                    })
                })
            }
          //  return d
    //   }    
       //let videos=[...soLy(wd),...soHm(wd)]
       setResult(d);
    }),
}
    