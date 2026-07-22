import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="flex h-auto w-60 flex-col rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="flex h-52 items-center justify-center rounded-t-2xl bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">

        <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {product.category}
        </span>

        <h2
          className="mt-3 h-12 overflow-hidden text-base font-bold text-gray-800"
          title={product.title}
        >
          {product.title}
        </h2>

        <p className="mt-2 text-2xl font-bold text-green-600">
          ${product.price}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-md bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            {product.rating.count} Reviews
          </span>
        </div>

        {/* Push button to bottom */}
        <div className="mt-auto pt-5">
          <button
            type="button"
            className="w-full rounded-xl bg-red-600 py-3 text-white font-semibold shadow-md transition duration-300 hover:bg-red-600 active:scale-95"
          >
            Remove
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartCard;