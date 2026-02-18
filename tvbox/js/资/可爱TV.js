var rule = {
  title: '可爱TV',
  info: `此站源为影视搜索引擎，请在搜索栏输入关键词进行搜索使用，或搭配豆瓣源使用`,
  host: 'https://keai.cm',
  searchUrl: '/?key=**',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  timeout: 5000,
推荐: $js.toString(() => {
    let info = [{
      vod_name: '搜索一下',
      vod_id: 'info',
      vod_pic: 'https://resource-cdn.tuxiaobei.com/video/FtWhs2mewX_7nEuE51_k6zvg6awl.png'
    }];
    VODS = [];
    VODS = info.concat(VODS);
  }),
一级: '',
二级: $js.toString(() => {
  if (orId === 'info') {
    VOD = {
        vod_content: rule.info.trim(),
        vod_name: '使用说明',
        type_name: '使用说明',
        vod_pic: 'https://resource-cdn.tuxiaobei.com/video/FtWhs2mewX_7nEuE51_k6zvg6awl.png',
        vod_play_from: '随心看',
        vod_play_url: '随机小视频$http://api.yujn.cn/api/zzxjj.php',
    };
  } else {
    let html = request(input);
    VOD = {};
    VOD.vod_id = input;
    VOD.vod_play_from = pdfh(html, '.listclass&&Text');
    let lists = [];
    let code = pdfa(html, '.listcontent&&a');
    code.forEach((it) => {
      let name = pdfh(it, 'a&&Text');
      let href = pdfh(it, 'a&&data-url');
      let list = name + '$' + href;
      lists.push(list);
    });
    VOD.vod_play_url = lists.join('#');
  }
})
,
搜索: 'body&&.notifications-container;h1&&Text;.video-thum&&data-original;.scc&&Text;.success-button-container&&a&&href;.gxz&&Text',
}