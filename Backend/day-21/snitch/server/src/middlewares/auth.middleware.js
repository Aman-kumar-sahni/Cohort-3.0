import { readAccessToken } from "../utils/auth.utils.js";

export const authenticate = (req, res, next) => {

    // Authorization header se access token nikalo
    const accessToken = req.headers.authorization?.split(" ")[1];

    // Access token nahi mila
    if (!accessToken) {
        return res.status(401).json({
            message: "Access token required"
        });
    }

    try {

        // Access token verify/decode karo
        const decoded = readAccessToken({accessToken});

        // Decoded user information request mein attach karo
        req.user = decoded;

        // Next middleware/controller
        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired access token"
        });
    }
};