const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log("database connection failed:", err);
    });
};

module.exports = connectToDb;