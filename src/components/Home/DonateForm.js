import React, { useState } from "react";
import { useForm } from "react-hook-form";
import banner from "../../img/form-bg.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../../shared/StripePaymentForm";
import { loadStripe } from "@stripe/stripe-js";

const DonateForm = () => {
  const stripePromise = loadStripe("your_stripe_publishable_key");
  const [isStripe, setStripe] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const options = ["Donate Amount", "Poor People"];
  const donates = ["$1000", "$2000", "$3000"];
  const selectedDonate = watch("selectedDonate");

  const handleDonateChange = (event) => {
    setValue("selectedDonate", event.target.value);
    if (!options.includes(event.target.value)) {
      setValue("customOption", event.target.value);
    }
  };

  const user = useSelector((state) => {
    const userData = state.auth.user;
    try {
      return JSON.parse(userData);
    } catch (error) {
      return userData;
    }
  });
  console.log(user);

  const onSubmit = (data) => {
    console.log(data);
    if (!user) {
      navigate("/login");
    } else {
      setStripe(true);
    }
  };

  return (
    <div
      className="w-full relative flex justify-between px-14 "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75 " />
      <div className="lg:w-3/4 xl:w-4/5 mx-auto">
        <div className="relative z-10 bg-white w-[500px] px-10 py-3">
          <h2 className="uppercase text-2xl my-5">
            <span className="text-primary font-bold">Make</span> Donation
          </h2>
          <p className="text-primary">
            Your donation helps us be there for everyone who needs us during the
            cost of living crisis. Thank you for your support.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg my-5">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="contact"
                {...register("contact", {
                  required: "Email/Phone Number is required",
                })}
                placeholder="Email / Phone Number"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
              />
              {errors.contact && (
                <span className="text-red-600">{errors.contact.message}</span>
              )}
            </div>

            <div className="mb-4">
              <select
                id="options"
                {...register("selectedOption")}
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
              >
                <option value="" disabled className="text-gray-700">
                  Select Campaign
                </option>
                {options.map((option) => (
                  <option key={option} value={option} className="text-gray-700">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <select
                id="options"
                value={selectedDonate}
                onChange={handleDonateChange}
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18] bg-white"
              >
                {donates.map((d) => (
                  <option key={d} value={d} className="text-gray-700">
                    {d}
                  </option>
                ))}
                <option value="$ Amount" className="text-gray-700">
                  Write your own amount
                </option>
              </select>

              {selectedDonate === "$ Amount" && (
                <input
                  type="text"
                  placeholder="Write your own amount"
                  {...register("customOption", {
                    required: "Custom amount is required",
                  })}
                  className="w-full mt-2 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
                />
              )}
              {errors.customOption && (
                <span className="text-red-600">
                  {errors.customOption.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 w-full font-bold text-white bg-[#7abf18] rounded-md "
            >
              Donate
            </button>
          </form>

          {isStripe && (
            <Elements stripe={stripePromise}>
              <StripePaymentForm />
            </Elements>
          )}
        </div>
      </div>



    </div>
  );
};

export default DonateForm;
