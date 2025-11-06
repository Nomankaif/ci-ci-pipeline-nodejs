import express from "express"
const port=8900;

const app=express();

app.get("/health",(req,res)=>{
res.send("hello")
})

app.listen(port,()=>{
    console.log("app is running")
})