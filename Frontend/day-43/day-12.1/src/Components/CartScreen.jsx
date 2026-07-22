import React, { useContext } from "react";
import { MyStore } from "../../../day-12.1/src/Context/MyContext";
import CartCard from "./CartCard";

const CartScreen = () => {
  const { cartItem } = useContext(MyStore);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cartItem.map((elem) => (
        <CartCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default CartScreen;