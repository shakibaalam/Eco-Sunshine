import React, { useEffect } from "react";
import {
  useDeleteEventUserMutation,
  useGetRegEventQuery,
} from "../../../redux/EndPoints/ApiEndpoints";
import Loading from "../../../shared/Loading";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const MyEvent = () => {
  const { data: regEvent, isLoading, refetch } = useGetRegEventQuery();
  const [deleteEvent, resInfo] = useDeleteEventUserMutation();
  // console.log(regEvent);

  useEffect(() => {
    if (resInfo?.status === "fulfilled") {
      // console.log(resInfo?.status);
      toast.success("Successfully deleted");
      refetch();
    } else if (resInfo?.status === "rejected") {
      const errorMessage = resInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resInfo, refetch]);

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        My Registered Events
      </h2>
      {isLoading ? (
        <Loading />
      ) : regEvent?.data?.length === 0 ? (
        <p className="text-gray-500">
          You have not registered for any events yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-4 py-2 border border-[#7abf18]">
                  Event Name
                </th>
                <th className="px-4 py-2 border border-[#7abf18]">Date</th>
                <th className="px-4 py-2 border border-[#7abf18]">Time</th>
                <th className="px-4 py-2 border border-[#7abf18]">Location</th>
                <th className="px-4 py-2 border border-[#7abf18]">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {regEvent?.data?.map((event) => (
                <tr key={event?._id}>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event?.title}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event?.date}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event?.time}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event.location}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    <AiFillDelete
                      onClick={() => handleDelete(event?._id)}
                      className="mx-auto text-red-500 cursor-pointer"
                    />
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

export default MyEvent;
