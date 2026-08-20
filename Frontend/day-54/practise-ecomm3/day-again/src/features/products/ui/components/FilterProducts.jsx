import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { useProductByCategory } from "../../hooks/useAllProducts";

const FilterProducts = () => {
  

const {data,isPending,error}=useProductByCategory()
if (isPending)return <h1>Loading...</h1>

  return (
    <div className="mb-6 w-full rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">

        {/* Search */}
        <div className="relative w-full flex-1">
          <Search
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-neutral-400
            "
          />

          <input
            type="text"
            placeholder="Search products..."
            className="
              h-12
              w-full
              rounded-xl
              border
              border-neutral-200
              bg-neutral-50
              pl-12
              pr-4
              text-sm
              text-black
              outline-none
              transition-all
              duration-200
              placeholder:text-neutral-400
              hover:border-neutral-300
              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
            "
          />
        </div>

        {/* Category */}
        <div className="relative w-full md:w-60">
          <select
            defaultValue=""
            className="
              h-12
              w-full
              appearance-none
              rounded-xl
              border
              border-neutral-200
              bg-neutral-50
              px-4
              pr-11
              text-sm
              font-medium
              text-black
              outline-none
              transition-all
              duration-200
              hover:border-neutral-300
              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
            "
          >
            <option value="" disabled>
              Select Category
            </option>

          {data.map((elem,idx)=>{
            
            return <option value={elem} key ={idx}>{elem}</option>
          })}
          </select>

          <ChevronDown
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-neutral-500
            "
          />
        </div>

      </div>
    </div>
  );
};

export default FilterProducts;