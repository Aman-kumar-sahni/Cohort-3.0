import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div onClick={()=>{
        navigate(`/details/${product.id}`)
      }} className="flex h-64 items-center justify-center bg-gray-100 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-3 p-5">
        {/* Category */}
        <span className="w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {product.category}
        </span>

        {/* Title */}
        <h2
          className="line-clamp-2 text-lg font-bold text-gray-800"
          title={product.title}
        >
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-600">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="flex items-center gap-1 rounded-lg bg-yellow-100 px-2 py-1">
            <span>⭐</span>
            <span className="text-sm font-semibold text-yellow-700">
              {product.rating.rate}
            </span>
          </div>
        </div>

        {/* Reviews */}
        <p className="text-sm text-gray-500">
          {product.rating.count} Reviews
        </p>

        {/* Add to Cart */}
        <button
          className="mt-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-700 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;