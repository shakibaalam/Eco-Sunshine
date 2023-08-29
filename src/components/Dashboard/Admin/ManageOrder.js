import React from "react";
import { useGetPaymentAdminQuery } from "../../../redux/EndPoints/ApiEndpoints";
import Loading from "../../../shared/Loading";
import { formatDateTime } from "../../../shared/FormatDateTime";

// Sample data for demonstration purposes
const orders = [
  { id: 1, orderNumber: "ORD12345", date: "2023-07-31", status: "Pending" },
  { id: 2, orderNumber: "ORD54321", date: "2023-08-15", status: "Shipped" },
  { id: 3, orderNumber: "ORD98765", date: "2023-09-10", status: "Delivered" },
];

const ManageOrder = () => {
  const { data: allPayment, isLoading } = useGetPaymentAdminQuery();
  // const [eventProduct, resEventInfo] = useDeleteEventMutation();
  // const [editEvent, resEditInfo] = useEditEventMutation();

 

  console.log(allPayment);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>

      {isLoading ? (
        <Loading />
      ) : allPayment?.data?.length < 1 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-[#7abf18] p-2">User</th>
              <th className="border border-[#7abf18] p-2">Product</th>
              <th className="border border-[#7abf18] p-2">Price</th>
              <th className="border border-[#7abf18] p-2">Status</th>
              <th className="border border-[#7abf18] p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allPayment?.data?.map((order) => (
              <tr key={order?._id}>
                <td className="border border-[#7abf18] p-2 text-center">
                  {order?.user}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {order?.name}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {order?.price}
                </td>
                
                <td className="border border-[#7abf18] p-2 text-center">
                  {order?.paymentConfirm  ? (
                    <button
                      //onClick={() => handlePending(order)}
                      className="btn btn-xs btn-success "
                    >
                      Paid
                    </button>
                  ) : (
                    <button className="btn btn-error btn-xs ">
                      UnPaid
                    </button>
                  )}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {order?.paymentConfirm && (
                    <button
                      //onClick={() => setCancel(order)}
                      className=" text-red-500 px-2 py-1 rounded mr-2"
                    >
                      Shipped
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
      )}
    </div>
  );
};

export default ManageOrder;
