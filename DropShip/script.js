// const op=document.getElementById('0')
// const op1=document.getElementById('1')
// const op2=document.getElementById('2')
// const op3=document.getElementById('3')
// const op4=document.getElementById('4')
// const op5=document.getElementById('5')
let a=['ece','cse','it','eee','mech','civil'];


// op.innerHTML=a[0];
// op1.innerHTML=a[1];
// op2.innerHTML=a[2];
// op3.innerHTML=a[3];
// op4.innerHTML=a[4];
// op5.innerHTML=a[5];

a.forEach(val=>{
    const opt=document.createElement('option');
    opt.textContent=val;
    opt.value=val;
    document.getElementById('branch').appendChild(opt);
})
