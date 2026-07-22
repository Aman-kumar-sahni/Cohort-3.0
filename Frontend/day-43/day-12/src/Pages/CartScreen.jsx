import React from "react";
import CartCard from "./CartCard";
import { useContext } from "react";
import { MyStore } from "../Context/MyStore";
const CartScreen = () => {
  const {cartItems}=useContext(MyStore)

  if (cartItems.length === 0) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-500">
          🛒 Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-5 gap-6">

        {cartItems.map((item) => (
          
          <CartCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default CartScreen;