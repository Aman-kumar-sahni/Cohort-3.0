import { NavLink } from "react-router";
import { Mail, Lock, ArrowRight,UserCheck } from "lucide-react";
import { useState } from "react";
import { authHooks } from "../../hooks/useHooks";

const LoginPage = () => {
  const {register,handleSubmit,errors,loginForm}= authHooks()
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#100c0b] px-4 py-8">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#6f3026]/20 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#4a241d]/25 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#71382d]/10 blur-[100px]" />
      </div>

      {/* Login Card */}
      <section className="relative w-full max-w-[430px]">

        <div className="rounded-[30px] border border-[#6d473d]/40 bg-gradient-to-b from-[#241816] to-[#17110f] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.65),0_8px_30px_rgba(78,35,27,0.15)] sm:p-9">

          {/* Header */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#a98273]">
              Welcome back
            </p>

            <h1 className="text-[32px] font-semibold tracking-[-0.03em] text-[#f5eee9] sm:text-[36px]">
              Sign in to your account
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#96867f]">
              Enter your credentials to continue where you left off.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(loginForm)}className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2.5 block text-sm font-medium text-[#d8cbc5]">
                username
              </label>

              <div className="flex h-13 items-center rounded-xl border border-[#4d3933] bg-[#120e0d] px-4 transition-all duration-200 focus-within:border-[#956052] focus-within:bg-[#160f0d] focus-within:ring-4 focus-within:ring-[#71382d]/10">

                <UserCheck
                  size={18}
                  strokeWidth={1.8}
                  className="mr-3 shrink-0 text-[#80665d]"
                />

                <input
                {...register("username",{
                  required:"username is required"
                })}
                  type="text"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-[#f3ebe7] outline-none placeholder:text-[#625650]"
                />
              </div>
            </div>
            {errors.username && <p className="font-bold text-red-900">{errors.username.message}</p>}

            {/* Password */}
            <div>
              <div className="mb-2.5 flex items-center justify-between">
                <label className="text-sm font-medium text-[#d8cbc5]">
                  Password
                </label>

                {/* <button
                  type="button"
                  className="text-xs font-medium text-[#a98273] transition hover:text-[#d0a395]"
                >
                  Forgot password?
                </button> */}
              </div>

              <div className="flex h-13 items-center rounded-xl border border-[#4d3933] bg-[#120e0d] px-4 transition-all duration-200 focus-within:border-[#956052] focus-within:bg-[#160f0d] focus-within:ring-4 focus-within:ring-[#71382d]/10">

                <Lock
                  size={18}
                  strokeWidth={1.8}
                  className="mr-3 shrink-0 text-[#80665d]"
                />

                <input
                {...register("password",{required:"password is required"})}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-sm text-[#f3ebe7] outline-none placeholder:text-[#625650]"
                />
              </div>
            </div>
            {errors.password&& <p className="font-bold text-red-900">{errors.password.message}</p>}

            {/* Remember */}
            {/* <label className="flex cursor-pointer items-center gap-3 pt-1 text-sm text-[#9b8b84]">
              <input
                type="checkbox"
                className="h-4 w-4 cursor-pointer rounded border-[#60463e] bg-[#120e0d] accent-[#8d5548]"
              />

              <span>Remember me</span>
            </label> */}

            {/* Submit */}
            <button
              type="submit"
              className="group mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7d493d] via-[#8d5548] to-[#713c32] text-sm font-semibold text-[#fff8f4] shadow-[0_12px_28px_rgba(86,40,31,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_16px_34px_rgba(86,40,31,0.48)] active:translate-y-0"
            >
              Sign in

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-7 border-t border-[#493631]/50 pt-6 text-center">
            <p className="text-sm text-[#85756e]">
              Don't have an account?{" "}

              <NavLink
                to="/register"
                className="font-semibold text-[#bd8d7e] transition hover:text-[#d5a99b]"
              >
                Create an account
              </NavLink>
            </p>
          </div>

        </div>

        {/* Very subtle card reflection */}
        <div className="pointer-events-none absolute inset-x-12 -bottom-3 -z-10 h-8 rounded-full bg-[#612d24]/20 blur-2xl" />
      </section>
    </main>
  );
};

export default LoginPage;