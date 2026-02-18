globalThis.classes='最新&电影&美剧&韩剧&日剧&动漫&国产';
let filter={};
let filterdef={};
classes.split('&').forEach(it=>{
            filter[it]=[
                {"key": "tag", "name": "地区", "value": [{"n":"全部","v":"全部"},{"n":"剧情","v":"剧情"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"爱情","v":"爱情"},{"n":"冒险","v":"冒险"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"惊悚","v":"惊悚"},{"n":"纪录片","v":"纪录片"},{"n":"动画","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"恐怖","v":"恐怖"},{"n":"战争","v":"战争"},{"n":"灾难","v":"灾难"},{"n":"同性","v":"同性"},{"n":"儿童","v":"儿童"},{"n":"武侠","v":"武侠"},{"n":"情色","v":"情色"}]},
                {"key":"year","name":"排序","value":[{"n":"全部","v":"全部"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]}
            ];
            filterdef[it]={tag:'全部',year:'全部'}
        })
globalThis.filterData=filter;
globalThis.filterDef=filterdef;
var rule = {
    title: 'JOJO',
    host: 'https://api.jiohub.top',
    url: '/v1/api/video/jojo/type/tag/year?type=fyclassfyfilter&page=fypage&size=24',
    homeUrl:'/v1/api/video/jojo/index?size=12',
    searchable: 2,
    quickSearch: 1,
    headers:{ 'User-Agent': PC_UA},
    timeout: 5000,
    class_name: classes,
    class_url: classes,
    filter_url:'&tag={{fl.tag}}&year={{fl.year}}',
    filter:filterData,
    filter_def:filterDef,
    //double:true,
    推荐:$js.toString(() => {
        let d = [];
        let html = post(input);
        let data = JSON.parse(html).data;
        data.forEach(itm => {
        itm.video_list.forEach(it => {       
            d.push({
                url: "https://api.jiohub.top/v1/api/video/jojo/id?id="+it.ID,
                title: it.title,
                img: it.image,
                desc: it.video_tags,
            })
        })})
        setResult(d)
    }),
    一级: $js.toString(() => {
        let d = [];       
        let html = post(input);
        let data = JSON.parse(html).data;
        data.forEach(it => {       
            d.push({
                url: "https://api.jiohub.top/v1/api/video/jojo/id?id="+it.ID,
                title: it.title,
                img: it.image,
                desc: it.video_tags,
            })
        })
        setResult(d)
    }),
    二级: $js.toString(() => {
        let html = post(input);
        let data = JSON.parse(html).data;
        let aa=data.url_content.replace(/\n/g, '#');
        VOD = {
            vod_name: data.title,
            vod_pic: data.image,
            year:data.year,
            desc:data.content,
            vod_play_from: 'JOJO',
            vod_play_url: aa
 
        }
    }),
    搜索: '*',
}