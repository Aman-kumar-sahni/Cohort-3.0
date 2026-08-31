const multer = require("multer");

const storageforlocal = multer.diskStorage({

    destination:(req,file,cb)=>{
cb(null,"src/uploads/")
    },filename:(req,file,cb)=>{
        //size aur format yhi check kr skte hai 


cb(null,Date.now()+file.originalname)
    }

})

const storageforserver = multer.memoryStorage()

const upload = multer({storage:storageforserver})

module.exports =upload;