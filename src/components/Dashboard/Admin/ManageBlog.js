import React from "react";

const ManageBlog = () => {
  // Sample data for demonstration purposes
  const blogs = [
    { id: 1, title: "Blog Post 1", author: "John Doe", date: "2023-07-23" },
    { id: 2, title: "Blog Post 2", author: "Jane Doe", date: "2023-07-24" },
    { id: 3, title: "Blog Post 3", author: "Mike Smith", date: "2023-07-25" },
  ];

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
              <td className="border p-2">{blog.id}</td>
              <td className="border p-2">{blog.title}</td>
              <td className="border p-2">{blog.author}</td>
              <td className="border p-2">{blog.date}</td>
              <td className="border p-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlog;
