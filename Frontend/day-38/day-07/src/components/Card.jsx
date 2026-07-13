import React from "react";

const Card = ({elem}) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl shadow-xl p-5">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={elem.image}
          alt="Product"
          className="w-52 h-52 object-cover rounded-xl border"
        />
      </div>

      {/* Product Details */}
      <div className="mt-5 space-y-4">

        <div className="border rounded-lg p-3">
          <p className="text-sm text-gray-500">Product Name</p>
          <h2 className="text-lg font-semibold">
            {elem.pName}
          </h2>
        </div>

        <div className="border rounded-lg p-3">
          <p className="text-sm text-gray-500">Price</p>
          <h2 className="text-lg font-semibold">
            {elem.price}
          </h2>
        </div>

        <div className="border rounded-lg p-3">
          <p className="text-sm text-gray-500">Category</p>
          <h2 className="text-lg font-semibold">
         {elem.category}
          </h2>
        </div>

      </div>
    </div>
  );
};

export default Card;