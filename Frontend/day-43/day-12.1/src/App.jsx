import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Pages/ProductList";
import Navbar from "./Components/Navbar";
import { MyStore } from "./Context/MyContext";
import CartScreen from "./Components/CartScreen";
const App = () => {
 const {toggle}= useContext(MyStore)
  const [data, setData] = useState([]);
  async function getProductsData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <Navbar/>
       {toggle?       <ProductList  products={data}  />:<CartScreen/>
} 

    </div>
  );
};

export default App;