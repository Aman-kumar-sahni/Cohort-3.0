import { Router } from "express";
import { getMe, login, refresh, register } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router()

router.post("/register",registerValidator,register)
router.post("/login",loginValidator,login)
router.post("/refresh",refresh)
router.get("/getme",authenticate,getMe)
export default router;