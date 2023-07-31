import React from "react";

const MyDonation = () => {
  // Sample data for demonstration
  const donations = [
    { id: 1, date: "2023-07-23", amount: 50.0, status: "Completed" },
    { id: 2, date: "2023-07-22", amount: 25.0, status: "In Progress" },
    { id: 3, date: "2023-07-21", amount: 15.0, status: "Pending" },
    // Add more donations as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">My Donations</h2>
      {donations.length === 0 ? (
        <p className="text-gray-500">You have not made any donations yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse  w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-[#7abf18]">Donation ID</th>
                <th className="px-4 py-2 border border-[#7abf18]">Date</th>
                <th className="px-4 py-2 border border-[#7abf18]">Amount</th>
                <th className="px-4 py-2 border border-[#7abf18]">Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-4 py-2 border border-[#7abf18] text-center">{donation.id}</td>
                  <td className="px-4 py-2 border border-[#7abf18] text-center">{donation.date}</td>
                  <td className="px-4 py-2 border border-[#7abf18] text-center">{donation.amount}</td>
                  <td className="px-4 py-2 border border-[#7abf18] text-center">{donation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyDonation;
