import React from 'react';

const UserOrder = () => {
  // Sample data for demonstration
  const orders = [
    { id: 1, date: '2023-07-23', total: 50.0, status: 'Completed' },
    { id: 2, date: '2023-07-22', total: 25.0, status: 'In Progress' },
    { id: 3, date: '2023-07-21', total: 15.0, status: 'Pending' },
    // Add more orders as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">You have not placed any orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className='bg-black text-white'>
                <th className="px-4 py-2 border border-[#7abf18]">Order ID</th>
                <th className="px-4 py-2 border border-[#7abf18]">Date</th>
                <th className="px-4 py-2 border border-[#7abf18]">Total</th>
                <th className="px-4 py-2 border border-[#7abf18]">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">{order.id}</td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">{order.date}</td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">{order.total}</td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserOrder;
