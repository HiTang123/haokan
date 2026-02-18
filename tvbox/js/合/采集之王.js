globalThis.getRandomItem = function (items) {//从列表随机取出一个元素
    return items[Math.random() * items.length | 0];
}
// 方法
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

globalThis.suixinkan={};
var rule = {
    title: '采集之王[合]',
    author: '道长&Cacifer',
    version: '20240801',
    host: '',
    homeTid: '', // 首页推荐。一般填写第一个资源站的想要的推荐分类的id.可以空
    homeUrl: '/api.php/provide/vod/?ac=detail&t={{rule.homeTid}}',
    detailUrl: '/api.php/provide/vod/?ac=detail&ids=fyid',
    searchUrl: '/api.php/provide/vod/?wd=**&pg=#TruePage##page=fypage',
    classUrl: '/api.php/provide/vod/',
    url: '/api.php/provide/vod/?ac=detail&pg=fypage&t=fyfilter',
    filter_url: '{{fl.类型}}',
    headers: {'User-Agent': 'MOBILE_UA'},
    timeout: 5000,
    limit: 20,
    search_limit: 5, // 搜索限制取前5个，可以注释掉，就不限制搜索
    searchable: 1,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    filterable: 1,//是否启用分类筛选,
    play_parse: true,
    parse_url: '', // 这个参数暂时不起作用。聚合类的每个资源应该有自己独立的解析口。单独配置在采集.json里的parse_url有效
    search_match: false, // 搜索精准匹配
    search_pic: true, // 搜索强制需要图片
    //params: 'http://127.0.0.1:9978/file/tvbox/配置_采集源.json',
    预处理: $js.toString(() => {
        function getClasses(item) {
            let classes = [];
            if (item.class_name && item.class_url) {
                if (!/&|电影|电视剧|综艺|动漫[\u4E00-\u9FA5]+/.test(item.class_name)) {
                    try {
                        item.class_name = ungzip(item.class_name)
                    } catch (e) {
                        log(`不识别的class_name导致gzip解码失败:${e}`)
                        return classes
                    }
                }
                let names = item.class_name.split('&');
                let urls = item.class_url.split('&');
                let cnt = Math.min(names.length, urls.length);
                for (let i = 0; i < cnt; i++) {
                    classes.push({
                        'type_id': urls[i],
                        'type_name': names[i]
                    });
                }
            }
            return classes
        }
        if (typeof (batchFetch) === 'function') {
            // 支持批量请求直接放飞自我。搜索限制最大线程数量16
            rule.search_limit = 16;
            log('当前程序支持批量请求[batchFetch],搜索限制已设置为16');
        }
        let _url = rule.params;
        log(`传入参数:${_url}`);
        if (_url && typeof (_url) === 'string' && /^(http|file)/.test(_url)) {
            if (_url.includes('$')) {
                let _url_params = _url.split('$');
                _url = _url_params[0];
                rule.search_match = !!(_url_params[1]);
                if (_url_params.length > 2) { // 强制图片
                    rule.search_pic = !!(_url_params[2]);
                }
            }
            let html = request(_url);
            let json = JSON.parse(html);
            let sites=[];
            if(json.sites){
                sites =json.sites;
            }else{
                sites=json;
            }          
            if(json.sxk){
                suixinkan=json.sxk
            }
            let _classes = [];
            rule.filter = {};
            rule.filter_def = {};
            sites.forEach(it => {
                let _obj = {
                    type_name: it.name,
                    type_id: it.url,
                    api: it.api || '',
                    agent_url: it.agent_url || '',
                    parse_url: it.parse_url || '',
                    search_url:it.search_url || '',
                    searchable: it.searchable !== 0,                    
                    cate_exclude: it.cate_exclude || '',
                    cate_excludes: it.cate_excludes || [],
                    cate_clear: it.cate_clear || []
                };
                _classes.push(_obj);
                try {
                    let json1 = [];
                    if (it.class_name && it.class_url) {
                        json1 = getClasses(it);
                    } else {
                        json1 = JSON.parse(request(urljoin(_obj.type_id, _obj.api || rule.classUrl))).class;
                    }
                    if (_obj.cate_excludes && Array.isArray(_obj.cate_excludes) && _obj.cate_excludes.length > 0) {
                        json1 = json1.filter(cl => !_obj.cate_excludes.includes(cl.type_name));
                    } else if (_obj.cate_exclude) {
                        json1 = json1.filter(cl => !new RegExp(_obj.cate_exclude, 'i').test(cl.type_name));
                    }
                    rule.filter[_obj.type_id] = [{
                        "key": "类型", "name": "类型", "value": json1.map(i => {
                            return {"n": i.type_name, 'v': i.type_id}
                        })
                    }];
                    if (json1.length > 0) {
                        rule.filter_def[it.url] = {"类型": json1[0].type_id};
                    }
                } catch (e) {
                    rule.filter[it.url] = [{"key": "类型", "name": "类型", "value": [{"n": "全部", "v": ""}]}];
                }
            });
            rule.classes = _classes;
        }
    }),
    class_parse: $js.toString(() => {
        input = rule.classes;
    }),
    推荐: $js.toString(() => {
        VODS = [];
        let sxk=[];  
        if(suixinkan!={} && suixinkan.state==1){
            sxk.push({
                vod_name: '随心看',
                vod_id: 'sxk',
                vod_pic: getRandomItem(suixinkan.cover).split('$')[1]
            });
            if(suixinkan.fuli && suixinkan.fuli.state!=0 && checkAuditTime(suixinkan.fuli.times.split('-')[0],suixinkan.fuli.times.split('-')[1])){
                sxk.push({
                    vod_name: '随机福利',
                    vod_id: 'fuli',
                    vod_pic: 'http://api.yujn.cn/api/sese.php'
                })
            }
            if(suixinkan.music && suixinkan.music!=0){
                sxk.push({
                    vod_name: '随机网易云',
                    vod_id: 'music',
                    vod_pic: 'http://api.yujn.cn/api/sjtx.php?type=image&form=随机头像'
                })
            }          
        }
        if (rule.classes) {
            let randomClass = getRandomItem(rule.classes);
            let _url = urljoin(randomClass.type_id, input);
            let u1='',u2='';
            if (randomClass.api) {
                _url = _url.replace('/api.php/provide/vod/', randomClass.api)
            }
            if (randomClass.agent_url){      
                if(randomClass.agent_url.includes('@')){
                    let agentUrl=randomClass.agent_url.split('@')[0];
                    let agentMode=randomClass.agent_url.split('@')[1];
                    if(agentMode=='0'){
                        u1=agentUrl
                    }else if(agentMode=='1'){
                        u2=u1=agentUrl
                    }else if(agentMode=='2'){
                        u2=agentUrl
                    }
                }else{
                    u1=randomClass.agent_url
                }    
            }
            try {
                let html = request(u1+_url, {timeout: rule.timeout});
                let json = JSON.parse(html);
                let data = json.list;
                data.forEach(it => {
                    if(!randomClass.cate_clear.includes(it.type_name)){
                        VODS.push({
                            vod_name:it.vod_name,
                            vod_id : randomClass.type_id + '$' + it.vod_id,
                            vod_remarks : (it.vod_remarks ? it.vod_remarks : '') + '|' + randomClass.type_name,
                            vod_pic : u2+it.vod_pic
                        })                        
                    }                   
                });
            } catch (e) {
            }
        }
        VODS = sxk.concat(VODS);
    }),
    一级: $js.toString(() => {
        VODS = [];
        if (rule.classes) {
            let _url = urljoin(MY_CATE, input);
            let current_vod = rule.classes.find(item => item.type_id === MY_CATE);
            let u1='',u2='';
            if (current_vod && current_vod.api) {
                _url = _url.replace('/api.php/provide/vod/', current_vod.api)
            }
            if (current_vod && current_vod.agent_url){      
                if(current_vod.agent_url.includes('@')){
                    let agentUrl=current_vod.agent_url.split('@')[0];
                    let agentMode=current_vod.agent_url.split('@')[1];
                    if(agentMode=='0'){
                        u1=agentUrl
                    }else if(agentMode=='1'){
                        u2=u1=agentUrl
                    }else if(agentMode=='2'){
                        u2=agentUrl
                    }
                }else{
                    u1=current_vod.agent_url
                }    
            }
            let html = request(u1+_url);
            let json = JSON.parse(html);
            let data = json.list;
            data.forEach(it => {
                if(!current_vod.cate_clear.includes(it.type_name)){
                    VODS.push({
                        vod_name:it.vod_name,
                        vod_id : MY_CATE + '$' + it.vod_id,
                        vod_remarks : it.vod_remarks,
                        vod_pic : u2+it.vod_pic
                    })                        
                }   
            });
        }
    }),
    二级: $js.toString(() => {
        VOD = {};
        let content=getRandomItem(suixinkan.text);
        let cname=content.split('$')[0];
        let ctext=request(content.split('$')[1]).replaceAll('\\n','\n');
        if (orId === 'sxk') {       
            let vod=getRandomItem(suixinkan.vod);
            let flag=vod.split('$')[1].split('@')[0];
            let pic='http://api.yujn.cn/api/xjjtp.php?';  
            let from='随心看'; 
            let type='',name='',year='',area='',actor='',director='',content='';
            if(flag=='pic'){
                pic=vod.split('$')[1].replace('pic@','');
                vod=vod.split('$')[0]+'$https://api.vvhan.com/api/wyMusic/热歌榜'
            }else if(flag=='movie'){
                let url=vod.split('$')[1].replace('movie@','');
                let json=JSON.parse(request(url));
                let key=getRandomItem(json.name);
                type=vod.split('$')[0];
                from=key;
                vod=getRandomItem(json[key])                   
            }else if(flag=='show'){
                let url=vod.split('$')[1].replace('show@','');
                let json=JSON.parse(request(url));
                let key=getRandomItem(json.name);
                type=vod.split('$')[0];
                from=key;
                vod=json[key].join('#')                  
            }else if(flag=='all'){
                let url=vod.split('$')[1].replace('all@','');
                let json=JSON.parse(request(url));
                let key=json.name;
                let vlist=[];
                key.map(function(it){
                    vlist.push(json[it].join('#'))
                })
                type=vod.split('$')[0];
                from=key.join('$$$');                  
                vod=vlist.join('$$$')
            }else if(flag=='cms'){
                let info=vod.split('$')[1].split('@');
                let api=(info[2]=='')?'/api.php/provide/vod':info[2];           
                let url=info[1]+api+'?ac=detail&t='+getRandomItem(info[3].split(','));
                let json=JSON.parse(request(url));
                let numpage=json.pagecount;
                let page=Math.floor(Math.random()*numpage+1);
                let url1=url+'&pg='+page;
                let data=JSON.parse(request(url1)).list;
                let cate=getRandomItem(data);       
                type=cate.type_name;
                pic=cate.vod_pic;
                name=cate.vod_name;
                year=cate.vod_year;
                area=cate.vod_area;
                actor=cate.vod_actor;
                director=cate.vod_director;
                content=cate.vod_content;
                from=vod.split('$')[0];                  
                vod=cate.vod_play_url;
            }              
            VOD = {
                vod_name:name==''?'随心看':name,
                vod_content: content==''?('『'+cname+'』\n'+ctext):content,
                vod_remarks: '👉温馨提示：返回后重新进入刷新视频👈',
                type_name: type,
                vod_area:area,
                vod_year:year,
                vod_actor:actor,
                vod_director:director,
                vod_pic: pic,
                vod_play_from: from,
                vod_play_url:vod
            };
        } else if (orId == 'fuli') {
            let fa='';  
            if(suixinkan.fuli.vod=='18+' || suixinkan.fuli.vod=='av+'){
                fa='http://127.0.0.1:10079/p/0/proxy/'
            }
            if(suixinkan.fuli.vod=='av' ||suixinkan.fuli.vod=='av+'){             
                let envod=getRandomItem(JSON.parse(request('http://127.0.0.1:9978/file/tvbox/live/x')));
                let vod=ungzip(envod);
                VOD = {
                    vod_content: '『'+cname+'』\n'+ctext,              
                    vod_pic: vod.img,
                    vod_remarks: '👉温馨提示：返回后重新进入刷新视频👈',
                    vod_play_from: '随机AV',
                    vod_play_url: vod.split('$')[0]+'$'+vod.split('$')[1]
                }
            }else if(suixinkan.fuli.vod=='18'||suixinkan.fuli.vod=='18+'){
                let vod=JSON.parse(request('https://api.yujn.cn/api/sese_video.php')).data;
                VOD = {
                    vod_content: '『'+cname+'』\n'+ctext,              
                    vod_pic: vod.img,
                    vod_remarks: '👉温馨提示：返回后重新进入刷新视频👈',
                    vod_play_from: '随机小视频',
                    vod_play_url: vod.title+'$'+fa+vod.video_m3u8
                }
            }  
            
        }else if(orId == 'music'){
            let murls=[
                "https://api.vvhan.com/api/wyMusic/热歌榜?type=json",
                "https://api.vvhan.com/api/wyMusic/新歌榜?type=json",
                "https://api.vvhan.com/api/wyMusic/飙升榜?type=json",
                "https://api.vvhan.com/api/wyMusic/原创榜?type=json"
            ];
            let mdata=JSON.parse(request(getRandomItem(murls)));
            VOD = {
                vod_content: '『'+cname+'』\n'+ctext,
                vod_remarks: '👉温馨提示：返回后重新进入刷新歌曲👈',
                vod_year:mdata.info.update_time,
                vod_pic: mdata.info.pic_url,
                vod_actor:mdata.info.auther,
                vod_play_from: mdata.sort,
                vod_play_url:mdata.info.name+'$'+mdata.info.url
            };  
        }else {
            if (rule.classes) {
                let _url = urljoin(fyclass, input);
                let current_vod = rule.classes.find(item => item.type_id === fyclass);
                let u='';
                if (current_vod && current_vod.api) {
                    _url = _url.replace('/api.php/provide/vod/', current_vod.api)
                }
                if (current_vod && current_vod.agent_url){
                    if(current_vod.agent_url.split('@')){
                        let agentUrl=current_vod.agent_url.split('@')[0];
                        let agentMode=current_vod.agent_url.split('@')[1];
                        if(agentMode!='2'){
                            u=agentUrl
                        }   
                    }else{
                        u=current_vod.agent_url
                    }               
                }
                let html = request(u+_url);
                let json = JSON.parse(html);
                let data = json.list;
                VOD = data[0];
                if (current_vod && current_vod.type_name) {
                    VOD.vod_play_from = VOD.vod_play_from.split('$$$').map(it => current_vod.type_name + '|' + it).join('$$$')
                }
            }
        }
    }),
    搜索: $js.toString(() => {
        VODS = [];
        if (rule.classes) {
            let canSearch = rule.classes.filter(it => it.searchable);
            let page = Number(MY_PAGE);
            page = (MY_PAGE - 1) % Math.ceil(canSearch.length / rule.search_limit) + 1;
            let truePage = Math.ceil(MY_PAGE / Math.ceil(canSearch.length / rule.search_limit));
            if (rule.search_limit) {
                let start = (page - 1) * rule.search_limit;
                let end = page * rule.search_limit;
                let t1 = new Date().getTime();
                let searchMode = typeof (batchFetch) === 'function' ? '批量' : '单个';
                log('start:' + start);
                log('end:' + end);
                log('搜索模式:' + searchMode);
                log('精准搜索:' + rule.search_match);
                if (start < canSearch.length) {
                    let search_classes = canSearch.slice(start, end);
                    let urls = [];                  
                    search_classes.forEach(it => {
                        let _url=urljoin(it.type_id,input);
                        let u='';
                        if (it.agent_url){
                             if(it.agent_url.split('@')){
                                let agentUrl=it.agent_url.split('@')[0];
                                let agentMode=it.agent_url.split('@')[1];
                                if(agentMode!='2'){
                                    u=agentUrl
                                }                             
                             }else{
                                 u=it.agent_url
                             }
                        }                                   
                        if (it.api) {
                             _url = _url.replace('/api.php/provide/vod/', it.api)
                        }                        
                        _url = u+_url.replace("#TruePage#", "" + truePage);                                                                
                        urls.push(_url);
                    });
                    let results_list = [];
                    let results = [];
                    if (typeof (batchFetch) === 'function') {
                        let reqUrls = urls.map(it => {
                            return {
                                url: it,
                                options: {timeout: rule.timeout}
                            }
                        });
                        let rets = batchFetch(reqUrls);
                        let detailUrls = [];
                        let detailUrlCount = 0;
                        rets.forEach((ret, idx) => {
                            let it = search_classes[idx];
                            if (ret) {
                                try {
                                    let data=[];
                                    let list=[];
                                    if(it.search_url!=''){
                                        let wd=input.split('wd=')[1].split('&pg')[0];
                                        let surl=it.search_url.split('@')[0];
                                        let key=it.search_url.split('@')[1];
                                        ret=request(surl.replace('**',wd));
                                        list=JSON.parse(ret)[key]
                                    }else{
                                        list=JSON.parse(ret).list
                                    } 
                                    list.forEach(i => {
                                        if(!it.cate_clear.includes(i.type_name)){
                                            data.push({
                                                site_name:it.type_name,
                                                vod_name:i.vod_name,
                                                vod_pic:i.vod_pic,
                                                vod_id:it.type_id + '$' + i.vod_id+'$'+it.agent_url,
                                                vod_remarks : (i.vod_remarks ? i.vod_remarks : '') + '|' + it.type_name
                                            })
                                        }                                       
                                    });
                                    if (rule.search_match) {
                                        data = data.filter(item => item.vod_name && (new RegExp(KEY, 'i')).test(item.vod_name))
                                    }
                                    if (data.length > 0) {
                                        if (rule.search_pic && !data[0].vod_pic) {
                                            log(`当前搜索站点【${it.type_name}】没图片,尝试访问二级去获取图片`);
                                            let detailUrl = urls[idx].split('wd=')[0] + 'ac=detail&ids=' + data.map(k => k.vod_id.split('$')[1]).join(',');
                                            detailUrls.push(detailUrl);
                                            results_list.push({
                                                data: data,
                                                has_pic: false,
                                                detailUrlCount: detailUrlCount
                                            });
                                            detailUrlCount++;
                                        } else {
                                            results_list.push({data: data, has_pic: true});

                                        }
                                    }
                                } catch (e) {
                                    log(`请求:${it.type_id}发生错误:${e.message}`)
                                }
                            }
                        });
                        // 构造请求二级的batchFetch列表
                        let reqUrls2 = detailUrls.map(it => {
                            return {
                                url:it,
                                options: {timeout: rule.timeout}
                            }
                        });
                        let rets2 = batchFetch(reqUrls2);
                        for (let k = 0; k < results_list.length; k++) {
                            let result_data = results_list[k].data;
                            if (!results_list[k].has_pic) {
                                try {
                                    let detailJson = JSON.parse(rets2[results_list[k].detailUrlCount]);
                                    log('二级数据列表元素数:' + detailJson.list.length);
                                    result_data.forEach((d, _seq) => {
                                        let detailVodPic = detailJson.list.find(vod => vod.vod_id.toString() === d.vod_id.split('$')[1]);
                                        if (detailVodPic) {
                                            Object.assign(d, {vod_pic:detailVodPic.vod_pic});
                                        }
                                    });
                                } catch (e) {
                                    log(`强制获取网站${result_data[0].site_name}的搜索图片失败:${e.message}`);
                                }
                            }
                            results = results.concat(result_data);
                        }

                    } else {
                        urls.forEach((_url, idx) => {
                            let it = search_classes[idx];                          
                            try { 
                                let data=[];
                                let list=[];
                                if(it.search_url!=''){
                                    let wd=input.split('wd=')[1].split('&pg')[0];
                                    let surl=it.search_url.split('@')[0];
                                    let key=it.search_url.split('@')[1];
                                    _url=surl.replace('**',wd);
                                    list=JSON.parse(request(_url))[key]
                                }else{
                                    list=JSON.parse(request(_url)).list
                                }                                                                                                                               
                                list.forEach(i => {
                                    if(!it.cate_clear.includes(i.type_name)){
                                        data.push({
                                            vod_name:i.vod_name,
                                            vod_pic:i.vod_pic,
                                            vod_id:it.type_id + '$' + i.vod_id+'$'+it.agent_url,
                                            vod_remarks : (i.vod_remarks ? i.vod_remarks : '') + '|' + it.type_name
                                        })
                                    }                                                                    
                                });
                                if (rule.search_match) {
                                    data = data.filter(item => item.vod_name && (new RegExp(KEY, 'i')).test(item.vod_name))
                                }
                                if (data.length > 0) {
                                    if (rule.search_pic && !data[0].vod_pic) {
                                        log(`当前搜索站点【${it.type_name}】没图片,尝试访问二级去获取图片`);
                                        let detailUrl = urls[idx].split('wd=')[0] + 'ac=detail&ids=' + data.map(k => k.vod_id.split('$')[1]).join(',');
                                        try {
                                            let detailJson = JSON.parse(request(detailUrl));
                                            log('二级数据列表元素数:' + detailJson.list.length);
                                            data.forEach((d, _seq) => {
                                                let detailVodPic = detailJson.list.find(vod => vod.vod_id.toString() === d.vod_id.split('$')[1]);
                                                if (detailVodPic) {
                                                    Object.assign(d, {vod_pic:detailVodPic.vod_pic});
                                                }
                                            });
                                        } catch (e) {
                                            log(`强制获取网站${it.type_id}的搜索图片失败:${e.message}`);
                                        }
                                    }
                                    results = results.concat(data);
                                }
                                results = results.concat(data);
                            } catch (e) {
                                log(`请求:${it.type_id}发生错误:${e.message}`)
                            }
                        });
                    }

                    VODS = results;
                    VODS.forEach(it => {
                        if(it.vod_id.split('$')[2]!=''){
                            let au=it.vod_id.split('$')[2].split('@')[0];
                            let am=it.vod_id.split('$')[2].split('@')[1];
                            if(am=='1' || am=='2'){
                                it.vod_pic=au+it.vod_pic
                            }
                        }                 
                    });
                    let t2 = new Date().getTime();
                    log(`${searchMode}搜索:${urls.length}个站耗时:${(Number(t2) - Number(t1))}ms`)
                }
            }
        }
    }),
    lazy: $js.toString(() => {
        let parse_url = '';
        if (flag && flag.includes('|')) {
            let type_name = flag.split('|')[0];
            let current_vod = rule.classes.find(item => item.type_name === type_name);
            if (current_vod && current_vod.parse_url) {
                parse_url = current_vod.parse_url
            }
        }

        if (parse_url.startsWith('json:')) {
            let purl = parse_url.replace('json:', '') + input;
            let html = request(purl);
            input = {parse: 0, url: JSON.parse(html).url}
        } else if (/\.(m3u8|mp4)/.test(input)){
            input = {parse: 0, url: input}
        }else{
            input = parse_url + input;
        }    
    }),
}