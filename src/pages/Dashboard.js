import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import { useSelector } from "react-redux";
import { FaStepBackward } from "react-icons/fa";

const Dashboard = () => {
  const location = useLocation();
  const [selectedSubmenu, setSelectedSubmenu] = useState("my-order");

  const user = useSelector((state) => {
    const userData = state.auth.user;
    try {
      return JSON.parse(userData);
    } catch (error) {
      return userData;
    }
  });

  //console.log(user);

  useEffect(() => {
    const currentPath = location?.pathname;
    setSelectedSubmenu(currentPath?.split("/dashboard/")[1] || "my-order");
  }, [location]);

  return (
    <div className="flex">
      {/* Left Sidebar with Submenus */}
      <div className="bg-[#e1f1cb] h-screen overflow-y-auto ecoScroll w-64 px-4 py-8 text-[#7abf18]">
        <div className="flex items-center gap-4">
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
          <h1 className="text-xl font-bold ">
            ECO <span className="text-primary">SUNSHINE</span>
          </h1>
        </div>
        {/* <h2 className="text-2xl font-semibold mb-6">Dashboard</h2> */}
        <ul className="space-y-2 mt-10">
          {/* Submenu Items */}
          {user?.role === "USER" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/my-order"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "my-order"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  My Orders
                </NavLink>
              </li>
              <li>
                {/* <NavLink
                  to="/dashboard/my-donation"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "my-donation"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  My Donations
                </NavLink> */}
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-event"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "my-event"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Registered Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "payment-history"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          {user?.role === "ADMIN" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manage-order"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "manage-order"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Manage Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-user"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "manage-user"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/registered-event"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "registered-event"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Registered Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-blog"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "manage-blog"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Manage Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-product"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "manage-product"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Manage Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manage-event"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "manage-event"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Manage Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-campaign"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "manage-campaign"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Manage Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-product"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "add-product"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-blog"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "add-blog"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Add Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-event"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "add-event"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Add Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-campaign"
                  className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                    selectedSubmenu === "add-campaign"
                      ? "bg-white text-[#7abf18]"
                      : ""
                  }`}
                >
                  Add Campaign
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/"
              className={` py-2 px-4 bg-black rounded flex gap-2 items-center hover:bg-white hover:text-[#7abf18]`}
            >
              <FaStepBackward /> Back to Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Right Content */}
      <div className="flex-1 p-8 h-screen overflow-y-auto ecoScroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
