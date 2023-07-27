import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useDeleteBlogMutation,
  useEditBlogMutation,
  useGetBlogQuery,
} from "../../../redux/EndPoints/ApiEndpoints";

// Sample data for demonstration purposes
const blogs = [
  { id: 1, title: "Blog Post 1", author: "John Doe", date: "2023-07-23" },
  { id: 2, title: "Blog Post 2", author: "Jane Doe", date: "2023-07-24" },
  { id: 3, title: "Blog Post 3", author: "Mike Smith", date: "2023-07-25" },
];

const ManageBlog = () => {
  const { data: allBlog, isLoading } = useGetBlogQuery();
  const [deleteBlog, resDeleteInfo] = useDeleteBlogMutation();
  const [editBlog, resEditInfo] = useEditBlogMutation();

  const [editPopup, setEditPopup] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleEdit = (blog) => {
    // Open the edit popup and set initial values for the form
    setEditPopup(blog);
    reset({
      title: blog.title,
      author: blog.author,
      content: blog.content,
      // Add other fields as needed
    });
  };

  const handleDelete = (id) => {
    console.log("Deleting blog with ID:", id);
    deleteBlog(id);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Perform the editBlog mutation with the updated data
    editBlog({
      id: editPopup.id,
      data: data,
    });
    // Close the edit popup
    setEditPopup(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
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
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="border p-2 text-center">{blog.id}</td>
              <td className="border p-2 text-center">{blog.title}</td>
              <td className="border p-2 text-center">{blog.author}</td>
              <td className="border p-2 text-center">{blog.date}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
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
            <h2 className="text-2xl font-bold mb-4">Edit Blog Entry</h2>
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
                <label htmlFor="content" className="block font-medium">
                  Content
                </label>
                <textarea
                  id="content"
                  rows="6"
                  className="focus:outline-none w-full border p-2 border-[#7abf18] resize-none ecoScroll"
                  {...register("content", {
                    required: "Content is required",
                  })}
                />
                {errors.content && (
                  <span className="text-red-600">{errors.content.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="img" className="block font-medium">
                  Image
                </label>
                <input
                  type="file"
                  id="img"
                  className="input input-bordered"
                  {...register("img", {
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
