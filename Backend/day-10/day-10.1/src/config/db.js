const mongoose = require("mongoose");
require("dotenv").config()
const connectToDB = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DATABASE CONNECTED SUCCESSFULLY")
} catch (error) {
    console.log(error.message);
    console.log("databse connection failed ")
}
}

module.exports=connectToDB