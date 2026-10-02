import mongoose from "mongoose"

const userSchema =new mongoose.Schema({

    //email 

    //name
    //passwordhash
    //role
    //timeStamps
    //refreshToken
})


const userModel = mongoose.model("user",userSchema);

export default userModel