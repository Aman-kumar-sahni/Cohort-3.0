import { useQuery } from "@tanstack/react-query";
import { getProductByCategory, productApi, productCategory, searchApi } from "../api/ProductApi";
import { useState } from "react";

export const useAllProducts = () => {

  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
  });

  return {
    data,
    isPending,
    isError,
    error,
  };
};


export const useProductByCategory= ()=>{
  const {data,isPending,error,isError}=useQuery({
    queryKey:["category"],
    queryFn:productCategory,
  })
  return {data,isPending,isError,error}

}

export const searchProducts=(search)=>{
  const {data,isPending,error,isError}=useQuery({
    queryKey:["searchproducts",search],
    queryFn:()=>{
     return  searchApi(search)
    }
  })
  return {data,isPending,error,isError}
}

export const productByCategory=()=>{
  const [category ,setCategory]=useState("")
 let query=   useQuery({
    queryKey:["categories",categories],
    queryFn:()=>{return getProductByCategory(categories)}
  })
  return {category,setCategory,query}
}