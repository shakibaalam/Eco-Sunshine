import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useDeleteCampaignMutation,
  useEditCampaignMutation,
  useGetCampaignQuery,
} from "../../../redux/EndPoints/ApiEndpoints";
import { toast } from "react-toastify";
import Loading from "../../../shared/Loading";


const ManageCampaign = () => {
  const { data: allCampaign, isLoading, refetch } = useGetCampaignQuery();
  const [deleteCampaign, resDeleteInfo] = useDeleteCampaignMutation();
  const [editCampaign, resEditInfo] = useEditCampaignMutation();

  // console.log(allCampaign);

  const [editPopup, setEditPopup] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (resDeleteInfo?.status === "fulfilled") {
      // console.log(resDeleteInfo?.status);
      refetch();
      toast.success("Successfully deleted");
    } else if (resDeleteInfo?.status === "rejected") {
      // console.log(resDeleteInfo?.status);
      const errorMessage = resDeleteInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resDeleteInfo?.status, resDeleteInfo?.error?.data?.message, refetch]);

  useEffect(() => {
    if (resEditInfo?.status === "fulfilled") {
      // console.log(resEditInfo?.status);
      refetch();
      toast.success("Successfully edited");
    } else if (resEditInfo?.status === "rejected") {
      // console.log(resEditInfo?.status);
      const errorMessage = resEditInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resEditInfo?.status, resEditInfo?.error?.data?.message, refetch]);

  const handleEdit = (campaign) => {
    // Open the edit popup and set initial values for the form
    setEditPopup(campaign);
    reset({
      title: campaign.title,
      targetAmount: campaign.targetAmount,
      startDate: campaign.created_at,
      endDate: campaign.endDate,
      // Add other fields as needed
    });
  };

  const handleDelete = (id) => {
    // console.log("Deleting campaign with ID:", id);
    deleteCampaign(id);
  };

  const onSubmit = (data) => {
    // console.log(data);
    const formData = {
      title: data.title,
      targetAmount: data.targetAmount,
      startDate: data.created_at,
      endDate: data.endDate,
    };
    const body = {
      id: editPopup?._id,
      data: formData,
    };
    editCampaign(body);
    // Close the edit popup
    setEditPopup(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Campaigns</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-[#7abf18] p-2">Title</th>
              <th className="border border-[#7abf18] p-2">Target Amount</th>
              <th className="border border-[#7abf18] p-2">Start Date</th>
              <th className="border border-[#7abf18] p-2">End Date</th>
              <th className="border border-[#7abf18] p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCampaign?.data?.map((campaign) => (
              <tr key={campaign.id}>
                <td className="border border-[#7abf18] p-2 text-center">{campaign?.title}</td>
                <td className="border border-[#7abf18] p-2 text-center">
                  ${campaign?.targetAmount}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">
                  {campaign?.created_at}
                </td>
                <td className="border border-[#7abf18] p-2 text-center">{campaign?.endDate}</td>
                <td className="border border-[#7abf18] p-2 text-center">
                  <button
                    onClick={() => handleEdit(campaign)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Popup */}
      {editPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Campaign</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="title" className="block font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "Name is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.title && (
                  <span className="text-red-600">{errors.title.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="targetAmount" className="block font-medium">
                  Target Amount
                </label>
                <input
                  type="text"
                  id="targetAmount"
                  {...register("targetAmount", {
                    required: "Name is required",
                  })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.targetAmount && (
                  <span className="text-red-600">
                    {errors.targetAmount.message}
                  </span>
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
