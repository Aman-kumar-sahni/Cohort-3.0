const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const registerController = async(req,res)=>{
const {email,name,password}=req.body
const user = await userModel.create({
    name,email,password
})

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)


    
 


    res.status(201).json({
        message:"registered successfully",
        data:{
            user
        },Token:token
    })
}


module.exports= {registerController}