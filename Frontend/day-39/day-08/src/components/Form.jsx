import React from 'react'
import { useForm } from "react-hook-form";
const Form = ({setUser,setToggle}) => {

    
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
  mode: "onChange",
    });
    function submitHandler(data){
 reset();
 setUser((prev)=>[...prev,data])
 setToggle((prev)=>!prev)  
                      

    }

    return (
        <div className=' flex flex-col text-amber-50 flex flex-col justify-center items-center  ml-[35%] '>
            <h1 className='font-bold text-amber-50 '>create User </h1>
            <form onSubmit={handleSubmit(submitHandler)} className='bg-black h-80 w-90 flex flex-col justify-center items-center gap-1  p-2 border border-2 border-gray-500'>
               
                <input {...register("Name", {
                    required: "Name is required",
                     pattern: {
      value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      message: "Enter a valid name",
    },
                }
                )
                }

                    className='h-10 w-full rounded-sm  outline-0  p-2  border border-2 border-gray-500 ' type="text" placeholder='Name' ></input>
                     {errors.Name&&                <p className='text-red-800 font-bold text-sm flex '>{errors.Name.message}</p>
}

                <input {...register("Email", {
                    required: "Email is required",
                     pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address",
    },
                })}

                    className='h-10 w-full rounded-sm outline-0  p-2   border border-2 border-gray-500 ' type="email" placeholder='Email' ></input>


{errors.Email&&            <p className='text-red-800 font-bold text-sm'>{errors.Email.message}</p>
}
                <input {...register("Mobile", {
                    required: "Mobile is required",
                    pattern: {
      value: /^\d{10}$/,
      message: "Mobile number must contain exactly 10 digits",
    },
                })} className='h-10 w-full rounded-sm  outline-0  p-2  border border-2 border-gray-500 ' type="number" placeholder='Mobile' ></input>

{errors.Mobile&&                <p className='text-red-800 font-bold text-sm'>{errors.Mobile.message}</p>}

                <input {...register("Image", {
                    required: "Image is required"
                })} className='h-10 w-full rounded-sm  outline-0  p-2  border border-2 border-gray-500 ' type="url" placeholder='Image' ></input>
                {errors.Image&&                <p className='text-red-800 font-bold text-sm'>{errors.Image.message}</p>}

                <button  
                
                    
                    className='h-10 w-full rounded-sm bg-blue-600 text-amber-50'> Add User</button>

            </form>
        </div>
    )
}

export default Form
