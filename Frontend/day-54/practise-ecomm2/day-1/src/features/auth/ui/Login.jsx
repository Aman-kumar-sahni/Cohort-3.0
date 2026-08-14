import React from "react";
import { User, Lock, Eye, ArrowRight } from "lucide-react";
import authHooks from "../hooks/authHooks";

const Login = () => {
  const {register,loginHandle,errors,handleSubmit} = authHooks()
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-6 sm:px-6">
      <div className="flex min-h-[calc(100vh-3rem)] items-center justify-center">

        <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:p-8 md:p-10">

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white shadow-lg">
              A
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-black">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form  onSubmit={handleSubmit(loginHandle)}className="mt-8 space-y-5">

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Username
              </label>

              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-400" />

                <input
                {...register("username",{
                  required:"username is required",
                  
                })}
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-11 pr-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5"
                />
              </div>
            </div>
            {errors.username && (
  <p className="text-sm text-red-500">
    {errors.username.message}
  </p>
)}

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-neutral-800"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-400" />

                <input {
                  ...register("password",{
                    required:"password is required"
                  })
                }
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-11 pr-12 text-sm text-black outline-none transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5"
                />

                <button 
                  type="button"
                  aria-label="Show password"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-black"
                >
                  <Eye className="h-[18px] w-[18px]" />
                </button>
              </div>
            </div>
            {errors.password && (
  <p className="text-sm text-red-500">
    {errors.password.message}
  </p>
)}

            {/* Login Button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl active:translate-y-0"
            >
              <span>Login</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </form>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-neutral-500">
            Don't have an account?{" "}

            <a
              href="/register"
              className="font-semibold text-black underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Create account
            </a>
          </p>

        </div>
      </div>
    </main>
  );
};

export default Login;