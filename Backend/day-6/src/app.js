const express = require("express");
const notesRoutes = require("./routes/notesroutes");
const cors =require("cors");

const app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
app.get("/",(req,res)=>{
    res.send("backend running successfully")
})



app.use("/notes",notesRoutes)
module.exports= app;