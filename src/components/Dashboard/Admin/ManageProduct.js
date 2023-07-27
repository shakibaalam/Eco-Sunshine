import React, { useEffect, useState } from "react";
import {
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductQuery,
} from "../../../redux/EndPoints/ApiEndpoints";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

// Sample data for demonstration purposes
const products = [
  { id: 1, name: "Product 1", price: 10, quantity: 20 },
  { id: 2, name: "Product 2", price: 15, quantity: 15 },
  { id: 3, name: "Product 3", price: 20, quantity: 10 },
];

const ManageProduct = () => {
  const { data: allProduct, isLoading } = useGetProductQuery();
  const [deleteProduct, resDeleteInfo] = useDeleteProductMutation();
  const [editProduct, resEditInfo] = useEditProductMutation();

  const [editPopup, setEditPopup] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (resDeleteInfo?.status === "fulfilled") {
      console.log(resDeleteInfo?.status);
    } else if (resDeleteInfo?.status === "rejected") {
      console.log(resDeleteInfo?.status);
      const errorMessage = resDeleteInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resDeleteInfo?.status, resDeleteInfo?.error?.data?.message]);

  useEffect(() => {
    if (resEditInfo?.status === "fulfilled") {
      console.log(resEditInfo?.status);
      toast.success("Successfully updated");
    } else if (resEditInfo?.status === "rejected") {
      console.log(resEditInfo?.status);
      const errorMessage = resEditInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resEditInfo?.status, resEditInfo?.error?.data?.message]);

  const handleDelete = (id) => {
    console.log(id);
    deleteProduct(id);
  };

  const handleEdit = (product) => {
    setEditPopup(product?.id);
    setEditedProduct(product);
  };

  const handleSaveEdit = (data) => {
    // Update the edited product data with the form data
    const updatedProduct = {
      id: editPopup.id,
      data:data
    };
    // Perform editProduct mutation with the updated product data
    editProduct(updatedProduct);
    // Close the edit popup after saving
    setEditPopup(null);
    // Reset the edited product state
    setEditedProduct(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2 text-center">ID</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Price</th>
            <th className="border p-2 text-center">Quantity</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2 text-center">{product.id}</td>
              <td className="border p-2 text-center">{product.name}</td>
              <td className="border p-2 text-center">{product.price}</td>
              <td className="border p-2 text-center">{product.quantity}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product?.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editPopup && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white w-1/2 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit(handleSaveEdit)} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter the product name"
                  className="focus:outline-none border-b border-[#7abf18]"
                  defaultValue={editedProduct?.name}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="font-medium">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter the product price"
                  className="focus:outline-none border-b border-[#7abf18]"
                  defaultValue={editedProduct?.price}
                  {...register("price", {
                    required: "Price is required",
                  })}
                />
                {errors.price && (
                  <span className="text-red-600">{errors.price.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Enter the product quantity"
                  className="focus:outline-none border-b border-[#7abf18] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  defaultValue={editedProduct?.quantity}
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                />
                {errors.quantity && (
                  <span className="text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="font-medium">
                  Photo
                </label>
                <input
                  type="file"
                  id="image"
                  className="input input-bordered"
                  {...register("image", {
                    required: "Image is required",
                  })}
                />
                {errors.image && (
                  <span className="text-red-600">{errors.image.message}</span>
                )}
              </div>

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

export default ManageProduct;
