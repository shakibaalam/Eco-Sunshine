import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[80%] mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-center text-primary font-bold mb-6">
        Add a new Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter the product name"
            className=" focus:outline-none border-b border-[#7abf18]"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="desc" className="font-medium">
            Description
          </label>
          <input
            type="text"
            id="desc"
            placeholder="Enter the product description"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("desc", {
              required: "Description is required",
            })}
          />
          {errors.desc && (
            <span className="text-red-600">{errors.desc.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="font-medium">
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Enter the product price"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("price", {
              required: "Price is required",
            })}
          />
          {errors.price && (
            <span className="text-red-600">{errors.price.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="quantity" className="font-medium">
            Minimum Quantity
          </label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter the minimum order quantity"
            className="focus:outline-none border-b border-[#7abf18] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none"
            {...register("quantity", {
              required: "Minimum quantity is required",
            })}
          />
          {errors.quantity && (
            <span className="text-red-600">{errors.quantity.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="available" className="font-medium">
            Available Quantity
          </label>
          <input
            type="number"
            id="available"
            placeholder="Enter the available quantity"
            className="focus:outline-none border-b border-[#7abf18] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none"
            {...register("available", {
              required: "Available quantity is required",
            })}
          />
          {errors.available && (
            <span className="text-red-600">{errors.available.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="font-medium">
            Photo
          </label>
          <input
            type="file"
            id="image"
            className="input input-bordered"
            {...register("image", {
              required: "Image is required",
            })}
          />
          {errors.image && (
            <span className="text-red-600">{errors.image.message}</span>
          )}
        </div>

        <div className="">
          <button
            type="submit"
            className="btn bg-[#7abf18] text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
