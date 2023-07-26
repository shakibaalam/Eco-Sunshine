import React from 'react';

const ManageOrder = () => {
  // Sample data for demonstration purposes
  const orders = [
    { id: 1, orderNumber: 'ORD12345', date: '2023-07-31', status: 'Pending' },
    { id: 2, orderNumber: 'ORD54321', date: '2023-08-15', status: 'Shipped' },
    { id: 3, orderNumber: 'ORD98765', date: '2023-09-10', status: 'Delivered' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Order Number</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.orderNumber}</td>
              <td className="border p-2">{order.date}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
