globalThis.className='玄幻修真&灵异惊悚&都市言情&军事历史&儿童故事&经典纪实&长篇评书&相声戏曲&综艺娱乐&百家讲坛&网游竞技&官场商战&人物传记&通俗文学&其他有声';
globalThis.classUrl='xuanhuan&lingyi&dushi&junshi&ertong&jishi&pingshu&xiangsheng&yule&bjjt&jingji&guanchangshangzhan&chuanji&wenxue&qita';
let filter={};
let filterdef={};
classUrl.split('&').forEach(it=>{
    filter[it]=[
        {"key": "sort", "name": "排序", "value": [{"n":"新书","v":"postdate"},{"n":"更新","v":"lastupdate"},{"n":"人气","v":"allvisit"},{"n":"收藏","v":"marknum"},{"n":"推荐","v":"votenum"},{"n":"连载","v":"lianzai"},{"n":"完结","v":"over"}]}
    ];
    filterdef[it]={sort:'lastupdate'}
})
globalThis.filterData=filter;
globalThis.filterDef=filterdef;
var rule = {
    title:'13听书网',
    host:'https://www.ting13.cc',
    url:'/yousheng/fyclass/fyfilter/1/fypage.html',
    searchUrl:'',
    detailUrl:'',
    filter_url:'{{fl.sort}}',
    searchable:1,
    quickSearch:1,
    class_name:className,
    class_url:classUrl,
    filter:filterData,
    filter_def:filterDef,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    图片来源:'@Referer=https://www.ting13.cc/@User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    推荐:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),'body&&.tab-li:has(a.thumb)');            
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'.tab-book-title&&a&&Text'),
                desc:pdfh(it,'.playCountText&&Text')+'•'+pdfh(it,'.tab-book-author&&a&&Text'),
                img:pdfh(it,'img&&src'),
                url:pdfh(it,'.tab-book-title&&a&&href')
            })
        })  
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[];
        if(MY_CATE.endsWith('_全部_clicklink')&&MY_PAGE==1){
             let info=MY_CATE.split('_');         
             let a=pdfa(request(info[0]),'.hd-sel&&option');
             a.forEach(it=>{
                d.push({
                    title:pdfh(it,'option&&Text').replace(/\s/g,''),
                    url:pd(it,'option&&value',HOST)
                })                
             })           
        }else{
            if(MY_CATE.endsWith('_专辑_clicklink')){        
                input=MY_CATE.split('_')[0]+'/1/'+MY_PAGE;            
            }
            let list=pdfa(request(input),'ul.list-works&&li');            
            list.forEach(it=>{
                d.push({
                    title:pdfh(it,'.thumb&&title').replace('有声小说',''),
                    desc:pdfh(it,'.playCountText&&Text')+'•'+pdfh(it,'dt&&a:eq(1)&&Text'),
                    img:pdfh(it,'img&&src'),
                    url:pdfh(it,'.thumb&&href')
                })
            })
        }  
        setResult(d)
    }),
    二级:$js.toString(()=>{ 
        let html=request(input); 
        let info=pdfh(html,'body&&dl:has(h1)&&Html'); 
        let director=pdfh(info,'dd:eq(2)&&Text').replace('作者：','');
        let dirid=pd(info,'dd:eq(2)&&a&&href',HOST);
        let actor=pdfh(info,'dd:eq(4)&&Text').replace('演播：',''); 
        let acid=pd(info,'dd:eq(4)&&a&&href',HOST);                   
        VOD.vod_name=pdfh(info,'dt&&Text');
        VOD.vod_pic=pdfh(html,'img.lazy&&src');
        VOD.vod_remarks=pdfh(info,'dd:eq(3)&&Text');
        VOD.type_name=pdfh(info,'dd:eq(0)&&Text').replace('类型：','');
        VOD.vod_director='[a=cr:'+JSON.stringify({'id':dirid+'_专辑_clicklink','name':'〖'+director+'〗的专辑列表'})+'/]'+director+'[/a]'+' 更多：'+'[a=cr:'+JSON.stringify({'id':input+'_全部_clicklink','name':'全部'})+'/]'+'全部章节'+'[/a]';
        VOD.vod_actor='[a=cr:'+JSON.stringify({'id':acid+'_专辑_clicklink','name':'〖'+actor+'〗的专辑列表'})+'/]'+actor+'[/a]';
        VOD.vod_content=pdfh(html,'.book-des&&Text').replace(/\s/g,'');
        VOD.vod_play_from='听书网';          
        VOD.vod_play_url=pdfa(html,'.playlist&&a').map(it=>{return pdfh(it,'a&&Text')+'$'+pd(it,'a&&href',HOST)}).join('#');
    }),
    搜索:$js.toString(()=>{
      /*  let d=[];
        let list=JSON.parse(request());            
        list.forEach(it=>{
            d.push({
                title:,
                desc:,
                img:,
                url:
            })
        })  
        setResult(d)*/
    }),
}