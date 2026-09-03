const express = require("express");
const notesRoutes = require("./routes/notesroutes");

const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("backend running successfully")
})

app.use("/notes",notesRoutes)
module.exports= app;