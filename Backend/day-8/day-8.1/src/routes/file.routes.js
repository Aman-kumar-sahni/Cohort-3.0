const express = require("express");
const uploads = require("../config/multer");

const router = express.Router()


router.get("/",(req,res)=>{
    res.send("backend running properly")
});

router.post("/",uploads.single("image"),(req,res)=>{
    try {

         const body = req.body
        const file=req.file;
                 console.log(body)
         console.log(file)

        res.status(200).json("images recieved successfully");
    } catch (error) {
        // console.log(error.message)
    }

})

module.exports =router;