// import React from "react";
// import { useState } from "react";
// import { useRef } from "react";
// const Form = ({setUser}) => {

//  const formRef = useRef({});

// function submitHandler(e){
//     e.preventDefault();
    
// let obj ={
//    pName: formRef.current.productname.value,
//    price:formRef.current.price.value,
//   category: formRef.current.category.value,
//   image:formRef.current.image.value
// }
// setUser((prev)=>[...prev,obj])
// }



//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="w-[420px] bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Add Product
//         </h1>

//         <form onSubmit={submitHandler} className="flex flex-col gap-5">

//           {/* Product Name */}
//           <div>
//             <label className="block mb-2 font-medium text-gray-700">
//               Product Name
//             </label>

//             <input
//             ref={(e)=> formRef.current.productname=e}
//               type="text"
//               name="productName"
//               placeholder="Enter Product Name"
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block mb-2 font-medium text-gray-700">
//               Price
//             </label>

//             <input
//                         ref={(e)=> formRef.current.price=e}

//               type="number"
//               name="price"
//               placeholder="Enter Product Price"
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Category */}
//           <div>
            
//             <label className="block mb-2 font-medium text-gray-700">
//               Category
//             </label>

//             <select
//              ref={(e)=> formRef.current.category=e}

//               name="category"
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
//             >
//               <option value="">Select Category</option>
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Kids">Kids</option>
//             </select>
//           </div>

//           {/* Product Image */}
//             <div>

//             <label className="block mb-2 font-medium text-gray-700">
//               Product Image
//             </label>

//             <input
//                                     ref={(e)=> formRef.current.image=e}

//               type="file"
//               name="image"
//               accept="image/*"
//               className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
//             />
//           </div>

//           {/* Submit Button */}
//           <button

//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-semibold cursor-pointer"
//           >
//             Add Product
//           </button>

//         </form>
    

//       </div>
//     </div>
//   );
// };

// export default Form;