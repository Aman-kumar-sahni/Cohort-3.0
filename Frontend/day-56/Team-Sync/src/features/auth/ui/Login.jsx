
import React from "react";
import { Link } from "react-router";
import { Mail, Lock, Network, ArrowRight } from "lucide-react";
import { useAuthForm } from "../hooks/useAuthForm";
import flower from "../../../assets/imagesflower.jpeg";

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    serverError,
    useLogin,
    navigate,
  } = useAuthForm();

  return (
    <main className="min-h-screen bg-[#121015] text-white">

      <div className="relative flex min-h-screen items-center justify-center px-4 py-4 sm:px-6">

        {/* Decorative Image */}
      


        {/* Login Card */}
        <section className="relative z-10 w-full max-w-lg rounded-2xl border border-[#302c34] bg-[#1b191e] px-5 py-5 shadow-2xl sm:px-7 sm:py-6 lg:max-w-xl lg:px-8 lg:py-7">

          {/* Logo */}
          <div className="text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#7355b6] sm:h-14 sm:w-14">
              <Network className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>

            <h1 className="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
              Synthetix AI
            </h1>

            <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
              Sign in to your workspace
            </p>

          </div>


          {/* Social Login */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#45414b] bg-[#2b282e] text-xs font-semibold transition hover:bg-[#343139] sm:h-12 sm:text-sm"
            >
              <span className="text-base">G</span>
              GOOGLE
            </button>

            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#45414b] bg-[#2b282e] text-xs font-semibold transition hover:bg-[#343139] sm:h-12 sm:text-sm"
            >
              <span className="text-base">▣</span>
              GITHUB
            </button>

          </div>


          {/* Divider */}
          <div className="my-5 flex items-center gap-3 sm:my-6">

            <div className="h-px flex-1 bg-[#302c34]" />

            <span className="whitespace-nowrap text-[11px] text-neutral-400 sm:text-xs">
              or continue with email
            </span>

            <div className="h-px flex-1 bg-[#302c34]" />

          </div>


          {/* Form */}
          <form
            onSubmit={handleSubmit(useLogin)}
            className="space-y-3.5 sm:space-y-4"
          >

            {/* Email */}
            <div>

              <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                EMAIL ADDRESS
              </label>

              <div className="relative">

                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />

                <input
                  type="email"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`h-11 w-full rounded-lg border bg-[#0f0d12] pl-10 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 transition focus:ring-1 focus:ring-[#8060c9] ${
                    errors.email
                      ? "border-red-500"
                      : "border-[#403c45] focus:border-[#8060c9]"
                  }`}
                />

              </div>

              {errors.email && (
                <p className="mt-1 text-[11px] text-red-400">
                  {errors.email.message}
                </p>
              )}

            </div>


            {/* Password */}
            <div>

              <div className="mb-1.5 flex items-center justify-between">

                <label className="text-xs font-medium text-neutral-300">
                  PASSWORD
                </label>

                <button
                  type="button"
                  className="text-[11px] text-[#c8a9ff] hover:underline sm:text-xs"
                >
                  Forgot password?
                </button>

              </div>

              <div className="relative">

                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />

                <input
                  type="password"
                  placeholder="••••••••••"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`h-11 w-full rounded-lg border bg-[#0f0d12] pl-10 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 transition focus:ring-1 focus:ring-[#8060c9] ${
                    errors.password
                      ? "border-red-500"
                      : "border-[#403c45] focus:border-[#8060c9]"
                  }`}
                />

              </div>

              {errors.password && (
                <p className="mt-1 text-[11px] text-red-400">
                  {errors.password.message}
                </p>
              )}

            </div>


            {/* Remember Me */}
            <label className="flex cursor-pointer items-center gap-2 py-0.5">

              <input
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 accent-[#7355b6]"
              />

              <span className="text-xs text-neutral-400">
                Stay signed in
              </span>

            </label>


            {/* Server Error */}
            {serverError && (
              <p className="rounded-lg bg-red-500/10 p-2.5 text-xs text-red-400">
                {serverError}
              </p>
            )}


            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#7453b9] text-sm font-semibold transition hover:bg-[#8362c8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Signing in..." : "Sign In"}

              {!isLoading && (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>

          </form>


          {/* Bottom */}
          <div className="my-5 h-px bg-[#302c34]" />

          <p className="text-center text-xs text-neutral-400 sm:text-sm">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-[#c8a9ff] hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </section>

      </div>

    </main>
  );
};

export default Login;

