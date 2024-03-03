// let item={
//     name:'phone',
//     price:154000,
//     quantity:1
// }
// console.log(item);
// console.log(item.name);
// let item2=new Object();
// item2.name='charger';
// item2.price=700;
// item2.quantity=1;
// console.log(item2);
// console.log(item2.name);
// item.name='Laptop';
// console.log(item.name);
// item.warranty=3;
// console.log(item);
// console.log(item['price']);

// let key='warranty';
// item[key]=5;
// console.log(item);

// item={
//     name:'phone',
//     price:154000,
//     quantity:1,
//     buy:function(){
//         console.log("hellO worlD!");
//     },
//     jojer(){
//         console.log("Hej");
//     }
// }
// item.buy();
// item.jojer();

// let user={
//     fn:'john',
//     ln:'britto',
//     pwd:'9283cnw9',
//     email:'local@gmail.com',
//     access(){
//         console.log(user);
//     },
//     modify(){
//         user.fn='Steven'
//         console.log(user);
//     },
//     addend(){
//         user.nn='Rockz';
//         console.log(user);
//     }
// }
// user.access();
// user.modify();
// user.addend();
// console.log(user);

// let user1={
//     name:'john',
//     age:20,
//     login(){
//         console.log("you are logged in");
//     },
//     logout(){
//         console.log("you are logged out");
//     }
// }

// let user2={
//     name:'naveen',
//     age:21,
//     login(){
//         console.log("hello",this.name);
//         console.log("you are logged in");
//     },
//     logout(){
//         console.log("you are logged out");
//     }
// }

// user2.login();
// user2.logout();

// class User{
//     static nou=0;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         User.nou++;
//     }
//     login(){
//         console.log("hello",this.name);
//         console.log("you are logged in");
//     }
//     logout(){
//         console.log("you are logged out");
//     }
//     static display(){
//         console.log(`Total Number of users ${User.nou}`);
//     }
// }



// let user1=new User('John',34);
// let user2=new User('Naveen',45);
// let user3=new User('Naveen',45);

// user1.login();
// user2.logout();


// User.display();

// class Paiduser extends User{
//     constructor(name,age){
//         super(name,age);
//         this.storage=100;
//     }
//     message(){
//         console.log("Helo user",this.name,this.age,this.storage);
//     }
//     login(){
//         console.log("you are laggy");
//         return this;
//     }
// }

// let pu1=new Paiduser('jake',90);

// pu1.login().message();
// pu1.message();

// function User(name,age){
//     this.name=name;
//     this.age=age;
// }

// User.prototype.login=function(){
//     console.log('hi',this.name);
//     console.log("you are logged in");
// }
// let user1=new User("John",90);

// user1.login();

// class Temp{
//     constructor(temp){
//         this._temp=temp;
//     }
//     get temp(){
//         return `${this._temp} deg celcius`;
//     }
//     set temp(temp){
//         if(temp>100){
//             temp=100;
//         }
//         this._temp=temp;
//     }
// }

// let t1=new Temp(40);
// t1.temp=130;
// console.log(t1.temp);



// setTimeout(()=>console.log('step1'),4000);
// setTimeout(()=>console.log('step2'),4000);
// setTimeout(()=>console.log('step3'),1000);

// console.log("hello");

// for(let i=1;i<10;i++){
//     console.log(i);
// }