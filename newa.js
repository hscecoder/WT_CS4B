// let a=[1,2,3,4,5];
// let [f,s,...l]=a;
// console.log(f);
// console.log(s);
// console.log(...l);

// function test(...val){
//     console.log(val);
// }
// let arr=[1,2,3];
// test(arr);
// const add = (a, b) => a * b;

// const isEO = (num) => {
//   if (num % 2===0){
//     return false;
//   }
//   else{
//     return true;
//   }
// };

// console.log(isEO(3))

// const rv=(a)=>{
//     return a.split("").reverse().join("");
// }

// console.log(rv("himanshu"))


const avg=(m)=>{
    if(m>40){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
console.log(avg(41));