import {
    Crypto,
    jinja2,
    _
} from 'assets://js/lib/cat.js';
import {
    config as def_conf
} from "./bili_ext.js";
import {
    config as loc_conf
} from "http://127.0.0.1:9978/file/tvbox/main/%E9%85%8D%E7%BD%AE_Bilibili.js";
let siteKey = '';
let siteType = 0;
let config = {
    cookie: loc_conf.cookie,
    searchable: loc_conf.搜索功能,
    homeSwitch: loc_conf.显示推荐页,
    diyhome: loc_conf.自定义推荐页,
    homeName: loc_conf.推荐页内容,
    t_home: loc_conf.显示首页,
    t_popular: loc_conf.显示热门,
    t_ranking: loc_conf.显示排行榜,
    t_precious: loc_conf.显示入站必刷,
    t_resource: loc_conf.显示收藏,
    t_toview: loc_conf.显示稍后再看,
    t_history: loc_conf.显示历史记录,
    ratio: loc_conf.视图比例,
    type_name: null,
    type_id: null,
    filter: null
};
if (loc_conf.自定义分类 != 1) {
    config.type_name = def_conf.type_name, config.type_id = def_conf.type_id, config.filter = def_conf.filter
} else {
    config.type_name = loc_conf.分类名, config.type_id = loc_conf.分类id, config.filter = loc_conf.筛选
};
let cookie = config.cookie==''?'not cookie':config.cookie;
let login = '';
let vip = false;
let bili_jct = '';
let extendObj = {};
let resourceListID = [];
let vod_audio_id = {
    30280: 192000,
    30232: 132000,
    30216: 64000,
};
let vod_codec = {
    13: 'AV1',
    12: 'HEVC',
    7: 'AVC',
};
let UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36';
async function request(reqUrl, ua, buffer) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: ua ? ua : {
            'User-Agent': UA
        },
        timeout: 60000,
        buffer: buffer ? 1 : 0,
    });
    return res.content;
}
async function post(reqUrl, postData, ua, posttype) {
    let res = await req(reqUrl, {
        method: 'post',
        headers: ua ? ua : {
            'User-Agent': UA
        },
        data: postData,
        timeout: 60000,
        postType: posttype,
    });
    return res.content;
}

function getHeaders() {
    let headers = {
        'User-Agent': UA,
    };
    if (!_.isEmpty(cookie)) {
        headers.cookie = cookie;
    }
    return headers;
}
async function getCookie() {
    let result = await req('https://www.bilibili.com', {
        method: 'get',
        headers: {
            'User-Agent': UA
        },
        timeout: 60000,
    });
    let setCookieHeaders = result.headers['set-cookie'];
    cookie = setCookieHeaders.map((kk) => kk.split(';')[0] + ';').join('');
}
async function init(cfg) {  
    let userID = '';
    let sessdata='';
    siteKey = cfg.skey;
    siteType = cfg.stype;
    let btname = config.type_name;
    let btid = config.type_id;
    if (cookie.startsWith('http')) cookie = await request(cookie);
    let cookies = cookie.split(';');
    cookies.forEach(cookie => {
        if (cookie.includes('bili_jct')) {
            bili_jct = cookie.split('=')[1];
        } else if (cookie.split('=')[0] == 'DedeUserID') {
            userID = cookie.split('=')[1];
        }else if(cookie.includes('SESSDATA')){
            sessdata=cookie.split('=')[1];
        }
    });
    if (_.isEmpty(cookie)) await getCookie();
    let result = JSON.parse(await request('https://api.bilibili.com/x/web-interface/nav', getHeaders()));
    login = result.data.isLogin;
    vip = result.data.vipStatus;
    let newarr = [];
    if (config.t_home == 1) {
        newarr.push({
            type_name: "🧸首页推荐",
            type_id: "首页"           
        })
    }
    if (config.t_popular == 1) {
        newarr.push({
            type_name: "🔥热门视频",
            type_id: "热门"
        })
    }
    if (config.t_ranking == 1) {
        newarr.push({
            type_name: "📶排行榜",
            type_id: "排行榜"
        })
    }
    if (config.t_precious == 1) {
        newarr.push({
            type_name: "🤳入站必刷",
            type_id: "入站必刷"
        })
    }
    let ext_tname = btname.split('#');
    let ext_tid = btid.split('#');
    let cnt = Math.min(ext_tname.length, ext_tid.length);
    for (let i = 0; i < cnt; i++) {
        newarr.push({
            type_name: ext_tname[i],
            type_id: ext_tid[i]
        })
    }
    if (!_.isEmpty(userID)) {
        if(config.t_resource == 1){
            newarr.push({
                type_name: "⭐收藏",
                type_id:"收藏"
            })
        }
        let resourceListUrl = 'https://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid=' + userID;
        let resourceList = JSON.parse(await request(resourceListUrl, getHeaders())).data.list;
        let reslist=resourceList.map(i => {                               
            resourceListID.push(i.id.toString());                             
            return {'n': '📂'+i.title, 'v': i.id}
        });        
        config.filter["收藏"] = [{
                "key": "tid", 
                "name": "类型", 
                "value": reslist
            }]            
    }
    if (!_.isEmpty(sessdata) && config.t_toview == 1) {
        newarr.push({
            type_name: "⌛稍后再看",
            type_id: "稍后再看"
        })
    }
    if (!_.isEmpty(bili_jct) && config.t_history==1) {
        newarr.push({
            type_name: "📝历史记录",
            type_id: "历史记录"
        })
    }
       
    extendObj = {
        classes: newarr,
        filter: config.filter,
    }
}

function home(filter) {
    try {
        let jSONObject = {
            class: extendObj.classes,
        };
        if (filter) {
            jSONObject.filters = extendObj.filter;
        }
        return JSON.stringify(jSONObject);
    } catch (e) {
        return '';
    }
}
async function homeVod() {
    if (config.homeSwitch == 1) {
        try {
            let url1 = 'https://api.bilibili.com/x/web-interface/index/top/rcmd?ps=14&fresh_idx=1&fresh_idx_1h=1';
            let url2 = 'https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=' + config.homeName;
            let videos=[],vods=[];
            if (config.diyhome != 1) {              
                vods = JSON.parse(await request(url1, getHeaders())).data.item;            
            }else{               
                vods = JSON.parse(await request(url2, getHeaders())).data.result;           
            }
            vods.forEach((it)=>{
                if(it.bvid!=''){
                    let pic = it.pic;               
                    let cd = turnHMS(it.duration);
                    videos.push({
                        vod_id : it.bvid,
                        vod_name : removeTags(it.title),
                        vod_pic : pic.startsWith('//')?'https:'+pic:pic,
                        vod_remarks : cd,
                        style : {type: 'rect',ratio: config.ratio}
                    })   
                }        
            })            
            return JSON.stringify({
                list:videos
            });     
        } catch (e) {}
    } else {
        return null;
    }
}
async function category(tid, page, filter, ext) {
    if (page < 1) page = 1;
    try {
        if (Object.keys(ext).length > 0 && ext.hasOwnProperty('tid') && ext['tid'].length > 0) {
            tid = ext['tid'];
        }
        let url = '';
        url = `https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=${encodeURIComponent(tid)}`;
        if (Object.keys(ext).length > 0) {
            for (let k in ext) {
                if (k == 'tid') {
                    continue;
                }
                url += `&${encodeURIComponent(k)}=${encodeURIComponent(ext[k])}`;
            }
        }
        url += `&page=${encodeURIComponent(page)}`;     
        if (tid == "首页") {
            url = "https://api.bilibili.com/x/web-interface/index/top/rcmd?ps=14&fresh_idx=" + page + "&fresh_idx_1h=" + page;
        } else if (tid == "历史记录") {
            url = "https://api.bilibili.com/x/v2/history?pn=" + page;
        } else if (tid == "热门") {
            url = "https://api.bilibili.com/x/web-interface/popular?pn=" + page;
        } else if (tid == "排行榜") {
            url = "https://api.bilibili.com/x/web-interface/ranking/v2";
        } else if (tid == "入站必刷") {
            url = "https://api.bilibili.com/x/web-interface/popular/precious";
        }else if (tid == "稍后再看") {
            url = "https://api.bilibili.com/x/v2/history/toview";
        }else if(tid=="收藏"||resourceListID.some((it)=>{return it==tid})){
            if(tid=="收藏"){tid=resourceListID[0]}      
            url = "https://api.bilibili.com/x/v3/fav/resource/list?media_id="+tid+"&ps=20&pn="+page;
        }       
        let data = JSON.parse(await request(url, getHeaders())).data;        
        let items = data.result;       
        if (tid == "首页") {
            items = data.item;
        } else if (tid == "历史记录") {
            items = data;
        } else if (tid == "热门" || tid == "排行榜" || tid == "入站必刷" || tid == "稍后再看") {
            items = data.list;
        } else if (resourceListID.indexOf(tid)>-1) {
            items = data.medias;
        }
        let videos = [];
        items.forEach((it)=>{
            if(it.bvid!=''){
                let pic = it.pic;
                let desc = turnHMS(it.duration);
                if (resourceListID.indexOf(tid)>-1) {
                    pic = it.cover;
                    desc = data.info.title + '•' + turnYMD(it.fav_time);
                }   
                videos.push({
                    vod_id : it.bvid,
                    vod_name : removeTags(it.title),
                    vod_remarks : desc,
                    vod_pic : pic.startsWith('//') ? 'https:'+pic : pic,
                    style : {type: 'rect',ratio: config.ratio}
                })                                          
            }
        })
        let result = {
            page: page,
            pagecount: (tid == "排行榜" || tid == "入站必刷" || tid == "稍后再看")?page:(data.numPages ?? (page + 1)),
            limit: videos.length,
            total: videos.length * (page + 1),
            list: videos,
        };
        return JSON.stringify(result);      
    } catch (e) {}
}
async function detail(ids) {
    try {
        let bvid = ids;
        let detailUrl = `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`;
        let detailData = JSON.parse(await request(detailUrl, getHeaders())).data;
        if (!_.isEmpty(bili_jct)) {
            let historyReport = 'https://api.bilibili.com/x/v2/history/report';
            let dataPost = {
                aid: detailData.aid,
                cid: detailData.cid,
                csrf: bili_jct,
            };
            await post(historyReport, dataPost, getHeaders(), 'form');
        }
        let cd = turnHMS(detailData.duration);
        let view = turnNum(detailData.stat.view);
        let like = turnNum(detailData.stat.like);
        let coin = turnNum(detailData.stat.coin);
        let favorite = turnNum(detailData.stat.favorite);
        let share = turnNum(detailData.stat.share);
        let reply = turnNum(detailData.stat.reply);
        let danmaku = turnNum(detailData.stat.danmaku);
        let aid = detailData.aid;
        let cid = detailData.cid;
        let mid = detailData.owner.mid;
        let ownerUrl = 'https://api.bilibili.com/x/relation/stat?vmid=' + mid + '&jsonp=jsonp';
        let follower = JSON.parse(await request(ownerUrl, getHeaders())).data.follower;
        let onlineUrl = 'https://api.bilibili.com/x/player/online/total?aid=' + aid + '&cid=' + cid;
        let online = JSON.parse(await request(onlineUrl, getHeaders())).data.total;
        let video = {
            vod_id: bvid,
            vod_name: detailData.title,
            vod_pic: detailData.pic,
            type_name: detailData.tname,
            vod_year: new Date(detailData.pubdate * 1000).getFullYear(),
            vod_area: '',
            vod_remarks: '总计' + view + '次播放•' + danmaku + '条弹幕•' + online + '人正在看',
            vod_actor: '',
            vod_director: '[a=cr:' + JSON.stringify({'id': detailData.owner.name + '_clicklink','name': detailData.owner.name}) + '/]' + detailData.owner.name + '[/a]' + '&nbsp &nbsp ' + '粉丝数：' + turnNum(follower),
            vod_content: '点赞:' + like + '•投币:' + coin + '•收藏:' + favorite + '•转发:' + share + '\n' + detailData.desc,
        };
        let playurldata = 'https://api.bilibili.com/x/player/playurl?avid=' + aid + '&cid=' + cid + '&qn=127&fnval=4048&fourk=1';
        let playurldatas = JSON.parse(await request(playurldata, getHeaders()));
        let playurldatalist = playurldatas.data;
        let accept_quality = playurldatalist.accept_quality;
        let accept_description = playurldatalist.accept_description;
        let qualitylist = [];
        let descriptionList = [];
        for (let i = 0; i < accept_quality.length; i++) {
            if (!vip) {
                if (!login) {
                    if (accept_quality[i] > 32) continue;
                } else {
                    if (accept_quality[i] > 80) continue;
                }
            }
            descriptionList.push(base64Encode(accept_description[i]));
            qualitylist.push(accept_quality[i]);
        }
        let treeMap = {};
        let jSONArray = detailData.pages;
        let playList = [];
        jSONArray.forEach(function(it){
           //let title = detailData.rights.autoplay==0 ? '疑似收费视频,无法播放' : it.part.replaceAll('#','＃').replaceAll('$','＄');
             let title=it.part.replaceAll('#','＃').replaceAll('$','＄');
             let playUrl = title + '$' + aid + '+' + it.cid + '+' + qualitylist.join(':') + '+' + descriptionList.join(':');
            playList.push(playUrl);
        })
        treeMap['DASH线路'] = playList.join('#');
        treeMap['MP4线路'] = playList.join('#');
        let relatedUrl = 'https://api.bilibili.com/x/web-interface/archive/related?bvid=' + bvid;
        let relatedData = JSON.parse(await request(relatedUrl, getHeaders())).data;
        playList = [];
        relatedData.forEach(function(it){
           // if(it.rights.autoplay!=0){
                let title = it.title.replaceAll('#', '＃').replaceAll('$', '＄');          
                let playUrl = title + '$' + it.aid + '+' + it.cid + '+' + qualitylist.join(':') + '+' + descriptionList.join(':');
                playList.push(playUrl);
            //}
        })
        treeMap['相关推荐'] = playList.join('#');
        video.vod_play_from = Object.keys(treeMap).join("$$$");
        video.vod_play_url = Object.values(treeMap).join("$$$");
        let list = [video];
        let result = {
            list
        };
        return JSON.stringify(result);
    } catch (e) {}
}
async function play(flag, id, flags) {
    try {
        let playHeaders = {
            Referer: 'https://www.bilibili.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        };
        let ids = id.split('+');
        let aid = ids[0];
        let cid = ids[1];
        let qualityIds = ids[2].split(':');
        let qualityName = ids[3].split(':');
        let dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + cid;
        if (flag == 'DASH线路' || flag == '相关推荐') {
            let js2Base = await js2Proxy(true, siteType, siteKey, 'dash/', {});
            let urls = [];
            for (let i = 0; i < qualityIds.length; i++) {
                urls.push(base64Decode(qualityName[i]),js2Base + base64Encode(aid + '+' + cid + '+' + qualityIds[i]));
            }
            return JSON.stringify({
                parse: 0,
                url: urls,
                danmaku: dan,
                header: playHeaders,
            });
        } else if (flag == 'MP4线路') {
            let urls = [];
            for (let i = 0; i < qualityIds.length; i++) {
                let url = `https://api.bilibili.com/x/player/playurl?avid=${aid}&cid=${cid}&qn=${qualityIds[i]}&fourk=1`;
                let resp = JSON.parse(await request(url, getHeaders()));
                let data = resp.data;
                if (data.quality != qualityIds[i]) continue;
                let durl = data.durl[0].url;
                urls.push(base64Decode(qualityName[i]), durl);
            }
            return JSON.stringify({
                parse: 0,
                url: urls,
                danmaku: dan,
                header: playHeaders,
            });
        } else {
            let urls = [];
            let audios = [];
            for (let i = 0; i < qualityIds.length; i++) {
                let url = `https://api.bilibili.com/x/player/playurl?avid=${aid}&cid=${cid}&qn=${qualityIds[i]}&fnval=4048&fourk=1`;
                let resp = JSON.parse(await request(url, getHeaders()));
                let dash = resp.data.dash;
                let video = dash.video;
                let audio = dash.audio;
                for (let j = 0; j < video.length; j++) {
                    let dashjson = video[j];
                    if (dashjson.id == qualityIds[i]) {
                        for (let key in vod_codec) {
                            if (dashjson.codecid == key) {
                                urls.push(base64Decode(qualityName[i]) + ' ' + vod_codec[key], dashjson.baseUrl);
                            }
                        }
                    }
                }
                if (audios.length == 0) {
                    for (let j = 0; j < audio.length; j++) {
                        let dashjson = audio[j];
                        for (let key in vod_audio_id) {
                            if (dashjson.id == key) {
                                audios.push({
                                    title: _.floor(parseInt(vod_audio_id[key]) / 1024) + 'Kbps',
                                    bit: vod_audio_id[key],
                                    url: dashjson.baseUrl,
                                });
                            }
                        }
                    }
                    audios = _.sortBy(audios, 'bit');
                }
            }
            return JSON.stringify({
                parse: 0,
                url: urls,
                extra: {
                    audio: audios,
                },
                header: playHeaders,
            });
        }
    } catch (e) {}
}
async function search(key, quick, pg) {
    if (config.searchable == 1) {
        let page = pg || 1;
        if (page == 0) page = 1;
        try {
            let ext = {
                duration: '0',
            };
            let resp = JSON.parse(await category(key, page, true, ext));
            let catVideos = resp.list;
            let pageCount = resp.pagecount;
            let videos = [];
            for (let i = 0; i < catVideos.length; ++i) {
                videos.push(catVideos[i]);
            }
            let result = {
                page: page,
                pagecount: pageCount,
                land: 1,
                ratio: config.ratio,
                list: videos,
            };
            return JSON.stringify(result);
        } catch (e) {}
        return null;
    } else {
        return null;
    }
}
async function proxy(segments, headers) {
    let what = segments[0];
    let url = base64Decode(segments[1]);
    if (what == 'dash') {
        let ids = url.split('+');
        let aid = ids[0];
        let cid = ids[1];
        let str5 = ids[2];
        let urls = `https://api.bilibili.com/x/player/playurl?avid=${aid}&cid=${cid}&qn=${str5}&fnval=4048&fourk=1`;
        let videoList = '';
        let audioList = '';
        let resp = JSON.parse(await request(urls, getHeaders()));
        let dash = resp.data.dash;
        let video = dash.video;
        let audio = dash.audio;
        for (let i = 0; i < video.length; i++) {
            let dashjson = video[i];
            if (dashjson.id == str5) {
                videoList += getDashMedia(dashjson);
            }
        }
        for (let i = 0; i < audio.length; i++) {
            let ajson = audio[i];
            for (let key in vod_audio_id) {
                if (ajson.id == key) {
                    audioList += getDashMedia(ajson);
                }
            }
        }
        let mpd = getDash(resp, videoList, audioList);
        return JSON.stringify({
            code: 200,
            content: mpd,
            headers: {
                'Content-Type': 'application/dash+xml',
            },
        });
    }
    return JSON.stringify({
        code: 500,
        content: '',
    });
}

function getDashMedia(dash) {
    try {
        let qnid = dash.id;
        let codecid = dash.codecid;
        let media_codecs = dash.codecs;
        let media_bandwidth = dash.bandwidth;
        let media_startWithSAP = dash.startWithSap;
        let media_mimeType = dash.mimeType;
        let media_BaseURL = dash.baseUrl.replace(/&/g, '&amp;');
        let media_SegmentBase_indexRange = dash.SegmentBase.indexRange;
        let media_SegmentBase_Initialization = dash.SegmentBase.Initialization;
        let mediaType = media_mimeType.split('/')[0];
        let media_type_params = '';
        if (mediaType == 'video') {
            let media_frameRate = dash.frameRate;
            let media_sar = dash.sar;
            let media_width = dash.width;
            let media_height = dash.height;
            media_type_params = `height='${media_height}' width='${media_width}' frameRate='${media_frameRate}' sar='${media_sar}'`;
        } else if (mediaType == 'audio') {
            for (let key in vod_audio_id) {
                if (qnid == key) {
                    let audioSamplingRate = vod_audio_id[key];
                    media_type_params = `numChannels='2' sampleRate='${audioSamplingRate}'`;
                }
            }
        }
        qnid += '_' + codecid;
        return `<AdaptationSet lang="chi"><ContentComponent contentType="${mediaType}"/><Representation id="${qnid}" bandwidth="${media_bandwidth}" codecs="${media_codecs}" mimeType="${media_mimeType}" ${media_type_params} startWithSAP="${media_startWithSAP}"><BaseURL>${media_BaseURL}</BaseURL><SegmentBase indexRange="${media_SegmentBase_indexRange}"><Initialization range="${media_SegmentBase_Initialization}"/></SegmentBase></Representation></AdaptationSet>`;
    } catch (e) {}
}

function getDash(ja, videoList, audioList) {
    let duration = ja.data.dash.duration;
    let minBufferTime = ja.data.dash.minBufferTime;
    return `<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:mpeg:dash:schema:mpd:2011" xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd" type="static" mediaPresentationDuration="PT${duration}S" minBufferTime="PT${minBufferTime}S" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011"><Period duration="PT${duration}S" start="PT0S">${videoList}${audioList}</Period></MPD>`;
}

function base64Encode(text) {
    return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}

function removeTags(input) {
    return input.replace(/<[^>]*>/g, '');
}

function turnYMD(time) {
    var d = new Date(time * 1000);
    var y = d.getFullYear() - 2000 + '-';
    var m = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-';
    var d = d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate();
    var s = y + m + d;
    return s;
}

function turnNum(num) {
    let a = '';
    if (num >= 10000) {
        num = Math.round(num / 10000 * 10) / 10;
        a = num + '万';
    } else if (num >= 1000 && num < 10000) {
        num = Math.round(num / 1000 * 10) / 10;
        a = num + '千';
    } else {
        a = num;
    }
    return a;
}

function turnHMS(numberSec) {
    let totalSeconds = '';
    try {
        var timeParts = numberSec.split(":");
        var min = parseInt(timeParts[0]);
        var sec = parseInt(timeParts[1]);
        totalSeconds = min * 60 + sec;
    } catch (e) {
        totalSeconds = parseInt(numberSec);
    }
    if (isNaN(totalSeconds)) {
        return '无效输入';
    }
    if (totalSeconds >= 3600) {
        let hours = Math.floor(totalSeconds / 3600);
        let remainingSecondsAfterHours = totalSeconds % 3600;
        let minutes = Math.floor(remainingSecondsAfterHours / 60);
        let seconds = remainingSecondsAfterHours % 60;
        return `${hours}小时${minutes}分${seconds}秒`;
    } else {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        return `${minutes}分${seconds}秒`;
    }
}
export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        proxy: proxy,
        search: search,
    };
}