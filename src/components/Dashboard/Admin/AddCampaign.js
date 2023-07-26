import React from "react";
import { useForm } from "react-hook-form";

const AddCampaign = () => {
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
        Add a new Campaign for Donation
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the campaign title"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors.title && (
            <span className="text-red-600">{errors.title.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-medium">
            Description
          </label>
          <textarea
            id="description"
            rows="6"
            placeholder="Enter the campaign description"
            className="focus:outline-none border resize-none px-2 border-[#7abf18] "
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="text-red-600">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="targetAmount" className="font-medium">
            Target Amount
          </label>
          <input
            type="text"
            id="targetAmount"
            placeholder="Enter the target donation amount"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("targetAmount", {
              required: "Target amount is required",
            })}
          />
          {errors.targetAmount && (
            <span className="text-red-600">{errors.targetAmount.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="endDate" className="font-medium">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("endDate", {
              required: "End date is required",
            })}
          />
          {errors.endDate && (
            <span className="text-red-600">{errors.endDate.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="font-medium">
            Image
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
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaign;
