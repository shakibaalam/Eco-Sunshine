import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const StripePaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGM3MjczYmNkNThiOTY0ZTQwNWI4MmUiLCJpYXQiOjE2OTA3ODI1MjQsImV4cCI6MTY5MDg2ODkyNH0.9J8j1j3EExsMJt_EMCE24oAom2kS1wALLNa0hnxabJ0';
    event.preventDefault();
    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }
      console.log(paymentMethod);

      const { data } = await axios.post('http://localhost:5000/api/v1/products/payment-recive', {
        amount: 100, 
        currency: 'USD', 
        paymentMethodId: paymentMethod.id,
        customerId: "cus_OMY9UqlxXzgNsQ",
        cartDetails: ["64c4969947227f09e5381152"], // ai khane add to cart ar id diben
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      // Handle error state in your UI.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="my-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                '::placeholder': {
                  color: '#A0AEC0',
                },
              },
              invalid: {
                color: '#E53E3E',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default StripePaymentForm;
