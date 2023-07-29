import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here.
  };

  return (
    <form className="w-full mx-auto my-10" onSubmit={handleSubmit(onSubmit)}>
      <p className=" underline text-2xl font-semibold mb-4">
        Register for this event
      </p>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name:
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#7abf18]"
          type="text"
          id="name"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email:
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#7abf18]"
          type="email"
          id="email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-semibold">
          Phone:
        </label>
        <input
          {...register("phone", { required: "Phone number is required" })}
          className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#7abf18]"
          type="text"
          id="phone"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold">
          Message:
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full p-2 border-2 border-gray-300 rounded resize-none focus:border-[#7abf18]"
          id="message"
        ></textarea>
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#7abf18] text-white px-6 py-2 rounded hover:bg-[#5d911b]"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
