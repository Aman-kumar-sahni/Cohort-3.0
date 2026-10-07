import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 150,
    },

    

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },



    gender: {
      type: String,
      enum: ["men", "women", "unisex"],
      required: true,
    },

    images: {
      type: [String],
      required: true,
      validate: {
        validator: (images) =>
          images.length >= 1 && images.length <= 5,
        message: "Product must have between 1 and 5 images",
      },
    },

    price: {
      amount: {
        type: Number,
        required: true,
        min: 1,
      },

      currency: {
        type: String,
        enum: ["INR", "USD"],
        default: "INR",
      },
    },

    variants: {
      type: [
        {
          size: {
            type: String,
            required: true,
            trim: true,
          },

          color: {
            type: String,
            required: true,
            trim: true,
          },

          sku: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
          },

          stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
          },
        },
      ],

      validate: {
        validator: (variants) => variants.length > 0,
        message: "At least one product variant is required",
      },
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },



    status: {
      type: String,
      enum: ["published", "unpublished"],
      default: "unpublished",
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;