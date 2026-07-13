// import React from 'react'
// import { useForm } from "react-hook-form";
// const Form = ({setUser,setToggle}) => {

    
//     let {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm({
//   mode: "onChange",
//     });
//     function submitHandler(data){
//  reset();
//  setUser((prev)=>[...prev,data])
//  setToggle((prev)=>!prev)  
                      

//     }

//     return (
//         <div className=' flex flex-col text-amber-50 flex flex-col justify-center items-center  ml-[35%] '>
//             <h1 className='font-bold text-amber-50 '>create User </h1>
//             <form onSubmit={handleSubmit(submitHandler)} className='bg-black h-80 w-90 flex flex-col justify-center items-center gap-1  p-2 border border-2 border-gray-500'>
               
//                 <input {...register("Name", {
//                     required: "Name is required",
//                      pattern: {
//       value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
//       message: "Enter a valid name",
//     },
//                 }
//                 )
//                 }

//                     className='h-10 w-full rounded-sm  outline-0  p-2  border border-2 border-gray-500 ' type="text" placeholder='Name' ></input>
//                      {errors.Name&&                <p className='text-red-800 font-bold text-sm flex '>{errors.Name.message}</p>
// }

//                 <input {...register("Email", {
//                     required: "Email is required",
//                      pattern: {
//       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//       message: "Enter a valid email address",
//     },
//                 })}

//                     className='h-10 w-full rounded-sm outline-0  p-2   border border-2 border-gray-500 ' type="email" placeholder='Email' ></input>


// {errors.Email&&            <p className='text-red-800 font-bold text-sm'>{errors.Email.message}</p>
// }
//                 <input {...register("Mobile", {
//                     required: "Mobile is required",
//                     pattern: {
//       value: /^\d{10}$/,
//       message: "Mobile number must contain exactly 10 digits",
//     },
//                 })} className='h-10 w-full rounded-sm  outline-0  p-2  border border-2 border-gray-500 ' type="number" placeholder='Mobile' ></input>

// {errors.Mobile&&                <p className='text-red-800 font-bold text-sm'>{errors.Mobile.message}</p>}

//                 <input {...register("Image", {
//                     required: "Image is required"
//                 })} className='h-10 w-full rounded-sm  outline-0  p-2  border border-2 border-gray-500 ' type="url" placeholder='Image' ></input>
//                 {errors.Image&&                <p className='text-red-800 font-bold text-sm'>{errors.Image.message}</p>}

//                 <button  
                
                    
//                     className='h-10 w-full rounded-sm bg-blue-600 text-amber-50'> Add User</button>

//             </form>
//         </div>
//     )
// }

// export default Form
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setShowForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  function submitHandler(data) {
    const newUser = {
      id: Date.now(),
      name: data.name.trim(),
      email: data.email.trim(),
      mobile: data.mobile,
      image: data.image.trim(),
    };

    setUsers((prev) => [newUser, ...prev]);

    reset();

    // Form hide karke User Cards show karo
    setShowForm(false);
  }

  return (
    <div className="w-[420px] bg-white shadow-xl rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create User
      </h1>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                message: "Enter a valid name",
              },
            })}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <input
            type="url"
            placeholder="Paste Image URL"
            className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
            {...register("image", {
              required: "Image URL is required",
            })}
          />

          {errors.image && (
            <p className="text-red-500 text-sm mt-1">
              {errors.image.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Form;
