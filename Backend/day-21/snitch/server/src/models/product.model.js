
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 20,
            trim: true
        },

        description: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 300,
            trim: true
        },

        price: {
            amount: {
                type: Number,
                required: true,
                min: 0
            },

            currency: {
                type: String,
                enum: ["INR", "USD"],
                default: "INR"
            }
        },

        sizes: [
            {
                size: {
                    type: String,
                    enum: ["XS", "S", "M", "L", "XL", "XXL"],
                    required: true
                },

                stock: {
                    type: Number,
                    min: 0,
                    default: 0
                }
            }
        ],

        images: {
            type: [
                {
                    type: String
                }
            ],
            validate: {
                validator: images => images.length <= 5,
                message: "A product can have maximum 5 images"
            }
        },

        seller: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const productModel = mongoose.model("products", productSchema);

export default productModel;

