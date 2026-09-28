import mongoose from "mongoose";
import config from "./config.js";

const connectToDb =async ()=>{
try {
    await mongoose.connect(config.MONGO_URI)
    console.log("DATABASE CONNECTION SUCCESSFULLLY")
} catch (error) {
    console.log(error.message);
    console.log("DATABASE CONNECTION FAILED")
}

}

export default connectToDb;