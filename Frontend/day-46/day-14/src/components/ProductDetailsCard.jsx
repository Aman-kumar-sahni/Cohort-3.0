import React from "react";

const ProductDetailsCard = ({ product }) => {
  return (
    <div className="mx-auto  flex max-w-6xl flex-col gap-10 rounded-3xl bg-white p-8 shadow-xl md:flex-row">
      {/* Left Side - Image */}
      <div className="flex flex-1 items-center justify-center rounded-2xl bg-gray-100 p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-[450px] w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Right Side - Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-5">
          {/* Category */}
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold capitalize text-indigo-700">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-lg bg-yellow-100 px-3 py-2">
              ⭐
              <span className="font-semibold text-yellow-700">
                {product.rating.rate}
              </span>
            </div>

            <span className="text-gray-500">
              ({product.rating.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <h2 className="text-5xl font-bold text-green-600">
            ${product.price}
          </h2>

          {/* Description */}
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Description
            </h3>

            <p className="leading-7 text-gray-600">
              {product.description}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="flex-1 rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
            Add to Cart
          </button>

          <button className="flex-1 rounded-xl border-2 border-indigo-600 py-4 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-50 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;