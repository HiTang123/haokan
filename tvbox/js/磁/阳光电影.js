var rule = {
    title:'阳光电影',
    //host:'http://www.dytt8.net',
    host:'https://dydytt.net',
    url:'?id=fyclass&pg=fypage',
    searchUrl:'?q=**',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'最新电影&国内电影&日韩电影&欧美电影&华语电视&日韩电视&欧美电视&动漫资源',
    class_url:'gndy/dyzz_23_1&gndy/china_4_1&gndy/rihan_6_1&gndy/oumei_7_1&tv/hytv_71_2&tv/rihantv_8_2&tv/oumeitv_9_1&dongman_16_2',
    headers:{
        'User-Agent':'PC_UA'
    },
    编码:'gb2312',
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{}),
    一级:$js.toString(()=>{
        let d=[];
        let id=getQuery(input).id.split('_');
        let list=pdfa(request(HOST+'/html/'+id[0]+'/list_'+id[1]+'_'+MY_PAGE+'.html'),'.co_content8&&tbody');            
        list.forEach(it=>{
            let i=pdfa(it,'b&&a').pop();
            d.push({
                title:pdfh(i,'a&&Text').replace(/第[0-9]{1,3}(集|话)/g,''),
                desc:pdfh(it,'font&&Text'),
                img:'https://mms0.baidu.com/it/u=3173718406,594851588&fm=253&app=138&f=JPEGw=800&h=500',
                url:pdfh(i,'a&&href')+'|'+id[2]
            })
        })  
        setResult(d)
    }),
    二级:$js.toString(()=>{       
        let kk=input.split('|');
        let html=request(kk[0]);
        let info=pdfh(html,'#Zoom&&Text').replace(/\s/g,'');   
        let it=function(s,m,n){m=m||'';n=n||0;return info.slice(info.indexOf(s)+s.length).split(m)[n]}                           
        if(kk[1]=='1'){
            let k='◎';
            let name=pdfh(html,'body&&font:eq(5)&&Text');
            VOD={
                vod_remarks:'译名：'+it('译名',k),
                vod_name:name.replace(/第|[0-9]{1,3}(集|话)/g,''),
                vod_year:it('年代',k),
                vod_area:it('产地',k),
                type_name:it('类别',k),            
                vod_pic:pdfh(html,'#Zoom&&img&&src'),
                vod_director:it('导演',k),
                vod_actor:it('主演',k).replace(/[a-zA-Z-]+/g,'/'),
                vod_content:it('简介',name)        
            }
        }else{
            VOD={
                vod_remarks:'又名：'+it('又名:','简介'),           
                vod_year:it('首播:','-'),
                vod_area:it('地区:','语言'),
                type_name:it('类型:','制片'),            
                vod_pic:pdfh(html,'#Zoom&&img&&src'),
                vod_director:it('导演:','编剧'||'主演'),
                vod_actor:it('主演:','类型'),
                vod_content:it('简介','【').replace(/·|:/g,'')
            }
        }
        let a=[]; 
        pdfa(html,'body&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('ftp:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'a&&Text')+'$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='阳光电影';    
        VOD.vod_play_url=a.join('#')
        
    }),
    搜索:$js.toString(()=>{}),
}