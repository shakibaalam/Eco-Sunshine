import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [selectedSubmenu, setSelectedSubmenu] = useState("my-order"); // Set default submenu here

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedSubmenu(currentPath.split("/dashboard/")[1] || "my-order"); // Update default value if needed
  }, [location]);

  return (
    <div className="flex">
      {/* Left Sidebar with Submenus */}
      <div className="bg-[#e1f1cb] h-screen w-64 px-4 py-8 text-[#7abf18]">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-2">
          {/* Submenu Items */}
          <li>
            <NavLink
              to="/dashboard/my-order"
              className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                selectedSubmenu === "my-order" ? "bg-white text-[#7abf18]" : ""
              }`}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-donation"
              className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                selectedSubmenu === "my-donation"
                  ? "bg-white text-[#7abf18]"
                  : ""
              }`}
            >
              My Donations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/attended-events"
              className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                selectedSubmenu === "attended-events"
                  ? "bg-white text-[#7abf18]"
                  : ""
              }`}
            >
              Attended Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/event-registration"
              className={`block py-2 px-4 rounded hover:bg-white hover:text-[#7abf18] ${
                selectedSubmenu === "event-registration"
                  ? "bg-white text-[#7abf18]"
                  : ""
              }`}
            >
              Event Registration
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Right Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
