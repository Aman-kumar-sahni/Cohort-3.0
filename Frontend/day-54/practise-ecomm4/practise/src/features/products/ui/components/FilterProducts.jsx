
import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { useAllCategories} from "../../hooks/useHooks";

const FilterProducts = ({search,setSearch}) => {
    const {data,isPending,error}=useAllCategories()
    if(isPending)return<h1>loading...</h1>
    if(error)return <h1>{error.message}</h1>
  return (
    <div className="w-full rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5">

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">

        {/* Search */}
        <div className="relative min-w-0 flex-1">

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
          value={search}
          onChange={(e)=>{
setSearch(e.target.value)
          }}
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
        <div className="relative w-full sm:w-auto">

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
              pr-10
              text-sm
              font-semibold
              text-black
              outline-none
              transition-all
              duration-200
              hover:border-neutral-300
              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
              sm:w-auto
            "
          >
            <option value="" disabled>
              Category
            </option>
{data?.map((elem,idx)=>{return             <option key={idx}value={elem.name}>{elem.name}</option>
})}
            
          </select>

          <ChevronDown
            className="
              pointer-events-none
              absolute
              right-3
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

