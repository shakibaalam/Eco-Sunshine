import React, { useState } from "react";
import { useForm } from "react-hook-form";
import banner from "../img/bg-1.jpg";
import { FaEyeSlash } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[100vh]" style={{ backgroundImage: `url(${banner})` }}>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md">
          <h2 className=" text-center font-bold text-2xl text-slate-400 uppercase mb-5">
            Login to ECO SUNSHINE
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-500 font-semibold mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                type="email"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-400"
                } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-gray-500 font-semibold mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-400"
                  } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
                />
                <span
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <AiFillEye />}
                </span>
              </div>
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className=" text-right text-sm mb-4">
              <a
                href="/forgot-password"
                className="text-[#7abf18] hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-[#7abf18] text-white w-full py-2 px-4 rounded-md hover:bg-[#8fd72b] focus:outline-none focus:bg-[#7abf18]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className=" text-center mt-2">
              <span className="text-sm text-gray-600">
                Not a member?{" "}
                <a href="/signup" className="text-[#7abf18] hover:underline">
                  Register Now
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
