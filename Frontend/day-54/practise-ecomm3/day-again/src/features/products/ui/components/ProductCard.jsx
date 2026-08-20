import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full">
      <div
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-black/10
          bg-white
          p-4
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
          sm:p-5
        "
      >
        {/* Product Image */}
        <div
          className="
            relative
            flex
            h-52
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            bg-neutral-100
            sm:h-56
          "
        >
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="
              h-full
              w-full
              object-contain
              p-6
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col pt-5">

          {/* Category */}
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {product.category}
          </p>

          {/* Title */}
          <h2 className="mt-2 line-clamp-2 text-lg font-bold leading-6 text-black sm:text-xl">
            {product.title}
          </h2>

          {/* Brand */}
          <p className="mt-2 text-sm text-neutral-500">
            Brand:{" "}
            <span className="font-semibold text-black">
              {product.brand || "Generic"}
            </span>
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-black px-2 py-1">
              <Star className="h-3.5 w-3.5 fill-white text-white" />

              <span className="text-xs font-semibold text-white">
                {product.rating}
              </span>
            </div>

            <span className="text-xs text-neutral-400">
              Rating
            </span>
          </div>

          {/* Price + Cart */}
          <div className="mt-auto flex items-center justify-between gap-3 pt-5">

            <div>
              <p className="text-2xl font-black tracking-tight text-black">
                ${product.price}
              </p>

              {product.discountPercentage && (
                <p className="text-xs text-neutral-400">
                  {product.discountPercentage}% OFF
                </p>
              )}
            </div>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-black
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-neutral-800
                active:scale-95
                sm:px-5
              "
            >
              <ShoppingCart className="h-4 w-4" />

              <span className="hidden sm:inline">
                Add to Cart
              </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;