import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { URL } from "../redux/EndPoints/fetchbasequery";
import { toast } from "react-toastify";

const StripePaymentForm = ({
  isStripe,
  cartIds,
  totalPrice,
  setStripe,
  refetch,
  donate,
  setSelectedAmount,
}) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    const accessToken = localStorage.getItem("accessToken");
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
        `${URL}${
          donate
            ? "api/v1/donation/payment-receive-donation"
            : "api/v1/products/payment-receive"
        }`,
        {
          amount: totalPrice * 100,
          currency: "USD",
          paymentMethodId: paymentMethod?.id,
          customerId: isStripe,
          cartDetails: cartIds, // Add cart id here
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // console.log(data); // Handle successful payment response
      if (data?.success === true) {
        toast.success("Successfully payment completed! Thank you.");
        setStripe(false);
        setSelectedAmount(null);
        refetch();
        setLoading(false);
        setStripe(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      // Handle error state in your UI.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="my-4 w-full mx-2  md:mx-auto bg-slate-100 backdrop-filter backdrop-blur-sm p-10 rounded">
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
