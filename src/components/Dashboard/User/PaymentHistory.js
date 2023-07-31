import React from "react";
import { useGetPaymentHistoryQuery } from "../../../redux/EndPoints/ApiEndpoints";
import Loading from "../../../shared/Loading";

const PaymentHistory = () => {
  const { data: paymentData, isLoading } = useGetPaymentHistoryQuery();
  //console.log(paymentData);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        Payment History
      </h2>
      {isLoading ? (
        <Loading />
      ) : paymentData?.data?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-4 py-2 border border-[#7abf18]">Image</th>
                <th className="px-4 py-2 border border-[#7abf18]">Product</th>
                <th className="px-4 py-2 border border-[#7abf18]">Price</th>
                <th className="px-4 py-2 border border-[#7abf18]">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentData?.data?.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    <img
                      src={payment?.img}
                      className="w-12 h-12 mx-auto rounded-full"
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {payment?.name}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {payment?.price}
                  </td>
                  {payment?.paymentConfirm ? (
                    <td className="px-4 py-2 border text-center border-[#7abf18]">
                      Paid
                    </td>
                  ) : (
                    <td className="px-4 py-2 border text-center border-[#7abf18]">
                      Unpaid
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-red-500 text-lg">No payment history found.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
