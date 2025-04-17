import express from "express"
const app=express()

app.get("/",(req,res)=>{
    res.send("hi")
})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})