// let a=prompt("Enter an number: ");
// console.log(Number(a)+10);
// let f="John";
// let l="J";
// let loc="Coimbatore";
// let con=`${f} ${l} lives in ${loc}`;

// console.log(con);

// let items=5;
// let price=95;
// let bill=`"You have ${items} in your cart Your bill amount is $${price}"`;
//  console. log(bill)

// let cities=["NYC","Mumbai","Seattle"];
// console.log(cities[0]);
// console.log(cities[cities.length-1])
// let len=cities.length;
// console.log(cities[len-1]);

// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr[2][1]);
// let a1=['a','s','d','f','g'];
// a1.push('h');
// console.log(a1);
// console.log(a1.pop());
// console.log(a1.shift());
// console.log(a1);
// console.log(a1.unshift('a'));
// console.log(a1);
// console.log(a1.splice(2,1));
// console.log(a1);
// a1.splice(1,0,'t');
// console.log(a1);
// console.log(a1.slice(-1,3));
// console.log(a1.reverse());

// let arr=[5,8,10,7,9,11];
// console.log(arr);
// console.log(arr.splice(3,3,17,19,111));
// console.log(arr);
// console.log(arr.unshift(100));
// console.log(arr);
// arr.push(200);
// arr.push(1000);
// console.log(arr);
// console.log(arr.length);
// let len1=arr.length;
// console.log(arr.splice((len1/2),0,0));
// console.log(arr);

// let pwd=false;
// if(pwd)
//     console.log("You are logged in");
// else
//     console.log("Password Incorrect");
// console.log("Bye");

// let age=60;
// if(age>50){
//     console.log("You have");
// }
// else{
//     console.log("Vango");
// }

// let a=500,b=70;
// let max=a>b?a:b;
// console.log(max);

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
//     // Compare the original string with its reversed version
//     const reversedStr = cleanStr.split('').reverse().join('');
    
//     return cleanStr === reversedStr;
//   }
  
//   // Example usage:
//   const testString = "A man, a plan, a canal, Panama!";
//   console.log(isPalindrome(testString)); // Output: true

// for(let i=10;i>=1;i--){
//   console.log(i);
// }

// let i=10;
// while(i>=1){
//   console.log(i);
//   i--;
// }

// while(true){
//   let num=Number(prompt("Enter a number"))
//   if(!isNaN(num)){
//     break;
//   }
// }

// for(let i=1;i<=10;i++){
//   if(i%2==0){
//     continue;
//   }
//   console.log(i);
// }

// let arr=['john','naveen','sameer','naresh','naveeth'];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// for(let frnds of arr){
//   console.log(frnds.toUpperCase());
// }

// let item={
//   name:'phone',
//   price:154000,
//   quantity:1
// }

// for(let fun in item){
//   console.log(item[fun]);
// }

// function ipos(num){
//   return num>0;
// }
// console.log(ipos(9))

// function mult(a,b){
//   return `${a} + ${b} = ${a+b} `;
// }
// console.log(mult(5,6));

// function asj(a=9,b=5){
//   console.log(`${a} + ${b} = ${a-b}`);
// }
// asj();
// asj(45,33);

// function fact(n){
//   if(n===1){
//     return 1;
//   }
//   else{
//     return n*fact(n-1);
//   }
// }
// console.log(fact(3));

// let arr2=[2,3,4,5,6];
// let summ=arr=>{
//   let sum=0;
//   for(let s of arr){
//     sum+=s;
//   }
//   return sum;
// }
// console.log(summ(arr2));

// let area=r=>Math.PI*r*r;
// console.log(area(4))

// function ar(r){
//   return Math.PI.toFixed(2)*r*r;
// }
// console.log(ar(4));

// let sum=function(...ap){
//   let res=0;
//   for(let v of ap){
//     res+=v;
//   }
//   return res;
// }
// console.log(sum(1,2,3,4,5,6));

// function* ind(){
//   let i=0;
//   while(true){
//     yield i++;
//   }
// }

// const gen=ind();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function gcon(name){
//   console.log("hello"+name);
// }

// function ghead(name){
//   const head=document.querySelector('h1');
//   head.innerHTML="Hello "+name+"!";
// }

// function g(callback){
//   callback('John');
// }

// g(gcon);
// g(ghead);

// let a=['geetha','gritha','growtha'];
// a.forEach(val=>console.log(val));

// function print(val){
//   console.log(val);
// }

// a.forEach((val,index,a)=>{a[index]=val.toUpperCase()})

// let a=[6,7,4,6];
// let res=0;
// a.forEach((val)=>{
//   if(val>=0){
//     res+=val;
//   }
// });

// console.log(res);

// let b=a.map(q=>q*89.66);
// console.log(b);

// b=a.map(convert);
// function convert(val){
//   return val*89.66;
// }
// console.log(b);

// let arr = [
//   {name:'John',age:25,city:'New York'},
//   {name:'Alice',age:30,city:'Los Angeles'},
//   {name:'Bob',age:22,city:'Chicago'},
//   {name:'Eva',age:28,city:'San Francisco'}
// ];

// let ag=arr.map(c=>c.city);
// console.log(ag);

// let a=[6,7,4,6];
// let b=a.filter(c=>c<7);
// console.log(b);

// let c=a.reduce((tot,r)=>tot+r,100);
// console.log(c);

// const a2d= [
//   ['a', 'b', 'c', 'a'],
//   ['d', 'e', 'f', 'e'],
//   ['g', 'h', 'i', 'i'],
//   ['j', 'k', 'l', 'm']
// ];

// console.log(a2d.flat());

// let c=a2d.flat().reduce(
//   (co,val)=>{
//     if(co[val]){
//       co[val]++;
//     }
//     else{
//       co[val]=1;
//     }
//     return co;
//   },
//   {});

//   console.log(c);

// let b=a.filter(c=>c<7);
// console.log(b);

// let c=a.reduce((tot,r)=>tot+r,100);
// console.log(c);

// let a=[6,-5,7,-2,4,6,-1];
// let b=a.filter(n=>n>0);
// let c=b.reduce((tot,r)=>tot+r);
// console.log(c);

// let a=[4,6,2,3,1,1,3,5,7,8,4,3];
// let b=a.filter((value, index, arr) => {
//   return arr.indexOf(value)===index;
// });

// console.log(b);

// function outer(name){
//   let ov='bread';
//   function inner(){
//     let iv='butter';
//     console.log(`${ov} and ${iv}`);
//     console.log('kello '+a);
//     console.log('hello '+name);
//   }
//   return inner;
// }

// let op=outer('Json');
// op();

// function add(a){
//   return y=>{
//     return a*y;
//   }
// }

// let ad=add(10);
// console.log(ad(5));

// let ad1=add(100);
// console.log(ad1(90));

// let a=[4,6,2,3,1,1,3,5,7,8,4,3];
// let mset=new Set();
// console.log(mset);

// mset.add(10);
// mset.delete(6);
// mset.add('john');
// console.log(Array.from(mset));

// let mapy=new Map();
// mapy.set('a',65);
// mapy.set('b','John Doe');
// console.log(mapy);
// console.log(mapy.get('a'));

// for(let i of mapy){
//   console.log(i);
// }

// for(let [k,v] of mapy){
//   console.log(v);
// }


// const a2d= [
//   ['a', 'b', 'c', 'a'],
//   ['d', 'e', 'f', 'e'],
//   ['g', 'h', 'i', 'i'],
//   ['j', 'k', 'l', 'm']
// ];
// let ma=new Map(a2d);
// console.log(ma);



// // let str;

// console.log(a);
// let c=0;
// function simi(name){
//   let a=Array.from(name);
//   for(let i=0;i<a.length;i++){
//   if (a[i]=='1'){
//     c++;
//   }
// }
// return c;
// }
// console.log(simi('00000000000000000000000000001011'));

// console.log("hey");
// function sync(){
//   console.log('step2')
//   console.log('step3')
//   console.log('step4')
// }
// sync();

// let a=100;
// let b=20;
// let c=a+b;

// setInterval(()=>console.log("hello"),900);

// const tt=new Promise((resolve,reject)=>{
//   let sus=true;
//   if(sus){
//     resolve()
//   }
//   else{
//     reject()
//   }
// })

// tt.then(()=>console.log("Thanks"));
// tt.catch(()=>console.log("Such a joker"));


// try{
//   num=prompt("Enter a number");
//   if(isNaN(num)){
//     throw "Not a valid number";
//   }
//   else if(num===''){
//     throw "Field can't be empty"
//   }
//   else{
//     console.log(num**2);
//   }
// }
//  catch(error){
//   console.log(error);
//  }
// finally{
//   console.log("tata");
// }

// async function create(){
//   return "hello";
// }

// console.log(create());

// create().then((msg)=>console.log(msg));

// let json=`[{
//   "String":"Jekko",
//   "Number":45
// },
// {
//   "String":"Jello",
//   "Number":90
// }]`

// let pars=JSON.parse(json);
// console.log(pars[1].number);

// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//   .then(res => res.json())
//   .then(msg => console.log(msg[0].setup, msg[0].punchline))
//   .catch(error => console.error('Error:', error));


fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then(res=>res.json())
.then(msg=>console.log(msg[0].setup,msg[0].punchline))