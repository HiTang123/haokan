globalThis.getVideos=function(link,key){
    let data=JSON.parse(request(link))[key];
    let cate_excludes=[29,51,52];
    let d=[];
    data.forEach(function(it){
        if(!cate_excludes.includes(it.type_id)){
            d.push({
                vod_name:it.vod_name,
                vod_pic:it.vod_pic,
                vod_remarks:it.vod_remarks,
                vod_id:it.vod_id
            });
        }
    });
    return d
}
globalThis.playVideo=function(link,key,name){
    let data=JSON.parse(request(link))[key];
    VOD=data[0];
    VOD.vod_play_from=VOD.vod_play_from.replace(name,'👮‍勿信视频内广告');
}
var rule = {
    title: '暴风资源',
    host: 'https://bfzyapi.com',
    url: '/api.php/provide/vod/?ac=detail&t=fyfilter&pg=fypage&f=',
    homeUrl: '/api.php/provide/vod/?ac=detail',
    searchUrl: 'https://search.bfzyapi.com/json-api/?dname=baofeng&key=**&count=50',
    detailUrl: '/api.php/provide/vod/?ac=detail&ids=fyid',
    limit: 6,   
    class_name: '电影&电视剧&短剧&动漫&综艺&体育',
    class_url:'1&2&6&3&4&5',
    filter_url:'{{fl.cateId}}',
    filter:
    {
    "1":[{"key":"cateId","name":"分类","value":[
        {"n":"动作片","v":"21"},
        {"n":"喜剧片","v":"22"},
        {"n":"动画片","v":"50"},
        {"n":"恐怖片","v":"23"},
        {"n":"科幻片","v":"24"},
        {"n":"爱情片","v":"25"},
        {"n":"剧情片","v":"26"},
        {"n":"战争片","v":"27"},
        {"n":"纪录片","v":"28"}
            ]}],           
    "2":[{"key":"cateId","name":"分类","value":[
        {"n":"国产剧","v":"31"},
        {"n":"欧美剧","v":"32"},
        {"n":"香港剧","v":"33"},
        {"n":"韩国剧","v":"34"},
        {"n":"台湾剧","v":"35"},
        {"n":"日本剧","v":"36"},
        {"n":"海外剧","v":"37"},
        {"n":"泰国剧","v":"38"}
            ]}],          
    "3":[{"key":"cateId","name":"分类","value":[
        {"n":"国产动漫","v":"40"},
        {"n":"日韩动漫","v":"41"},
        {"n":"欧美动漫","v":"42"},
        {"n":"港台动漫","v":"43"},
        {"n":"海外动漫","v":"44"}
            ]}],         
    "4":[{"key":"cateId","name":"分类","value":[
        {"n":"大陆综艺","v":"46"},
        {"n":"港台综艺","v":"47"},
        {"n":"日韩综艺","v":"48"},
        {"n":"欧美综艺","v":"49"}
            ]}],
    "5":[{"key":"cateId","name":"分类","value":[
        {"n":"足球","v":"54"},
        {"n":"篮球","v":"55"},
        {"n":"网球","v":"56"},
        {"n":"斯诺克","v":"57"}
            ]}],
    "6":[{"key":"cateId","name":"分类","value":[
        {"n":"重生民国","v":"65"},
        {"n":"穿越年代","v":"66"},
        {"n":"现代言情","v":"67"},
        {"n":"反转爽文","v":"68"},
        {"n":"女恋总裁","v":"69"},
        {"n":"闪婚离婚","v":"70"},
        {"n":"都市脑洞","v":"71"},
        {"n":"古装仙侠","v":"72"}
            ]}]
    },
    filter_def:{
        1:{cateId:'21'},
        2:{cateId:'31'},
        3:{cateId:'40'},
        4:{cateId:'46'},
        5:{cateId:'54'},
        6:{cateId:'66'}
        },    
    推荐:`js:VODS=getVideos(input,'list');`,
    一级:`js:VODS=getVideos(input,'list');`,
    二级: `js:playVideo(input,'list','bfzym3u8')`,
    搜索:`js:VODS=getVideos(input,'posts');`,
}
