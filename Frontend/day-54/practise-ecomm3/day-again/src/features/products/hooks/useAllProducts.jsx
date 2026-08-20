import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/ProductApi";

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