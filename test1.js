import fs from 'fs'

const content=fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error");
    }else{
        console.log("Content from test.txt :",data);
    }
});

console.log("hello from test1.js");


function mul(a,b){
    return a*b;
}

function calculate(a,b,mul){
    return mul(a,b);
}

console.log(calculate(2,3,mul));

// function add(a, b) {
//     return a + b;
// }

// let sum=add(2, 3);
// console.log("Sum:", sum);
// console.log("2"-"3");

// let s=0;
// for(let i=0;i<10;i++){
//     s+=i;
// }
// console.log(s);