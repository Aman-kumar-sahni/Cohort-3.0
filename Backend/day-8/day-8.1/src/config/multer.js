const multer = require("multer");

const storageforlocal = multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,"src/uploads/")

},
filename:(req,file,cb)=>{
    cb(null,Date.now()+file.originalname)

}
})
const storageforserver = multer.memoryStorage()
const uploads = multer({storage:storageforlocal})

module.exports =uploads;