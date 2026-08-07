import { Link, NavLink, useNavigate } from "react-router";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../application/useAuth";

const Login = () => {
  const navigate = useNavigate()

  const {handleSubmit,loginForm,errors,register}= useAuth()
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0d0d] px-5 py-10">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#161616] p-8 shadow-[0_20px_60px_rgba(0,0,0,.45)]">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Login to continue shopping.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)} className="mt-8 space-y-5">

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
              {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

            </div>
          </div>

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
             {...register("password")}

                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />

            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">

            <button
            
              type="button"
              className="text-sm text-zinc-400 transition hover:text-[#EAFF00]"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#EAFF00] font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,255,0,.35)]"
          >
            Login
            <ArrowRight size={18} />
          </button>

        </form>

        {/* Register */}
        <div className="mt-8 text-center text-sm text-zinc-400 flex  gap-5 justify-center">

          Don't have an account?{" "}

     <p  onClick={()=>{
      navigate("/register")
     }} 
     className="font-semibold text-[#EAFF00] cursor-pointer hover:underline"
>
    Register

  </p> 

  


        </div>

      </div>

    </main>
  );
};

export default Login;