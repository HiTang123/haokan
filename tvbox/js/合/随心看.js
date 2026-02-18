globalThis.getRandomItem = function (items) {//从列表随机取出一个元素
    return items[Math.random()*items.length | 0];
}

globalThis.searchCover=function(word){
    let api="https://pic.sogou.com/pics?query=",
    html=pdfh(request(api+word),'body&&script:eq(0)&&Html').replace(/\s/g,''),
    data=JSON.parse(html.match(/(?<=STATE__=).*?(?=;\(function)/g)[0]).searchList.searchList,
    imgs=[];
    data.forEach(it=>{
        imgs.push(it.locImageLink)
    })    
    return getRandomItem(imgs)
}

globalThis.refresh=function(url){
    if(getQuery(url).REFRESH&&getQuery(url).REFRESH=='true'){
       return url=url.replace(getQuery(url).REFRESH,Math.floor(Math.random()*999))
    }else{
       return url
    }
}

globalThis.generateUUID=function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

globalThis.getUnix=function() {
    return parseInt(new Date().getTime()/1000)
}

globalThis.getYMD=function(s){ 
    let date=s==null?new Date():new Date(s);
    return date.getFullYear().toString()+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0')
}

globalThis.randomString=function(e,t)=>{
    t = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let n = "";
    for (let r = 0; r < e; r++) {
        const e = Math.floor(Math.random() * t.length);
        n += t.substring(e, e + 1)
    }
    return n
}

globalThis.sha256=function(message) {
    return CryptoJS.SHA256(message).toString();
}

globalThis.checkAuditTime=function (startTime, endTime){
    // 获取当前时间
    const date  = new Date();
    // 获取当前时间的年月日
    const dataStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `; 
    // 获取开始时间、结束时间、现在时间的时间戳
    let startDate = new Date(dataStr + startTime).getTime();
    let endDate = new Date(dataStr + endTime).getTime();
    let nowDate = date.getTime(); 
    const s = startDate > endDate; // 判断开始时间否大于结束时间 
    if(s) [startDate, endDate] = [endDate, startDate];// 若开始时间否大于结束时间则交换值
    // 判断现在的时间是否在开始时间和结束时间之间，若s为true则结果取反
    if(nowDate > startDate && nowDate < endDate){
        return s ? false : true
    }else{
        return s ? true : false
    }
}


globalThis.convertM3uToNormal=function(m3u) {
    try {
        const lines = m3u.split('\n');
        let result = '';
        let TV = '';
        let flag='#genre#';     
        let currentGroupTitle = '';
        lines.forEach((line) => {
            if (line.startsWith('#EXTINF:')) {
                line = line.replace(/'/g, '"');
                let groupTitle = '未知频道';
                let tvg_name = '';
                let tvg_logo = '';
                try {
                    groupTitle = line.match(/group-title="(.*?)"/)[1].trim();
                } catch (e) {
                }
                try {
                    tvg_name = line.match(/tvg-name="(.*?)"/)[1].trim();
                } catch (e) {
                }
                try {
                    tvg_logo = line.match(/tvg-logo="(.*?)"/)[1].trim();
                } catch (e) {
                }
                TV = line.split(',').slice(-1)[0].trim();
                if (currentGroupTitle !== groupTitle) {
                    currentGroupTitle = groupTitle;
                    let ret_list = [currentGroupTitle, flag];
                    result += `\n${ret_list.join(",")}\n`;
                }
            } else if (line.startsWith('http')) {
                const splitLine = line.split(',');
                result += `${TV}\,${splitLine[0]}\n`;
            }
        });       
        result = mergeChannels(result);      
        return result
    } catch (e) {
        log(`m3u直播转普通直播发生错误:${e.message}`);
        return m3u
    }
}

globalThis.mergeChannels=function(text) {
    const lines = text.split('\n');
    const channelMap = new Map();
    let currentChannel = ''; 
    lines.forEach(line => {
        if (/,#/.test(line)) {
            currentChannel = line.replace(',#genre#','');
            if (!channelMap.has(currentChannel)) {
                channelMap.set(currentChannel,[]);
            }
        } else if (line) { 
            if (currentChannel) {
                channelMap.get(currentChannel).push(line.replace(/[,，]/g,'$'));
            }
        }
    });
    let result = {};
    channelMap.forEach((value,key) => {
        result[key]=value;
    });
    return result;
}

globalThis.getVod=(cate,item,index)=>{
    let d={};
    let n=item.标题.split('@');
    let title=n[0],desc=n[1],MORE={};MORE.title=title;
    let t=(item.定时&&item.定时!='')?item.定时.split('-'):'';
    let 封面=getRandomItem(item.封面)||'';         
    if(封面.includes('$')){
        let a=封面.split('$');               
        let input='';
        if(a[1].startsWith('js@')){                
            eval(封面.split('@=>')[1]);
            封面=input;
        }else if(a[1].startsWith('json@')){
            let html=a[1].split('@')[1];
            let json=JSON.parse(request(html));
            封面=eval(封面.split('@=>')[1]);                        
        }else if(a[1].startsWith('search@')){
            let key=a[1].split('@')[1];
            封面=searchCover(key)
        }else{                                                                       
            封面=refresh(a[1]);
        }
    }else{
       封面=refresh(封面);
    }
    if(checkAuditTime(t[0],t[1])||t==''){            
        d={
            title:title,
            desc:desc,
            img:封面,
            url:cate+'|'+index+'|'+JSON.stringify(MORE)
        }
    }
    return d;
}

globalThis.decryptVod=i=>{
    let result='';
    try{result=ungzip(i)}catch(e){result=i}
    return result;    
}

//globalThis.bili_cookie='DedeUserID=1126322916;DedeUserID__ckMd5=e9d0c5eba6495178;Expires=1782629200;SESSDATA=b4adf481,1782629200,4db58*c1CjCP0sveGTMjNbU2Om8ZvKipfLSya3A_8rRyTUps8OMXXPJIWUxi2g5Gy55wf9OTPYkSVkdvbkVuZnF1TFRaaGFGZDk4Uk11Ul84alRCS0E2N0pvUnBrVDVTR1VkTnI2U0RVVDlDS2pEZElqaVNtSkJVUXJsV1hseFI0b25oN01VMGphLUFYRVJBIIEC;bili_jct=142a722b20dc67952f75e5a4d4103ded;gourl=https%3A%2F%2Fwww.bilibili.com;first_domain=.bilibili.com;';
globalThis.bili_headers={
'cookie' : 'DedeUserID=1126322916;DedeUserID__ckMd5=e9d0c5eba6495178;Expires=1782629200000;SESSDATA=b4adf481,1782629200,4db58*c1CjCP0sveGTMjNbU2Om8ZvKipfLSya3A_8rRyTUps8OMXXPJIWUxi2g5Gy55wf9OTPYkSVkdvbkVuZnF1TFRaaGFGZDk4Uk11Ul84alRCS0E2N0pvUnBrVDVTR1VkTnI2U0RVVDlDS2pEZElqaVNtSkJVUXJsV1hseFI0b25oN01VMGphLUFYRVJBIIEC;bili_jct=142a722b20dc67952f75e5a4d4103ded;gourl=https%3A%2F%2Fwww.bilibili.com;first_domain=.bilibili.com;',
'User-Agent' : 'Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
'Referer' : 'https://www.bilibili.com'
}
var rule = {
    title:'随心看',
    host:'',
    url:'',
    searchUrl:'**',
    detailUrl:'fyid',
    searchable:1,
    quickSearch:1,
    headers:{
        'User-Agent':'MOBILE_UA',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7'
    },
    timeout:5000,
    limit:6,
    play_parse: true,
    lazy:$js.toString(() => {
        if(input.includes('>>')&&input.split('>>')[1].split('<<')[0]!=''){
            let code=input.split('>>')[0];
            eval(input.split('>>')[1].split('<<')[0].replaceAll('￥','$').replaceAll('＃','#'));           
        }else if(input.includes(';{')&&input.split(';{')[1].split('}')[0]!=''){
            let a=input.split(';{')[0];
            let b=input.slice(input.indexOf(';{')+1)
            try{
                input=(new Function('code','return'+b))(a)
            }catch(e){
                input=a
            }
        }else if(/v.douyin/.test(input)){
            let t=Date.now()
            ,playurl=JSON.parse(post('https://snapany.com/api/extract',{
                headers:{
                    'Content-Type':'application/json',
                    'G-Timestamp':t,
                    'G-Footer':md5(input+'zh'+t+'6HTugjCXxR'),
                    'Accept-Language':'zh'
                },
                body:{
                    'link':input
                }
            })).medias[0].resource_url;
            input={parse:0,jx:0,url:playurl}
        }else if(input.includes('bilibili')){
            let i=input.split('+');
            let qn=JSON.parse(request('https://api.bilibili.com/x/player/playurl?avid='+i[1]+'&cid='+i[2]+'&qn=127&fnval=4048&fourk=1',bili_headers)).data.accept_quality.filter(it=>it!==120&&it!==116)[0];
            input={url:'http://127.0.0.1:9978/proxy?do=bili&aid='+i[1]+'&cid='+i[2]+'&qn='+qn+'&type=mpd',header:bili_headers}
        }else{
            input
        }
    }),
    预处理:$js.toString(()=>{
        let url=rule.params;
        if (url&&typeof(url)==='string'&&/^(http|file)/.test(url)){
            let item=JSON.parse(request(url));            
            let search_obj=[];
            Object.keys(item.列表).forEach(it=>{
                item.列表[it].forEach((i,x)=>{
                    search_obj.push({
                        name:i.标题,
                        tid:it,
                        index:x                        
                    })
                })
            })
            rule.host=url;
            rule.search=search_obj;
            rule.datas=item.列表;     
            rule.classes=item.分类
        }
    }),
    class_parse: $js.toString(() => {
        input=rule.classes;
    }),
    推荐:$js.toString(()=>{
        let d=[],
        current=getRandomItem(Object.keys(rule.datas));
        rule.datas[current].forEach((it,x)=>{let a=getVod(current,it,x);if(Object.keys(a).length!=0){d.push(a)}});  
        setResult(d);
    }),
    一级:$js.toString(()=>{
        let d=[];
        if(MY_PAGE==1)
        rule.datas[MY_CATE].forEach((it,x)=>{let a=getVod(MY_CATE,it,x);if(Object.keys(a).length!=0){d.push(a)}});         
        setResult(d);
    }),
    二级:$js.toString(()=>{ 
        VOD={};
        function ReFile(url){
            if(url!=''&&!/^(http|file)/.test(url)) {
                return urljoin(HOST,url);
            }else{
                return url
            }
        }
        let info=input.split('|');                                
        let data=rule.datas[info[0]][info[1]];
        let MORE=JSON.parse(info[2]);
        let NO='https://ghp.ci/https://raw.githubusercontent.com/HiTang123/xyz/master/live/3.mp3'; 
        let NO_VIDEO=data.标题.split('@')[0]+'$'+NO;     
        //处理播放 
        VOD.vod_play_from='随心看';
        let html='';
        let t=(data.时段&&data.时段!='')?data.时段.split('-'):'';               
        let v=(checkAuditTime(t[0],t[1])||t=='')?getRandomItem(data.播放):'Not_ShowTime';
        let 播放=decryptVod(v);
        if(播放.includes('$')){
            let a=播放.split('$');                                                      
            if(a[1].startsWith('json@')){
               let h=a[1].split('@')[1];
               let json=JSON.parse(request(h));
               eval(播放.split('@=>')[1]);
            }else if(a[1].startsWith('js@')){                   
               eval(播放.split('@=>')[1]);                           
            }else if(a[1].startsWith('cms@')){
                let b=a[1].split('@');
                let api=(b[2]=='')?'/api.php/provide/vod':b[2];
                let url=b[1]+api+'?ac=detail&';
                let c=b[3].split('=');
                if(c[0]=='t'){
                    url=url+'t='+getRandomItem(c[1].split(','));
                    let json=JSON.parse(request(url));
                    let numpage=json.pagecount;
                    let page=Math.floor(Math.random()*numpage+1);
                    let url1=url+'&pg='+page;
                    let data=JSON.parse(request(url1)).list;
                    VOD=getRandomItem(data);                
                }else if(c[0]=='ids'){
                    url=url+'ids='+getRandomItem(c[1].split(','));
                    let json=JSON.parse(request(url));
                    VOD=json.list[0];
                }
                VOD.vod_play_from=a[0]!=''?a[0]:VOD.vod_play_from;              
            }else if(a[1].startsWith('podcast@')){
                let b=a[1].split('@');
                html=request(b[1]);
                VOD.vod_play_url=pdfa(html,'channel&&item').map(it=>{return pdfh(it,'title&&Text')+'$'+pdfh(it,'enclosure&&url')}).join('#');              
            }else if(a[1].startsWith('cctv@')){
                let b=a[1].split('@'),total=Number(b[2])||100,pagenum=Math.ceil(total/100);
                let list=[],playurls=[];
                if(total<100){
                    list=JSON.parse(request('https://api.cntv.cn/NewVideo/getVideoListByColumn?id='+b[1]+'&d=&p=1&n='+total+'&sort=desc&mode=0&serviceId=tvcctv&t=json')).data.list;
                    list.forEach(it=>{
                       playurls.push(it);
                    })
                }else{  
                    let page=0;              
                    while(page<pagenum){
                        page=page+1;
                        list=JSON.parse(request('https://api.cntv.cn/NewVideo/getVideoListByColumn?id='+b[1]+'&d=&p='+page+'&n=100&sort=desc&mode=0&serviceId=tvcctv&t=json')).data.list;  
                        list.forEach(it=>{
                           playurls.push(it);
                        })             
                    }
                }
                VOD.vod_play_url=playurls.map(it=>{return it.title+'$https://dh5.cntv.myalicdn.com/asp//hls/2000/0303000a/3/default/'+it.guid+'/2000.m3u8'}).join('#');
            }else if(a[1].startsWith('bili@')){
                let b=a[1].split('@'),bvid=b[1];      
                //bili_headers={'cookie':bili_cookie,'User-Agent':'PC_UA','Referer':'https://www.bilibili.com'};                               
                let data = JSON.parse(request(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`,bili_headers)).data;                                                                        
                VOD.vod_play_url=data.pages.map(it=>{return it.part.replaceAll('#','＃').replaceAll('$','＄')+'$bilibili+'+data.aid+'+'+it.cid}).join("#");
                //VOD.vod_play_url=data.pages.map(it=>{return it.part.replaceAll('#','＃').replaceAll('$','＄')+`$https://www.bilibili.com/video/${bvid}?p=`+it.page}).join('#');                                                                                                                                          
            }else if(!a[1].includes('@')){                        
                VOD.vod_play_url=播放.split('#').map(it=>{return it.split('$')[0]+'$'+ReFile(it.split('$')[1])}).join('#');                
            }else{
                let m=a[1].split('@');
                let lazy='',b='';
                if(m[1].includes(';{')){
                    lazy=m[1].slice(m[1].indexOf(';{'));
                    b=ReFile(m[1].split(';{')[0]); 
                }else{
                    b=ReFile(m[1]);
                }               
                if(a[1].startsWith('pic@')){              
                    VOD.vod_pic=b;
                    VOD.vod_play_url=NO_VIDEO;
                }else{
                    VOD.type_name=a[0];
                    let c=request(b);
                    if (/#EXTM3U/.test(c)) {
                        c=convertM3uToNormal(c);
                    }else if(/#genre#/.test(c)){
                        c=mergeChannels(c);
                    }else{
                        c=JSON.parse(c);
                    }
                    let addlazy=e=>{return e.includes(';{')?e:e+lazy}         
                    if(a[1].startsWith('movie@')){
                        let key=(m[2]&&m[2]!='')?getRandomItem(m[2].split(',')):getRandomItem(Object.keys(c));                       
                        VOD.vod_play_from=key;
                        VOD.vod_play_url=decryptVod(getRandomItem(c[key])).split('#').map(it=>{return addlazy(it)}).join('#')                
                    }else if(a[1].startsWith('show@')){
                        let key=(m[2]&&m[2]!='')?getRandomItem(m[2].split(',')):getRandomItem(Object.keys(c));                       
                        VOD.vod_play_from=key;
                        VOD.vod_play_url=c[key].map(it=>{return decryptVod(it).split('#').map(i=>{return addlazy(i)}).join('#')}).join('#')
                    }else if(a[1].startsWith('all@')){ 
                        let key=(m[2]&&m[2]!='')?m[2].split(','):Object.keys(c);                              
                        VOD.vod_play_from=key.join('$$$');
                        VOD.vod_play_url=key.map(it=>{return c[it].map(i=>{return decryptVod(i).split('#').map(t=>{return addlazy(t)}).join('#')}).join('#')}).join('$$$');
                    }         
                }
            }           
        }else if(播放=='Not_ShowTime'){
            VOD.vod_remarks=VOD.vod_content='抱歉,未到播放时段〖'+data.时段+'〗,请耐心等待';
            VOD.vod_play_url=VOD.vod_remarks+'$'+NO;
        }else if(播放=='Not_Video'){
            VOD.vod_play_url=NO_VIDEO;
        }else{            
            VOD.vod_play_url=MORE.title+'$'+播放
        }  
        //处理简介
        if(data.简介&&data.简介!=''){ 
            let 简介=getRandomItem(data.简介);            
            if(简介.includes('$')){
                let a=简介.split('$');
                let b=a[0]==''?'':'〖'+a[0]+'〗\n';
                let input='';
                if(a[1].startsWith('js@')){                
                    eval(简介.split('@=>')[1]);
                    VOD.vod_content=b+input
                }else if(a[1].startsWith('json@')){
                    let html=a[1].split('@')[1];
                    let json=JSON.parse(request(html));
                    input=eval(简介.split('@=>')[1]);
                    VOD.vod_content=b+input
                }else{
                    VOD.vod_content=b+request(a[1]).replaceAll('\\n','\n')
                }
            }else{
                VOD.vod_content=简介
            }
        }       
    }),
    搜索:$js.toString(()=>{
        let d=[];
        rule.search.forEach(it=>{
            let c=it.name.replaceAll('@','').split('');
            if(c.some(i=>{return KEY.includes(i)})){
                let item=rule.datas[it.tid][it.index];
                let a=getVod(it.tid,item,it.index); 
                if(Object.keys(a).length!=0){d.push(a)}             
            }
        })         
        setResult(d)
    }),
}