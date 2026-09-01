const express = require("express");
const fileRoutes = require("../routes/fileRoutes")
const cors = require("cors");

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json())
app.use("/file",fileRoutes)

app.get("/",(req,res)=>{
    res.send("backend running success")
})
module.exports  =app;

