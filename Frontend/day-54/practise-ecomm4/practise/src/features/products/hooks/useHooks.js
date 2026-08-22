import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getAllCategories,
} from "../api/productApi";

export const useProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
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
    isError,
    error,
  } = useQuery({
    queryKey: ["products", debouncedSearch, category],
    queryFn: () =>
      getProducts({
        search: debouncedSearch,
        category,
      }),
  });

  return {
    data,
    isPending,
    isError,
    error,

    search,
    setSearch,

    category,
    setCategory,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};