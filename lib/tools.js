export function Duration(t){
    var d='';
    if(t>=3600){
        d=`${Math.floor(t/3600)}小时${Math.floor((t%3600)/60)}分${(t%3600)%60}秒`
    }else if(t>=60&&t<3600){
        d=`${Math.floor(t/60)}分${t%60}秒`}else{d=`${t}秒`
    }
    return d;
}

export function TimestampToDate(Timestamp){
    var date=new Date(Number(Timestamp)),
    Y=date.getFullYear()+'-',
    M=(date.getMonth()+1).toString().padStart(2,'0')+'-',
    D=date.getDate().toString().padStart(2,'0')+' ',
    h=date.getHours().toString().padStart(2,'0')+':',
    m=date.getMinutes().toString().padStart(2,'0')+':',
    s=date.getSeconds().toString().padStart(2,'0');
    return Y+M+D+h+m+s;
}
