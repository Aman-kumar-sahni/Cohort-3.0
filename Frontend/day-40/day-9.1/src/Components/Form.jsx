
import { useForm } from "react-hook-form";
import { useState } from "react";
const SignupForm = ({setData,setToggle}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(
{  
  mode: "onChange",
}  );

  function submitHandler(user) {
    setData((prev)=>[...prev,user])
    reset()
   setToggle((prev)=>!prev)

  }
  return (
    <div className="w-80 h-auto gap-5   rounded-2xl bg-amber-50 p-4 shadow-lg flex flex-col ml-130">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Create Account
      </h2>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
        {/* Username */}
        <div>

          <input
            {...register("username", {
              required: "UserName is required",
              pattern: {
                value: /^[A-Za-z][A-Za-z\s]*$/,
                message: "Name cannot start with a space and should contain only letters",
              },
            })} type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            autoComplete="username"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
        {/* Email */}


        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
        {/* Password */}
        <div>

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).+$/,
                message:
                  "Password must contain an uppercase letter, lowercase letter, number, and special character",
              },
            })}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}

        {/* Image */}
        <div>

          <input
{...register("image", {
    required: "Image URL is required",

  })}
            type="url"
            id="image"
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
{errors.image && (
  <p className="mt-1 text-sm text-red-500">
    {errors.image.message}
  </p>
)}
        {/* Submit Button */}
        <button
      
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;