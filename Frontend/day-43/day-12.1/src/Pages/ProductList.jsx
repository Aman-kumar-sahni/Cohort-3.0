import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductList = ({ products }) => {
  const { setToggle, setCartItem, cartItem } = useContext(MyStore)

  const AddToCart = (product) => {
    alert("items is added to cart")
    setCartItem([...cartItem, product])
  }




  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (

        <div
          key={product.id}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Product Image */}
          <div className="flex h-64 items-center justify-center bg-gray-100 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-3 p-5">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {product.category}
            </span>

            <h2
              className="line-clamp-2 text-lg font-bold text-gray-800"
              title={product.title}
            >
              {product.title}
            </h2>

            <p className="line-clamp-3 text-sm text-gray-600">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>

              <span className="rounded-lg bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
                ⭐ {product.rating.rate}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              {product.rating.count} Reviews
            </p>

            {cartItem.find((item) => item.id === product.id)
              ? (<div className="w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white transition hover:bg-indigo-700 active:scale-95 flex justify-center items-center gap-8 font-bold text-xl">
                <span className="bg-gray-400 rounded-full cursor-pointer  w-10 flex justify-center items-center">-</span>
                <span>1</span>
                <span className="bg-gray-400 rounded-full cursor-pointer  w-10 flex justify-center items-center">+</span>
              </div>) : (<button onClick={() => {
                AddToCart(product)
              }} className="w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
                Add to Cart
              </button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;