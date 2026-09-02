const express = require("express");
const jwt =require("jsonwebtoken")
const app = express()
app.use(express.json()); // 👈 ye route se PEHLE

app.get("/",(req,res)=>{
    res.status(200).json("welcome to Authention Api")
})

app.post("/api/auth/register",(req,res)=>{
    const {email,name,password} =req.body
    const token =jwt.sign({
        email,name
    },
    "283jduinxjsnhjcbhjj"
)
res.status(200).json({
    message:"user registered successfully",
    data:{
        user:{
            email,name
        },token
    }
})
})
module.exports = app