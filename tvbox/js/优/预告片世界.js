var rule = {
title: '预告片世界',
host: 'https://www.6huo.com',
headers: {'User-Agent': 'PC_UA'},
timeout: 5000,
homeUrl: '/',
url: '/fyclass/fyfilter',
filter_url: '{{fl.area}}_{{fl.class}}_{{fl.year}}{{fl.month}}_{{fl.by}}_fypage',
detailUrl: 'fyid',
searchUrl: '/?keyword=**&view=search&page=fypage',
searchable: 2, 
quickSearch: 1, 
filterable: 1, 
play_parse: true,
lazy: $js.toString(() => {
    input = {
        parse: 1,
        jx: 0,
        url: input
    };
}),
class_name: '全部电影预告',
class_url: 'movlist',
filter:{
"movlist":[
    {"key":"area","name":"国家地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"西班牙","v":"西班牙"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"}]},
    {"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"惊悚","v":"惊悚"},{"n":"爱情","v":"爱情"},{"n":"动作","v":"动作"},{"n":"犯罪","v":"犯罪"},{"n":"冒险","v":"冒险"},{"n":"悬疑","v":"悬疑"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"家庭","v":"家庭"},{"n":"动画","v":"动画"},{"n":"历史","v":"历史"},{"n":"传记","v":"传记"},{"n":"灾难","v":"灾难"},{"n":"战争","v":"战争"},{"n":"武侠","v":"武侠"},{"n":"情色","v":"情色"},{"n":"同性","v":"同性"},{"n":"纪录片","v":"纪录片"},{"n":"短片","v":"短片"}]},
    {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"}]},
    {"key":"month","name":"月份","value":[{"n":"全部","v":""},{"n":"1月","v":"-1"},{"n":"2月","v":"-2"},{"n":"3月","v":"-3"},{"n":"4月","v":"-4"},{"n":"5月","v":"-5"},{"n":"6月","v":"-6"},{"n":"7月","v":"-7"},{"n":"8月","v":"-8"},{"n":"9月","v":"-9"},{"n":"10月","v":"-10"},{"n":"11月","v":"-11"},{"n":"12月","v":"-12"}]},
    {"key":"by","name":"排序","value":[{"n":"最近更新","v":""},{"n":"上映日期","v":"pubtime"},{"n":"热门","v":"hot"}]}
    ]
},
limit: 9,
推荐: '*',
一级: '.inner-2col-main&&li;img&&alt;img&&src;.item-tags&&Text;a&&href',
二级: $js.toString(() => {
let khtml = request(input);
let p=pdfh(khtml, '.movie-title-detail&&Text').split('：');
VOD = {};
VOD.vod_id = input;
VOD.vod_name = pdfh(khtml, '.movie-name&&Text');
VOD.type_name =p[1].replace(p[1].split('/')[0]+'/','').replace('上映','');
VOD.vod_pic =pdfh(khtml, '.movie-title-mpic&&img&&src');
VOD.vod_year = p[2].match(/[0-9]{4}/)[0];
VOD.vod_area =p[1].split('/')[0];
VOD.vod_director = p[3].replace('主演','');
VOD.vod_actor = p[4].replace('剧情','');
VOD.vod_content = pdfh(khtml, '.main-textbox&&Text');
VOD.vod_play_from = '预告片世界';
let klists = [];
let kcode = pdfa(khtml, '.tlist:lt(1)&&.tlist-bbs-tdtitle');
if(kcode.length!=0){
    kcode.forEach((kc) => {
        let kname = pdfh(kc, 'a&&Text');
        let khref = HOST+pdfh(kc, 'a&&href');
        let klist = kname + '$' + khref;   
        klists.push(klist);
    });
    VOD.vod_play_url = klists.join('#');
}else{
    VOD.vod_play_url = '暂无预告片$http://1.mp4';
}
}),
搜索: '.movlist:gt(1)&&li;img&&alt;img&&src;.item-tags&&Text;a&&href',
}