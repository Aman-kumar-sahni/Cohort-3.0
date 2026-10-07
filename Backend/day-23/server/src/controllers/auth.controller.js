import userModel from "../models/user.model.js"

import bcrypt from "bcryptjs";
import { genrateTokens, verifyRefreshToken } from "../utils/auth.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
          message: "User already exists with this email address",
            errors: [
                {
                    path: "email",
                    msg: "User already exists with this email address"
                }
            ]
      });
    }

    // 2. Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // 3. Create user
    const user = await userModel.create({
      name,
      email,
      passwordHash,
    });

    // 4. Generate access token
        // 5. Generate refresh token

    const {accessToken,refreshToken}= genrateTokens({userId:user._id,role:user.role})

    

    // 6. Save refresh token in database
    await userModel.findByIdAndUpdate(user._id,{refreshToken})

    // 7. Store refresh token in HttpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    // 8. Send response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        accessToken,
      },
    });
  } catch (error) {
  return res.status(500).json({
        success: false,
    message: `Failed to register: ${error.message}`,
    })
  }
};


export const login = async (req, res ) => {
  try {
    // 1. Get credentials from request body
    const { email, password } = req.body;

    // 2. Find user by email
    // passwordHash is select:false, so explicitly include it
    const user = await userModel
      .findOne({ email })
     .select("+passwordHash");
    // 3. Don't reveal whether the email exists
    if (!user) {
      return res.status(401).json({
        
        message: "Invalid email or password",
        error:[
            {path:"email",
             msg:"invalid email or password"

            },
        ]
      });
    }

    // 4. Compare entered password with stored password hash
    const isPasswordValid = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    // 6. Generate access token

    const {accessToken,refreshToken}=genrateTokens({userId:user._id,role:user.role})
    

    // 8. Save refresh token and update last login
    await userModel.findByIdAndUpdate(user._id,{refreshToken})



    // 9. Store refresh token in HttpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });


    // 10. Send response
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          phone: user.phone,
          isVerified: user.isVerified,
        },
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:`Failed to login: ${error.message}`
    })
  }
};



export const refresh = async (req, res ) => {
  try {
    // 1. Get refresh token from cookie

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token is required",
        error:[
            {
                path:"refreshtoken",
                msg:"Refresh token is required"
            }
        ]
      });
    }

    // 2. Verify refresh token

    const decoded = verifyRefreshToken({refreshToken})
    if(!decoded){
        return res.status(401).json({
            message:"invalid or expired token"
        })
    }

    // 3. Find user using userId from token
    const user = await userModel.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found ",
      });
    }

    

    // 5. Check refresh token stored in DB
    if (!user.refreshToken || user.refreshToken !== refreshToken) {
      // Revoke stored refresh token
      await userModel.findByIdAndUpdate(user._id,{refreshToken:null})

      return res.status(401).json({
        success: false,
        message: "Refresh token mismatch",
      });
    }

    // 6. Generate new access token
    const {accessToken,refreshToken:newRefreshToken}= genrateTokens({userId:user._id,role:user.role})

    // 8. Rotate refresh token in database
await userModel.findByIdAndUpdate(user._id,{refreshToken:newRefreshToken})    

    // 9. Set new refresh token in cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      
    });

    // 10. Send response
    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
        message:`failed to rotate token `
    })
  }
};

export const getMe = async (req, res) => {
  try {
    // 1. User ID authenticate middleware se milegi
    const { userId } = req.user;

    // 2. Database se user find karo
    const user = await userModel.findById(userId);

    // 3. User nahi mila
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication",
      });
    }

    // 4. User data return karo
    return res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          phone: user.phone,
          isVerified: user.isVerified,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user data",
    });
  }
};