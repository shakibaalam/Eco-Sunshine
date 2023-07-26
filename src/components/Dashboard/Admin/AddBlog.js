import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[80%] mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-center text-primary font-bold mb-6">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="focus:outline-none border-b px-2 border-[#7abf18]"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors.title && (
            <span className="text-red-600">{errors.title.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="font-medium">
            Content
          </label>
          <textarea
            id="content"
            rows="6"
            className="focus:outline-none border p-2 border-[#7abf18] resize-none ecoScroll"
            {...register("content", {
              required: "Content is required",
            })}
          />
          {errors.content && (
            <span className="text-red-600">{errors.content.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="img" className="font-medium">
            Image
          </label>
          <input
            type="file"
            id="img"
            className="input input-bordered"
            {...register("img", {
              required: "Image is required",
            })}
          />
          {errors.img && (
            <span className="text-red-600">{errors.img.message}</span>
          )}
        </div>

        <input
          className="btn bg-[#7abf18] text-white font-bold py-2 px-4 rounded "
          value="Submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddBlog;
