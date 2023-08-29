import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import banner from "../img/bg-1.jpg";
import { useCreateRegisterMutation } from "../redux/auth/authApi";
import { setCredentials } from "../redux/Slice/authSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../redux/Slice/userSlice";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [createRegister, resInfo] = useCreateRegisterMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    if (resInfo?.status === "fulfilled") {
      const { accessToken, refreshToken, userDetails } = resInfo?.data;
      const data = {
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: JSON.stringify(userDetails),
      };
      dispatch(setCredentials(data));
      dispatch(setUser(data?.user));
      const prevPath = location.state?.from || "/";
      navigate(prevPath);
    } else if (resInfo?.status === "rejected") {
      // console.log("problem");
      const errorMessage = resInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [
    resInfo?.status,
    resInfo?.data,
    resInfo?.error,
    dispatch,
    navigate,
    location.state?.from,
  ]);

  const onSubmit = (data) => {
    //console.log(data);
    createRegister(data);
  };
  return (
    <div className="h-[100vh] lg:mt-[-100px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md">
          <h2 className=" text-center font-bold text-2xl text-slate-400 uppercase mb-5">
            Register for ECO SUNSHINE
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-500 font-semibold mb-2"
              >
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                id="name"
                type="text"
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-400"
                } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </div>
              )}
            </div>
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-500 font-semibold mb-2"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                id="password"
                type="password"
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-400"
                } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-500 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
                id="confirmPassword"
                type="password"
                className={`w-full border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-400"
                } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
              />
              {errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#7abf18] text-white w-full py-2 px-4 rounded-md hover:bg-[#8fd72b] focus:outline-none focus:bg-[#7abf18]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </div>

            <div className=" text-center mt-2">
              <span className="text-sm text-gray-600">
                Already member?{" "}
                <a href="/login" className="text-[#7abf18] hover:underline">
                  Login Now
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
