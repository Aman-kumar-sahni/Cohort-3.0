
import React from "react";
import { Link } from "react-router";
import flower from "../../../assets/imagesflower.jpeg";
import {
  User,
  Mail,
  Lock,
  Sparkles,
  Network,
} from "lucide-react";
import { useAuthForm } from "../hooks/useAuthForm";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    useRegister,
    isLoading,
    serverError,
    navigate,
  } = useAuthForm();

  return (
    <main className="min-h-screen bg-[#121015] text-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <section className="relative hidden overflow-hidden border-r border-[#28242d] lg:block">

          <img
            src={flower}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#071225]/50" />

          <div className="relative z-10 flex h-full flex-col justify-between p-8 xl:p-10">

            {/* Logo */}
            <h1 className="text-xl font-bold xl:text-2xl">
              Synthetix AI
            </h1>

            {/* Content */}
            <div className="max-w-lg">

              <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7c4ff]">
                <Sparkles className="h-4 w-4 xl:h-5 xl:w-5" />
                Next-gen intelligence
              </div>

              <h2 className="text-3xl font-bold leading-tight xl:text-4xl 2xl:text-5xl">
                Accelerate your team's
                <br />
                intelligence.
              </h2>

              <p className="mt-4 max-w-lg text-base leading-6 text-neutral-300 xl:text-lg xl:leading-7">
                Connect your enterprise data to our specialized AI
                models and unlock unparalleled strategic insights
                in seconds.
              </p>

              {/* Stats */}
              <div className="mt-8 flex gap-10 xl:mt-10 xl:gap-12">

                <div>
                  <p className="text-xl font-bold xl:text-2xl">
                    99.9%
                  </p>

                  <p className="mt-1 text-xs text-neutral-400 xl:text-sm">
                    Uptime SLA
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold xl:text-2xl">
                    ISO
                  </p>

                  <p className="mt-1 text-xs text-neutral-400 xl:text-sm">
                    27001 Certified
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= RIGHT SIDE ================= */}
        <section className="flex min-h-screen flex-col">

          <div className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8 lg:px-10 xl:px-14">

            <div className="w-full max-w-lg">

              {/* Heading */}
              <div className="mb-6">

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Create your account
                </h2>

                <p className="mt-2 text-sm text-neutral-400 sm:text-base">
                  Experience the future of collaborative data intelligence.
                </p>

              </div>


              {/* Form */}
              <form
                onSubmit={handleSubmit(useRegister)}
                className="space-y-4"
              >

                {/* Full Name */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Full Name
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-neutral-500" />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      className={`h-12 w-full rounded-lg border bg-[#18161b] pl-11 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 transition focus:ring-1 focus:ring-[#8060c9] ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-[#403c45] focus:border-[#8060c9]"
                      }`}
                    />

                  </div>

                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}

                </div>


                {/* Email */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-neutral-500" />

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
                      className={`h-12 w-full rounded-lg border bg-[#18161b] pl-11 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 transition focus:ring-1 focus:ring-[#8060c9] ${
                        errors.email
                          ? "border-red-500"
                          : "border-[#403c45] focus:border-[#8060c9]"
                      }`}
                    />

                  </div>

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}

                </div>


                {/* Password */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Password
                  </label>

                  <div className="relative">

                    <Lock className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-neutral-500" />

                    <input
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                      className={`h-12 w-full rounded-lg border bg-[#18161b] pl-11 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 transition focus:ring-1 focus:ring-[#8060c9] ${
                        errors.password
                          ? "border-red-500"
                          : "border-[#403c45] focus:border-[#8060c9]"
                      }`}
                    />

                  </div>

                  {errors.password && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.password.message}
                    </p>
                  )}

                  {/* Password Strength */}
                  <div className="mt-2">

                    <div className="flex gap-1">
                      <div className="h-1 flex-1 rounded-full bg-[#c8a9ff]" />
                      <div className="h-1 flex-1 rounded-full bg-[#c8a9ff]" />
                      <div className="h-1 flex-1 rounded-full bg-[#2c2930]" />
                      <div className="h-1 flex-1 rounded-full bg-[#2c2930]" />
                    </div>

                    <p className="mt-1 text-xs text-[#c8a9ff]">
                      Strong password
                    </p>

                  </div>

                </div>


                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 py-1">

                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must accept the terms",
                    })}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#9a7be0]"
                  />

                  <span className="text-xs leading-5 text-neutral-400 sm:text-sm sm:leading-6">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-[#c8a9ff] hover:underline"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-[#c8a9ff] hover:underline"
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>

                </label>

                {errors.terms && (
                  <p className="text-xs text-red-400">
                    {errors.terms.message}
                  </p>
                )}


                {/* Server Error */}
                {serverError && (
                  <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                    {serverError}
                  </p>
                )}


                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 w-full rounded-lg bg-gradient-to-r from-[#7453b9] to-[#c3a6ff] text-sm font-semibold text-[#17111f] shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </button>

              </form>


              {/* Divider */}
              <div className="my-6 flex items-center gap-4">

                <div className="h-px flex-1 bg-[#29262e]" />

                <span className="text-[10px] uppercase text-neutral-600 sm:text-xs">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-[#29262e]" />

              </div>


              {/* Social */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <button
                  type="button"
                  className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#45414b] text-sm transition hover:bg-white/5"
                >
                  G
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#45414b] text-sm transition hover:bg-white/5"
                >
                  <Network className="h-4 w-4" />
                  SSO
                </button>

              </div>


              {/* Login Link */}
              <p className="mt-6 text-center text-xs text-neutral-400 sm:text-sm">

                Already have an account?{" "}

                <Link
                  to="/"
                  className="font-semibold text-[#c8a9ff] hover:underline"
                >
                  Log In
                </Link>

              </p>

            </div>

          </div>


          {/* Footer */}
          <footer className="border-t border-[#242128] px-5 py-4 sm:px-8 lg:px-10">

            <div className="flex flex-col gap-2 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-sm">

              <span className="font-bold text-white">
                Synthetix AI
              </span>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Security</span>
                <span>System Status</span>
              </div>

              <span>
                © 2024 Synthetix AI.
              </span>

            </div>

          </footer>

        </section>

      </div>

    </main>
  );
};

export default Register;

