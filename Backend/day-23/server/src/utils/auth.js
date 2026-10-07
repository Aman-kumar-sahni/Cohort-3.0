import config from "../config/config.js"
import jwt from "jsonwebtoken"
export const genrateTokens = ({ userId, role }) => {
    const accessToken = jwt.sign({
        userId, role,
    },
        config.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "45m",
        }
    );
    const refreshToken = jwt.sign(
        { userId },
        config.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return { accessToken, refreshToken }
}



export const verifyRefreshToken = ({refreshToken}) => {
  try {
    return jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
  } catch (error) {
    return null;
  }
};
export const verifyAccessToken = ({accessToken}) => {
  try {
    return jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);

  } catch (error) {
    console.log("JWT VERIFY ERROR:", error.message);

    return null;
  }
};