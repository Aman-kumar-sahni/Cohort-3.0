const express= require("express");
const { registerController, loginController ,getUserController} = require("../controllers/userController");
const authenticate = require("../middleware/userMiddleware");

const router = express.Router();

router.post("/register",registerController)
router.post("/me",authenticate,getUserController)
router.post("/login",loginController)

module.exports=router