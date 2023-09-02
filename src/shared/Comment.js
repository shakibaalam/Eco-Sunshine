import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Comment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    if (data) {
      toast.success("Thank you for your valuable comment.");
      reset();
    }
  };
  return (
    <div className="my-20">
      <h2 className="text-[#7abf18] font-bold text-xl mb-3">LEAVE COMMENT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("comment", { required: "Comment is required" })}
          className="resize-none p-4 border-2 border-gray-100 rounded w-full focus:border-[#7abf18]"
          placeholder="Comment..."
        />
        {errors.comment && (
          <span className="text-red-500">{errors.comment.message}</span>
        )}

        <div className="flex justify-between gap-10 my-4">
          <input
            {...register("name", { required: "Name is required" })}
            className="px-4 py-1 border-2 border-gray-100 rounded w-full focus:border-[#7abf18]"
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="px-4 py-1 border-2 border-gray-100 rounded w-full focus:border-[#7abf18]"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <button type="submit" className="bg-[#7abf18] text-white px-6 py-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Comment;
