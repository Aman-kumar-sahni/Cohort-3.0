import { useQuery } from "@tanstack/react-query";
import { productApi, productCategory } from "../api/ProductApi";

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