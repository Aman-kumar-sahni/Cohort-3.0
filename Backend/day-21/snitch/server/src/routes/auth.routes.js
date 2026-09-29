import {Router} from "express";
import { getMeController, loginController, refreshController, registerController } from "../contollers/auth.Controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";


const router = Router();



router.post("/register",registerValidator,registerController)
router.post("/login",loginValidator,loginController)
router.post("/refresh",refreshController)
router.get("/getme",authenticate,getMeController)

export default router;
