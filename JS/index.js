
// console.log("Hello Ankur");
// let a=15;
// console.log(a+a);


// console.log(a);
// var a=20;


// let a=20;
// if(a>10){
//     let a=100
//     console.log("a="+a);
// }
// else{
//     console.log("Hii");
// }
// console.log(a);


// const a=23;
// a=50;


// normal function

// function fun(msg){
//     return "Hii"+" "+msg;
// }

// const data=fun("Ankur");
// console.log(data);


// function as an expression 

// const data=function fun(a,b){
//     return a*b;
// }
// console.log(data(10,20));

// const data=()=>{
//     console.log("Ankur");
// }
// console.log(data());


// IIFE 

// (function(){
//     console.log("Welcome to MERN Session");
// })();


// setTimeout(()=>{
//     console.log("Hii");
// },1000);


// function greet(msg="Java"){
//     console.log(msg+" is a good language");
// }
// greet("Python");


// function selectlanguage(lang){
//     let result;
//     if(lang=="Java"){
//         function JCompiler(){
//             return "Using J Compiler";
        
//         }
//         result=JCompiler();
//     }
//     else if(lang=="C"){
//         function CCompiler(){
//             return "Using C Compiler";
//         }
//     }
//     else{
//         result="No Compiler Found";
//     }
//     return result;
// }

// final=selectlanguage("Java");
// console.log(final);




// const div=document.getElementsByTagName('div');

// div[0].innerText="Hello World";
// div[0].style.color="Red";
// div[0].style.backgroundColor="aqua";
// console.log(div);

// const container=document.getElementsByClassName('container');

// // container[0].innerHTML='<h2 style=color:red>Hello Ankur!</h2>'
// // console.dir(container);
// const h2=document.createElement('h2');
// h2.innerText="Ankur Kumar Chaubey";
// h2.style.color="red";
// h2.style.backgroundColor="black";
// console.log(h2);
// container[0].appendChild(h2);



// const button=document.getElementById('btn');
// console.log(button);


// function msg(){
    // console.log("Hi! I am working on MERN");
    // alert("Hi! I am working on MERN");

    // document.getElementById('contain').innerHTML="<h>Loading image.....</h>"
    // setTimeout(()=>{const img=document.createElement('img');
    // img.src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/copy-urls-tabs-featured-image.jpg"
    // img.setAttribute('height','200px');
    // img.setAttribute('width','200px');
    // console.log(img);
    // container[0].appendChild(img);
    
    // const container=document.getElementsByClassName('contain');
    // const h2=document.createElement('h2');
    // h2.innerText="Welcome to ABES ENGINEERING COLLEGE";
    // h2.style.color="red";
    // h2.style.backgroundColor="black";
    // container[0].appendChild(h2);

//     document.getElementById('contain').innerHTML="<h2>ABES Engineering College</h2>"},2000);

    
// }
// button.addEventListener('click',()=>(msg()));




// const button=document.getElementById('btn');
// function longdata(){
//     console.log("Hii");
//     for(i=0;i<100000000;i++){
//         console.log(i);
//     }
// }
// button.addEventListener('click',longdata);


// console.log("start");
// setTimeout(()=>{
//     console.log("Welcome to FSD")
// },2000);
// console.log("end");


// function greetmsg(myname){
//     return "Hii,"+myname+" welcome to abes college";
// }

// function msghandler(msg,clbk){
//     console.log(msg);
//     const data=clbk(msg);
//     return data;
// }

// const student=["Rahul","Aman","Ankur"];
// student.forEach((name)=>{
//     console.log(msghandler(name,greetmsg));
// })
// const completemsg = msghandler("Hii",greetmsg);
// console.log(completemsg);



// Promise

// const myPromise=new Promise((resolve,reject)=>{
//     const password="Ankur@123";
//     if(password.length>=8){
//         resolve("Strong Password");
//     }else{
//         reject("Weak Password");
//     }
// });

// myPromise.then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("all the reources have closed successfully");
// });


// async function handleData(){
//     const data=await myPromise;
//     console.log(data);
// }
// handleData();


