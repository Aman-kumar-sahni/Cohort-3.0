import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <article className="group w-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-100 sm:h-72">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-xs font-semibold capitalize text-white">
          {product.category}
        </span>

        {product.discountPercentage && (
          <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-black shadow-sm">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">

        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          {product.brand}
        </p>

        <h2 className="mt-2 min-h-[3.5rem] line-clamp-2 text-lg font-bold leading-7 text-black sm:text-xl">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-neutral-100 px-2.5 py-1.5">
            <Star className="h-4 w-4 fill-black text-black" />

            <span className="text-sm font-bold text-black">
              {product.rating}
            </span>
          </div>

          <span className="text-sm text-neutral-400">
            {product.reviews?.length || 0} reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-neutral-400">
              Price
            </p>

            <p className="mt-1 text-2xl font-bold text-black">
              ${product.price}
            </p>
          </div>

          <span
            className={`text-xs font-semibold ${
              product.availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>

        {/* Cart */}
        <button
          type="button"
          className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>

      </div>
    </article>
  );
};

export default ProductCard;