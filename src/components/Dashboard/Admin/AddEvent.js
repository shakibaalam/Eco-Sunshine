import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePostEventMutation } from "../../../redux/EndPoints/ApiEndpoints";

const AddEvent = () => {
  const [postEvent, resEventInfo] = usePostEventMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (resEventInfo?.status === "fulfilled") {
      console.log(resEventInfo?.status);
      toast.success("Successfully posted");
    } else if (resEventInfo?.status === "rejected") {
      console.log(resEventInfo?.status);
      const errorMessage = resEventInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resEventInfo?.status, resEventInfo?.error?.data?.message]);

  const onSubmit = (data) => {
    console.log(data);
    postEvent(data)
  };

  return (
    <div className="w-[80%] mx-auto  bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-center text-primary font-bold mb-6">
        Add a new Event
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the event title"
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
            placeholder="Enter the event description"
            className="focus:outline-none border resize-none px-2 border-[#7abf18]"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="text-red-600">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("date", {
              required: "Date is required",
            })}
          />
          {errors.date && (
            <span className="text-red-600">{errors.date.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="font-medium">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("time", {
              required: "Time is required",
            })}
          />
          {errors.time && (
            <span className="text-red-600">{errors.time.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter the event location"
            className="focus:outline-none border-b border-[#7abf18]"
            {...register("location", {
              required: "Location is required",
            })}
          />
          {errors.location && (
            <span className="text-red-600">{errors.location.message}</span>
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
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
