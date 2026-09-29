import config from "./config.js";
import mongoose from "mongoose";




const connecToDb = async ()=>{

    try {
    await mongoose.connect(config.MONGO_URI)
    console.log("DATABASE CONNECTED SUCCESSFULLY"); 
    } catch (error) {
        console.log(`failed to connect with databse:${error.message}`)
        
    }

}

export default connecToDb;