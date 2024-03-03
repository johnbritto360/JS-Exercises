function ebbill(){
    const u=Number(document.getElementById("input").value)
    let v1,v2,v3,v4;
    let eb=0.0;
    if(u<=50){
        eb=u*0.75;
    }
    else if(u<=150){
        v1=u-50;
        v2=u-v1;
        eb=(v1*1.00)+(v2*0.75);
    }
    else if(u<=250){
        v1=u-150;
        v2=u-v1;
        v3=v2-50;
        v4=v3-50;
        eb=(v3*1.00)+(v4*0.75)+(v1*1.30);
    }
    else{
        v1=u-250;
        v2=u-v1;
        v3=v2-150;
        v4=v3-50;
        eb=(v3*1.00)+(v4*0.75)+(v3*1.30)+(v1*1.50);
    }
    // let result=document.querySelector('#result');
    result.innerHTML='Your EB bill for ' +u+" units is: "+eb.toFixed(2);
}

