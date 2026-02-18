var key = '6aa76959e8578cd4';
var iv = '7a1eb4297306b3f0';
globalThis.decrypt=function(text) {
        let decrypted = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8)
}



var rule = {
    title:'云顶TV',
    host:'',
    url:'',
    searchUrl:'',
    detailUrl:'fyid',
    searchable:1,
    quickSearch:1,
    class_name:'电影&电视剧&动漫&综艺&韩剧&美剧&动画片',
    class_url:'1&2&4&3&7&6&5',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    play_parse: true,
    lazy:$js.toString(() => {

    
    }),
    推荐:$js.toString(()=>{
        
    }),
    一级:$js.toString(()=>{
        var d = [];
        var timestamp = new Date().getTime() / 1000; //log(timestamp)
        var t = timestamp.toString().split('.')[0]; //log(t)
        var token2 = '云顶TV'+t; //log(token2)
        var token = md5(token2); //log(token)
        var url = 'http://yjg.bzjdlt.cn/api.php/Smtv/vod/?ac=list&t='+MY_CATE+'&page='+MY_PAGE+'&token='+token+'&keytime='+t; //log(url)                    
        var html = decrypt(request(url))
        var list = JSON.parse(html).data; //log(list)
        try {
            list.forEach(data => {
                d.push({
                    title: data.title,
                    desc: data.state,
                    img: data.pic,
                    url: '##'+data.nextlink+'&token='+token+'&keytime='+ t                   
                })
            })
        } catch (e) {}       
        setResult(d)
    }),
    二级:$js.toString(()=>{                                
        var html = decrypt(request(input.split("##")[1])); //log(html)
        var data = JSON.parse(html);
        VOD.vod_content=data.intro;
        VOD.vod_year=data.pubtime;
        VOD.vod_area=data.area.join(',');
        VOD.type_name=data.type.join(',');
        VOD.vod_actor=data.actor.join(',');
        VOD.vod_director=data.director.join(',');
        let from=[],play=[];
        data.videolist.forEach(it=>{
            from.push(it.show);
            play.push(it.list.map(i=>{
                return i.title+'$'+it.url
            }).join('#'))
        })
        VOD.vod_play_from=from.join('$$$');
        VOD.vod_play_url=play.join('$$$');
    }),
    搜索:$js.toString(()=>{
       /* let d=[];
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