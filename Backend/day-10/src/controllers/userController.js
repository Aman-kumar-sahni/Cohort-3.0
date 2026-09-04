const userModel =require("../model/userModel")
const jwt =require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcryptjs");
const registerController =async(req,res)=>{
try {
      const {email,name,password}=req.body
const hashedPassword = await bcrypt.hash(password, 10);
const user = await userModel.create({
    email,name,password:hashedPassword
})
const token =jwt.sign({
    id:user.id
},process.env.JWT_SECRET
)

res.status(200).json({
    message:"registerd successfully",
    data:{
        name:user.name,
        email:user.email,
    },token
})

} catch (error) {
    console.log("registered failed ")
    res.status(500).json({
        message:"registration failed",
            error: error.message

    })
}
  

    
}

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    // User nahi mila
    if (!user) {
      return res.status(400).json({
        message: "Login failed",
        error: "Invalid email or password",
      });
    }

    // Password check
    const isUserValid = await bcrypt.compare(password, user.password);

    if (!isUserValid) {
      return res.status(400).json({
        message: "Login failed",
        error: "Invalid email or password",
      });
    }

    // JWT token
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      message: "User logged in successfully",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log("Login failed!");
    console.log(error.message);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUserController=async (re,res)=>{
    res.status(200).json({
        message:"user fetched succesfully"})
}


module.exports={registerController,loginController,getUserController}