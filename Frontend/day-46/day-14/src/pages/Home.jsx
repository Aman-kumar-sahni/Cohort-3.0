import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { MyStore } from '../context/MyContext'

const Home = () => {
 const {product} = useContext(MyStore)
  return (
    <div className='grid grid-cols-5 gap-2'>
      {
        product.map((elem,index)=>{
return <ProductCard  key ={index}product ={elem}/>
        })

      }
    </div>
  )
}

export default Home
