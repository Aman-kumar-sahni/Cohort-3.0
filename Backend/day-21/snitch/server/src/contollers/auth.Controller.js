import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccessToken, createRefreshToken,  readRefreshToken } from "../utils/auth.utils.js"



export const registerController = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // Check existing user
    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
      return res.status(409).json({
        message: "User already exists with this email address",
        errors: [
          {
            path: "email",
            msg: "User already exists with this email address",
          },
        ],
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const user = await userModel.create({
      email,
      name,
      passwordHash,
    });

    // Create access token
    const accessToken = createAccessToken({
      userId: user._id,
      role: user.role,
    });

    // Create refresh token
    const refreshToken = createRefreshToken({
      userId: user._id,
      role: user.role,
    });

    // Store refresh token in HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    // Store refresh token in database
    await userModel.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    // Send response
    return res.status(201).json({
      message: "User registered successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
          role: user.role,
        },
      },
      accessToken,
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};




export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await userModel.findOne({ email });

    // User not found
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        errors: [
          {
            path: "email",
            msg: "Invalid email or password",
          },
        ],
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.passwordHash
    );

    // Password doesn't match
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create access token
    const accessToken = createAccessToken({
      userId: user._id,
      role: user.role,
    });

    // Create refresh token
    const refreshToken = createRefreshToken({
      userId: user._id,
      role: user.role,
    });

    // Save refresh token in database
    await userModel.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    // Save refresh token in HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      
    });

    // Successful login
    return res.status(200).json({
      message: "User logged in successfully",
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
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const refreshController = async (req, res) => {

    // Cookie se refreshToken nikalo
    const refreshToken = req.cookies.refreshToken;

    // Refresh token nahi hai
    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh token required"
        });
    }

    try {

        // Refresh token verify/decode karo
        const decoded = readRefreshToken({refreshToken});

        // Decoded userId ke basis par user nikalo
        const user = await userModel.findById(decoded.userId);
    
        // User nahi mila
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed, user not found"
            });
        }

        // Cookie ka refreshToken aur DB ka refreshToken compare karo
        if (refreshToken !== user.refreshToken) {

            // Token mismatch hone par DB wala token invalidate karo
            await userModel.findByIdAndUpdate(user._id, {
                refreshToken: null
            });

            return res.status(401).json({
                message: "Authentication failed, token mismatch"
            });
        }

        // New refresh token create karo
        const newRefreshToken = createRefreshToken({
            userId: user._id,
            role: user.role
        });

        // New access token create karo
        const accessToken = createAccessToken({
            userId: user._id,
            role: user.role
        });

        // DB mein new refresh token save karo
        await userModel.findByIdAndUpdate(user._id, {
            refreshToken: newRefreshToken
        });

        // Cookie mein new refresh token set karo
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
        });

        // New access token + user data response
        return res.status(200).json({
            message: "Token rotated successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                accessToken
            }
        });

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired refresh token"
        });
    }
};


export const getMeController = async (req, res) => {

    try {

        const { userId } = req.user;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User data fetched successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            }
        });

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};