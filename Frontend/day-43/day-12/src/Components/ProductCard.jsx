import React, { useContext } from "react";
import { useState } from "react";
import { MyStore } from "../Context/MyStore";
const ProductCard = ({ product}) => {
  const {setCartItems,setToggle}=useContext(MyStore)
  const [showToast, setShowToast] = useState(false);

function addToCart() {
  // add to cart logic
            setToggle(false)

          setCartItems((prev)=>[...prev,product])

alert("product added to cart")
  

  
}
  
  return (
    
     
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-65 ">
      {/* Product Image */}
     
      <div className="h-64 p-5 flex items-center justify-center bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="text-xs font-semibold uppercase text-indigo-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            ⭐
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>
        </div>

        {/* Button */}
        
        <button  onClick={addToCart} className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
          Add to Cart
        </button>
      </div>
      
    </div>
    
  );
};

export default ProductCard;