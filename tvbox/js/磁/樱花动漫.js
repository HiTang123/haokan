var rule = {
    title:'樱花动漫',
    host:'https://sakuras.me',
    url:'/fyclass-fyfilter-fypage-30.html',
    searchUrl:'/s/**.html',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'追番&动画&排行榜&最近更新',
    class_url:'tv&list&rank&news',
    filter_url:`{{fl.cate or '0'}}-{{fl.year or '0'}}-{{fl.area or '0'}}-{{fl.by or 'date'}}`,
    filter:{
        "list":[
            {"key":"cate","name":"分类","value":[{"n":"全部","v":"0"},{"n":"科幻","v":"科幻"},{"n":"悬疑","v":"悬疑"},{"n":"情色","v":"情色"},{"n":"恐怖","v":"恐怖"},{"n":"奇幻","v":"奇幻"},{"n":"喜剧","v":"喜剧"},{"n":"战争","v":"战争"},{"n":"动作","v":"动作"},{"n":"动画","v":"动画"},{"n":"冒险","v":"冒险"},{"n":"爱情","v":"爱情"},{"n":"武侠","v":"武侠"},{"n":"犯罪","v":"犯罪"},{"n":"惊悚","v":"惊悚"},{"n":"剧情","v":"剧情"},{"n":"纪录片","v":"纪录片"},{"n":"运动","v":"运动"},{"n":"历史","v":"历史"},{"n":"西部","v":"西部"},{"n":"家庭","v":"家庭"},{"n":"音乐","v":"音乐"},{"n":"同性","v":"同性"}]},
            {"key":"year","name":"分类","value":[{"n":"全部","v":"0"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},
            {"key":"area","name":"分类","value":[{"n":"全部","v":"0"},{"n":"美国","v":"美国"},{"n":"中国大陆","v":"中国大陆"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"英国","v":"英国"},{"n":"印度","v":"印度"},{"n":"法国","v":"法国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"加拿大","v":"加拿大"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"中国台湾","v":"中国台湾"},{"n":"中国香港","v":"中国香港"}]},
            {"key":"by","name":"分类","value":[{"n":"最近更新","v":"date"},{"n":"精彩热播","v":"hot"},{"n":"高分好评","v":"rating"}]}
        ],
        "tv":[
            {"key":"cate","name":"分类","value":[{"n":"全部","v":"0"},{"n":"科幻","v":"科幻"},{"n":"悬疑","v":"悬疑"},{"n":"情色","v":"情色"},{"n":"恐怖","v":"恐怖"},{"n":"奇幻","v":"奇幻"},{"n":"喜剧","v":"喜剧"},{"n":"战争","v":"战争"},{"n":"动作","v":"动作"},{"n":"动画","v":"动画"},{"n":"冒险","v":"冒险"},{"n":"爱情","v":"爱情"},{"n":"武侠","v":"武侠"},{"n":"犯罪","v":"犯罪"},{"n":"惊悚","v":"惊悚"},{"n":"剧情","v":"剧情"},{"n":"纪录片","v":"纪录片"},{"n":"运动","v":"运动"},{"n":"历史","v":"历史"},{"n":"西部","v":"西部"},{"n":"家庭","v":"家庭"},{"n":"音乐","v":"音乐"},{"n":"同性","v":"同性"}]},
            {"key":"year","name":"分类","value":[{"n":"全部","v":"0"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},
            {"key":"area","name":"分类","value":[{"n":"全部","v":"0"},{"n":"美国","v":"美国"},{"n":"中国大陆","v":"中国大陆"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"英国","v":"英国"},{"n":"印度","v":"印度"},{"n":"法国","v":"法国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"加拿大","v":"加拿大"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"中国台湾","v":"中国台湾"},{"n":"中国香港","v":"中国香港"}]},
            {"key":"by","name":"分类","value":[{"n":"最近更新","v":"date"},{"n":"精彩热播","v":"hot"},{"n":"高分好评","v":"rating"}]}
        ],
        "rank":[
            {"key":"cate","name":"分类","value":[{"n":"电影排行榜","v":"0"},{"n":"动作片排行榜","v":"动作"},{"n":"喜剧片排行榜","v":"喜剧"},{"n":"剧情片排行榜","v":"剧情"},{"n":"爱情片排行榜","v":"爱情"},{"n":"科幻片排行榜","v":"科幻"}]},
            {"key":"year","name":"分类","value":[{"n":"2024年-2023年","v":"2023_2024"},{"n":"2022年-2021年","v":"2021_2022"},{"n":"2020年-2019年","v":"2019_2020"},{"n":"2018年以前","v":"2004_2018"}]}
        ]
    },
    filter_def:{
        rank:{year:'2023_2024'}
    },
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:$js.toString(()=>{
        let d=[];
        let list= pdfa(request(input),".b007&&a");           
        list.forEach(it=>{           
            d.push({
                title:pdfh(it,"img&&alt"),
                url:pdfh(it,"a&&href"),
                img:pdfh(it,"img&&src"),
                desc:pdfh(it,"span:eq(0)&&Text")
            });
        })
        setResult(d)
    }),
    一级:$js.toString(()=>{
        let d=[],list=[];
        let info=input.split('/')[3].split('-');
        if(MY_CATE.endsWith('_clicklink')&&MY_PAGE==1){
            let a=MY_CATE.split('_')          
            let list=pdfa(request(HOST+'/'+a[1]+'/'+a[0]+'.html'),'body&&.b007');
            list.forEach(it=>{
              d.push({
                title:pdfh(it,"h2&&a&&Text"),
                desc:pdfh(it,"p&&Text"),
                img:pdfh(it,"img&&src"),
                url:pdfh(it,"a&&href")
              })
            })
        }else{
            if(MY_CATE=='rank'&&MY_PAGE==1){
                input=HOST+'/rank-1-'+info[2]+'-'+info[1]+'.html';
                list=pdfa(request(input),".b007:has(.b007)&&a:has(img)");
            }else{
                if(MY_CATE=='news'){
                    input=HOST+'/news-'+MY_PAGE+'.html';
                }
                list= pdfa(request(input),".b007&&a");
            }
            list.forEach(it=>{           
                d.push({
                    title:pdfh(it,"img&&alt"),
                    url:pdfh(it,"a&&href"),
                    img:pdfh(it,"img&&src"),
                    desc:pdfh(it,"span:eq(0)&&Text")
                });
            })
        }
        setResult(d)
    }),
    二级:$js.toString(()=>{                                
        let a=[];
        let html=request(input);
        let director=pdfa(pdfh(html,'.b007&&p:eq(5)&&Html'),'a').map(it=>{return '[a=cr:'+JSON.stringify({'id':pdfh(it,"a&&Text")+'_director_clicklink','name':pdfh(it,"a&&Text")})+'/]'+pdfh(it,"a&&Text")+'[/a]'}).join(',');
        let actor=pdfa(pdfh(html,'.b007&&p:eq(6)&&Html'),'a').map(it=>{return '[a=cr:'+JSON.stringify({'id':pdfh(it,"a&&Text")+'_actor_clicklink','name':pdfh(it,"a&&Text")})+'/]'+pdfh(it,"a&&Text")+'[/a]'}).join(',');
        VOD={           
            vod_year:pdfh(html,'.b007&&p:eq(3)&&Text').replace('上映：',''),
            vod_area:pdfh(html,'.b007&&p:eq(0)&&Text').replace('地区：',''),
            type_name:pdfh(html,'.b007&&p:eq(2)&&Text').replace('类型：',''),
            vod_director:director,
            vod_actor:actor,
            vod_content:pdfh(html,'.b007&&p:eq(8)&&Text')       
        } 
        let from=[],play=[];   
        pdfa(html,'body&&ul:has(input)').forEach((i,x)=>{
            from.push('线路'+(x+1));
            let a=[];
            pdfa(i,'ul&&div').forEach(ii=>{
               if(pdfh(ii,'a:eq(1)&&alt').startsWith('magnet:')){            
                  a.push(pdfh(ii,'a:eq(1)&&alt'))
               }            
            });
            play.push(a.join('#'));           
        });    
        VOD.vod_play_from=from.join('$$$');    
        VOD.vod_play_url=play.join('$$$');            
    }),
    搜索:$js.toString(()=>{
        let d=[];      
        if(MY_PAGE==1){
            let list=pdfa(request(input),'body&&.b007');
            list.forEach(it=>{
              d.push({
                title:pdfh(it,"h2&&a&&Text"),
                desc:pdfh(it,"p&&Text"),
                img:pdfh(it,"img&&src"),
                url:pdfh(it,"a&&href")
              })
            })
        }
        setResult(d)
    }),
}