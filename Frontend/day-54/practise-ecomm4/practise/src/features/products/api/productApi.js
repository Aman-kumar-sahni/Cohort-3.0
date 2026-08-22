import { api } from "../../../config/api";

export const getAllProducts = async (search) => {
  const value = search
    ? `/products/search?q=${encodeURIComponent(search)}`
    : "/products";

  const res = await api.get(value);

  return res.data.products;
};

export const getAllCategories = async () => {
  const res = await api.get("/products/categories");

  return res.data;
};