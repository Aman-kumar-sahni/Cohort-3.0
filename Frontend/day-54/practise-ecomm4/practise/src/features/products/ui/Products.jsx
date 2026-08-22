import React from "react";
import { useProducts } from "../hooks/useHooks";
import ProductCard from "./components/ProductCard";
import FilterProducts from "./components/FilterProducts";

const Products = () => {
  const {
    data,
    isPending,
    isError,
    error,
    search,
    setSearch,
    category,
    setCategory,
  } = useProducts();

  if (isPending) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-black" />

          <h1 className="mt-4 text-lg font-semibold text-black">
            Loading products...
          </h1>

          <p className="mt-1 text-sm text-neutral-500">
            Please wait a moment
          </p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-red-100 bg-white p-6 text-center shadow-lg sm:p-8">
          <h1 className="text-xl font-bold text-black">
            Something went wrong
          </h1>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {error?.message || "Unable to load products."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl">

        {/* Filter */}
        <div className="mb-8">
          <FilterProducts
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Collection
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Explore Products
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              Discover quality products selected for you.
            </p>
          </div>

          <div className="w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm">
            {data?.length || 0} Products
          </div>
        </div>

        {/* Products */}
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-black/10 bg-white">
            <div className="text-center">
              <h2 className="text-xl font-bold text-black">
                No products found
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Try another product or category.
              </p>
            </div>
          </div>
        )}

      </section>
    </main>
  );
};

export default Products;