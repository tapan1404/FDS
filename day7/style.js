// let num = [1, 2, 3, 5, 45, 44, 7];
// // let nenum = num.map(x => x * 2);
// // console.log(nenum);

// const student = [
//    { name: 'Tapan', Score: 84 },
//    { name: 'Tarunj', Score: 50 },
//    { name: 'Utkarsh', Score: 84 },
//    { name: 'Rahul', Score: 80 }
// ];

// let scores = student.map(x => x.Score);
// console.log(scores);
// const tscore =student.filter(x=>x.Score%10==0).reduce((sum,student)=> sum+student.Score,0);
// console.log("Total score : ",tscore);
// let arr=num.forEach((x) => console.log(x**2));
// sayhello=()=>{
//    console.log("okie bosss");
// }
// sethe=()=>{
//    console.log("yerha tera phone")
// }
console.log("Start");
setTimeout(()=>{
   console.log("gg");
   setTimeout(()=>{
      console.log("hh");
      setTimeout(()=>{
         console.log("hi");
      },3000);
   },2000);
},1000);
console.log("End");