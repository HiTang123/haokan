var rule={
            title: '抖音直播',
            host: 'https://cfss.cc',
            homeTid: '13',
            homeUrl: '/Cf/dyzbjson.php?p=1&id=2707',           
            url: '/Cf/dyzbjson.php?p=fypage&id=fyclass',
            headers: {'User-Agent': 'MOBILE_UA'},
            timeout: 5000, 
            class_name: '时尚&旅行&舞蹈&音乐&语音互动&情感&美食&运动&户外&教育&人文艺术',
            class_url: '2823&2751&2726&2707&2842&2836&2786&2791&2742&2800&2756',
            limit: 5,
            推荐: '*',
            一级: $js.toString(() => {
                let d=[];
                let list=JSON.parse(request(input)).Data;
                list.forEach(it=>{
                    d.push({
                        title:it.js,
                        desc:'👤'+it.gz,
                        pic_url:it.tp,
                        url:it.flv+'|'+it.hls+'|'+it.tx+'|'+it.gz
                    })
                });
                setResult(d);
            }),
            二级: $js.toString(() => {
                let flv=input.split('|')[0].replace(HOST+'/','');
                let hls=input.split('|')[1];
                VOD.vod_actor=input.split('|')[2];
                VOD.vod_remarks='人气：'+input.split('|')[3];
                VOD.vod_play_from='FLV$$$HLS';
                VOD.vod_play_url='点击播放$'+flv+'$$$点击播放$'+hls;
            }),
        }