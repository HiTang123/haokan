var rule = {
    title:'种子音乐',
    host:'https://www.zz123.com',
    url:'?id=fyclass&tid=fyfilter',
    searchUrl:'/ajax/?act=search&key=**&lang=&page=fypage',
    filter_url:'{{fl.tid}}',
    detailUrl:'#fyid',
    searchable:1,
    quickSearch:1,
    //class_name:'榜单&老歌&古风&Soul&儿童&乡村&助眠&纯音乐&茶道&抖音&DJ&00后&场景&语种&心情&神曲&广场舞&网络&相声&流行&影视&铃声&戏曲&基督教&佛教&民谣&说唱&健身&女声&KTV&欧美&HIFI&婚礼&红歌&好听&民歌&军旅&精选&酒廊情歌&圣诞节&情人节&新年&商业&叫声&年龄&最火&年代',
    class_name:'榜单',
    class_url:'vszs&azz&mv&akda&zud&aku&d&az&vadqm&mszm&msdm&msuv&zxzxu&vmvav&kuau&asx&ssmma&sxuus&qdsam&quvma&qdk&szdd&saak&vamau&azss&ms&qz&qqs&uz&akka&ka&qmkv&aaq&mqmz&aza&mqvk&mkzmx&mdz&mqms&mxqv&asuuq&qux&aqsvau&aqsvmx&aqsvms&qda&vvxmx',
    filter:{
        "vszs":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"热歌榜","v":"mxuxuu"},{"n":"新歌榜","v":"mxuxzv"},{"n":"抖音歌曲榜","v":"mxuxkm"},{"n":"DJ嗨歌榜","v":"mxuxds"},{"n":"极品电音榜","v":"mxuxkd"},{"n":"流行趋势榜","v":"mxuxkz"},{"n":"彩铃榜","v":"mxuass"},{"n":"尖叫热歌榜","v":"mxuask"},{"n":"飙升榜","v":"mxuxvd"}]},
            {"key":"tid","name":"分类","value":[{"n":"台湾地区榜","v":"mxuxqk"},{"n":"欧美榜","v":"mxuxqq"},{"n":"韩国榜","v":"mxuaxv"},{"n":"香港地区榜","v":"mxuaxd"},{"n":"日本榜","v":"mxuaaa"},{"n":"内地榜","v":"mxuaak"},{"n":"港台榜","v":"mxuasv"},{"n":"越南语榜","v":"mxuxux"}]},
            {"key":"tid","name":"分类","value":[{"n":"Beatport全球电子舞曲榜","v":"mxuxuk"},{"n":"日本Oricon榜","v":"mxuxuq"},{"n":"美国BillBoard榜","v":"mxuamx"},{"n":"美国iTunes榜","v":"mxuavu"}]},
            {"key":"tid","name":"分类","value":[{"n":"听歌识曲榜","v":"mxuxda"},{"n":"睡前放松榜","v":"mxuxdd"},{"n":"禅心佛乐榜","v":"mxuxku"}]},
            {"key":"tid","name":"分类","value":[{"n":"酷我铃声榜","v":"mxuxdz"},{"n":"酷我热评榜","v":"mxuxdk"},{"n":"酷我综艺榜","v":"mxuxkx"},{"n":"酷我新歌榜","v":"mxuasq"},{"n":"酷我飙升榜","v":"mxuavx"},{"n":"酷我热歌榜","v":"mxuava"},{"n":"酷狗音乐人原创榜","v":"mxuaxm"},{"n":"酷狗分享榜","v":"mxuaad"},{"n":"酷狗飙升榜","v":"mxuams"}]},
            {"key":"tid","name":"分类","value":[{"n":"云音乐韩语榜","v":"mxuxud"},{"n":"云音乐古典榜","v":"mxuxzx"},{"n":"云音乐ACGVOCALOID榜","v":"mxuxza"},{"n":"云音乐ACG动画榜","v":"mxuxzk"},{"n":"云音乐国电榜","v":"mxuxvk"},{"n":"云音乐欧美热歌榜","v":"mxuxvq"},{"n":"云音乐欧美新歌榜","v":"mxuxum"},{"n":"云音乐ACG游戏榜","v":"mxuxus"}]},
            {"key":"tid","name":"分类","value":[{"n":"原创榜","v":"mxuxuz"},{"n":"潜力爆款榜","v":"mxuxzm"},{"n":"最强翻唱榜","v":"mxuxdv"},{"n":"通勤路上榜","v":"mxuxdu"},{"n":"网红新歌榜","v":"mxuxdq"},{"n":"会员畅听榜","v":"mxuxka"},{"n":"冬日恋曲榜","v":"mxuxks"},{"n":"宝宝哄睡榜","v":"mxuxkv"},{"n":"经典怀旧榜","v":"mxuxkk"},{"n":"跑步健身榜","v":"mxuxkq"},{"n":"古风音乐榜","v":"mxuxqx"}]},
            {"key":"tid","name":"分类","value":[{"n":"KTV点唱榜","v":"mxuxqa"},{"n":"车载嗨曲榜","v":"mxuxqm"},{"n":"熬夜修仙榜","v":"mxuxqs"},{"n":"Vlog必备榜","v":"mxuxqv"},{"n":"爆笑相声榜","v":"mxuxqu"},{"n":"DJ热歌榜","v":"mxuaax"},{"n":"快手热歌榜","v":"mxuaas"},{"n":"尖叫新歌榜","v":"mxuaav"},{"n":"影视金曲榜","v":"mxuaau"},{"n":"俄语榜","v":"mxuavm"},{"n":"KTV榜","v":"mxuavz"},{"n":"尖叫原创榜","v":"mxuavd"},{"n":"法国NRJVosHits周榜","v":"mxuxua"}]}
        ],
        "azz":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"热门","v":"aaxu"},{"n":"经典歌曲","v":"mmak"},{"n":"经典老歌","v":"ddda"},{"n":"欧美经典","v":"maak"},{"n":"经典女声","v":"suzd"},{"n":"经典粤语歌","v":"vkms"},{"n":"流行经典","v":"mzsk"},{"n":"不朽的经典","v":"dzmd"}]}
        ],
        "zud":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"儿歌大全","v":"qdxss"},{"n":"英文儿歌","v":"uavv"},{"n":"哄睡音乐","v":"sqqd"},{"n":"小蓓蕾组合","v":"asmuvq"},{"n":"白噪音助眠","v":"mxdxvk"},{"n":"育儿知识","v":"aqsuqk"},{"n":"婴幼儿歌","v":"azuuvu"},{"n":"动画","v":"sva"},{"n":"性格培养","v":"azuaks"},{"n":"胎教音乐合辑","v":"qdzux"},{"n":"唐诗宋词","v":"azzadv"},{"n":"LittleBabyBum","v":"avmqxs"},{"n":"启蒙故事","v":"azzsqz"},{"n":"童话故事","v":"azvava"},{"n":"宝宝学说话","v":"azuvxq"},{"n":"宝宝不哭","v":"azuuxk"},{"n":"智慧树","v":"azzamq"},{"n":"观察思考","v":"azsdmq"},{"n":"音乐启蒙","v":"azvdxk"}]}
        ],
        "d":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"贵族音乐ASMR","v":"amvqam"},{"n":"催眠","v":"mxmua"},{"n":"雨声","v":"amamux"},{"n":"ASMR","v":"amvddm"},{"n":"瑜伽音乐","v":"sxad"},{"n":"冥想音乐","v":"kqmxu"},{"n":"冥想","v":"sum"},{"n":"催眠大师","v":"amsudz"},{"n":"耳边伴音师","v":"amvqak"},{"n":"猫酥","v":"amvqsq"},{"n":"瑜伽","v":"mxxk"},{"n":"Lovage","v":"mkask"}]}
        ],
        "az":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"古典","v":"zm"},{"n":"轻音乐","v":"ua"},{"n":"白噪音","v":"skxau"},{"n":"Bandari","v":"mvv"},{"n":"HerbertvonKarajan","v":"axdkzk"},{"n":"世界名曲","v":"dqxma"},{"n":"钢琴合辑","v":"quzda"},{"n":"小提琴","v":"aqkx"},{"n":"古琴","v":"smaa"},{"n":"古筝","v":"mmxa"},{"n":"萨克斯","v":"um"},{"n":"久石让","v":"mvsam"},{"n":"绿野仙踪","v":"amuqks"},{"n":"中国风轻音乐","v":"uauz"},{"n":"催眠音乐","v":"vauqd"}]}
        ],
        "mszm":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"抖音歌曲","v":"axzkma"},{"n":"抖音最火歌曲","v":"asmdmv"},{"n":"抖音热歌","v":"aakmxd"},{"n":"抖音神曲","v":"kavmk"}]}
        ],
        "msdm":[
            {"key":"tid","name":"分类","value":[{"n":"全部","v":""},{"n":"中文舞曲","v":"axzzdz"},{"n":"串烧舞曲","v":"aqszxz"},{"n":"电音舞曲","v":"axzzku"},{"n":"慢摇舞曲","v":"mkxvu"},{"n":"电音","v":"kkk"},{"n":"重低音","v":"qvqx"},{"n":"战歌","v":"uqquv"},{"n":"外文舞曲","v":"amvxaz"},{"n":"现场串烧","v":"axzzkv"},{"n":"3D环绕","v":"aqszxd"},{"n":"其它舞曲","v":"aqszxk"},{"n":"慢摇串烧","v":"axzzkd"},{"n":"电音流行","v":"ammv"},{"n":"house","v":"azvm"},{"n":"酒吧","v":"aau"},{"n":"车载","v":"auq"}]}
        ],
        "zxzxu":[
            {"key":"tid","name":"分类","value":[{"n":"旅行","v":"auv"},{"n":"运动","v":"mu"},{"n":"学习","v":"aas"},{"n":"校园","v":"axka"},{"n":"开车","v":"aak"},{"n":"咖啡","v":"adu"},{"n":"工作","v":"mdm"},{"n":"夜店","v":"mumz"},{"n":"跳舞","v":"mmuv"},{"n":"清晨","v":"mumm"},{"n":"睡前","v":"mqqv"}]}
        ],
        "vmvav":[
            {"key":"tid","name":"分类","value":[{"n":"英语","v":"md"},{"n":"粤语","v":"adk"},{"n":"闽南语","v":"vax"},{"n":"越南语","v":"vmxz"},{"n":"泰语","v":"vqzd"},{"n":"印地语","v":"asvdm"},{"n":"韩语","v":"vd"},{"n":"日语","v":"aud"},{"n":"俄语","v":"msaa"},{"n":"法语","v":"sk"},{"n":"德语","v":"sq"},{"n":"国语","v":"axa"},{"n":"小语种","v":"vkk"}]}
        ],
        "kuau":[
            {"key":"tid","name":"分类","value":[{"n":"伤感","v":"sv"},{"n":"励志","v":"ada"},{"n":"快乐","v":"mx"},{"n":"治愈","v":"sd"},{"n":"放松","v":"va"},{"n":"安静","v":"dq"},{"n":"寂寞","v":"amz"},{"n":"思念","v":"adx"},{"n":"甜蜜","v":"umaa"},{"n":"开心","v":"zvkd"},{"n":"宣泄","v":"dmmq"}]}
        ]                      
    },
    headers:{
        'User-Agent':'PC_UA',
        'Host': 'zz123.com'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];
        let fl=getQuery(input);
        let a='act=index_faxian&lang=&page=1';       
        let list=JSON.parse(post(HOST+'/ajax/',{headers:rule.headers,body:a})).data;
        list.forEach(it=>{
            d.push({
                title:it.mname,
                desc:it.sname,
                img:it.pic.replace('w_200,h_200','w_800,h_800'),
                url:it.id+'#'+it.sid
            })
        })                     
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[],list=[];
        let fl=getQuery(input);
        if(cateObj.tid.endsWith('_clicklink')&&MY_PAGE==1){
            cateObj.tid=cateObj.tid.split('_')[0];
            let data=pdfh(request('https://zz123.com/singer/'+cateObj.tid+'.htm'),'body&&script:eq(1)&&Html').match(/(?<=Arr=).*?(?=;)/)[0];
            list=JSON.parse(data)
        }else{
            let a='act=tag_music&type=tuijian&tid='+(fl.tid==''?fl.id:fl.tid)+'&lang=&page='+MY_PAGE;       
            list=JSON.parse(post(HOST+'/ajax/',{headers:rule.headers,body:a})).data;
        }
        list.forEach(it=>{
            d.push({
                title:it.mname,
                desc:it.sname,
                img:it.pic.replace('w_200,h_200','w_800,h_800'),
                url:it.id+'#'+it.sid
            })
        })                     
        setResult(d)
    }),
    二级:$js.toString(()=>{       
       let info=JSON.parse(post(HOST+'/ajax/',{headers:rule.headers,body:'act=songinfo&id='+input.split('#')[1]})).data;       
       VOD={
            vod_name:info.mname,
            vod_pic:info.pic.replace('w_200,h_200','w_1000,h_1000'),
            vod_actor:'[a=cr:'+JSON.stringify({'id':input.split('#')[2]+'_clicklink','name':'〖'+info.sname+'〗的专辑列表'})+'/]'+info.sname+'[/a]',
            vod_year:info.minfo.add_time.split(' ')[0],
            vod_play_from:'种子音乐',
            vod_play_url:info.mname+'$'+info.mp3,
            vod_content:info.lrc.slice(29).split('[').map(it=>{return it.split(']')[1]}).join('').replaceAll('请把zz123音乐分享给你的3个朋友！','').replaceAll('好音乐请分享给您的朋友','').replaceAll('喜欢的音乐，请及时收藏/分享','')
       }
    }),
    搜索:$js.toString(()=>{
       let list=JSON.parse(post(input,{headers:rule.headers})).data;
       list.forEach(it=>{
            d.push({
                title:it.mname,
                desc:it.sname,
                img:it.pic,
                url:it.id+'#'+it.sid
            })
        })                     
        setResult(d)
    }),
}