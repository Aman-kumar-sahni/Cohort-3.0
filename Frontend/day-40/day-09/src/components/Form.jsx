import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setShowForm,users,deleteHandler }) => {
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
let arr = [...users,newUser]
    setUsers(arr);
localStorage.setItem("users",JSON.stringify(arr))
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