import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllProducts,
} from "../api/productApi";

export const useAllProducts = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const {
    data,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["products", debouncedSearch],
    queryFn: () => getAllProducts(debouncedSearch),
  });

  return {
    search,
    setSearch,
    data,
    isPending,
    error,
    isError,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};