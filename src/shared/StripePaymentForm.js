import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const StripePaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/products/payment-recive",
        {
          amount: 100,
          currency: "USD",
          paymentMethodId: paymentMethod.id,
          cartDetails: ["64c4969947227f09e5381152"], // Add cart id here
        }
      );

      console.log(data); // Handle successful payment response
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      // Handle error state in your UI.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="my-4 w-full mx-2  md:mx-auto bg-slate-900 backdrop-filter backdrop-blur-sm p-10 rounded">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                "::placeholder": {
                  color: "#A0AEC0",
                },
              },
              invalid: {
                color: "#E53E3E",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-gradient-to-r from-cyan-600 to-[#3bd6e4] hover:bg-gradient-to-l mt-4 px-4 py-1 rounded text-white font-semibold border border-cyan-500 disabled:opacity-70"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default StripePaymentForm;
