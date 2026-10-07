import { body,param, validationResult } from "express-validator";
import mongoose from "mongoose";

export const createProductValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required"),



  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .bail()
    .isIn(["men", "women", "unisex"])
    .withMessage("Invalid gender"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .bail()
    .isObject()
    .withMessage("Price must be an object"),

  body("price.amount")
    .notEmpty()
    .withMessage("Price amount is required")
    .bail()
    .isNumeric()
    .withMessage("Price amount must be a number")
    .bail()
    .custom((value) => Number(value) >= 1)
    .withMessage("Price must be at least 1"),

  body("price.currency")
    .optional()
    .isIn(["INR", "USD"])
    .withMessage("Currency must be INR or USD"),

  body("variants")
    .isArray({ min: 1 })
    .withMessage("At least one variant is required"),

  body("variants.*.size")
    .trim()
    .notEmpty()
    .withMessage("Variant size is required"),

  body("variants.*.color")
    .trim()
    .notEmpty()
    .withMessage("Variant color is required"),



  body("variants.*.stock")
    .notEmpty()
    .withMessage("Variant stock is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Product validation failed",
        errors: errors.array(),
      });
    }

    next();
  },
];
export const unlistProductValidator = [

    param("id")
        .exists().withMessage("product id is required in req params").bail()
        .isMongoId().withMessage("product is must be a valid mongo object id"),

    (req, res, next) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "invalid Data",
                errors: errors.array()
            })
        }

        next()

    }


]


export const listProductValidator = [

    param("id")
        .exists().withMessage("product id is required in req params").bail()
        .isMongoId().withMessage("product is must be a valid mongo object id"),

    (req, res, next) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "invalid Data",
                errors: errors.array()
            })
        }

        next()

    }

  ]