import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import axios from 'axios'
import Product from './Components/Product'
import CartScreen from './Pages/CartScreen'
import { MyStore } from './Context/MyStore'
const App = () => {
  const {toggle}=useContext(MyStore)
  const [products, setProducts] = useState([])
  async function getData() {
   try { const res = await axios.get(
      'https://fakestoreapi.com/products'
    )
    setProducts(res.data)
  
  }
  catch(error){
    console.log("error in api get => " ,error.message)
  }
}
  useEffect(() => {
    getData()
  }, [])

  return (

    <div className='flex flex-col gap-4 m-5 '>
      <Navbar />

      {toggle?      <Product products={products}  />:<CartScreen />
}
    </div>

  )
}

export default App
