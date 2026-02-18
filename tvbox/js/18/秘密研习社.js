var rule = {
    title: '秘密研习社',
    /*https://mimi.mimiyanxishe.cc/*/
    host:'https://mm.mimi0108.top',
    url: '/?m=video_list*fyclass*fypage',    
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_name: '精品推荐&主播秀色&日本有码&日本无码&中文字幕&童颜巨乳&性感人妻&强奸乱伦&欧美情色&三级伦理&卡通动漫&丝袜OL&自拍偷拍&日本片商&剧情介绍&网曝系列&同性恋&探花嫖娼&国产人妻&国产SM&国产丝袜&麻豆传媒&国产乱伦&明星换脸&主奴调教&凌辱快感&多人群交&角色剧情&港台辣妹&重口性癖&变性伪娘&VR视角',
    class_url: '1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16&17&18&19&20&21&22&23&24&25&26&27&28&29&30&31&32',
    limit: 6,
    推荐: '*',
    double: true, 
    一级: '.videos&&.video;.video-titulo&&Text;img&&src;;a&&href',
    二级: $js.toString(() => {
        VOD.vod_play_from="秘密研习社";
        VOD.vod_play_url='立即播放$'+getQuery(HOST+pdfh(request(input.replace("detail","conter")),'iframe&&src')).Play;
    }),
}