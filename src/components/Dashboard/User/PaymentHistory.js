import React from "react";

const PaymentHistory = () => {
  // Sample data for demonstration
  const paymentHistory = [
    { id: 1, date: "2023-07-23", amount: 50.0, status: "Completed" },
    { id: 2, date: "2023-07-22", amount: 25.0, status: "Completed" },
    { id: 3, date: "2023-07-21", amount: 15.0, status: "Failed" },
    // Add more payment history entries as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Payment History</h2>
      {paymentHistory.length === 0 ? (
        <p className="text-gray-500">No payment history found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-4 py-2 border border-[#7abf18]">Transaction ID</th>
                <th className="px-4 py-2 border border-[#7abf18]">Date</th>
                <th className="px-4 py-2 border border-[#7abf18]">Amount</th>
                <th className="px-4 py-2 border border-[#7abf18]">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {payment.id}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {payment.date}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {payment.amount}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
