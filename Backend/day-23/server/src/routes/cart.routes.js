import express from "express";

import { authenticate } from "../middleware/auth.middleware.js";
import { addToCartValidator } from "../validators/cart.validators.js";
import { addToCart, getCart } from "../controllers/cart.controller.js";

const router = express.Router();

router.post(
  "/create",
  authenticate,
  addToCartValidator,
  addToCart
);

router.get(
  "/",
  authenticate,
  getCart
);

export default router;