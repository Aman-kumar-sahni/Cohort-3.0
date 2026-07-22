import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductDetailsCard from '../components/ProductDetailsCard'
import axios from 'axios'
const ProductDetails = () => {
    const [details ,setDetails]=useState({})
      let {id} =   useParams()
   const getDetails =async()=>{
    try {
        const res = await axios.get(
  `https://fakestoreapi.com/products/${id}`
);setDetails(res.data)

    }catch (errors){
        console.log(errors.message)
    }

    }
    useEffect(()=>{getDetails()},[])
    console.log(details)
  return (

    <div >
            {details.id && (
      <ProductDetailsCard product={details} />
    )}

    </div>
  )
}

export default ProductDetails
