import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useDeleteCampaignMutation,
  useEditCampaignMutation,
  useGetCampaignQuery,
} from "../../../redux/EndPoints/ApiEndpoints";

// Sample data for demonstration purposes
const campaigns = [
  { id: 1, name: 'Campaign 1', startDate: '2023-07-31', endDate: '2023-08-15' },
  { id: 2, name: 'Campaign 2', startDate: '2023-08-16', endDate: '2023-09-30' },
  { id: 3, name: 'Campaign 3', startDate: '2023-09-01', endDate: '2023-09-30' },
];

const ManageCampaign = () => {
  const { data: allCampaign, isLoading } = useGetCampaignQuery();
  const [deleteCampaign, resDeleteInfo] = useDeleteCampaignMutation();
  const [editCampaign, resEditInfo] = useEditCampaignMutation();

  const [editPopup, setEditPopup] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleEdit = (campaign) => {
    // Open the edit popup and set initial values for the form
    setEditPopup(campaign);
    reset({
      name: campaign.name,
      startDate: campaign.startDate,
      endDate: campaign.endDate,
      // Add other fields as needed
    });
  };

  const handleDelete = (id) => {
    console.log("Deleting campaign with ID:", id);
    deleteCampaign(id);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Perform the editCampaign mutation with the updated data
    editCampaign({
      id: editPopup.id,
      data: data,
    });
    // Close the edit popup
    setEditPopup(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Campaigns</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td className="border p-2 text-center">{campaign.id}</td>
              <td className="border p-2 text-center">{campaign.name}</td>
              <td className="border p-2 text-center">{campaign.startDate}</td>
              <td className="border p-2 text-center">{campaign.endDate}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleEdit(campaign)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(campaign.id)}
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
            <h2 className="text-2xl font-bold mb-4">Edit Campaign</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="startDate" className="block font-medium">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  {...register("startDate", {
                    required: "Start Date is required",
                  })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.startDate && (
                  <span className="text-red-600">
                    {errors.startDate.message}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="block font-medium">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  {...register("endDate", { required: "End Date is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.endDate && (
                  <span className="text-red-600">{errors.endDate.message}</span>
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

export default ManageCampaign;
