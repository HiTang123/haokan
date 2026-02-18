var rule = {
    title:'电影天堂',
    host:'https://dydytt.net',
    url:'?id=fyclass&pg=fypage',
    searchUrl:'?q=**',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'动作片&剧情片&爱情片&喜剧片&科幻片&恐怖片&动画片&惊悚片&战争片&犯罪片&灾难片&纪录片&奇幻片&3D电影&演唱会&经典大片',
    class_url:'dongzuopian_1&juqingpian_2&aiqingpian_3&xijupian_4&kehuanpian_5&kongbupian_6&donghuapian_7&jingsongpian_8&zhanzhengpian_9&fanzuipian_10&zainanpian_19&jilupian_17&qihuanpian_14&3ddianyingxiazai_21&yanchanghui_22&jingdiandapian_18',
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
        let list=pdfa(request(HOST+'/'+id[0]+'/list_'+id[1]+'_'+MY_PAGE+'.html'),'.co_content8&&tbody');            
        list.forEach(it=>{
            d.push({
                title:'《'+pdfh(it,'b&&Text').split('《')[1],
                desc:pdfh(it,'font&&Text')+pdfh(it,'font:eq(1)&&Text'),
                img:'https://mms0.baidu.com/it/u=3173718406,594851588&fm=253&app=138&f=JPEGw=800&h=500',
                url:pdfh(it,'a&&href')
            })
        })  
        setResult(d)
    }),
    二级:$js.toString(()=>{  
        let html=request(input);
        let info=pdfa(html,'#Zoom&&p').slice(0,-5).join('').replace(/\s|<p>|<\/p>|(\&nbsp\;)|<br>/g,'');   
        let it=function(s){return info.slice(info.indexOf(s)+2).split('◎')[0]}                           
        VOD={
            vod_remarks:'译名：'+it('译名'),
            vod_name:it('片名'),
            vod_year:it('年代'),
            vod_area:it('地区'),
            type_name:it('类别'),            
            vod_pic:pdfh(html,'#Zoom&&img&&src'),
            vod_director:it('导演'),
            vod_actor:it('主演').replace(/[a-zA-Z-]+/g,'/'),
            vod_content:it('简介'),             
        }
        let a=[]; 
        pdfa(html,'body&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('ftp:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'a&&Text')+'$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='磁力播放$$$在线播放';    
        VOD.vod_play_url=a.join('#')+'$$$'+it('片名')+'$'+pdfh(html,'iframe&&src')
        
    }),
    搜索:$js.toString(()=>{
        let d=[];
        let wd=encodeStr(getQuery(input).q,rule.编码);
        let list=pdfa(request(HOST+'/plus/search.php?keyword='+wd.replaceAll('25','')+'&pagesize=10&PageNo='+MY_PAGE),'.co_content8&&tbody').slice(0,-1);            
        list.forEach(it=>{
          d.push({
            title:'《'+pdfh(it,'b&&Text').split('《')[1],            
            desc:pdfh(it,'font&&Text')+pdfh(it,'font:eq(1)&&Text'),
            img:'https://mms0.baidu.com/it/u=3173718406,594851588&fm=253&app=138&f=JPEGw=800&h=500',
            url:pdfh(it,'a&&href')
          })
        })  
        setResult(d)
    }),
}