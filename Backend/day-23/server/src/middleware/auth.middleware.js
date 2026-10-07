import { verifyAccessToken } from "../utils/auth.js";

export const authenticate = async (req, res, next) => {
  try {
    // 1. Authorization header se token lo
    const authHeader = req.headers.authorization;

    // 2. Token nahi hai
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access token is required",
        error:[
            {
                path:"accessToken",
              msg:"Access token is required"
            }
        ]
      });
    }

    // 3. Bearer format check karo
    const [type, accessToken] = authHeader.split(" ");

    if (type !== "Bearer" || !accessToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format",
      });
    }

    // 4. Access token verify karo
    const decoded = verifyAccessToken({accessToken});
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired access token",
      });
    }

    // 5. User ki information request ke andar attach karo
    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    // 6. Next middleware/controller par jao
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired access token",
    });
  }
};