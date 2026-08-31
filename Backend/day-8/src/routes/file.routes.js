const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

router.post("/",upload.single("image"),(req,res)=>{

    try {
        let body = req.body;
        console.log(body)
   const file=     req.file
   console.log(file)
 res.status(201).json("file recived successfully")

    } catch (error) {
        
 res.status(500).json("internal server error")

    }

})

module.exports=router;
