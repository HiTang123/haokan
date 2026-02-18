var rule = {
    title:'爱赞美',
    host:'https://www.izanmei.cc',
    homeUrl: '/box/today.html',
    url:'/jscroll/fyclass?page=fypagefyfilter',
    detailUrl:'fyid',
    searchUrl:'/jscroll/sesong?page=fypage&k=**',
    searchable:1,
    quickSearch:1,
    class_name: '随便听听&音乐人&专辑&视频&歌单',
    class_url: 'rand&artist&album&video&box',
    filterable: 1,
    filter_url: '&sort={{fl.sort}}&genre={{fl.genre}}&lang={{fl.lang}}&initial={{fl.initial}}&type={{fl.type}}&mood={{fl.mood}}&scene={{fl.scene}}&occas={{fl.occas}}',
    filter: {
        "video":[
            {"key":"sort","name":"排序","value":[{"n":"按时间发布","v":"0"},{"n":"按观看次数","v":"1"},{"n":"按收藏数","v":"2"}]},
            {"key":"type","name":"分类","value":[{"n":"所有分类","v":"0"},{"n":"MV&现场","v":"1703"},{"n":"歌词字幕","v":"1701"},{"n":"赞美舞蹈","v":"1704"},{"n":"见证访谈","v":"1708"},{"n":"诗歌故事","v":"1706"},{"n":"赞美会","v":"1702"}]}
        ],
        "artist":[
            {"key":"sort","name":"排序","value":[{"n":"按热门程度","v":"0"},{"n":"按入库时间","v":"1"},{"n":"按浏览量","v":"2"},{"n":"按试听量","v":"3"},{"n":"按下载量","v":"4"},{"n":"按收藏数","v":"5"},{"n":"按推荐数","v":"6"}]},
            {"key":"initial","name":"首字母","value":[{"n":"全部","v":"0"},{"n":"A","v":"65"},{"n":"B","v":"66"},{"n":"C","v":"67"},{"n":"D","v":"68"},{"n":"E","v":"69"},{"n":"F","v":"70"},{"n":"G","v":"71"},{"n":"H","v":"72"},{"n":"I","v":"73"},{"n":"J","v":"74"},{"n":"K","v":"75"},{"n":"L","v":"76"},{"n":"M","v":"77"},{"n":"N","v":"78"},{"n":"O","v":"79"},{"n":"P","v":"80"},{"n":"Q","v":"81"},{"n":"R","v":"82"},{"n":"S","v":"83"},{"n":"T","v":"84"},{"n":"U","v":"85"},{"n":"V","v":"86"},{"n":"W","v":"87"},{"n":"X","v":"88"},{"n":"Y","v":"89"},{"n":"Z","v":"90"},{"n":"其他","v":"99"}]}
        ],
        "box":[
            {"key":"lang","name":"语种","value":[{"n":"所有语言","v":"0"},{"n":"国语","v":"301"},{"n":"粤语","v":"302"},{"n":"闽南语","v":"304"},{"n":"日语","v":"305"},{"n":"韩语","v":"306"},{"n":"英语","v":"307"},{"n":"地方","v":"308"},{"n":"希伯来语","v":"310"},{"n":"少数民族语","v":"311"},{"n":"德语","v":"312"},{"n":"拉丁语","v":"313"},{"n":"法语","v":"314"},{"n":"西班牙语","v":"315"},{"n":"其它","v":"399"}]},
            {"key":"genre","name":"流派","value":[{"n":"所有风格","v":"0"},{"n":"古典/传统","v":"402"},{"n":"现代流行","v":"404"},{"n":"乡村民谣","v":"405"},{"n":"中国风","v":"414"},{"n":"器乐/纯音乐","v":"409"},{"n":"R&B/Hip-Hop","v":"406"},{"n":"戏曲","v":"407"},{"n":"爵士/布鲁斯","v":"410"},{"n":"以色列","v":"412"},{"n":"舞曲/电子","v":"413"},{"n":"古风","v":"411"},{"n":"其它","v":"408"}]},
            {"key":"occas","name":"场合","value":[{"n":"所有场合","v":"0"},{"n":"布道会","v":"601"},{"n":"婚礼","v":"602"},{"n":"洗礼","v":"603"},{"n":"圣餐礼","v":"604"},{"n":"追思礼","v":"605"},{"n":"毕业典礼","v":"606"},{"n":"培灵会","v":"607"},{"n":"主日学","v":"608"},{"n":"集体崇拜","v":"609"},{"n":"圣诞节","v":"610"},{"n":"感恩节","v":"611"},{"n":"受难节","v":"612"},{"n":"复活节","v":"613"},{"n":"赞美会","v":"614"},{"n":"祷告会","v":"615"}]},
            {"key":"mood","name":"情绪","value":[{"n":"所有情绪","v":"0"},{"n":"悔改","v":"701"},{"n":"喜乐","v":"702"},{"n":"安慰","v":"703"},{"n":"信心","v":"704"},{"n":"伤心","v":"705"},{"n":"感恩","v":"706"},{"n":"复兴","v":"707"},{"n":"渴慕","v":"708"},{"n":"怀旧","v":"709"},{"n":"清新","v":"710"},{"n":"放松","v":"711"},{"n":"安静","v":"712"}]},
            {"key":"scene","name":"场景","value":[{"n":"所有场景","v":"0"},{"n":"清晨","v":"4301"},{"n":"午休","v":"4302"},{"n":"夜晚","v":"4303"},{"n":"读经","v":"4304"},{"n":"祷告","v":"4305"},{"n":"灵修","v":"4306"},{"n":"跳舞","v":"4307"},{"n":"工作","v":"4308"},{"n":"旅途","v":"4309"},{"n":"驾车","v":"4310"},{"n":"运动","v":"4311"}]}
        ],
        "album":[
            {"key":"sort","name":"排序","value":[{"n":"按入库时间","v":"0"},{"n":"按热总人气","v":"1"},{"n":"按浏览量","v":"2"},{"n":"按试听量","v":"3"},{"n":"按下载量","v":"4"},{"n":"按收藏数","v":"5"},{"n":"按推荐数","v":"6"}]},
            {"key":"genre","name":"首字母","value":[{"n":"所有风格","v":"0"},{"n":"古典/传统","v":"402"},{"n":"现代流行","v":"404"},{"n":"乡村民谣","v":"405"},{"n":"中国风","v":"414"},{"n":"器乐/纯音乐","v":"409"},{"n":"R&B/Hip-Hop","v":"406"},{"n":"戏曲","v":"407"},{"n":"爵士/布鲁斯","v":"410"},{"n":"以色列","v":"412"},{"n":"舞曲/电子","v":"413"},{"n":"古风","v":"411"},{"n":"其它","v":"408"}]},
            {"key":"lang","name":"语言","value":[{"n":"所有语言","v":"0"},{"n":"国语","v":"301"},{"n":"粤语","v":"302"},{"n":"闽南语","v":"304"},{"n":"日语","v":"305"},{"n":"韩语","v":"306"},{"n":"英语","v":"307"},{"n":"地方","v":"308"},{"n":"希伯来语","v":"310"},{"n":"少数民族语","v":"311"},{"n":"德语","v":"312"},{"n":"拉丁语","v":"313"},{"n":"法语","v":"314"},{"n":"西班牙语","v":"315"},{"n":"其它","v":"399"}]}
        ]
    },
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:10000,
    limit:6,
    推荐: $js.toString(() => {
        let d=[];
        let list=pdfa(request(input),'.item-list&&.item'); 
          list.forEach(it=>{
          let title1=pdfh(it,'.item-title&&a&&Text');
          let playurl=pdfh(it,'.r&&data-src');
          let songId=playurl.split('/')[5].replace('.mp3','');
          let actor=pdfh(it,'.item-author&&a&&Text');
          let acId=pdfh(it,'.item-author&&a&&href').split('/')[2].replace('.html','')
          let flag='';
          if(pdfh(it,'.item-title&&a:eq(1)&&title')=='观看视频'){
               playurl='video://'+HOST+pdfh(it,'.item-title&&a:eq(1)&&href');
               flag='▶️'
          }
          d.push({
                title:title1+flag,
                desc:pdfh(it,'.item-album&&a&&Text')+'•'+actor,
                pic_url:pdfh(it,'.item-media&&a&&style'),
                url:'rand'+'|'+songId+'|'+title1+'|'+playurl+'|'+''+'|'+actor+'|'+''+'|'+acId
          })
        })
        setResult(d)
    }),
    一级: `js:
        let d=[];
        let list=[];
        cateObj.tid = cateObj.tid+'';
        if(MY_CATE=='rand'){     
            let datas=request(HOST+'/ajaxmb/rand');         
            list=JSON.parse(datas).data;    
                list.forEach(it=>{
                    d.push({
                        title:it.title,
                        desc:it.meta.author+'•'+it.meta.date,
                        pic_url:it.thumb.src,
                        url:MY_CATE+'|'+it.id+'|'+it.title+'|'+it.src+'|'+it.meta.date+'|'+it.meta.author+'|'+it.except+'|'+it.meta.authorlink.split('/')[4].replace('.html','')
                    })
                })
        }else if(MY_CATE=='video'){
            list=pdfa(request(input),'body&&.item');
            list.forEach(it=>{
            let year=pdfh(it,'.pull-right&&Text');
            let actor=pdfh(it,'.text-muted&&Text');
                d.push({                  
                        title: pdfh(it,'.item-title&&a&&Text'),
                        desc:pdfh(it,'.label&&Text')+'•'+actor+'•'+year,
                        pic_url:pdfh(it,'.item-media&&a&&style'),
                        url:'video'+'|'+HOST+pdfh(it,'a&&href')+'|'+year+'|'+actor
                    });         
            })                                       
        }else if(cateObj.tid.endsWith('_clicklink')){
            cateObj.tid = cateObj.tid.split('_')[0];
            input = HOST + '/jscroll/aralbum?id=' + cateObj.tid + '&page=' + MY_PAGE;
            list=pdfa(request(input),'body&&.item');
                list.forEach(it=>{
                let label=pdfh(it,'.item-overlay&&Text')===''?'':(pdfh(it,'.item-overlay&&Text')+'•');
                    d.push({
                        title:pdfh(it,'.item-title&&a&&Text'),                      
                        desc:label+pdfh(it,'.text-sm&&Text'),
                        pic_url:pdfh(it,'.item-media&&a&&style'),
                        url:'album'+'|'+HOST+pdfh(it,'.item-media&&a&&href')
                    })
                })
        }else{          
            list=pdfa(request(input),'body&&.item');
                list.forEach(it=>{
                let label=pdfh(it,'.item-overlay&&Text')===''?'':(pdfh(it,'.item-overlay&&Text')+'•');
                    d.push({
                        title:pdfh(it,'.item-title&&a&&Text'),                    
                        desc:label+pdfh(it,'.text-sm&&Text'),
                        pic_url:pdfh(it,'.item-media&&a&&style'),
                        url:MY_CATE+'|'+HOST+pdfh(it,'.item-media&&a&&href')+'|'+label.replace(' 首•','')+'|'+pdfh(it,'.item-media&&a&&href').split('/')[2].replace('.html','')
                    })
                })
            }      
        setResult(d)
    `,
    二级: $js.toString(() => {
        let info=input.split('|');
        let tid=info[0];
        if(tid.includes('video')){
            let html=request(info[1]);        
            VOD={
                vod_year:info[2],
                vod_actor:info[3],             
                vod_content: pdfh(html,'#show_full&&.text-muted&&Html'),
                vod_play_from:'爱赞美',
                vod_play_url:pdfh(html,'h6&&Text')+'$video://'+info[1]
            }
        }else if(tid.includes('rand')){  
            let lrc=pdfh(request(HOST+'/song/'+info[1]+'.html'),'#lyric_editor&&Text');        
            lrc=(lrc=='')?'':'\n〖'+info[2]+'〗〖歌词〗\n'+lrc;
            VOD={   
                vod_name:info[2],
                vod_year:info[4],
                vod_actor:'[a=cr:' + JSON.stringify({'id':info[7]+'_clicklink','name':'〖'+info[5]+'〗的专辑列表'}) + '/]' + info[5] + '[/a]',
                vod_content:info[6]+lrc,
                vod_play_from:'爱赞美',
                vod_play_url:info[2]+'$'+info[3]
            }
        }else if(tid.includes('search')){  
            let lrc=JSON.parse(request(HOST+'/ajaxmb/songinfo/?dataid='+info[3])).lrc.content;           
            VOD={           
                vod_actor:'[a=cr:' + JSON.stringify({'id':info[5]+'_clicklink','name':'〖'+info[4]+'〗的专辑列表'}) + '/]' + info[4] + '[/a]',
                vod_content:lrc.replace(/\[[^\]]*]/gi,'').replace('www.zanmei.ai','').replace('zanmei.ai','').replace('点此','').replace('查看制作动态歌词教程','').replace(/[\n]{2,3}/,''),
                vod_play_from:'爱赞美',
                vod_play_url:info[1]+'$'+info[2]
            }
        }else if(tid.includes('album')){
            let html=request(info[1]);
            let datas=pdfa(html,'.item-list-xs&&.item');
            let label=pdfa(html,'.scrollbar-x&&a').map((i)=>{return pdfh(i,'a&&Text')}).join('•');
            let content=pdfh(html,'.item-desc&&Text')===''?'':pdfh(html,'.item-desc&&Text').replace('简介：','');          
            let actor=pdfh(html,'.item-author&&a&&Text');     
            let acId=pdfh(html,'.item-author&&a&&href').split('/')[2].replace('.html','');     
            VOD={               
                type_name:label,
                vod_actor:'[a=cr:' + JSON.stringify({'id':acId+'_clicklink','name':'〖'+actor+'〗的专辑列表'}) + '/]' + actor + '[/a]',             
                vod_content: content,            
                vod_play_from:'爱赞美',
                vod_play_url:datas.map(function(it){
                    return pdfh(it,'.item-title&&Text')+'$'+pdfh(it,'.r&&data-src')
                }).join('#')
            }
        }else if(tid.includes('artist')){
            let html=request(info[1]);
            let datas=pdfa(html,'.item-list-xs&&.item');         
            let content=pdfh(html,'.item-desc&&Text')===''?'':pdfh(html,'.item-desc&&Text').replace('简介：','');
            let actor=pdfh(html,'.item-author&&a&&Text');                
            VOD={                           
                vod_actor:'[a=cr:' + JSON.stringify({'id':info[3]+'_clicklink','name':'〖'+actor+'〗的专辑列表'}) + '/]' + actor + '[/a]',             
                vod_content: content,            
                vod_play_from:'爱赞美',
                vod_play_url:datas.map(function(it){
                    return pdfh(it,'.item-title&&Text')+'$'+pdfh(it,'.r&&data-src')
                }).join('#')
            }
        } else if(tid.includes('box')){
            let html=request(info[1]);
            let datas=pdfa(html,'.item-list-xs&&.item');      
            let content=pdfh(html,'.item-desc&&Text')===''?'':pdfh(html,'.item-desc&&Text').replace('简介：','');
            let np=Math.ceil(info[2]/20);
            let playUrls=[];
            let p=0;
            while(p<np){
                p+=1;
                let list=pdfa(request(HOST+'/jscroll/boxsong?page='+p+'&id='+info[3]),'body&&.item');
                list.forEach(it=>{
                   let playurl=pdfh(it,'.r&&data-src');
                   let flag='';
                   if(pdfh(it,'.item-title&&a:eq(1)&&title')=='观看视频'){
                        playurl='video://'+HOST+pdfh(it,'.item-title&&a:eq(1)&&href');
                        flag='▶️'
                   }
                   playUrls.push(
                       pdfh(it,'.item-title&&Text')+flag+'$'+playurl
                   )         
                })
            }
            let actor=pdfh(html,'.item-author&&Text');
            VOD={                           
                vod_actor:actor,             
                vod_content: content,            
                vod_play_from:'爱赞美',
                vod_play_url:playUrls.join('#')
            }
        }            
    }),
    搜索: `js:
        let d=[];
        let list=pdfa(request(input),'body&&.item');
               list.forEach(it=>{
                   let title1=pdfh(it,'.item-title&&a&&Text');
                   let actor=pdfh(it,'.item-author&&a&&Text');
                   let acId=pdfh(it,'.item-author&&a&&href').split('/')[2].replace('.html','');
                   let playurl=pdfh(it,'.r&&data-src');
                   let songId=playurl.split('/')[5].replace('.mp3','');
                   d.push({
                        title:title1,                     
                        desc:actor+'•'+pdfh(it,'.item-album&&a&&Text'),
                        pic_url:pdfh(it,'.item-media&&a&&style'),
                        url:'search'+'|'+title1+'|'+playurl+'|'+songId+'|'+actor+'|'+acId
                   })
              })
              setResult(d)
    `,
}