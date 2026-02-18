globalThis.getVideos=function(link,key){
    let data=JSON.parse(request(link))[key];
    let cate_excludes=[];
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
    title: '黑木耳资源',
    host: 'https://heimuer.tv',
    url: '/api.php/provide/vod/?ac=detail&t=fyfilter&pg=fypage&f=',
    homeUrl: '/api.php/provide/vod/?ac=detail',
    searchUrl: '/api.php/provide/vod/?ac=detail&wd=**&pg=fypage',
    detailUrl: '/api.php/provide/vod/?ac=detail&ids=fyid',
    limit: 6,   
    class_name: '电影&电视剧&短剧&动漫&综艺',
    class_url:'1&2&5&3&4',
    filter_url:'{{fl.cateId}}',
    filter:
    {
    "1":[{"key":"cateId","name":"分类","value":[
                {"n":"剧情片","v":"6"},
                {"n":"动作片","v":"7"},
                {"n":"冒险片","v":"8"},
                {"n":"同性片","v":"9"},
                {"n":"喜剧片","v":"10"},
                {"n":"奇幻片","v":"11"},
                {"n":"恐怖片","v":"12"},
                {"n":"悬疑片","v":"20"},
                {"n":"惊悚片","v":"21"},
                {"n":"灾难片","v":"22"},
                {"n":"爱情片","v":"23"},
                {"n":"犯罪片","v":"24"},
                {"n":"科幻片","v":"25"},
                {"n":"动画片","v":"26"},
                {"n":"歌舞片","v":"33"},
                {"n":"战争片","v":"34"},
                {"n":"经典片","v":"35"},
                {"n":"网络电影","v":"36"},
                {"n":"其它片","v":"37"}                             
            ]}],           
    "2":[{"key":"cateId","name":"分类","value":[
                {"n":"国产剧","v":"13"},
                {"n":"港剧","v":"14"},
                {"n":"韩剧","v":"15"},
                {"n":"日剧","v":"16"},
                {"n":"泰剧","v":"28"},
                {"n":"台剧","v":"29"},
                {"n":"欧美剧","v":"30"},
                {"n":"新马剧","v":"31"},
                {"n":"其他剧","v":"32"}          
            ]}],          
    "3":[{"key":"cateId","name":"分类","value":[
                {"n":"欧美动漫","v":"57"},
                {"n":"日本动漫","v":"58"},
                {"n":"韩国动漫","v":"59"},
                {"n":"国产动漫","v":"60"},
                {"n":"港台动漫","v":"61"},
                {"n":"新马泰动漫","v":"62"},
                {"n":"其它动漫","v":"63"}
            ]}],         
    "4":[{"key":"cateId","name":"分类","value":[
                {"n":"国产综艺","v":"38"},
                {"n":"港台综艺","v":"39"},
                {"n":"韩国综艺","v":"40"},
                {"n":"日本综艺","v":"41"},
                {"n":"欧美综艺","v":"42"},
                {"n":"新马泰综艺","v":"43"},
                {"n":"其他综艺","v":"44"}
            ]}],
    "5":[{"key":"cateId","name":"分类","value":[
{"n":"古装短剧","v":"45"},
                {"n":"虐恋短剧","v":"46"},
                {"n":"逆袭短剧","v":"47"},
                {"n":"悬疑短剧","v":"48"},
                {"n":"神豪短剧","v":"49"},
                {"n":"重生短剧","v":"50"},
                {"n":"复仇短剧","v":"51"},
                {"n":"穿越短剧","v":"52"},
                {"n":"甜宠短剧","v":"53"},
                {"n":"强者短剧","v":"54"},
                {"n":"萌宝短剧","v":"55"},
                {"n":"合集短剧","v":"64"},
                {"n":"其它短剧","v":"56"}
            ]}]
    },
    filter_def:{
        1:{cateId:'6'},
        2:{cateId:'13'},
        3:{cateId:'57'},
        4:{cateId:'38'},
        5:{cateId:'46'}
        },    
    推荐:`js:VODS=getVideos(input,'list');`,
    一级:`js:VODS=getVideos(input,'list');`,
    二级: `js:playVideo(input,'list','heimuer')`,
    搜索:`js:VODS=getVideos(input,'list');`,
}
