import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useDeleteEventMutation,
  useEditEventMutation,
  useGetEventQuery,
} from "../../../redux/EndPoints/ApiEndpoints";

// Sample data for demonstration purposes
const events = [
  { id: 1, title: "Event 1", date: "2023-07-31", location: "Location A" },
  { id: 2, title: "Event 2", date: "2023-08-15", location: "Location B" },
  { id: 3, title: "Event 3", date: "2023-09-10", location: "Location C" },
];

const ManageEvent = () => {
  const { data: allEvent, isLoading } = useGetEventQuery();
  const [deleteEvent, resDeleteInfo] = useDeleteEventMutation();
  const [editEvent, resEditInfo] = useEditEventMutation();

  const [editPopup, setEditPopup] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleEdit = (event) => {
    // Open the edit popup and set initial values for the form
    setEditPopup(event);
    reset({
      title: event.title,
      date: event.date,
      location: event.location,
      // Add other fields as needed
    });
  };

  const handleDelete = (id) => {
    console.log("Deleting event with ID:", id);
    deleteEvent(id);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Perform the editEvent mutation with the updated data
    editEvent({
      id: editPopup.id,
      data: data,
    });
    // Close the edit popup
    setEditPopup(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="border p-2 text-center">{event.id}</td>
              <td className="border p-2 text-center">{event.title}</td>
              <td className="border p-2 text-center">{event.date}</td>
              <td className="border p-2 text-center">{event.location}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleEdit(event)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event?.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Popup */}
      {editPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Event Entry</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="title" className="block font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "Title is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.title && (
                  <span className="text-red-600">{errors.title.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block font-medium">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  {...register("date", { required: "Date is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.date && (
                  <span className="text-red-600">{errors.date.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="block font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.location && (
                  <span className="text-red-600">
                    {errors.location.message}
                  </span>
                )}
              </div>

              {/* Add other fields as needed */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditPopup(null)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEvent;
