// 解密函数
globalThis.aesDecryptECB=function(encryptedData, key) {
    // 将key转换为CryptoJS支持的格式
    const keyCrypto = CryptoJS.enc.Utf8.parse(key);
    // 将加密的Base64字符串转换为CryptoJS支持的格式
    const encryptedCrypto = CryptoJS.enc.Base64.parse(encryptedData);
    // 使用AES/ECB/PKCS5Padding进行解密
    const decrypted = CryptoJS.AES.decrypt({
        ciphertext: encryptedCrypto
    }, keyCrypto, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    // 检查解密是否成功
    if (decrypted) {
        // 返回utf8格式的解密结果
        return decrypted.toString(CryptoJS.enc.Utf8);
    } else {
        return "解密失败";
    }
}

// 加密函数
globalThis.aesEncryptECB=function(decrypteddata, key) {
    // 将key转换为CryptoJS支持的格式
    const keyCrypto = CryptoJS.enc.Utf8.parse(key);
    // 将数据转换为CryptoJS支持的格式
    const dataCrypto = CryptoJS.enc.Utf8.parse(decrypteddata);
    // 使用AES/ECB/PKCS5Padding进行加密
    const encrypted = CryptoJS.AES.encrypt(dataCrypto, keyCrypto, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    // 检查解密是否成功
    if (encrypted) {
    // 返回Base64格式的加密结果
    return encrypted.toString();
    } else {
        return "解密失败";
    }
}

globalThis.generateUUID=function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

globalThis.getTime=function() {
    var timestamp = new Date().getTime() / 1000;
    return timestamp.toString().split('.')[0];
}

globalThis.md5=function(uuid) {
    return CryptoJS.MD5(uuid).toString();
}

globalThis.hmacSHA256=function(message, secretKey) {
    // 使用CryptoJS库中的HmacSHA256方法进行加密
    const hash = CryptoJS.HmacSHA256(message, secretKey);

    // 将加密结果转换为Hex格式
    return hash.toString(CryptoJS.enc.Hex);
}

globalThis.sha256=function(message) {
    return CryptoJS.SHA256(message).toString();
}
var rule = {
    title: '抖短剧',
    host: 'https://fly.daoran.tv',
    url: '?channel=fyclass',
    class_name:'现言&古言&都市&热血&玄幻&历史',
    class_url:'现言&古言&都市&热血&玄幻&历史',
    detailUrl: '#fyid',
    searchUrl: '?wd=**',
    searchable: 1,
    quickSearch: 0,
    headers:{
            'X-Salt': '2555D2C5F23',
            'X-Nonce': 'LfvqAfa24hCqNRZn',
            'X-Access-Token': '9211d7c498cabc2db409e3fafb31e74ce4fa4657078a11cc3e51bf055f771591aca67dd0c7396a4f2713dbeb9511206977b9e11bb49207ba4fb2fd7688f686f0ae728ae3499f6789ab423e2a052b8a3daf2211cb38e6c7a4d1acd1d4cb550f17d624ccc45ef742af049df8298f617cd0826aed26ede0b88bcecbf973a5ea33a67eefd0ae39e560385d6be20b44095b33a1e05cd823e9a6d6c014faeafbff4e23ef954ed2df70cd42d2c755a99ee8f3a73b31388c9affe77e462683459043b01d697ef4b505d59d7bdeb7f4345ff19f5d9b09aae080bd8542d6c89efdd41fbc3d066697627a039c73d777a5c9bb5147763b68dff8923cbb360a737be5b471c89b9c441d91bf0364b73db7a90fe1d47a98c0e4f2ab34259863cb42274f8fcc72dd',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Content-Length': '649',
            'Host': 'csj-sp.csjdeveloper.com',
            'Connection': 'Keep-Alive',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 12; 22021211RC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/99.0.4844.88 Mobile Safari/537.36 okhttp/3.9.1 djxsdk/1.1.3.0'
        },
    timeout: 5000,
    limit: 6,
    play_parse: true,
    lazy: $js.toString(() => {
        var info=input.split('|');
        var t10=getCurrentTimestamp();        
        var key = '7e215d55721ec029';
        var key1 = 'c11b42e542c84ac2c5ed7210183fc0b1';        
        var bodyad = 'ac=mobile&os=Android&vod_version=1.10.21.6-tob&os_version=12&lock_ad=20&lock_free=20&type=1&clientVersion=5.5.2&uuid=LN6SS47SESZEUSI7CBVGJRJ5QX6KGSVVEEYC7VPOFTTQGM36SDIA01&resolution=1080*2276&openudid=6fc50bed8200dea8&shortplay_id='+info[0]+'&dt=22021211RC&sha1=A03F3CE220A3848E65415AB72EC23326ED168A70&lock_index='+info[1]+'&os_api=31&install_id=957035142195658&device_brand=Redmi&sdk_version=1.1.3.0&package_name=cn.jufeng66.ddju&siteid=5437174&dev_log_aid=545036&oaid=abec0dfff623201b&timestamp='+t10;
        var bodyad1 = aesEncryptECB(bodyad, key);
        var bodyad2 = t10+'LfvqAfa24hCqNRZn'+bodyad;
        var signaturead = hmacSHA256(bodyad2, key1);
        var url = 'https://csj-sp.csjdeveloper.com/csj_sp/api/v1/pay/ad_unlock?siteid=5437174';
        rule.headers['X-Timestamp']=t10;
        rule.headers['X-Signature']=signaturead;
        var htmlad = post(url, {headers: rule.headers,body:bodyad1}); 
        var htmlad1 = aesDecryptECB(htmlad, key);        
        var body = 'not_include=0&lock_free='+info[1]+'&type=1&clientVersion=5.5.2&uuid=LN6SS47SESZEUSI7CBVGJRJ5QX6KGSVVEEYC7VPOFTTQGM36SDIA01&resolution=1080*2276&openudid=6fc50bed8200dea8&dt=22021211RC&os_api=31&install_id=957035142195658&sdk_version=1.1.3.0&siteid=5437174&dev_log_aid=545036&oaid=abec0dfff623201b&timestamp='+t10+'&direction=0&ac=mobile&os=Android&vod_version=1.10.21.6-tob&os_version=12&count=0&index='+info[1]+'&shortplay_id='+info[0]+'&sha1=A03F3CE220A3848E65415AB72EC23326ED168A70&device_brand=Redmi&package_name=cn.jufeng66.ddju'; 
        var body1 = aesEncryptECB(body, key); 
        var body2 = t10+'LfvqAfa24hCqNRZn'+body; 
        var signature = hmacSHA256(body2, key1); 
        var url = 'https://csj-sp.csjdeveloper.com/csj_sp/api/v1/shortplay/detail?siteid=5437174';
        rule.headers['X-Signature']=signature;
        var html = post(url, {headers: rule.headers,body:body1}); 
        var html1 = aesDecryptECB(html, key); 
        var data = JSON.parse(html1).data.list[0]; 
        var play = data.video_model.video_list.video_1.main_url;
        var play2 = base64Decode(play); 
        input={jx:0,parse:0,url:play2}
    }),
    推荐: $js.toString(()=>{
        var d = [];
        var t10=getCurrentTimestamp();
        var key = '7e215d55721ec029';
        var key1 = 'c11b42e542c84ac2c5ed7210183fc0b1';
        var body = 'ac=mobile&os=Android&vod_version=1.10.21.6-tob&os_version=12&num=20&type=2&clientVersion=5.5.2&uuid=LN6SS47SESZEUSI7CBVGJRJ5QX6KGSVVEEYC7VPOFTTQGM36SDIA01&resolution=1080*2276&openudid=6fc50bed8200dea8&dt=22021211RC&sha1=A03F3CE220A3848E65415AB72EC23326ED168A70&os_api=31&install_id=957035142195658&device_brand=Redmi&sdk_version=1.1.3.0&package_name=cn.jufeng66.ddju&siteid=5437174&dev_log_aid=545036&page=1&category=热血&oaid=abec0dfff623201b&timestamp='+t10;
        var body1 = aesEncryptECB(body, key); 
        var body2 = t10+'LfvqAfa24hCqNRZn'+body;
        var signature = hmacSHA256(body2, key1); 
        var url = 'https://csj-sp.csjdeveloper.com/csj_sp/api/v1/shortplay/list?siteid=5437174';       
        rule.headers['X-Timestamp']=t10;
        rule.headers['X-Signature']=signature;
        var html = post(url, {headers: rule.headers,body:body1}); 
        var html1 = aesDecryptECB(html, key);
        var list = JSON.parse(html1).data.list;       
        list.forEach(data => {
            d.push({
                title: data.title,
                desc: '更新至'+data.total+'集',
                img: data.cover_image,
                url: data.shortplay_id
            })
        })        
        setResult(d)
    }),
    一级: $js.toString(()=>{
        var d = [];
        var t10=getCurrentTimestamp();
        var key = '7e215d55721ec029';
        var key1 = 'c11b42e542c84ac2c5ed7210183fc0b1';
        var body = 'ac=mobile&os=Android&vod_version=1.10.21.6-tob&os_version=12&num=20&type=2&clientVersion=5.5.2&uuid=LN6SS47SESZEUSI7CBVGJRJ5QX6KGSVVEEYC7VPOFTTQGM36SDIA01&resolution=1080*2276&openudid=6fc50bed8200dea8&dt=22021211RC&sha1=A03F3CE220A3848E65415AB72EC23326ED168A70&os_api=31&install_id=957035142195658&device_brand=Redmi&sdk_version=1.1.3.0&package_name=cn.jufeng66.ddju&siteid=5437174&dev_log_aid=545036&page='+MY_PAGE+'&category='+MY_CATE+'&oaid=abec0dfff623201b&timestamp='+t10;
        var body1 = aesEncryptECB(body, key); 
        var body2 = t10+'LfvqAfa24hCqNRZn'+body;
        var signature = hmacSHA256(body2, key1); 
        var url = 'https://csj-sp.csjdeveloper.com/csj_sp/api/v1/shortplay/list?siteid=5437174';       
        rule.headers['X-Timestamp']=t10;
        rule.headers['X-Signature']=signature;
        var html = post(url, {headers: rule.headers,body:body1}); 
        var html1 = aesDecryptECB(html, key);
        var list = JSON.parse(html1).data.list;       
        list.forEach(data => {
            d.push({
                title: data.title,
                desc: '更新至'+data.total+'集',
                img: data.cover_image,
                url: data.shortplay_id
            })
        })        
        setResult(d)
    }),
    二级: $js.toString(() => {
        var shortplay_id = input.split('#')[1]; 
        var t10=getCurrentTimestamp();
        var key = '7e215d55721ec029';
        var key1 = 'c11b42e542c84ac2c5ed7210183fc0b1';
        var body = 'not_include=0&lock_free=1&type=1&clientVersion=5.5.2&uuid=LN6SS47SESZEUSI7CBVGJRJ5QX6KGSVVEEYC7VPOFTTQGM36SDIA01&resolution=1080*2276&openudid=6fc50bed8200dea8&dt=22021211RC&os_api=31&install_id=957035142195658&sdk_version=1.1.3.0&siteid=5437174&dev_log_aid=545036&oaid=abec0dfff623201b&timestamp='+t10+'&direction=0&ac=mobile&os=Android&vod_version=1.10.21.6-tob&os_version=12&count=0&index=1&shortplay_id='+shortplay_id+'&sha1=A03F3CE220A3848E65415AB72EC23326ED168A70&device_brand=Redmi&package_name=cn.jufeng66.ddju'; 
        var body1 = aesEncryptECB(body, key); 
        var body2 = t10+'LfvqAfa24hCqNRZn'+body; 
        var signature = hmacSHA256(body2, key1); 
        var url = 'https://csj-sp.csjdeveloper.com/csj_sp/api/v1/shortplay/detail?siteid=5437174'; 
        rule.headers['X-Timestamp']=t10;
        rule.headers['X-Signature']=signature;
        var html = post(url, {headers: rule.headers,body:body1}); 
        var html1 = aesDecryptECB(html, key); 
        var data = JSON.parse(html1).data.list[0];       
        VOD={
            vod_name:data.title,
            type_name:data.category_name,
            vod_content: data.desc,
            vod_pic: data.cover_image,
            vod_play_from:'抖短剧'
        }  
        var list = JSON.parse(html1).data.episode_right_list; 
        try {
            VOD.vod_play_url=list.map(data=>{return '第'+data.index+'集$'+shortplay_id+'|'+data.index}).join('#')
        } catch (e) {}
    }),
    搜索: $js.toString(() => {
        var d = [];
        var t10=getCurrentTimestamp();
        var key = '7e215d55721ec029';
        var key1 = 'c11b42e542c84ac2c5ed7210183fc0b1';
        var body = 'ac=mobile&os=Android&vod_version=1.10.21.6-tob&os_version=12&query='+getQuery(input).wd+'&num=20&type=1&clientVersion=5.5.2&uuid=LN6SS47SESZEUSI7CBVGJRJ5QX6KGSVVEEYC7VPOFTTQGM36SDIA01&resolution=1080*2276&is_fuzzy=1&openudid=6fc50bed8200dea8&dt=22021211RC&sha1=A03F3CE220A3848E65415AB72EC23326ED168A70&os_api=31&install_id=957035142195658&device_brand=Redmi&sdk_version=1.1.3.0&package_name=cn.jufeng66.ddju&siteid=5437174&dev_log_aid=545036&page='+MY_PAGE+'&oaid=abec0dfff623201b&timestamp='+t10; 
        var body1 = aesEncryptECB(body, key); 
        var body2 = t10+'LfvqAfa24hCqNRZn'+body; 
        var signature = hmacSHA256(body2, key1); 
        var url = 'https://csj-sp.csjdeveloper.com/csj_sp/api/v1/shortplay/search?siteid=5437174'; 
        rule.headers['X-Timestamp']=t10;
        rule.headers['X-Signature']=signature;
        var html = post(url, {headers: rule.headers,body:body1});         
        var html1 = aesDecryptECB(html, key); 
        var list = JSON.parse(html1).data.list;         
        list.forEach(data => {
            d.push({
                title: data.title,
                desc: '更新至'+data.total+'集',
                img: data.cover_image,
                url:data.shortplay_id
            })
        })        
        setResult(d)
    }),
}
    