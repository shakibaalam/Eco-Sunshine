import React from "react";
import {
  useDeleteCartMutation,
  useGetCartQuery,
} from "../../redux/EndPoints/ApiEndpoints";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../../shared/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const UserOrder = () => {
  const { data: allCartOfUser, isLoading, refetch } = useGetCartQuery();
  const [deleteCart, resInfo] = useDeleteCartMutation();

  const [totalPrice, setTotal] = useState();

  console.log(allCartOfUser);

  useEffect(() => {
    if (allCartOfUser?.data?.length > 0) {
      const total = allCartOfUser?.data?.reduce(
        (total, order) => total + parseFloat(order?.price),
        0
      );
      setTotal(total);
    }
  }, [allCartOfUser?.data]);

  useEffect(() => {
    if (resInfo?.status === "fulfilled") {
      console.log(resInfo?.status);
      toast.success("Successfully deleted");
      refetch();
    } else if (resInfo?.status === "rejected") {
      const errorMessage = resInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resInfo, refetch]);

  const handleDelete = (id) => {
    deleteCart(id);
  };
  const handlePay = () => {
   
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">My Orders</h2>
      {allCartOfUser?.data?.length === 0 ? (
        <p className="text-gray-500">You have not placed any orders yet.</p>
      ) : isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-2 border border-[#7abf18]">Image</th>
                  <th className="px-4 py-2 border border-[#7abf18]">Name</th>
                  <th className="px-4 py-2 border border-[#7abf18]">Price</th>
                  <th className="px-4 py-2 border border-[#7abf18]">Action</th>
                </tr>
              </thead>
              <tbody>
                {allCartOfUser?.data?.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-2 border text-center border-[#7abf18]">
                      <img
                        src={order?.img}
                        className="w-12 h-12 mx-auto rounded-full"
                        alt=""
                      />
                    </td>
                    <td className="px-4 py-2 border text-center border-[#7abf18]">
                      {order?.name}
                    </td>
                    <td className="px-4 py-2 border text-center border-[#7abf18]">
                      {order?.price}
                    </td>
                    <td className="px-4 py-2 border text-center border-[#7abf18]">
                      <AiFillDelete
                        onClick={() => handleDelete(order?._id)}
                        className="mx-auto text-red-500 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan="2"
                    className="px-4 py-2 border text-center border-[#7abf18] font-semibold"
                  >
                    Total Price:
                  </td>
                  <td
                    colSpan="2"
                    className="px-4 py-2 border text-center border-[#7abf18] font-semibold"
                  >
                    {totalPrice} {/* Display the total price */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" text-right mt-5">
            <button onClick={handlePay} className="bg-[#7abf18] px-6 py-2 rounded font-bold text-white">Pay now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrder;
