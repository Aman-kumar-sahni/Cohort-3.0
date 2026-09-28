import {Router} from "express"
import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import { genrateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";

const router = Router()


// @POST/api/auth/register
router.post("/register",async (req,res)=>{  
 
    const {name,email,password}=req.body;
    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user already exists with email ..."
        });
    }
const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password,12)
})

 const {accessToken,refreshToken} = await genrateTokens({ userId:user._id})

 user.refreshToken= refreshToken;
  await user.save()
res.cookie("refreshToken",refreshToken,{
    httpOnly:true,
})
res.status(201).json({
    message:"user registered successfully",
    data:{
        user:{
            name:user.name,
            email:user.email
        },
    },        accessToken

    
})

})

router.get("/me",async(req,res)=>{
    const accessToken = req.headers.authorization?.split(" ")[ 1 ]

    if(!accessToken){
        return res.status(401).json({
            message: "Unauthorized, access token not found",

        })

        
        }
   try {
 const decoded = verifyAccessToken(accessToken)
const user =  await userModel.findById(decoded.id)
res.status(200).json({
    message:"user fetched successfully",
    data:{
        user:{
            name:user.name,
            email:user.email
        }
    }
})


   } catch (error) {
    return res.status(401).json({
        message:"Unauthorized ,invalid or expired access token "
    })
   }

    



})

router.post("/refresh",async(req,res)=>{
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken){
        return res.status(401).json({
            message:"unAuthoorized user ,token missing ",

        })


    }

    try {
        const decoded = verifyRefreshToken(refreshToken);
        const user = await userModel.findById(decoded.id);
        if(refreshToken!==user.refreshToken){
            user.refreshToken=null
            await user.save();
            return res.status(401).json({
                message:"unAuthorized,refresh token mismatch "
            })
        }

                const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id })
        res.cookie("refreshToken", newRefreshToken, { httpOnly: true })
        user.refreshToken = newRefreshToken
        await user.save()
        res.status(200).json({
            message: "Tokens refreshed successfully",
            accessToken
        })

    } catch (error) {
                return res.status(401).json({
            message: "Unauthorized, Invalid or expired refresh token",
        })

        
    }
})

export default router