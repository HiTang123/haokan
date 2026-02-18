var rule = {
    title:'爱听音乐',
    host:'https://www.1nzb.com',
    url:'/index/index/playlist',
    searchUrl:'/search?ac=**',
    detailUrl:'fyid',
    searchable:1,
    quickSearch:1,
    class_name:'新歌榜&飙升榜&热歌榜&原创榜',
    class_url:'1&2&3&4',
    headers:{
        'User-Agent':'PC_UA',
        'X-Requested-With':'XMLHttpRequest'
    },
    timeout:5000,
    limit:6,
    double:false,
    //推荐:'*',
    一级:$js.toString(()=>{
        let d=[];
        let html=JSON.parse(post(input,{headers:rule.headers,body:'id='+MY_CATE})).msg.msg;                
        let list=pdfa(html,'li');
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'a&&Text').split('-')[0],
                desc:pdfh(it,'a&&Text').split('-')[1],
                //img:'',
                year:'2024',
                url:pdfh(it,'a&&href')
            })
        })  
        setResult(d)
    }),
    二级:$js.toString(()=>{       
        VOD.vod_play_from='爱听音乐';          
        let js=pdfh(request(input),'body&&script:eq(1)&&Html');
        let img=js.match(/(?<=cover: ').*?(?=')/)[0];
        let name=js.match(/(?<=name = ').*?(?=')/)[0];
        let playurl=js.match(/(?<=url = ').*?(?=')/)[0];
        let lrc=js.match(/(?<=lrc: ").*?(?=")/)[0];        
        VOD.vod_name=name.split('-')[0];
        VOD.vod_pic=img.replace('150y150','1000y1000');
        VOD.vod_actor=name.split('-')[1];
        VOD.vod_content=lrc.split('[').map(it=>{return it.split(']')[1]}).join('\n');           
        VOD.vod_play_url=name+'$'+playurl;       
    }),
    搜索:$js.toString(()=>{
        let d=[];
        let list=pdfa(request(input),'body&&.mul,0&&a');
        list.forEach(it=>{
            d.push({
                title:pdfh(it,'a&&Text').split('-')[1],
                desc:pdfh(it,'a&&Text').split('-')[0],
                img:'',
                url:pdfh(it,'a&&href')
            })
        })
        setResult(d)
    }),
}