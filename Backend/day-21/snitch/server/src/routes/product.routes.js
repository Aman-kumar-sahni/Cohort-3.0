import {Router} from "express";
import createProductController from "../contollers/productController.js";

const router  = Router()



import multer from "multer";
import { createProductValidator } from "../validators/product.validators.js";
import { authenticate, authenticateSeller } from "../middlewares/auth.middleware.js";

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits:{
        fileSize: 1 * 1024 * 1024,
        files: 5
    },

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////



router.post("/create", authenticate ,authenticateSeller,upload.array("images",5),(req, res, next) => {
        req.body?.price && (req.body.price = JSON.parse(req.body.price))
        req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes))
        next()
    }, createProductValidator, createProductController)

export default router;

