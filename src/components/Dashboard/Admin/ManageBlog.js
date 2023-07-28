import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useDeleteBlogMutation,
  useEditBlogMutation,
  useGetBlogQuery,
} from "../../../redux/EndPoints/ApiEndpoints";
import { toast } from "react-toastify";
import Loading from "../../../shared/Loading";

// Sample data for demonstration purposes
const blogs = [
  { id: 1, title: "Blog Post 1", author: "John Doe", date: "2023-07-23" },
  { id: 2, title: "Blog Post 2", author: "Jane Doe", date: "2023-07-24" },
  { id: 3, title: "Blog Post 3", author: "Mike Smith", date: "2023-07-25" },
];

const ManageBlog = () => {
  const { data: allBlog, isLoading, refetch } = useGetBlogQuery();
  const [deleteBlog, resDeleteInfo] = useDeleteBlogMutation();
  const [editBlog, resEditInfo] = useEditBlogMutation();

  // console.log(allBlog);

  const [editPopup, setEditPopup] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (resDeleteInfo?.status === "fulfilled") {
      console.log(resDeleteInfo?.status);
      refetch();
      toast.success("Successfully deleted");
    } else if (resDeleteInfo?.status === "rejected") {
      console.log(resDeleteInfo?.status);
      const errorMessage = resDeleteInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resDeleteInfo?.status, resDeleteInfo?.error?.data?.message, refetch]);

  useEffect(() => {
    if (resEditInfo?.status === "fulfilled") {
      console.log(resEditInfo?.status);
      refetch();
      toast.success("Successfully edited");
    } else if (resEditInfo?.status === "rejected") {
      console.log(resEditInfo?.status);
      const errorMessage = resEditInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resEditInfo?.status, resEditInfo?.error?.data?.message, refetch]);

  const handleEdit = (blog) => {
    // Open the edit popup and set initial values for the form
    setEditPopup(blog);
    reset({
      name: blog?.name,
      author: blog.author,
      des: blog.des,
      // Add other fields as needed
    });
  };

  const handleDelete = (id) => {
    console.log("Deleting blog with ID:", id);
    deleteBlog(id);
  };

  const onSubmit = (data) => {
    const imgFile = data?.image;
    const imageUrl = URL.createObjectURL(imgFile[0]);
    // console.log(editPopup);
    const formData = {
      name: data?.name,
      author: data?.author,
      des: data?.des,
      img: imageUrl,
    };
    const body = {
      id: editPopup?._id,
      data: formData,
    };
    // Perform the editBlog mutation with the updated data
    editBlog(body);
    // Close the edit popup
    setEditPopup(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBlog?.data?.map((blog) => (
              <tr key={blog?._id}>
                <td className="border p-2 text-center">{blog?._id}</td>
                <td className="border p-2 text-center">{blog?.title}</td>
                <td className="border p-2 text-center">{blog?.author}</td>
                <td className="border p-2 text-center">{blog?.date}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog?._id)}
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
            <h2 className="text-2xl font-bold mb-4">Edit Blog Entry</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Title is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.title && (
                  <span className="text-red-600">{errors.title.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block font-medium">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  {...register("author", { required: "Author is required" })}
                  className="focus:outline-none w-full border-b border-[#7abf18]"
                />
                {errors.author && (
                  <span className="text-red-600">{errors.author.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="des" className="block font-medium">
                  Content
                </label>
                <textarea
                  id="des"
                  rows="6"
                  className="focus:outline-none w-full border p-2 border-[#7abf18] resize-none ecoScroll"
                  {...register("des", {
                    required: "Content is required",
                  })}
                />
                {errors.content && (
                  <span className="text-red-600">{errors.content.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block font-medium">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="input input-bordered"
                  {...register("image", {
                    required: "Image is required",
                  })}
                />
                {errors.img && (
                  <span className="text-red-600">{errors.img.message}</span>
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

export default ManageBlog;
