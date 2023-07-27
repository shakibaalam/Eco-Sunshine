import React from "react";

// Sample data for demonstration purposes
const orders = [
  { id: 1, orderNumber: "ORD12345", date: "2023-07-31", status: "Pending" },
  { id: 2, orderNumber: "ORD54321", date: "2023-08-15", status: "Shipped" },
  { id: 3, orderNumber: "ORD98765", date: "2023-09-10", status: "Delivered" },
];

const ManageOrder = () => {
  // const { data: allEvent, isLoading } = useGetCampaignQuery();
  // const [eventProduct, resEventInfo] = useDeleteEventMutation();
  // const [editEvent, resEditInfo] = useEditEventMutation();

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
              <td className="border p-2 text-center">{order.id}</td>
              <td className="border p-2 text-center">{order.orderNumber}</td>
              <td className="border p-2 text-center">{order.date}</td>
              <td className="border p-2 text-center">
                {order?.paid ? (
                  <button
                    //onClick={() => handlePending(order)}
                    className="btn btn-xs btn-success text-white"
                  >
                    {order?.status ? order?.status : "pending"}
                  </button>
                ) : (
                  <button className="btn btn-error btn-xs text-white">
                    UnPaid
                  </button>
                )}
              </td>
              <td className="border p-2 text-center">
                {!order.paid && (
                  <button
                    //onClick={() => setCancel(order)}
                    className=" text-red-500 px-2 py-1 rounded mr-2"
                  >
                    Cancel
                  </button>
                )}
                {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
