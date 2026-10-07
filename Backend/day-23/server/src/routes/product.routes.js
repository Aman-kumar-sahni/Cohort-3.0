import express from "express";
import { authenticate, authenticateSeller } from "../middleware/auth.middleware.js";
import { createProductValidator, listProductValidator, unlistProductValidator } from "../validators/product.validator.js";
import { createProduct, listAllProducts, listAllProductToSeller, listProduct, unlistProduct } from "../controllers/product.controller.js";
import upload, { parseProductBody } from "../middleware/upload.middleware.js";

const router = express.Router();

router.post(
  "/create",
  authenticate,
  authenticateSeller,
  upload.array("images",5),  parseProductBody, createProductValidator,
  createProduct
);

router.get("/",authenticate,listAllProducts)
router.patch("/list/:id",authenticate,authenticateSeller,listProductValidator ,listProduct);
router.get("/seller",authenticate,authenticateSeller,listAllProductToSeller);
router.patch("/unlist/:id",authenticate,authenticateSeller,unlistProductValidator,unlistProduct)

export default router;

