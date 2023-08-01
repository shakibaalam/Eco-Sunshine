import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import StripePaymentForm from "./StripePaymentForm";
import { useCreateCustomerIdMutation } from "../redux/EndPoints/ApiEndpoints";

const stripePromise = loadStripe(
  "pk_test_51NYRyfKTzmdU21JYmYlQ3VYe2clSCUfGBAcwtmK3UsLaIK48eCxuM749imCD4UCsJMuQtRY1YoUmhAIUKRqRT46c007ivjL7C7"
);

const Donation = ({ id }) => {
  const [customerId, resIdInfo] = useCreateCustomerIdMutation();

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isStripe, setStripe] = useState(null);

  useEffect(() => {
    console.log(resIdInfo);
    if (resIdInfo?.status === "fulfilled") {
      setStripe(resIdInfo?.data?.customerId);
    }
  }, [resIdInfo]);

  const handleCardClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setSelectedAmount(null); // Reset selectedAmount when user enters a custom amount
  };

  const handleDonate = () => {
    if (selectedAmount || customAmount) {
      customerId();
    } else {
      alert("Please select or enter an amount to donate.");
    }
  };

  return (
    <div className="bg-gray-100 shadow-lg p-8">
      <h2 className="text-lg font-semibold">DONATE NOW FOR THIS CAUSE</h2>
      <div className="flex  gap-10 mt-4">
        {/* Pre-defined donation amounts */}
        <div
          onClick={() => handleCardClick(50)}
          className={`flex-1 font-semibold  my-auto text-center border rounded p-4 cursor-pointer ${
            selectedAmount === 50
              ? "bg-[#7abf18] text-white"
              : " text-[#7abf18]"
          }`}
        >
          <p>I want to donate</p>
          <p className=" text-2xl mt-1">$50</p>
        </div>
        <div
          onClick={() => handleCardClick(100)}
          className={`flex-1 font-semibold text-center border rounded p-4 cursor-pointer ${
            selectedAmount === 100
              ? "bg-[#7abf18] text-white"
              : " text-[#7abf18]"
          }`}
        >
          <p>I want to donate</p>
          <p className=" text-2xl mt-1">$100</p>
        </div>
        <div
          onClick={() => handleCardClick(150)}
          className={`flex-1 font-semibold text-center border rounded p-4 cursor-pointer ${
            selectedAmount === 150
              ? "bg-[#7abf18] text-white"
              : " text-[#7abf18]"
          }`}
        >
          <p>I want to donate</p>
          <p className=" text-2xl mt-1">$150</p>
        </div>
        {/* Custom donation amount */}
        <div
          className={`flex-1 font-semibold text-center border rounded p-4 cursor-pointer text-[#7abf18] ${
            selectedAmount === "custom"
              ? "bg-[#7abf18] text-white"
              : " text-[#7abf18]"
          }`}
          onClick={() => handleCardClick("custom")}
        >
          <p>I want to donate</p>
          <input
            type="number"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="w-full text-center focus:outline-none mt-2 py-1 rounded bg-gray-100 border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="Enter Amount"
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={handleDonate}
          className={`bg-[#7abf18] text-white px-6 py-2 rounded-lg ${
            !selectedAmount && !customAmount
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={!selectedAmount && !customAmount}
        >
          Donate Now
        </button>
      </div>

      {isStripe && (
        <Elements stripe={stripePromise}>
          <StripePaymentForm
            isStripe={isStripe}
            setStripe={setStripe}
            cartIds={[id]}
            totalPrice={selectedAmount || customAmount} donate
          />
        </Elements>
      )}
    </div>
  );
};

export default Donation;
