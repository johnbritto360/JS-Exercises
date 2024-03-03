let ampm=document.getElementById('ampm');
function disp(){
    let dt=new Date();
    let hr=zero(dt.getHours());
    let min=zero(dt.getMinutes());
    let sec=zero(dt.getSeconds());
    // if(hr>12){
    //     // hr-=12;
    //     ampm.innerHTML='PM'
    // }
    // else{
    //     ampm.innerHTML='AM';
    // }
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('secs').innerHTML=sec;
}

function zero(num){
    return num<10?"0"+num:num;
}

setInterval(disp,500)