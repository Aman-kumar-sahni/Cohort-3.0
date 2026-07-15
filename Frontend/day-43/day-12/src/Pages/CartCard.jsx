import React from "react";

const CartCard = ({ product }) => {
    
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Image */}
      <div className="h-52 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        <span className="text-xs uppercase text-indigo-600 font-semibold">
          {product.category}
        </span>

        <h2 className="font-semibold text-gray-800 line-clamp-2 h-12">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-green-600">
            ₹{(product.price)*87}
          </h3>

          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full text-sm">
            ⭐ {product.rating.rate}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex justify-center items-center gap-3">

          <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold cursor-pointer">
            −
          </button>

          <span className="font-bold text-lg">
            1
          </span>

          <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold cursor-pointer">
            +
          </button>

        </div>

        {/* Remove */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition cursor-pointer">
          Remove
        </button>

      </div>
    </div>
  );
};

export default CartCard;