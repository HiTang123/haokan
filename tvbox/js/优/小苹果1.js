let a=JSON.parse(request('https://item.xpgtv.xyz/api.php/v2.vod/androidtypes')).data;
globalThis.className=a.map(it=>{return it.type_name}).join('&');
globalThis.classUrl=a.map(it=>{return it.type_id}).join('&');
let filter={};
a.forEach(it=>{
    filter[it.type_id]=[
            {"key":"classes","name":"类型","value":[...[{"n":"全部","v":""}],...it.classes.map(i=>{return {"n":i,"v":i}})]},
            {"key":"areas","name":"地区","value":[...[{"n":"全部","v":""}],...it.areas.map(i=>{return {"n":i,"v":i}})]},
            {"key":"years","name":"年份","value":[...[{"n":"全部","v":""},{"n":"2024","v":"2024"}],...it.years.map(i=>{return {"n":i,"v":i}})]},
            {"key":"sortby","name":"排序","value":[{"n":"时间","v":"updatetime"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}
        ]
})
globalThis.filterData=filter;
var rule = {
    title: '小苹果',
    host: 'https://item.xpgtv.xyz',
    url: '/api.php/v2.vod/androidfilter?type=fyclassfyfilter&page=fypage',
    searchUrl: '',
    detailUrl:'/api.php/v3.vod/androiddetail2?vod_id=fyid',
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    searchable: 2,
    quickSearch: 1,
    filterable: 1,
    filter_url:'&area={{fl.areas}}&year={{fl.years}}&sortby={{fl.sortby}}&class={{fl.classes}}',
    class_name: className,
    class_url: classUrl,
    filter:filterData,
    limit: 6,
    double: false,
   /* play_parse: true,
    lazy: `js:input={jx:0,parse:0,url:'http://194.147.100.39/m3u8/'+input+'.m3u8'}`,*/
    一级: 'json:data;name;pic;score;id',
    二级: $js.toString(() => {
        let data=JSON.parse(request(input)).data;
        VOD={
            vod_name:data.name,
            type_name:data.className,
            vod_area:data.area,
            vod_year:data.year,
            vod_content:data.content,
            vod_director:data.director ?? '',
            vod_actor:data.actor ?? '',
            vod_play_from:'小苹果',
            vod_play_url:data.urls.map(it=>{return it.key+'$'+'http://194.147.100.39/m3u8/'+it.url+'.m3u8'}).join('#')
        }
       }),
    搜索: $js.toString(() => {
    
       }),
}