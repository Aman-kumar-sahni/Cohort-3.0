const express = require("express");
const upload = require("../config/multer");


const router = express.Router()


router.post("/",upload.array("images2"),(req,res)=>{
    const file = req.files
    const body = req.body
    console.log(file)
    console.log(body)
 res.status(200).json("file recieved successfully")
})

module.exports= router;
