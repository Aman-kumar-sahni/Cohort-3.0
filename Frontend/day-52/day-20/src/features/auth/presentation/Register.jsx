import { Link, NavLink, useNavigate } from "react-router";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../application/useAuth";

const Register = () => {
  const navigate = useNavigate("")
  const {registerForm,handleSubmit,errors,register}=useAuth()
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0d0d] px-5 py-10">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#161616] p-8 shadow-[0_20px_60px_rgba(0,0,0,.45)]">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Join SkyMart and start shopping today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={
          handleSubmit(registerForm)
        }className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Full Name
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#202020] px-4 focus-within:border-[#EAFF00]">

              <User
                size={18}
                className="text-zinc-500"
              />

              <input
              {...register("name",{
                required:"Name is required"
              })}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

            </div>
          </div>
{
  errors.name && (
    <p className="mt-2 text-sm font-medium text-red-400">
      {errors.name.message}
    </p>
  )
}
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#202020] px-4 focus-within:border-[#EAFF00]">

              <Mail
                size={18}
                className="text-zinc-500"
              />

              <input
                            {...register("email",{required:"email is required"})}

                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

            </div>
          </div>
          {
  errors.email&& (
    <p className="mt-2 text-sm font-medium text-red-400">
      {errors.email.message}
    </p>
  )
}

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Password
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#202020] px-4 focus-within:border-[#EAFF00]">

              <Lock
                size={18}
                className="text-zinc-500"
              />

              <input
                            {...register("password",{required:"password is required"})}

                type="password"
                placeholder="Create password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

            </div>
          </div>
{
  errors.password && (
    <p className="mt-2 text-sm font-medium text-red-400">
      {errors.password.message}
    </p>
  )
}
          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Confirm Password
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#202020] px-4 focus-within:border-[#EAFF00]">

              <Lock
                size={18}
                className="text-zinc-500"
              />

              <input
              {...register("confirmpassword",{required:"confirm your Password"})}
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

            </div>
          </div>
          {
  errors.confirmpassword && (
    <p className="mt-2 text-sm font-medium text-red-400">
      {errors.confirmpassword.message}
    </p>
  )
}

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-400">

            <input
                          {...register("checkbox",{required:" accept the terms and condition"})}

              type="checkbox"
              className="mt-1 accent-[#EAFF00]"
            />

            <span>
              
              I agree to the{" "}
              <button
                type="button"
                className="font-medium text-[#EAFF00] hover:underline"
              >
                Terms & Conditions
              </button>
            </span>

          </label>
          {
  errors.checkbox && (
    <p className="mt-2 text-sm font-medium text-red-400">
      {errors.checkbox.message}
    </p>
  )
}

          {/* Register Button */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#EAFF00] font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,255,0,.35)]"
          >
            Create Account
            <ArrowRight size={18} />
          </button>

        </form>

        {/* Login Link */}
        <div className="mt-8 text-center text-sm text-zinc-400 flex  gap-5 justify-center">

          Already have an account?{""}

          <p
            onClick={()=>{
              navigate("/login")
            }}
            className="font-semibold text-[#EAFF00] cursor-pointer hover:underline"
          >
            Login
          </p>

        </div>

      </div>

    </main>
  );
};

export default Register;