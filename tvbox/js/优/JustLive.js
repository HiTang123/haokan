// 搜索功能需登录使用
var rule = {
    title: 'JustLive',
    host: 'http://live.yj1211.work',
    homeUrl: '/api/live/getRecommend?page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    //homeUrl: '/api/live/getRecommendByPlatformArea?platform=bilibili&area=舞见&page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    url: '/api/live/getRecommendByPlatformArea?platform=fyclass&area=fyfilter&page=fypage&size=20', //网站的分类页面链接
    class_name:'虎牙&哔哩&斗鱼&抖音&️网易',
    class_url: 'huya&bilibili&douyu&douyin&cc',
    filterable: 1,
    filter_url: '{{fl.area}}',
    filter:{

    "douyu":[{"key":"area","name":"分区","value":[            
                {"n":"原创IP","v":"原创IP"},
                {"n":"二次元","v":"二次元"}
            ]}],            
    "huya":[{"key":"area","name":"分区","value":[
                {"n":"一起看","v":"一起看"},
                {"n":"放映厅","v":"放映厅"},
                {"n":"原创","v":"原创"},
                {"n":"体育","v":"体育"}
            ]}],           
    "bilibili":[{"key":"area","name":"分区","value":[
                {"n":"电子榨菜","v":"电子榨菜"},
                {"n":"视频唱见","v":"视频唱见"}
            ]}],          
    "cc":[{"key":"area","name":"分区","value":[
                {"n":"蛋仔派对","v":"蛋仔派对"},
                {"n":"正能量","v":"正能量"}
            ]}],            
    "douyin":[{"key":"area","name":"分区","value":[
                {"n":"全部","v":"全部"}
            ]}]            
	},		
    filter_def: {
        douyu:{area:'原创IP'},
        huya:{area:'一起看'},
        bilibili:{area:'电子榨菜'},
        cc:{area:'正能量'},
        douyin:{area:'全部'}
        },
    detailUrl: 'fyid',
    searchUrl: '/api/live/search?platform=all&keyWords=**&isLive=1&uid='+yslb_conf.UID,
    searchable: 1,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    limit: 6,
    推荐: '',
    一级: `js:
        var d = [];
        if (MY_CATE === 'douyin') {
            let area = MY_FL.area || '全部';
            if (area === '全部') {
                input = HOST + '/api/live/getRecommendByPlatform?platform=douyin&page='+MY_PAGE+'&size=20';
            }
        }
        var html = JSON.parse(request(input)).data;
        html.forEach(it => {
            d.push({
                title: it.roomName,
                desc: it.ownerName,
                pic_url: it.roomPic,
                url: it.platForm + '|' + it.roomId + '|' +it.categoryName+ '|' + it.isLive+ '|' +it.online+ '|' +it.roomName+ '|' +it.ownerName+ '|' +it.roomPic
            });
        })
        setResult(d);
    `,
    二级: $js.toString(() => {
        VOD={};
        let platForm = input.split("|")[0].replace(HOST+'/','');
        let roomId = input.split("|")[1];
        let categoryName = input.split("|")[2];
        let isLive = input.split("|")[3];
        let online = input.split("|")[4];
        let roomName = input.split("|")[5];
        let ownerName = input.split("|")[6];
        let roomPic = input.split("|")[7];
        let map={'huya':'hy','douyu':'dyu','douyin':'dy'};
        let jxurl="";
        if(platForm=='bilibili'){
            jxurl="https://cfss.cc/api/bz/bzb.php?id="+roomId;
        }else if(platForm=='cc'){
            jxurl="https://cfss.cc/api/cc/?id="+roomId;
        }else{
            jxurl="http://cfss.cc/Cf/"+map[platForm]+"/"+roomId+".flv";
        };
        let a=request(jxurl);
        let b=a.match(/url:[\S\s].*?',/)[0].replaceAll(/(url: |')/gi,'');
        let c=b.startsWith('//') ? "http:"+b : b;
        VOD = {
            vod_id: roomId,
            vod_name: roomName,
            vod_remarks: jxurl,
            vod_content: c,
            vod_pic: roomPic,
            vod_director: (isLive == 1 ? "🟢" : "🔴")+ownerName+"&nbsp &nbsp "+"人气：" + online,
            type_name: platForm.replace("huya", "虎牙").replace("douyu", "斗鱼").replace("cc", "网易CC").replace("bilibili", "️哔哩哔哩").replace("douyin", "抖音") + "•" + categoryName,
            vod_play_from : "JustLive",
            vod_play_url : '长风解析$'+c
         }     
    }),
    搜索: `js:
        var d = [];
        var html = JSON.parse(request(input)).data;
        html.forEach(it => {
        if(it.isLive === "1"){
            d.push({
                title: (it.isLive === "1" ? "🟢" : "🔴")+it.nickName,
                desc: it.platform.replace("huya", "虎牙").replace("douyu", "斗鱼").replace("cc", "网易CC").replace("bilibili", "哔哩哔哩").replace("douyin", "抖音"),
                pic_url: it.headPic,
                url: it.platform + '|' + it.roomId
            })};
        })
        setResult(d);
    `,
}