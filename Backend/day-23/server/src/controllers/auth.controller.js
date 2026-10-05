import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

export const register = async (req, res) => {
  try {
    // 1. Get data from request body
    const { name, email, password } = req.body;

    // 2. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // 3. Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 5. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 6. Generate access token
    const accessToken = generateAccessToken(user._id);

    // 7. Generate refresh token
    const refreshToken = generateRefreshToken(user._id);

    // 8. Store refresh token in database
    user.refreshToken = refreshToken;
    await user.save();

    // 9. Store refresh token in HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 10. Success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

