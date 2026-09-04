const express = require("express")
const authRoute = require("./routes/userRoute")
const app = express();
app.use(express.json());
app.use("/auth",authRoute)

module.exports =app;
