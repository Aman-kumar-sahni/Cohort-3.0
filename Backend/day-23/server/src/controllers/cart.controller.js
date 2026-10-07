import productModel from "../models/product.model.js";
import cartModel from "../models/cart.model.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, size, color, quantity } = req.body;
    const userId = req.user.userId;

    // 1. Check product
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // 2. Find matching variant
    const variant = product.variants.find(
      (variant) =>
        variant.size === size &&
        variant.color === color
    );

    if (!variant) {
      return res.status(400).json({
        success: false,
        message: "Selected size and color variant not found",
      });
    }

    // 3. Check stock
    if (quantity > variant.stock) {
      return res.status(400).json({
        success: false,
        message: "Quantity is more than available stock",
      });
    }

    // 4. Find user's cart
    let cart = await cartModel.findOne({ user: userId });

    // 5. Cart doesn't exist → create cart
    if (!cart) {
      cart = await cartModel.create({
        user: userId,
        items: [
          {
            productId,
            size,
            color,
            quantity,
          },
        ],
      });

      return res.status(201).json({
        success: true,
        message: "Product added to cart successfully",
        data: { cart },
      });
    }

    // 6. Check if same product + size + color already exists
    const existingItem = cart.items.find(
      (item) =>
        item.productId.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    // 7. If item already exists
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;

      if (newQuantity > variant.stock) {
        return res.status(400).json({
          success: false,
          message: "Quantity is more than available stock",
        });
      }

      existingItem.quantity = newQuantity;
    } 
    
    // 8. If item doesn't exist
    else {
      cart.items.push({
        productId,
        size,
        color,
        quantity,
      });
    }

    // 9. Save cart
    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Product added to cart successfully",
      data: { cart },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add product to cart",
      error: error.message,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    let cart = await cartModel
      .findOne({ user: userId })
      .populate("items.productId");

    if (!cart) {
      cart = await cartModel.create({
        user: userId,
        items: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: { cart },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
};