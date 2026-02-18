var rule = {
    title:'音范丝',
    host:'https://www.yinfans.net',
    url:'/topic/bluray-movie/fyclass/page/fypage[/topic/bluray-movie/fyclass]',
    searchUrl:'',
    detailUrl:'',
    searchable:1,
    quickSearch:1,
    class_name:'电影&纪录片&演唱会&3D资源',
    class_url:'movie&documentry&song&3dmovie',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:6,
    double:false,
    推荐:'*',
    一级:'body&&li.post;a&&title;img&&src;.info&&Text;a&&href',
    二级:$js.toString(()=>{                                
        let html=request(input);
        let info=pdfh(html,'#post_content&&Text').replace(/\s/g,'')+'◎';   
        let it=function(s){return info.slice(info.indexOf(s)+s.length).split('◎')[0]}                           
        VOD={
            vod_remarks:'译名：'+it('译名'),
            vod_name:it('片名'),
            vod_year:it('年代'),
            vod_area:it('产地'),
            type_name:it('类别'),            
            vod_pic:pdfh(html,'#post_content&&img&&src'),
            vod_director:it('导演'),
            vod_actor:it('主演').replace(/[a-zA-Z-]+/g,'/').replaceAll(',/',''),
            vod_content:it('简介')            
        }
        let a=[]; 
        pdfa(html,'table#cili&&a').forEach(i=>{
            let b=pdfh(i,'a&&href')
            if(b.startsWith('magnet:')||b.startsWith('thunder:')||b.startsWith('ed2k:')){
                a.push(pdfh(i,'a&&Text')+'$'+pdfh(i,'a&&href'))
            }
        })      
        VOD.vod_play_from='音范丝';    
        VOD.vod_play_url=a.join('#');
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