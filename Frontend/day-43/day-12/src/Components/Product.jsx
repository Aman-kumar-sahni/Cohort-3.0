import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { MyStore } from '../Context/MyStore'
const Product = ({products}) => {
  const {cartItems}=useContext(MyStore)
  
  return (
    <div className='flex flex-col grid grid-cols-5 '>
    {products.map((elem)=>{
      let intcard =cartItems.find((val)=>val.id===elem.id)
      console.log(intcard)
        return <ProductCard key = {elem.id}product={elem} />
    })}
    </div>
  )
}

export default Product
