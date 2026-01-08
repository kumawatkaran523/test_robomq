import fs, { ftruncate, readFile} from 'fs'
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(() => {resolve()}, 1000);
// })

// pr.then(()=>{
//     console.log("hello")
// })

const setTimeoutPromisified=(ms)=>{
    return new Promise((resolve,reject)=>[
        setTimeout(() => {
            resolve()
        }, ms)
    ])
}

setTimeoutPromisified(100).then(()=>{
    console.log("setTimeoutPromisified");
})

const readFilePromisified=(file)=>{
    return new Promise((resolve,reject)=>{
        readFile(file,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}

readFilePromisified('test.txt').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
});

// fs.readFile("test.txt",'utf-8',(error,data)=>{
//     console.log(data)
// })

// success and failed example
const pr=new Promise((resolve,rejects)=>{
    const succes=false;
    if(succes){
        resolve();
    }else{
        rejects()
    }
})

pr.then(()=>{
    console.log("Fullfilled");
}).catch(()=>{
    console.log("Reject");
})

// value passing
Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    console.log(x);
    return x+1; //or Promise.resolve(x + 1)
  })
  .then((x) => {
    console.log(x);
  });


//  UNDERSTAND IN SIMPLE WAY 
// const prm=new Promise((resolve,reject))

const resolve=()=>{
    console.log("resolve fn")
}
const reject=()=>{
    console.log("reject fn")
}

function promise(resolve,reject){
    const succes=true;
    if(succes){
        resolve();
    }else{
        reject();
    }
}
promise(resolve,reject);
