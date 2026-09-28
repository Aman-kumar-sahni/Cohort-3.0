import {Router} from "express";
import { registerController } from "../contollers/auth.Controller.js";


const router = Router();



router.post("/register",registerController)



export default router;
