import React from "react";
import { useAllProducts } from "../hooks/useAllProducts";
import ProductCard from "./components/ProductCard";
import FilterProducts from "./components/FilterProducts";

const Products = () => {
  const { data, isPending, isError, error } = useAllProducts();

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f5f5f5]">
        <h1 className="text-xl font-semibold text-black sm:text-2xl">
          Loading...
        </h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f5f5f5] px-4">
        <h1 className="text-center text-lg font-semibold text-red-500 sm:text-xl">
          {error.message}
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#f5f5f5] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <FilterProducts/>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Collection
          </p>

          <h1 className="mt-2 text-2xl font-black tracking-tight text-black sm:text-3xl lg:text-4xl">
            All Products
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((elem) => (
            <ProductCard
              key={elem.id}
              product={elem}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default Products;