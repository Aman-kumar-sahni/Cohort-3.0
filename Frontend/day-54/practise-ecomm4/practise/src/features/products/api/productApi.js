import { api } from "../../../config/api";

export const getProducts = async ({ search, category }) => {
  let url = "/products";

  if (category) {
    url = `/products/category/${category}`;
  } else if (search) {
    url = `/products/search?q=${encodeURIComponent(search)}`;
  }

  const res = await api.get(url);

  return res.data.products;
};

export const getAllCategories = async () => {
  const res = await api.get("/products/categories");

  return res.data;
};