// let a=() =>{
//     console.log("Arrow Fun");
// };
// let b=()=>console.log("Arrow Fun2");
// b();
// a();
// let c=(x,y)=>{
//     return x+y;
// }
// let res=c("tapan","hello");
// let resl=c(12,11);
// console.log(res,resl)
// function display(){
//     let p1=document.querySelectorAll('p');
//     p1[0].innerHTML="i am in para DOX";
//     p1[0].style.backgroundColor="green";
//     p1[1].innerHTML="i am in para DOX";
//     p1[1].style.backgroundColor="red";
// }
// let changeh= () =>{
//     let head1=document.querySelector('h1');
//     head1.textContent="change the title";
//     let a1=document.querySelector('a');
//     a1.setAttribute("href","https://aktu.ac.in/");
// }
let addcontent=()=>{
    const newd=document.createElement('div');
    newd.textContent="this is new d";
    const body=document.querySelector('body');
    body.appendChild(newd);
}