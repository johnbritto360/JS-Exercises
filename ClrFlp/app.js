const but=document.getElementById('btn');
const ct=document.getElementById('color');
const wrap=document.getElementById('wrap');
const divi=document.getElementById('heading');
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
but.addEventListener('click',chbg);
function chbg(){
    let hexc='#';
    for(let i=0;i<6;i++){
        hexc+=rand()
    }
    wrap.style.backgroundColor=hexc;
    divi.style.backgroundColor=hexc;
    ct.innerHTML=hexc;
}
function rand(){
    let ranid=Math.floor(Math.random()*16);
    return hex[ranid];
}