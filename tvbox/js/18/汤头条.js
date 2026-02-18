// 解密函数
globalThis.Decrypt=function(word) {
    const key = CryptoJS.enc.Utf8.parse("7205a6c3883caf95b52db5b534e12ec3");
    const iv = CryptoJS.enc.Utf8.parse("81d7beac44a86f43");
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let decrypt = CryptoJS.AES.decrypt({
        ciphertext: encryptedHexStr
    }, key, {
        iv: iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.NoPadding // 注意这里应该是CryptoJS.pad.NoPadding
    });
    if (decrypt) {
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr;
    } else {
        // 解密失败，返回null或错误信息
        return null;
    }
}

// 加密函数
globalThis.Encrypt=function(plaintext) {
    const key = CryptoJS.enc.Utf8.parse("7205a6c3883caf95b52db5b534e12ec3");
    const iv = CryptoJS.enc.Utf8.parse("81d7beac44a86f43");
    var encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.NoPadding // 注意这里应该是CryptoJS.pad.NoPadding
    });
    var ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    return ciphertext.toUpperCase();
}
/*
//图片解密
key = 'f5d965df75336270';
iv = '97b60394abc2fbe1';
globalThis.imgDec=function(key,iv,a,b){
	if(!b){
 		b='PKCS5Padding';
 	}
    	var sss = `
            function imgDecrypt() {
                var javaImport = new JavaImporter();
                javaImport.importPackage(
                    Packages.com.example.hikerview.utils,
                    Packages.java.lang,
                    Packages.java.security,
                    Packages.java.util,
                    Packages.java.io,
                    Packages.java.text,
                    Packages.javax.crypto,
                    Packages.javax.crypto.spec,
                );
                with(javaImport) {
                    let bytes = FileUtil.toBytes(input);
                    function decryptData(bArr) {
		    if(/B@/.test("${key}")){
      			var secretKeySpec = new SecretKeySpec(String("${key}"), "${a}");
                    	var ivParameterSpec = new IvParameterSpec(String("${iv}"));
		    }else{
		    	var secretKeySpec = new SecretKeySpec(String("${key}").getBytes(), "${a}");
                    	var ivParameterSpec = new IvParameterSpec(String("${iv}").getBytes());
		     }
                    	var cipher = Cipher.getInstance("${a}"+"/CBC/"+"${b}");
                    	cipher.init(2, secretKeySpec, ivParameterSpec);
                   	 return cipher.doFinal(bArr);
                    }
                    bytes = decryptData(bytes);
                    return FileUtil.toInputStream(bytes);
                }
            }                    
        `;
        putVar('sss', sss);
        var imgdec = $.toString(() => {
            eval(getVar('sss'));
            return imgDecrypt();
        });        
        putVar('imgdec', imgdec);
        return imgdec;
}*/
globalThis.sha256=function(str) {
    return CryptoJS.SHA256(str).toString();
}
var rule = {
    title: '汤头条',
    host: 'https://empty',
    url:'##{"system_oauth_type":"pwa","system_oauth_id":"egzmJgnUCTYIlCxD_1722416055782","system_oauth_new_id":"","system_version":"3.0.1","system_app_type":"","system_build":"","system_build_id":"","page":"fypage","tabId":"fyclass"}',
    searchUrl: '',
    detailUrl:'fyid',
    class_name:'今日头条&最新&经典三级&国产&动漫CG&欧美&日韩',
    class_url:'11&10&5&4&12&2&1',
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    推荐: $js.toString(()=>{}),
    一级:$js.toString(()=>{
        var t = Math.floor(Date.now() / 1000); //log(t)
        var data = Encrypt(input.split('##')[1]); //log(data)
        var sign = md5(sha256('client=pwa&data='+data+'&timestamp='+t+'7205a6c3883caf95b52db5b534e12ec3')); //log(sign)
        var body = 'client=pwa&timestamp='+t+'&data='+data+'&sign='+sign; //log(body)
        var url = 'https://dpi4.tbrapi.org/pwa.php/api/MvList/featured';
        var html = post(url, {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body      
        }); //log(html)
        
        let html1 = JSON.parse(html).data; //log(html1)
        let html2 = Decrypt(html1); //log(html2)
        
        var list = JSON.parse(html2).data.list; //log(list)
        list.forEach(data => {
            var url = data.preview_video;
                d.push({
                    title: data.title,
                    desc: data.refresh_at,
                   // img: data.thumb_cover_str + '@js=' + imgDec(key, iv, 'AES'),
                    url: url.replace(/http.*\/\/.*?(\/)/,'https://m3u8.jkunrx.cn/')
                })
            })
        
        setResult(d)
    }),
    二级: $js.toString(() => {
        VOD.vod_play_from='汤头条';
        VOD.vod_play_url='11$'+input;
    }),
    play_parse: true,
    lazy: $js.toString(()=>{
        var html = request(input); //log(html)
        const iv1 = html.match(/^.{32}/)[0]; //log(iv1)
        const data = html.replace(/^.{32}/,''); //log(data)
        //eval(getCryptoJS())
        const key = CryptoJS.enc.Hex.parse("13d47399bda541b85e55830528d4e66f1791585b2d2216f23215c4c63ebace31");
        const iv = CryptoJS.enc.Hex.parse(iv1);
        function Decrypt1(word) {
            let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
            let decrypt = CryptoJS.AES.decrypt({
                ciphertext: encryptedHexStr
            }, key, {
                iv: iv,
                mode: CryptoJS.mode.CFB,
                padding: CryptoJS.pad.NoPadding
            });
            if (decrypt) {
                let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr;
            } else {
                // 解密失败，返回null或错误信息
                return null;
            }
        }
        writeFile('http://127.0.0.1:9978/file/cache/video.m3u8', m3u8);
        let a=getPath('http://127.0.0.1:9978/file/cache/video.m3u8') + '#' + input;
        input= {jx:0,parse:0,url:a}; //log(m3u8)
 
    }),
    搜索: $js.toString(()=>{
    
    }),
}