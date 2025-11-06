import express from "express"
const port=8900;

const app=express();

app.get("/health",(req,res)=>{
res.send("hello")
})

app.get("/health/noman",(req,res)=>{
    res.send("hello noman")

})

app.listen(port,()=>{
    console.log("app is running")
})