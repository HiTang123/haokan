globalThis.getVideos=function(link,key){
    let data=JSON.parse(request(link))[key];
    let cate_excludes=[34,35,41,42,43,44,45];
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
    title: '量子资源',
    host: 'https://cj.lziapi.com',
    url: '/api.php/provide/vod/from/lzm3u8?ac=detail&t=fyfilter&pg=fypage&f=',
    homeUrl: '/api.php/provide/vod/from/lzm3u8?ac=detail',
    searchUrl: 'https://search.lziapi.com/json-api/?dname=liangzi&key=**&count=50',
    detailUrl: '/api.php/provide/vod/from/lzm3u8?ac=detail&ids=fyid',
    limit: 6,   
    class_name: '电影&电视剧&动漫&综艺&体育',
    class_url:'1&2&3&4&5',
    filter_url:'{{fl.cateId}}',
    filter:
    {
    "1":[{"key":"cateId","name":"分类","value":[
                {"n":"动作片","v":"6"},
                {"n":"喜剧片","v":"7"},
                {"n":"科幻片","v":"9"},
                {"n":"恐怖片","v":"10"},
                {"n":"爱情片","v":"8"},
                {"n":"剧情片","v":"11"},
                {"n":"战争片","v":"12"},
                {"n":"纪录片","v":"20"}
            ]}],           
    "2":[{"key":"cateId","name":"分类","value":[
                {"n":"短剧","v":"46"},
                {"n":"国产剧","v":"13"},
                {"n":"欧美剧","v":"16"},
                {"n":"香港剧","v":"14"},
                {"n":"韩国剧","v":"15"},
                {"n":"台湾剧","v":"21"},
                {"n":"日本剧","v":"22"},
                {"n":"海外剧","v":"23"},
                {"n":"泰国剧","v":"24"}
            ]}],          
    "3":[{"key":"cateId","name":"分类","value":[
                {"n":"国产动漫","v":"29"},
                {"n":"日韩动漫","v":"30"},
                {"n":"欧美动漫","v":"31"},
                {"n":"港台动漫","v":"32"},
                {"n":"海外动漫","v":"33"}
            ]}],         
    "4":[{"key":"cateId","name":"分类","value":[
                {"n":"大陆综艺","v":"25"},
                {"n":"港台综艺","v":"26"},
                {"n":"日韩综艺","v":"27"},
                {"n":"欧美综艺","v":"28"}
            ]}],
    "5":[{"key":"cateId","name":"分类","value":[
                {"n":"足球","v":"37"},
                {"n":"篮球","v":"38"},
                {"n":"网球","v":"39"},
                {"n":"斯诺克","v":"40"}
            ]}]
    },
    filter_def:{
        1:{cateId:'6'},
        2:{cateId:'13'},
        3:{cateId:'29'},
        4:{cateId:'25'},
        5:{cateId:'37'}
        },    
    推荐:`js:VODS=getVideos(input,'list');`,
    一级:`js:VODS=getVideos(input,'list');`,
    二级: `js:playVideo(input,'list','lzm3u8')`,
    搜索:`js:VODS=getVideos(input,'posts');`,
}
