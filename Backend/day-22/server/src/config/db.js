import mongoose from "mongoose";
import config from "./config.js";
const connectToDb=async ()=>{
     
    try {
        await mongoose.connect(config.MONGO_URI)
            console.log("DATABASE CONNECTED SUCCESSFULLY")
        
        
    } catch (error) {
        console.log(`Failed to connect server:${error.message}`)
    }
}

export default  connectToDb;