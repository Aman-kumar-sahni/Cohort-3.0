

import jwt from "jsonwebtoken";
import config from "../config/config.js";
export const genrateTokens = ({userId})=>{
const accessToken = jwt.sign({id:userId},config.ACCESS_TOKEN,{expiresIn:"15m"})
const refreshToken =jwt.sign({id:userId},config.REFRESH_TOKEN,{expiresIn:"15m"})

return {accessToken,refreshToken}
}


export const verifyAccessToken =({token})=>{
    const decoded = jwt.verify(token, config.ACCESS_TOKEN)
    return decoded;

    
}

export const verifyRefreshToken=({token})=>{
 const decoded = jwt.verify(token,config.REFRESH_TOKEN)
 return decoded;
}

