import express from "express"

const app=express();

app.get('/',(req,res)=>{
    res.send("running");
})

app.listen(8000,()=>{
    console.log("running on 8000")
});

