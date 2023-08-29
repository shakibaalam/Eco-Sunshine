import React from "react";
import Loading from "../../../shared/Loading";
import { useGetAllRegEventQuery } from "../../../redux/EndPoints/ApiEndpoints";

const AllRegEvent = () => {
  const { data: allRegEvent, isLoading, refetch } = useGetAllRegEventQuery();
  console.log(allRegEvent);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      {isLoading ? (
        <Loading />
      ) : allRegEvent?.data?.length < 1 ? (
        <p className="text-gray-500">No one registered for any events yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-[#7abf18] p-2">User</th>
              <th className="border border-[#7abf18] p-2">Title</th>
              <th className="border border-[#7abf18] p-2">Date</th>
              <th className="border border-[#7abf18] p-2">Location</th>
              <th className="border border-[#7abf18] p-2">Time</th>
              {/* <th className="border border-[#7abf18] p-2">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {allRegEvent?.data?.map((event) => (
              <tr key={event?._id}>
                <td className="border border-[#7abf18] p-2 text-center capitalize">
                  {event?.name}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {event?.title}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {event?.date}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {event?.location}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {event?.time}
                </td>
                {/* <td className="border border-[#7abf18] p-2 text-center">
                  <button
                    onClick={() => handleDelete(event?._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllRegEvent;
