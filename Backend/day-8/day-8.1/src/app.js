
const fileRoute = require("./routes/file.routes")
const express = require("express")


const app = express();
app.use(express.json());
app.use("/file",fileRoute);
module.exports = app;
