const mongoose = require("mongoose")

require("dotenv").config()
const connectToDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully ")
    } catch (error) {
        console.log("database connection failed !")
    }


}

module.exports = connectToDB;