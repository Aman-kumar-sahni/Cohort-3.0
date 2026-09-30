
import { body,  validationResult } from "express-validator";


// CREATE PRODUCT
export const createProductValidator = [

    body("title")
        .exists().withMessage("Title is required").bail()
        .isString().withMessage("Title must be a string").bail()
        .trim()
        .isLength({ min: 2, max: 20 })
        .withMessage("Title must be between 2 and 20 characters"),


    body("description")
        .exists().withMessage("Description is required").bail()
        .isString().withMessage("Description must be a string").bail()
        .trim()
        .isLength({ min: 3, max: 300 })
        .withMessage("Description must be between 3 and 300 characters"),


    // price.amount
    body("price.amount")
        .exists().withMessage("Price amount is required").bail()
        .isFloat({ min: 0 })
        .withMessage("Price amount must be a number greater than or equal to 0"),


    // price.currency
    body("price.currency")
        .optional()
        .isString().withMessage("Currency must be a string").bail()
        .isIn(["INR", "USD"])
        .withMessage("Currency must be INR or USD"),


    // images
    body("images")
        .optional()
        .isArray().withMessage("Images must be an array").bail()
        .custom(images => {

            if (images.length > 5) {
                throw new Error("A product can have maximum 5 images");
            }

            return true;
        }),


    body("images.*")
        .isString().withMessage("Each image must be a string")
        .bail()
        .notEmpty().withMessage("Image URL cannot be empty"),


    // sizes
    body("sizes")
        .exists().withMessage("Sizes are required").bail()
        .isArray().withMessage("Sizes must be an array"),


    // sizes[].size
    body("sizes.*.size")
        .exists().withMessage("Size is required").bail()
        .isString().withMessage("Size must be a string").bail()
        .isIn(["XS", "S", "M", "L", "XL", "XXL"])
        .withMessage("Invalid size"),


    // sizes[].stock
    body("sizes.*.stock")
        .exists().withMessage("Stock is required").bail()
        .isInt({ min: 0 })
        .withMessage("Stock must be an integer greater than or equal to 0"),


    // final validation middleware
    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Invalid product data",
                errors: errors.array()
            });
        }

        next();
    }
];




