import React, { useEffect } from "react";
import {
  useGetAllUserQuery,
  useUserRoleMutation,
} from "../../../redux/EndPoints/ApiEndpoints";
import { toast } from "react-toastify";
import Loading from "../../../shared/Loading";

// Sample data for demonstration purposes
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
  { id: 2, name: "Jane Doe", email: "jane@example.com", role: "Admin" },
  { id: 3, name: "Mike Smith", email: "mike@example.com", role: "User" },
];

const ManageUser = () => {
  const { data: allUser, isLoading, refetch } = useGetAllUserQuery();
  const [changeRole, resInfo] = useUserRoleMutation();
  console.log(allUser);

  useEffect(() => {
    if (resInfo?.status === "fulfilled") {
      console.log(resInfo?.status);
      refetch();
      toast.success("Successfully make user admin");
    } else if (resInfo?.status === "rejected") {
      console.log(resInfo?.status);
      const errorMessage = resInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resInfo?.status, resInfo?.error?.data?.message, refetch]);

  const makeAdmin = (id) => {
    const data = {
      id,
      role: "ADMIN",
    };
    changeRole(data);
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.data?.map((user) => (
              <tr key={user.id}>
                <td className="border p-2 text-center">{user?._id}</td>
                <td className="border p-2 text-center">{user?.name}</td>
                <td className="border p-2 text-center">{user?.email}</td>
                <td className="border p-2 text-center">{user?.role}</td>
                <td className="border p-2 text-center">
                  {user?.role === "USER" && (
                    <button
                      onClick={() => makeAdmin(user?._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role === "Super admin" && (
                    <button
                      //onClick={() => makeAdmin(user.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUser;
