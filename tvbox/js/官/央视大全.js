globalThis.getQuality=function(pid){
    var a=JSON.parse(request('https://vdn.apps.cntv.cn/api/getHttpVideoInfo.do?pid='+pid));
    var b=a.video;
    var c=[];
    var map={
        "chapters" : "450",
        "chapters2" : "850",
        "chapters3" : "1200",
        "chapters4" : "2000"
    };     
    for(var i in b){
        if(i.startsWith("chapters")){
            c.push(map[i])
        }
    };
    return c.sort((x,y) => y-x);
}
globalThis.lanmuTime='';
//globalThis.playFrom = ['阿里云','腾讯云','华为云','网宿云'];
//globalThis.fromDom=['https://dh5.cntv.myalicdn.com','https://dh5.cntv.qcloudcdn.com','https://dh5.cntv.myhwcdn.cn','https://dh5.cntv.lxdns.com'];
globalThis.playFrom = ['央视频'];
//globalThis.fromDom=['https://cntv.playdreamer.cn/proxy'];
globalThis.fromDom=['https://newcntv.qcloudcdn.com'];
var rule = {
    title:'央视频',
    host:'https://api.cntv.cn',
    homeUrl: '/lanmu/columnSearch?&fl=&fc=&cid=&p=1&n=500&serviceId=tvcctv&t=json',
    url:'/list/getVideoAlbumList?fyfilter&n=24&serviceId=tvcctv&t=json',
    detailUrl:'fyid',
    searchUrl:'https://search.cctv.com/m/if3g_search.php?page=fypage&qtext=**&type=video&sort=SCORE&pageSize=20&channel=',
    searchable:2,
    quickSearch:1,
    class_name: '央广电台&频道大全&熊猫频道&央视频&微视频&栏目大全&听音&4K专区&特别节目&纪录片&电视剧&动画片&直播中国',
    class_url: '电台&频道大全&熊猫频道&央视频&微视频&栏目大全&听音&4K专区&特别节目&纪录片&电视剧&动画片&直播中国&听音',
    filterable: 1,
    filter_url: 'channel={{fl.channel}}&sc={{fl.sc}}&bigday={{fl.tag}}&year={{fl.year}}&area={{fl.area}}&letter={{fl.letter}}',
    filter: {
        "栏目大全":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"EPGC1386744804340101"},{"n":"CCTV-2财经","v":"EPGC1386744804340102"},{"n":"CCTV-3综艺","v":"EPGC1386744804340103"},{"n":"CCTV-4中文国际","v":"EPGC1386744804340104"},{"n":"CCTV-5体育","v":"EPGC1386744804340107"},{"n":"CCTV-6电影","v":"EPGC1386744804340108"},{"n":"CCTV-7国防军事","v":"EPGC1386744804340109"},{"n":"CCTV-8电视剧","v":"EPGC1386744804340110"},{"n":"CCTV-9纪录","v":"EPGC1386744804340112"},{"n":"CCTV-10科教","v":"EPGC1386744804340113"},{"n":"CCTV-11戏曲","v":"EPGC1386744804340114"},{"n":"CCTV-12社会与法","v":"EPGC1386744804340115"},{"n":"CCTV-13新闻","v":"EPGC1386744804340116"},{"n":"CCTV-14少儿","v":"EPGC1386744804340117"},{"n":"CCTV-15音乐","v":"EPGC1386744804340118"},{"n":"CCTV-16奥林匹克","v":"EPGC1634630207058998"},{"n":"CCTV-17农业农村","v":"EPGC1563932742616872"},{"n":"CCTV-5+体育赛事","v":"EPGC1468294755566101"}]},
	        {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"新闻","v":"新闻"},{"n":"体育","v":"体育"},{"n":"综艺","v":"综艺"},{"n":"健康","v":"健康"},{"n":"生活","v":"生活"},{"n":"科教","v":"科教"},{"n":"经济","v":"经济"},{"n":"农业","v":"农业"},{"n":"法治","v":"法治"},{"n":"军事","v":"军事"},{"n":"少儿","v":"少儿"},{"n":"动画","v":"动画"},{"n":"纪实","v":"纪实"},{"n":"戏曲","v":"戏曲"},{"n":"音乐","v":"音乐"},{"n":"影视","v":"电影电视剧"}]},
	        {"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]}
            ],
		"纪录片":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"CCTV-1综合,CCTV-1高清,CCTV-1综合高清"},{"n":"CCTV-2财经","v":"CCTV-2财经,CCTV-2高清,CCTV-2财经高清"},{"n":"CCTV-3综艺","v":"CCTV-3综艺,CCTV-3综艺高清"},{"n":"CCTV-4中文国际","v":"CCTV-4中文国际,CCTV-4高清,CCTV-4中文国际(亚)高清"},{"n":"CCTV-5体育","v":"CCTV-5体育,CCTV-5体育高清"},{"n":"CCTV-6电影","v":"CCTV-6电影,CCTV-6电影高清"},{"n":"CCTV-7国防军事","v":"CCTV-7军事农业,CCTV-7军事农业高清,CCTV-7国防军事高清"},{"n":"CCTV-9纪录","v":"CCTV-9纪录,CCTV-9高清,CCTV-9纪录高清"},{"n":"CCTV-10科教","v":"CCTV-10科教,CCTV-10高清,CCTV-10科教高清"},{"n":"CCTV-11戏曲","v":"CCTV-11戏曲"},{"n":"CCTV-12社会与法","v":"CCTV-12社会与法,CCTV-12社会与法高清"},{"n":"CCTV-13新闻","v":"CCTV-13新闻"},{"n":"CCTV-14少儿","v":"CCTV-14少儿,CCTV-14少儿高清"},{"n":"CCTV-15音乐","v":"CCTV-15音乐,CCTV-15音乐高清"},{"n":"CCTV-17农业农村","v":"CCTV-17农业农村高清"}]},
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"人文历史","v":"人文历史"},{"n":"人物","v":"人物"},{"n":"军事","v":"军事"},{"n":"探索","v":"探索"},{"n":"社会","v":"社会"},{"n":"自然","v":"自然"},{"n":"时政","v":"时政"},{"n":"经济","v":"经济"},{"n":"科技","v":"科技"}]},
            {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"}]},
            {"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]}
        ],
		"特别节目":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"CCTV-1综合,CCTV-1高清,CCTV-1综合高清"},{"n":"CCTV-2财经","v":"CCTV-2财经,CCTV-2高清,CCTV-2财经高清"},{"n":"CCTV-3综艺","v":"CCTV-3综艺,CCTV-3高清,CCTV-3综艺高清"},{"n":"CCTV-4中文国际","v":"CCTV-4中文国际,CCTV-4高清,CCTV-4中文国际(亚)高清"},{"n":"CCTV-5体育","v":"CCTV-5体育,CCTV-5高清,CCTV-5体育高清"},{"n":"CCTV-6电影","v":"CCTV-6电影,CCTV-6高清,CCTV-6电影高清"},{"n":"CCTV-7国防军事","v":"CCTV-7军事农业,CCTV-7高清,CCTV-7军事农业高清,CCTV-7国防军事高清"},{"n":"CCTV-8电视剧","v":"CCTV-8电视剧,CCTV-8高清,CCTV-8电视剧高清"},{"n":"CCTV-9纪录","v":"CCTV-9纪录,CCTV-9高清,CCTV-9纪录高清"},{"n":"CCTV-10科教","v":"CCTV-10科教,CCTV-10高清,CCTV-10科教高清"},{"n":"CCTV-11戏曲","v":"CCTV-11戏曲,CCTV-11高清,CCTV-11戏曲高清"},{"n":"CCTV-12社会与法","v":"CCTV-12社会与法,CCTV-12高清,CCTV-12社会与法高清"},{"n":"CCTV-13新闻","v":"CCTV-13新闻,CCTV-13高清,CCTV-13新闻高清"},{"n":"CCTV-14少儿","v":"CCTV-14少儿,CCTV-14高清,CCTV-14少儿高清"},{"n":"CCTV-15音乐","v":"CCTV-15音乐,CCTV-15高清,CCTV-15音乐高清"},{"n":"CCTV-17农业农村","v":"CCTV-17农业农村高清"}]},            
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"新闻","v":"新闻"},{"n":"经济","v":"经济"},{"n":"综艺","v":"综艺"},{"n":"体育","v":"体育"},{"n":"军事","v":"军事"},{"n":"影视","v":"影视"},{"n":"科教","v":"科教"},{"n":"戏曲","v":"戏曲"},{"n":"青少","v":"青少"},{"n":"音乐","v":"音乐"},{"n":"社会","v":"社会"},{"n":"公益","v":"公益"},{"n":"其他","v":"其他"}]},
            {"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},
            {"key":"tag","name":"标签","value":[{"n":"全部","v":""},{"n":"春节","v":"春节"},{"n":"元宵","v":"元宵"},{"n":"清明","v":"清明"},{"n":"劳动节","v":"劳动节"},{"n":"青年节","v":"青年节"},{"n":"六一","v":"六一"},{"n":"端午","v":"端午"},{"n":"七夕","v":"七夕"},{"n":"教师节","v":"教师节"},{"n":"中秋","v":"中秋"},{"n":"国庆","v":"国庆"},{"n":"重阳","v":"重阳"},{"n":"开学第一课","v":"开学第一课"},{"n":"谜语大会","v":"谜语大会"},{"n":"成语大会","v":"成语大会"},{"n":"诗词大会","v":"诗词大会"},{"n":"汉字听写大会","v":"汉字听写大会"},{"n":"民歌大会","v":"民歌大会"},{"n":"寻找最美医生","v":"寻找最美医生"},{"n":"寻找最美教师","v":"寻找最美教师"}]}
         ],
        "电视剧":[
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"谍战","v":"谍战"},{"n":"悬疑","v":"悬疑"},{"n":"刑侦","v":"刑侦"},{"n":"历史","v":"历史"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"军旅","v":"军旅"},{"n":"战争","v":"战争"},{"n":"喜剧","v":"喜剧"},{"n":"青春","v":"青春"},{"n":"言情","v":"言情"},{"n":"偶像","v":"偶像"},{"n":"家庭","v":"家庭"},{"n":"年代","v":"年代"},{"n":"革命","v":"革命"},{"n":"农村","v":"农村"},{"n":"都市","v":"都市"},{"n":"其他","v":"其他"}]},
            {"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地（大陆）","v":"内地（大陆）"},{"n":"港澳台","v":"港澳台"},{"n":"欧美","v":"欧美"},{"n":"日韩","v":"日韩"},{"n":"其他","v":"其他"}]},
            {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"}]},
            {"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]}
        ],
        "动画片":[
    		{"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"亲子","v":"亲子"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"动作","v":"动作"},{"n":"宠物","v":"宠物"},{"n":"体育","v":"体育"},{"n":"益智","v":"益智"},{"n":"历史","v":"历史"},{"n":"教育","v":"教育"},{"n":"校园","v":"校园"},{"n":"言情","v":"言情"},{"n":"武侠","v":"武侠"},{"n":"经典","v":"经典"},{"n":"未来","v":"未来"},{"n":"古代","v":"古代"},{"n":"神话","v":"神话"},{"n":"真人","v":"真人"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"奇幻","v":"奇幻"},{"n":"童话","v":"童话"},{"n":"剧情","v":"剧情"},{"n":"夺宝","v":"夺宝"},{"n":"其他","v":"其他"}]},
    		{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地（大陆）","v":"内地（大陆）"},{"n":"港澳台","v":"港澳台"},{"n":"欧美","v":"欧美"}]},
    		{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]}
		],
		"直播中国":[
    		{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"北京","v":"北京"},{"n":"天津","v":"天津"},{"n":"河北","v":"河北"},{"n":"山西","v":"山西"},{"n":"辽宁","v":"辽宁"},{"n":"吉林","v":"吉林"},{"n":"黑龙江","v":"黑龙江"},{"n":"内蒙古","v":"内蒙古"},{"n":"江苏","v":"江苏"},{"n":"浙江","v":"浙江"},{"n":"上海","v":"上海"},{"n":"安徽","v":"安徽"},{"n":"福建","v":"福建"},{"n":"江西","v":"江西"},{"n":"山东","v":"山东"},{"n":"河南","v":"河南"},{"n":"湖北","v":"湖北"},{"n":"湖南","v":"湖南"},{"n":"广东","v":"广东"},{"n":"广西","v":"广西"},{"n":"海南","v":"海南"},{"n":"重庆","v":"重庆"},{"n":"四川","v":"四川"},{"n":"宁夏","v":"宁夏"},{"n":"青海","v":"青海"},{"n":"贵州","v":"贵州"},{"n":"云南","v":"云南"},{"n":"陕西","v":"陕西"},{"n":"甘肃","v":"甘肃"},{"n":"新疆","v":"新疆"},{"n":"西藏","v":"西藏"}]}
		],
		"央视频":[
    		{"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"时政","v":"18yyArea0926"},{"n":"资讯","v":"18MZvI3a0926"},{"n":"军事","v":"18JZRZJf0926"},{"n":"热评","v":"18AzYZNf0926"},{"n":"纪实","v":"18BjQNVv0926"},{"n":"教育","v":"18yuAfqe0926"},{"n":"科普","v":"18BjmqQf0926"},{"n":"关注","v":"关注"}]}
		],
		"听音":[
    		{"key":"channel","name":"频道","value":[{"n":"按分类","v":""},{"n":"电视剧","v":"PAGEucQhBjWzSNBxC93UoCAt201126"},{"n":"历史","v":"PAGEZEFdcHJXJL3hm8LIMyIT200828"},{"n":"评书","v":"PAGEfi6eQ0LXRP0F2MruYmat200828"},{"n":"相声","v":"PAGEZ58kB6y4CBMF1WwJf3j3211207"},{"n":"解案","v":"PAGESsDhkmHn8iz07VCAqiFS200828"},{"n":"健康","v":"PAGEnUBwfxDuaWyigDcVbjvr200828"},{"n":"文化","v":"PAGE75jPoBBgP47n5MSGzQsg201125"},{"n":"戏曲","v":"PAGEdDkUJqtxc6TS2KEhOiGN201125"},{"n":"悬疑","v":"PAGEdfca6fcG7STLxSjeBCmU201125"},{"n":"青少","v":"PAGE9vqXqD5Hp4SvD4R9otsp210111"},{"n":"生活","v":"PAGErtYLDCfcj7r23n4nfgT9201125"},{"n":"科技","v":"PAGEZamOQ5sVg6l6adEN4zQi201125"},{"n":"警事","v":"PAGEamuxeyNI770HqgG67FJc201125"},{"n":"情感","v":"PAGEdGZ60r4byOcacJZz2T5w201125"},{"n":"体育","v":"PAGEJwKjUAwSc1nW0kzdhAbD210607"}]},
    		{"key":"sc","name":"类型","value":[{"n":"按标签","v":""},{"n":"春秋战国","v":"春秋战国"},{"n":"秦朝","v":"秦朝"},{"n":"汉朝","v":"汉朝"},{"n":"三国","v":"三国"},{"n":"两晋南北朝","v":"两晋南北朝"},{"n":"隋朝","v":"隋朝"},{"n":"唐朝","v":"唐朝"},{"n":"宋朝","v":"宋朝"},{"n":"明朝","v":"明朝"},{"n":"清朝","v":"清朝"},{"n":"工作","v":"工作"},{"n":"家庭教育","v":"家庭教育"},{"n":"读书","v":"读书"},{"n":"休闲娱乐","v":"休闲娱乐"},{"n":"运动","v":"运动"},{"n":"旅游","v":"旅游"},{"n":"养生","v":"养生"},{"n":"亲子","v":"亲子"},{"n":"励志","v":"励志"},{"n":"户外","v":"户外"},{"n":"正史","v":"正史"},{"n":"军事","v":"军事"},{"n":"战争","v":"战争"},{"n":"名人","v":"名人"},{"n":"纪实","v":"纪实"},{"n":"传记","v":"传记"},{"n":"故事","v":"故事"},{"n":"考古","v":"考古"},{"n":"动画","v":"动画"},{"n":"科普","v":"科普"},{"n":"经典","v":"经典"},{"n":"绘本","v":"绘本"},{"n":"哄睡","v":"哄睡"},{"n":"名著","v":"名著"},{"n":"诗词","v":"诗词"},{"n":"国学","v":"国学"},{"n":"艺术修养","v":"艺术修养"},{"n":"名家讲座","v":"名家讲座"},{"n":"书画","v":"书画"},{"n":"评书","v":"评书"},{"n":"京剧","v":"京剧"},{"n":"黄梅戏","v":"黄梅戏"},{"n":"越剧","v":"越剧"},{"n":"昆曲","v":"昆曲"},{"n":"豫剧","v":"豫剧"},{"n":"秦腔","v":"秦腔"},{"n":"评剧","v":"评剧"},{"n":"粤剧","v":"粤剧"},{"n":"河北梆子","v":"河北梆子"},{"n":"吕剧","v":"吕剧"},{"n":"川剧","v":"川剧"},{"n":"中医","v":"中医"},{"n":"健康常识","v":"健康常识"},{"n":"节气养生","v":"节气养生"},{"n":"疾病预防","v":"疾病预防"},{"n":"艾灸","v":"艾灸"},{"n":"黄帝内经","v":"黄帝内经"},{"n":"运动健身","v":"运动健身"},{"n":"美食","v":"美食"},{"n":"古代法律","v":"古代法律"},{"n":"普法","v":"普法"},{"n":"案件","v":"案件"},{"n":"民法生活","v":"民法生活"},{"n":"警察故事","v":"警察故事"},{"n":"亲情","v":"亲情"},{"n":"友情","v":"友情"},{"n":"爱情","v":"爱情"},{"n":"女性","v":"女性"},{"n":"婚姻","v":"婚姻"},{"n":"治愈","v":"治愈"},{"n":"萌宠","v":"萌宠"},{"n":"帝王","v":"帝王"},{"n":"古代名相","v":"古代名相"},{"n":"诗人","v":"诗人"},{"n":"词人","v":"词人"},{"n":"名将","v":"名将"},{"n":"商人","v":"商人"},{"n":"文艺名家","v":"文艺名家"},{"n":"戏曲名家","v":"戏曲名家"},{"n":"学党史","v":"学党史"},{"n":"榜样故事","v":"榜样故事"},{"n":"足球","v":"足球"},{"n":"篮球","v":"篮球"},{"n":"球星","v":"球星"},{"n":"奥运会","v":"奥运会"}]}
		],
		"熊猫频道":[
		    {"key":"channel","name":"频道","value":[{"n":"熊猫剧场","v":"视频"},{"n":"熊猫直播","v":"直播"}]}
		],
		"频道大全":[
		    {"key":"channel","name":"频道","value":[{"n":"CCTV-1综合","v":"CHAL1450952056131267"},{"n":"CCTV-2财经","v":"CHAL1450952448022284"},{"n":"CCTV-3综艺","v":"CHAL1450952493215293"},{"n":"CCTV-4中文国际","v":"CHAL1450952507945305"},{"n":"CCTV-5体育","v":"CHAL1450953026950326"},{"n":"CCTV-6电影","v":"CHAL1450953056640335"},{"n":"CCTV-7国防军事","v":"CHAL1450953074552346"},{"n":"CCTV-8电视剧","v":"CHAL1450953090171355"},{"n":"CCTV-9纪录","v":""},{"n":"CCTV-10科教","v":"CHAL1450953121759377"},{"n":"CCTV-11戏曲","v":"CHAL1450953130689386"},{"n":"CCTV-12社会与法","v":"CHAL1450953141181395"},{"n":"CCTV-13新闻","v":"CHAL1450953156045404"},{"n":"CCTV-14少儿","v":"CHAL1450953164524413"},{"n":"CCTV-15音乐","v":"CHAL1450953173422422"},{"n":"CCTV-16奥林匹克","v":"CHAL1634526489443600"},{"n":"CCTV-17农业农村","v":"CHAL1562550612547996"}]}
		],
		"电台":[
		    {"key":"channel","name":"频道","value":[{"n":"国家","v":"0"},{"n":"北京","v":"110000"},{"n":"河北","v":"130000"},{"n":"上海","v":"310000"},{"n":"重庆","v":"500000"},{"n":"河南","v":"410000"},{"n":"江苏","v":"320000"},{"n":"贵州","v":"520000"},{"n":"辽宁","v":"210000"},{"n":"四川","v":"510000"},{"n":"浙江","v":"330000"},{"n":"宁夏","v":"640000"},{"n":"福建","v":"350000"},{"n":"甘肃","v":"620000"},{"n":"广东","v":"440000"},{"n":"江西","v":"360000"},{"n":"山东","v":"370000"},{"n":"山西","v":"140000"},{"n":"湖南","v":"430000"},{"n":"湖北","v":"420000"},{"n":"海南","v":"460000"},{"n":"吉林","v":"220000"},{"n":"黑龙江","v":"230000"},{"n":"陕西","v":"610000"},{"n":"内蒙古","v":"150000"},{"n":"广西","v":"450000"},{"n":"云南","v":"530000"},{"n":"安徽","v":"340000"},{"n":"青海","v":"630000"},{"n":"新疆","v":"650000"},{"n":"西藏","v":"540000"},{"n":"新疆兵团","v":"660000"}]},
		    {"key":"sc","name":"频道","value":[{"n":"全部","v":"0"},{"n":"热门","v":"7"},{"n":"新闻","v":"9"},{"n":"财经","v":"11"},{"n":"生活","v":"13"},{"n":"交通","v":"15"},{"n":"综艺","v":"17"},{"n":"音乐","v":"5"},{"n":"故事","v":"19"},{"n":"民族","v":"21"}]}
		]
    },
    filter_def:{
        熊猫频道:{channel:'直播'},
        频道大全:{channel:'CHAL1450952056131267'},
        电台:{channel:'0',sc:'0'}
    },     
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:10000,
    play_parse:true,
       
    lazy: $js.toString(() => {
      if(input.includes("|")){
        var dom=input.split("|")[0];
        var id = input.split("|")[1];
        var k4 = input.split("|")[2];
        var by=input.split("|")[3];
        var mq=getQuality(id)[0];
        if (k4 === '7') {
            input = dom+'/asp/hls/4000/0303000a/3/default/' + id + '/4000.m3u8';
        }else if(by=='听'){
            input = dom+'/asp/hlsaudio/hls/'+mq+'/0303000a/3/default/'+id+'/'+mq+'.m3u8';
        }else {
            input = dom+'/asp/hls/'+mq+'/0303000a/3/default/' + id + '/'+mq+'.m3u8';
        }
      }
    }),


    limit:6,
    double:false,

    推荐: $js.toString(() => {
        var d = [];
        var list = JSON.parse(request(input)).response.docs;

        list.forEach(it => {
            // 一级标题
            var title1 = it.column_name;
            // 一级描述
            var desc1 = it.channel_name;
            // 一级图片URL
            var picUrl1 = it.column_logo;
            // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 更新至）
            var url1 = it.lastVIDE.videoSharedCode + '|' + '' + '|' + it.column_firstclass + '|' + it.column_name + '|' + '' + '|' + it.column_playdate + '|' + it.channel_name + '|' + it.column_brief + '|' + it.column_logo + '|' + '' + '|' + it.lastVIDE.videoTitle;

            d.push({
                desc : desc1,
                title : title1,
                pic_url : picUrl1,
                url : url1
            })
        })
        setResult(d);
    }),

    
    一级: $js.toString(() => {
        var d = [];
        if(MY_CATE==='栏目大全') {
            var q=getQuery(input);
            var list = JSON.parse(request(HOST+'/lanmu/columnSearch?&fl='+q.letter+'&fc='+q.sc+'&cid='+q.channel+'&p='+MY_PAGE+'&n=500&serviceId=tvcctv&t=json')).response.docs;
            list.forEach(it => {
                // 一级标题
                var title1 = it.column_name;
                // 一级描述
                var desc1 = it.channel_name;
                // 一级图片URL
                var picUrl1 = it.column_logo;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 更新至）
                var url1 = it.lastVIDE.videoSharedCode + '|' + '' + '|' + it.column_firstclass + '|' + it.column_name + '|' + '' + '|' + it.column_playdate + '|' + it.channel_name + '|' + it.column_brief + '|' + it.column_logo + '|' + '' + '|' + it.lastVIDE.videoTitle;
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })
        }
     else if(MY_CATE==='直播中国') {
            var q=getQuery(input);
            var list = JSON.parse(request(HOST+'/newList/getMicroLiveChinaList?region='+q.area+'&serviceId=livechina&p='+MY_PAGE+'&n=10&t=json')).data;
            list.forEach(it => {
                // 一级标题
                var title1 = it.title;
                // 一级描述
                var desc1 = it.region;
                // 一级图片URL
                var picUrl1 = it.liveChinaPcListCover;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                var url1='';
                if(it.signalList.length>0){
                    var list1=it.signalList;
                    url1=list1.map(function(i){
                        return i.name+'¥https://gcalic.v.myalicdn.com/gc/'+i.channelId+'_1/index.m3u8'
                    }).join('#')
                }else{
                    url1=it.title+'¥https://dh5.cntv.myalicdn.com//asp//hls/2000/0303000a/3/default/' + it.id + '/2000.m3u8'
                }           
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : '€直播中国€'+url1+'€'+it.description+'€'+'直播中国'
                })
            })
     
     }
     else   if(MY_CATE==='4K专区') {
     var list = JSON.parse(request(HOST+'/NewVideo/getLastVideoList4K?serviceId=cctv4k&cid=CHAL1558416868484111&p='+MY_PAGE+'&n=500&serviceId=tvcctv&t=json')).data.list;
            list.forEach(it => {
                // 一级标题
                var title1 = it.title;
                // 一级描述
                var desc1 = it.sc +'•'+it.fc + '•更新至:'+it.last_video.title.split('》')[1];
                // 一级图片URL
                var picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）          
                var url1 = it.id + '|' + it.area + '|' + it.sc + '|' + it.title + '|' + it.actors + '|' + it.year + '|' + it.channel + '|' + it.last_video.keywords + '|' + it.image + '|' + it.last_video.part + '|' + '' + '|' + MY_CATE;
                d.push({
                        desc : desc1,
                        title : title1,
                        pic_url : picUrl1,
                        url : url1
                    })             
            })
     
     }
     else if(MY_CATE==='电台') {    
            var q=getQuery(input);
            var key='f0fc4c668392f9f9a447e48584c214ee';
            var t=new Date().getTime();
            var s=md5('categoryId='+q.sc+'&provinceCode='+q.channel+'&timestamp='+t+'&key='+key).toString().toUpperCase();
            var headers={'equipmentId':'0000','timestamp':t,'sign':s}
            if(MY_PAGE==1){     
                let list=JSON.parse(request('https://ytmsout.radio.cn/web/appBroadcast/list?categoryId='+q.sc+'&provinceCode='+q.channel,{headers:headers})).data;                   
                list.forEach(it => {
                    d.push({
                        desc : it.subtitle,
                        title : it.title,
                        pic_url : it.image,
                        url : '€电台#'+(it.subtitle.startsWith('暂无')?'':it.contentId)+'€'+it.title+'¥'+it.mp3PlayUrlHigh+'¥¥¥'+it.title+'¥'+it.mp3PlayUrlLow+'€€'+'高音质¥¥¥低音质'
                    })
                })
            }    
     }
     else if(MY_CATE==='微视频') {
            // 创建一个新的Date对象，表示当前时间
            var currentDate = new Date();         
            // 获取年、月、日、小时
            var year = currentDate.getFullYear();
            var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要加1，并补零
            var day = currentDate.getDate().toString().padStart(2, '0'); // 补零
            var hours = currentDate.getHours().toString().padStart(2, '0'); // 补零     
            // 拼接日期和时间字符串
            var time = year + month + day + hours + '00';
            var list = JSON.parse(request(HOST+'/list/getPCFeedRecommend?n=10&p='+MY_PAGE+'&serviceId=tvcctv&type=0&utdid=NON-PERSONALIZED&updateTime='+time)).data.list;
            list.forEach(it => {
                // 一级标题
                var title1 = it.title.includes(']')?it.title.split(']')[1]:it.title;
                // 一级描述
                var desc1 = it.length.replace('00:','');
                // 一级图片URL
                var picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                //var play='https://hls.cntv.myalicdn.com//asp/hls/2000/0303000a/3/default/' + it.guid + '/2000.m3u8';
                var url1 = it.guid + '*' + title1 + '*' + it.sc+ '*'+''+'*'+'';
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })    
     }
     else if(MY_CATE==='频道大全') {
            if(MY_PAGE==1){
                lanmuTime=''
            }
            let list=JSON.parse(request(HOST+'/newLanmu/getVideoListByColumnChannelId?serviceId=tvcctv&cid='+getQuery(input).channel+'&n=16&sort=desc&mode=1&fd='+lanmuTime)).list;
            lanmuTime=list[15].focus_date;         
            list.forEach(it => {
                // 一级标题
                var title1 = it.title.includes(']')?it.title.split(']')[1]:it.title;
                // 一级描述
                var desc1 = it.length.replace('00:','')+'•'+it.column_name+'•'+TimestampToDate(Number(it.focus_date));
                // 一级图片URL
                var picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                //var play='https://hls.cntv.myalicdn.com//asp/hls/2000/0303000a/3/default/' + it.guid + '/2000.m3u8';
                var url1 = it.guid + '*' + title1 + '*' +it.column_name+ '*'+TimestampToDate(Number(it.focus_date))+'*';
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })    
     }
     else if(MY_CATE==='央视频') {
            var tid=getQuery(input).sc;
            let list=[];
            if(tid=='关注'){
                let chid=[
                   'EPGC1525679284945000',               
                   'EPGC1525679407661000'//直播中国
                   //'EPGC1525679284888000'//主持人
                ];
                list=JSON.parse(request('https://media.app.cctv.com/vapi/media/msublist.do?chid='+chid.join(',')+'&p='+MY_PAGE+'&n=20')).data;
                list.forEach(it => {
                    let title1 = it.mediaName;
                    let desc1 = '视频:'+it.vtotal+'•粉丝:'+it.besubscribed;
                    let pic= it.logoImg;
                    let url1 = it.mediaId + '|' + '' + '|' + '' + '|' + title1 + '|' + '' + '|' + '' + '|' + '' + '|' + it.biref + '|' + pic + '|' + '' + '|' + '' + '|' + '关注';
                    d.push({
                        desc : desc1,
                        title : title1,
                        pic_url : pic,
                        url : url1
                    })
                })
            }else{
                list = JSON.parse(request('https://media.app.cctv.com/vapi/video/vplist.do?chid=&cid='+tid+'&p='+MY_PAGE+'&n=12')).data;
                list.forEach(it => {
                    var title1 = it.title;
                    var desc1 = Duration(it.vduration)+'•'+it.mediaName+'•'+TimestampToDate(it.pubTime);
                    var pic = it.image1;
                    var url1 = it.guid + '*' + title1 + '*' + it.keywords+ '*'+TimestampToDate(it.pubTime)+'*'+it.vbrief;
                    d.push({
                        desc : desc1,
                        title : title1,
                        pic_url : pic,
                        url : url1
                    })
                })  
            }  
     }
     else if(MY_CATE==='熊猫频道'){
         let tid=getQuery(input).channel;
         let list=[];
         if(MY_PAGE==1){
            if(tid=='视频'){
                list =pdfa(request('https://video.ipanda.com'),'.item_box&&.item');
                list.forEach(it=>{
                    let pic=pdfh(it,'img&&src');
                    let id=pdfh(it,'a&&href').replace('.shtml','').split('/').pop();
                    d.push({
                        title:pdfh(it,'.tit&&Text'),
                        desc:pdfh(it,'.fluttering_red&&Text'),
                        img:pic.startsWith('http')?pic:'https:'+pic,
                        url:id+'|' + it.area + '|' + it.fc + '|' + pdfh(it,'.tit&&Text') + '|' + it.actors + '|' + it.year + '|' + it.channel + '|' + pdfh(it,'.brief&&Text') + '|' + it.image + '|' + '' + '|' + '' + '|' + MY_CATE
                    })
                })
            }else if(tid=='直播'){
                list=pdfa(request('https://live.ipanda.com/xmwl/index.shtml'),'.change_channel_box&&.item');
                list.forEach(it=>{
                    let title1=pdfh(it,'.tit&&a&&Text');
                    let pic=pdfh(it,'img&&src');
                    let area=pdfh(it,'a&&href').split('/')[3];
                    let id1=pdfh(it,'a&&href').split('/')[4].split('?')[0].replace('index.shtml','66');
                    let id=id1==''?'66':id1;
                    let playurl='';
                    if(area=='xmcd'){
                        playurl=('https://gcwbndali.v.myalicdn.com/gcwbnd/xiongmao'+id+'_2/index.m3u8').replace('xiongmao66','ipanda');
                    }else if(area=='xmwl'){
                        playurl=('https://gcwbndali.v.myalicdn.com/gcwbnd/xiongmao'+(Number(id)+10)+'_2/index.m3u8').replace('xiongmao76','ipanda1000').replace('21','20');
                    }else if(area=='zxwz'){
                        playurl=('https://gcwbndali.v.myalicdn.com/gcwbnd/xiongmao'+id+'_2/index.m3u8').replace('milu','23').replace('bmxs','24');
                    }
                    d.push({
                        title:title1.split(' ')[0],
                        desc:title1.split(' ')[1],
                        img:pic.startsWith('http')?pic:'https:'+pic,
                        url:'€熊猫直播€'+title1+'¥'+playurl+'€€'+'熊猫频道'
                    })
                })
            }
         }  
     }
     else if(MY_CATE==='听音') {
            var q=getQuery(input);
            var list = JSON.parse(request(HOST+'/newVideoset/getVideoAlbumListByPageIdTvty?sc='+q.sc+'&p='+MY_PAGE+'&id='+q.channel+'&n=20&serviceId=tvty')).data.list;
            list.forEach(it => {
                // 一级标题
                var title1 = it.title;
                // 一级描述
                var desc1 =it.sc.replaceAll(/,/gi,'•');
                // 一级图片URL
                var picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                var url1 = it.id + '|' + it.area + '|' + it.fc + '|' + it.title + '|' + it.actors + '|' + it.year + '|' + it.channel + '|' + it.brief + '|' + it.image + '|' + '' + '|' + '' + '|' + MY_CATE;
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })   
     }
    
        else {
            var channelMap = {
                "特别节目": "CHAL1460955953877151",
                "纪录片": "CHAL1460955924871139",
                "电视剧": "CHAL1460955853485115",
                "动画片": "CHAL1460955899450127",
            };
            var list = JSON.parse(request(input+'&channelid='+channelMap[MY_CATE]+'&fc='+MY_CATE+'&p='+MY_PAGE)).data.list;
            list.forEach(it => {
                // 一级标题
                var title1 = it.title;
                // 一级描述
                var desc1 = it.sc + ((typeof it.year==='undefined' || it.year==='')?'':('•'+it.year)) + ((typeof it.count==='undefined' || it.count==='')?'':('•共' + it.count + '集'));
                // 一级图片URL
                var picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                var url1 = it.id + '|' + it.area + '|' + it.sc + '|' + it.title + '|' + it.actors + '|' + it.year + '|' + it.channel + '|' + it.brief + '|' + it.image + '|' + it.count + '|' + '' + '|' + MY_CATE;
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })
        }
        setResult(d);
    }),
    
    二级: $js.toString(() => {
      VOD={}
      if(input.includes("|")){
        var info = input.split("|");      
        VOD = {
            vod_id: info[0],
            vod_name: info[3],
            vod_pic: info[8],
            type_name: info[2]==='undefined'?'':info[2],
            vod_year: info[5]==='undefined'?'':info[5],
            vod_area: info[1]==='undefined'?'':info[1],
            vod_remarks: info[9]===''?'':('共'+info[9]+'集'),
            vod_director: info[6]==='undefined'?'':info[6],
            vod_actor: info[4]==='undefined'?'':info[4],
            vod_content: info[7]==='undefined'?'':info[7]              
        };
        var modeMap = {
            "4K专区": "0",
            "特别节目": "0",
            "纪录片": "0",
            "电视剧": "0",     
            "动画片": "0",
            "熊猫频道":"2",
            "听音":"2"          
        };
        //获取数据
        var id=info[0].replace(HOST+'/','').replace('lanmu/','');
        var playUrls=[];     
        if(id.startsWith('VID')){
            var mode=modeMap[info[11]];
            var total=JSON.parse(request('https://api.cntv.cn/NewVideo/getVideoListByAlbumIdNew?id='+id+'&serviceId=tvcctv&p=1&n=1&mode='+mode+'&pub=2&sort=desc')).data.total;            
            //使用默认参数没有数据，切换参数         
            if(total===0){
                mode='1';
                total=JSON.parse(request('https://api.cntv.cn/NewVideo/getVideoListByAlbumIdNew?id='+id+'&serviceId=tvcctv&p=1&n=1&mode='+mode+'&pub=2&sort=desc')).data.total;
            }
            //通过数据总量判断页数
            var pageNum=Math.ceil(total/100);           
            //翻页获取数据
            if(pageNum>2){pageNum=3}         
            var page = 0;                      
            while(page<pageNum){
                page = page+1;
                var burl= 'https://api.cntv.cn/NewVideo/getVideoListByAlbumIdNew?id='+id+'&serviceId=tvcctv&p='+page+'&n=100&mode='+mode+'&pub=2&sort=desc';
                var list = JSON.parse(request(burl)).data.list;  
                list.forEach(it => {
                   playUrls.push(it);
                })             
            }
            //默认是倒序，再倒过来
            if(info[11]!='熊猫频道'&&info[11]!='4K专区'){
                playUrls.reverse()
            }
        }else if(id.length==12){         
            let total=JSON.parse(request('https://media.app.cctv.com/vapi/video/vplist.do?p=1&n=1&mid='+id)).count;            
            //通过数据总量判断页数
            var pageNum=Math.ceil(total/20);           
            //翻页获取数据
            if(pageNum>14){pageNum=15}   
            var page = 0;                     
            while(page<pageNum){
                page = page+1;
                var burl= 'https://media.app.cctv.com/vapi/video/vplist.do?p='+page+'&n=20&mid='+id;
                var list = JSON.parse(request(burl)).data;  
                list.forEach(it => {
                   playUrls.push(it);
                })             
            }
        }else{         
            var link1 = 'https://api.cntv.cn/video/videoinfoByGuid?guid='+id+'&serviceId=tvcctv';
            var ctid = JSON.parse(request(link1)).ctid.replace('https://api.cntv.cn/lanmu/','');
            var link2 = 'https://api.cntv.cn/NewVideo/getVideoListByColumn?id='+ctid+'&d=&p=1&n=100&sort=desc&mode=0&serviceId=tvcctv&t=json';
            playUrls = JSON.parse(request(link2)).data.list;
        }        
        //制作各线路的数据列表
        var  playList=[];        
        fromDom.forEach(dom => {
            playList.push(
                playUrls.map(function(i){
                    return i.title + "$" + dom + "|"+ i.guid + "|" + i.type+"|"+info[11]
                }).join("#")
            )
        })
        // 最后封装所有线路
        VOD.vod_play_from=playFrom.join('$$$');
        VOD.vod_play_url=playList.join('$$$');       
      }else if(input.includes("¥")){
        let info=input.split('€');
        function ymd(s){let date=new Date(s);return date.getFullYear().toString()+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0')}
        function hms(s){let date=new Date(s);return date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0')}
        if(info[1].includes('电台')&&info[1].split('#')[1]!=''){
            let code=info[1].split('#')[1];
            var key='f0fc4c668392f9f9a447e48584c214ee';
            var t=new Date().getTime();
            var s=md5('broadcastId='+code+'&date='+ymd(t)+'&timestamp='+t+'&key='+key).toString().toUpperCase();
            var headers={'equipmentId':'0000','timestamp':t,'sign':s}
            let data=JSON.parse(request('https://ytmsout.radio.cn/web/appProgram/listByDate?date='+ymd(t)+'&broadcastId='+code,{headers:headers})).data;
            VOD.vod_content=data.map(it=>{return '〖'+hms(it.startTime)+'-'+hms(it.endTime)+'〗 '+it.programName+((t>it.startTime&&t<it.endTime)?'🟢':'')}).join('\n')
        }else{
            VOD.vod_content=info[3];
        }
        VOD.vod_play_from=info[4].replaceAll('¥','$');       
        VOD.vod_play_url=info[2].replaceAll('¥','$');
     }else{
        var pid=input.split('*')[0].replace(HOST+'/','').replace('lanmu/','');
        var lists=fromDom.map(function(dom){
            return input.split('*')[1] + "$" + dom + "|"+ pid + "||"
        }).join('$$$');        
        VOD={
            type_name:input.split('*')[2].replace(',','•'),
            vod_year:input.split('*')[3],
            vod_content:input.split('*')[4],           
            vod_play_from:playFrom.join('$$$'),         
            vod_play_url:lists
        };
     }
    }),

    搜索:$js.toString(() =>{
        var d=[];
        var list = JSON.parse(request(input)).list;
        list.forEach(it=>{
            var title1 = it.DRETITLE.replaceAll(/<[^(<|>)]*>/gi,'');
            // 一级描述
            var t=it.DURATION;     
            var desc1=Duration(t)+'•'+it.PLAYTIME.match(/[0-9]{4}/)[0];           
            // 一级图片URL
            var picUrl1 = it.IMAGELINK;
            // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
            var url1 = it.DETAILSID+ '*' + title1 + '*' + '' + '*' + it.PLAYTIME + '*' + it.DRECONTENT;
            d.push({
                desc : desc1,
                title : title1,
                pic_url : picUrl1,
                url : url1
            })
        });
        setResult(d);
    }),
}