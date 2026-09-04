
const jwt = require("jsonwebtoken")
const userModel = require("../model/userModel")
const authenticate =async (req,res,next)=>{
    const token = req.headers.authorization
const data = jwt.verify(token,process.env.JWt_SECRET)
const user = await  userModel.findById(data.id)
console.log(user)
next()
}

module.exports=authenticate;