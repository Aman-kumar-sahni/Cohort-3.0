import validator from "validator";

export const registerValidator = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email and password are required",
    });
  }

  if (name.trim().length < 2 || name.trim().length > 50) {
    return res.status(400).json({
      success: false,
      message: "Name must be between 2 and 50 characters",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 8 characters",
    });
  }

  next();
};