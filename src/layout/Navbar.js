import React, { useEffect, useState } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption";
import { GrSkype } from "@react-icons/all-files/gr/GrSkype";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { Link, useLocation, useNavigate } from "react-router-dom";
import donateBg from "../img/donate-bg.jpg";
import logo from "../img/logo.png";
import Donation from "../shared/Donation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/Slice/authSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedLink, setSelectedLink] = useState("");
  const [isPopup, setPopup] = useState(false);
  const [isSignUpSelected, setIsSignUpSelected] = useState(false);
  const [isRegisterSelected, setIsRegisterSelected] = useState(false);

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
    const currentPath = location.pathname;
    setSelectedLink(currentPath.slice(1));

    setIsSignUpSelected(currentPath.slice(1) === "signup");
    setIsRegisterSelected(currentPath.slice(1) === "login");
  }, [location]);

  // Function to handle logout
  const signOut = () => {
    dispatch(logOut());
    // navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <div className="">
      <div className=" flex justify-between lg:mx-44 py-5">
        <div className=" flex items-center gap-5">
          <img className="w-16 h-16 rounded-full" src={logo} alt="" />
          <h1 className="text-3xl  font-bold ">
            ECO <span className="text-primary">SUNSHINE</span>
          </h1>
          <span className=" flex items-center gap-2 border-l-2 pl-2 border-[#7abf18]">
            <BsSearch className="text-primary cursor-pointer" />
            <input
              type="text"
              placeholder="i'm searching for..."
              className="px-2 border-none focus:outline-none border-b border-gray-400"
            />
          </span>
        </div>
        <div className=" flex items-center gap-5 text-[#777] cursor-pointer">
          <div className=" flex items-center gap-5 border-l-2 border-r-2 px-2 border-[#7abf18]">
            <FaFacebookF className=" hover:text-[#7abf18]" />
            <GrLinkedinOption className=" hover:text-[#7abf18]" />
            <GrSkype className=" hover:text-[#7abf18]" />
            <GrTwitter className=" hover:text-[#7abf18]" />
          </div>
          <span>
            <FaShoppingCart className=" hover:text-[#7abf18]" />
          </span>
        </div>
      </div>
      <nav className="bg-[#7abf18] uppercase lg:mx-44 py-4 text-white flex justify-around items-center relative z-10">
        <Link
          to="/"
          className={
            selectedLink === "" ? "bg-black text-white px-4 py-2 rounded" : ""
          }
        >
          Home
        </Link>
        <Link
          to="/about"
          className={
            selectedLink === "about"
              ? " bg-black text-white px-4 py-2 rounded"
              : ""
          }
        >
          About
        </Link>
        <Link
          to="/blog"
          className={
            selectedLink === "blog"
              ? "bg-black text-white px-4 py-2 rounded"
              : ""
          }
        >
          Blog
        </Link>
        <Link
          to="/events"
          className={
            selectedLink === "events"
              ? "bg-black text-white px-4 py-2 rounded"
              : ""
          }
        >
          Events
        </Link>
        <Link
          to="/campaign"
          className={
            selectedLink === "campaign"
              ? "bg-black text-white px-4 py-2 rounded"
              : ""
          }
        >
          Campaign & Causes
        </Link>
        <Link
          to="/product"
          className={
            selectedLink === "product"
              ? "bg-black text-white px-4 py-2 rounded"
              : ""
          }
        >
          Shop
        </Link>

        {user && <Link to="/dashboard/my-order">Dashboard</Link>}

        {user && <span className="">{user?.name}</span>}

        {user ? (
          <div className=" ">
            <button onClick={signOut} className=" px-4 py-2 rounded uppercase">
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className={
              isSignUpSelected || isRegisterSelected
                ? "bg-black text-white px-4 py-2 rounded"
                : ""
            }
          >
            Login / Sign Up
          </Link>
        )}
        <button
          onClick={() => setPopup(true)}
          className="bg-white rounded-lg uppercase text-primary px-8 py-2 hover:bg-black"
        >
          Donate
        </button>
      </nav>

      {isPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <div className="bg-[#7abf18] text-white w-full flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold">DONATE </h2>
              <FaWindowClose
                className=" cursor-pointer"
                onClick={() => setPopup(false)}
              />
            </div>
            <Donation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
