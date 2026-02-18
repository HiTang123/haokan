var rule = {
  title: '量子采集资源站',
  host: 'http://lzizy.net',
  info:`复刻自采集资源站，非采集接口`,
  homeUrl:'',
  searchUrl: 'https://search.lziapi.com/json-api/?dname=liangzi&key=**&count=50',
  detailUrl: '/index.php/vod/detail/id/fyid.html',
  searchable: 2,
  quickSearch: 0,
  url: '/index.php/vod/type/id/fyfilter.html',
  class_name:'电影片&连续剧&动漫片&综艺片&电影解说&体育',
  class_url:'1&2&4&3&35&36',
  filterable: 1,
  filter_url: '{{fl.类型}}{{fl.地区}}{{fl.排序 or "/by/time"}}{{fl.剧情}}{{fl.语言}}{{fl.字母}}/page/fypage{{fl.年份}}',
  filter:'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',
  filter_def: {
        1: {类型: '1'},
        2: {类型: '2'},
        3: {类型: '3'},
        4: {类型: '4'},
        35: {类型: '35'},
        36: {类型: '36'}
    },
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  timeout: 5000,
  推荐: `js:
  let html=request(input);
  d=[];
  let a=pdfh(html,'.header_list&&li:eq(0)&&Text').replace('：',':');
  let b=pdfh(html,'.header_list&&li:eq(1)&&Text').replace('：',':');
  d.push({
    title:'〖'+a+'，'+b+'〗',
    pic_url:'http://23.224.101.30/template/default/img/favicon.png',
    url:'info'
  });
  let data=pdfa(html,'.videoContent&&li');
  data.forEach( i => {
        let title=pdfh(i,'.videoName--i&&Text');
        let label=pdfh(i,'.videoName&&i&&Text');
        let area=pdfh(i,'.region&&Text');
        let type=pdfh(i,'.type&&Text');
        let score=pdfh(i,'.address&&Text');
        let time=pdfh(i,'.time1&&Text');
        d.push({
            title:'〖'+title+'〗['+label+']',
            desc:'['+area+']['+type+']['+score+']['+time+']',
            pic_url:'http://23.224.101.30/template/default/img/favicon.png',
            url:pdfh(i,'.videoName&&href')
        })  
  });
  setResult(d);
  `,
  一级: `js:
  let html=request(input);
  d=[];
  let data=pdfa(html,'.videoContent&&li');
  data.forEach( i => {
        let title=pdfh(i,'.videoName--i&&Text');
        let label=pdfh(i,'.videoName&&i&&Text');
        let area=pdfh(i,'.region&&Text');
        let type=pdfh(i,'.type&&Text');
        let score=pdfh(i,'.address&&Text');
        let time=pdfh(i,'.time1&&Text');
        d.push({
            title:'〖'+title+'〗['+label+']',
            desc:area+'•'+type+'•'+score+'•'+time,
            pic_url:'http://23.224.101.30/template/default/img/favicon.png',
            url:pdfh(i,'.videoName&&href')
        })  
  });
  setResult(d);
  `,
  二级: `js:
    let khtml = request(input);
    if (orId === 'info') {
    VOD = {
        vod_content: rule.info.trim(),
        vod_pic: 'https://keai.cm/wp-content/plugins/movieku/php/images/loading.png',
        vod_play_from: '随心看',
        vod_play_url: '随机小视频$http://api.yujn.cn/api/zzxjj.php',
    };
  }else{
    VOD = {};
    VOD.vod_id = input;
    VOD.vod_name = pdfh(khtml, '.right&&p:eq(0)&&Text');
    VOD.type_name = pdfh(khtml, '.right&&p:eq(4)&&Text').replace('类型：','');
    VOD.vod_pic = pdfh(khtml, '.left&&img&&src');
    VOD.vod_remarks = pdfh(khtml, '.right&&p:eq(1)&&Text');
    VOD.vod_year = pdfh(khtml, '.right&&p:eq(7)&&Text').replace('年代：','');
    VOD.vod_area = pdfh(khtml, '.right&&p:eq(8)&&Text').replace('地区：','');
    VOD.vod_director = pdfh(khtml, '.right&&p:eq(5)&&Text').replace('导演：','');
    VOD.vod_actor = pdfh(khtml, '.right&&p:eq(6)&&Text').replace('演员：','');
    VOD.vod_content = pdfh(khtml, '.vod_content&&Text');
    VOD.vod_play_from = '量子M3U8';
    let klists = [];
    let kcode = pdfa(khtml, '.lzm3u8&&a:not(.bugs):not(.ckey)');
    kcode.forEach((kc) => {
        let kname = pdfh(kc, 'a&&title');
        let khref = pdfh(kc, 'a&&href');
        let klist = kname + '$' + khref;
        klists.push(klist);
    });
    VOD.vod_play_url = klists.join('#');
    }
  `,
  搜索: 'json:posts;vod_name;vod_pic;;vod_id',
}