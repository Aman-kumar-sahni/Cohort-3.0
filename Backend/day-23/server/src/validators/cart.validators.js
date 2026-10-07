import { body, validationResult } from "express-validator";
import mongoose from "mongoose";

export const addToCartValidator = [
  body("productId")
    .notEmpty()
    .withMessage("Product is required")
    .bail()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid product ID"),

  body("size")
    .trim()
    .notEmpty()
    .withMessage("Size is required"),

  body("color")
    .trim()
    .notEmpty()
    .withMessage("Color is required"),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Cart validation failed",
        errors: errors.array(),
      });
    }

    next();
  },
];