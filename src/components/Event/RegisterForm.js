import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEventRegMutation } from "../../redux/EndPoints/ApiEndpoints";
import { toast } from "react-toastify";

const RegisterForm = ({ eventById, formattedTime, formattedDate }) => {
  const [postEventReg, resEventInfo] = useEventRegMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const user = useSelector((state) => {
    const userData = state.auth.user;
    try {
      return JSON.parse(userData);
    } catch (error) {
      return userData;
    }
  });

  useEffect(() => {
    if (resEventInfo?.status === "fulfilled") {
      console.log(resEventInfo?.status);
      toast.success("Successfully posted");
      reset();
    } else if (resEventInfo?.status === "rejected") {
      console.log(resEventInfo);
      const errorMessage = resEventInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resEventInfo, reset]);

  const onSubmit = (data) => {
    const body = {
      date: formattedDate,
      location: eventById?.des,
      time: formattedTime,
      des: eventById?.content,
      title: eventById?.title,
      image: eventById?.image,
      email: data?.email,
      message: data?.message,
      name: data?.name,
      phone: data?.phone,
    };
    //console.log(data);
    postEventReg(body);

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
          defaultValue={user?.name || ""} // Set initial value from the user data if available
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
          defaultValue={user?.email || ""} // Set initial value from the user data if available
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
