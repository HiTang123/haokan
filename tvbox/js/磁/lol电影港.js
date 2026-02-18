var rule = {
    title:'LOL电影港',
    host:'https://www.loldyg.com',
    url:'/fyclass/chart/index_fypage.html[/fyclass/chart/index.html]',
    searchUrl:'',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'动作片&科幻片&恐怖片&喜剧片&爱情片&剧情片&战争片&大陆剧&美剧&韩剧&港剧&台剧&日剧&泰剧&动漫&综艺',
    class_url:'Dongzuopian&Kehuanpian&Kongbupian&Xijupian&Aiqingpian&Juqingpian&Zhanzhengpian&Daluju&Meiju&Hanju&Gangju&Taiju&Riju&Outaiju&Dongman&Zongyi',
    headers:{
        'User-Agent':'PC_UA'
    },
    编码:'gb2312',
    搜索编码:'gb2312',
    timeout:5000,
    limit:6,
    double:false,
    推荐:'.commend&&li;a&&title;img&&src;p&&Text;a&&href',
    一级:'.box3&&li;a&&title;img&&src;p&&Text;a&&href',
    二级:$js.toString(()=>{                                
        let html=request(input);
        VOD={
            vod_name:pdfh(html,''),
            vod_year:pdfh(html,'.zhuyan&&li:eq(1)&&Text').replace(/(时间|：|\s)/g,''),                                  
            vod_pic:pdfh(html,'picture&&img&&src'),          
            vod_actor:pdfh(html,'.zhuyan&&li:eq(0)&&Text').replace(/(主演|：|\s)/g,''),
            vod_content:pdfh(html,'.neirong&&p&&Text')             
        }
        let a=[]; 
        pdfa(html,'body&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('thunder:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'a&&Text')+'$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='lol电影港';    
        VOD.vod_play_url=a.join('#');
        
    }),
    搜索:$js.toString(()=>{
    }),
}