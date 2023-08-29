import React from "react";
import { Link } from "react-router-dom";

const NavPart = ({ selectedLink, user, signOut, setPopup, mbl }) => {
  return (
    <div
      className={`flex bg-[#7abf18] mx-auto py-5 font-semibold uppercase  ${
        mbl
          ? "flex-col items-end w-full px-4 "
          : " lg:w-[90%] xl:w-[85%] justify-around items-center relative rounded-sm"
      }`}
    >
      <Link
        to="/"
        className={selectedLink === "" ? "text-white font-bold" : ""}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={
          selectedLink === "about" ? "text-white font-bold" : ""
        }
      >
        About
      </Link>
      <Link
        to="/blog"
        className={
          selectedLink === "blog" ? "text-white font-bold" : ""
        }
      >
        Blog
      </Link>
      <Link
        to="/events"
        className={
          selectedLink === "events" ? "text-white font-bold" : ""
        }
      >
        Events
      </Link>
      <Link
        to="/campaign"
        className={
          selectedLink === "campaign" ? "text-white font-bold" : ""
        }
      >
        Campaign & Causes
      </Link>
      <Link
        to="/product"
        className={
          selectedLink === "product" ? "text-white font-bold" : ""
        }
      >
        Shop
      </Link>

      {user && (
        <Link
          to={`/dashboard/${
            user?.role === "USER" ? "my-order" : "manage-order"
          }`}
          className=""
        >
          Dashboard
        </Link>
      )}

      {user && <span className="">{user?.name}</span>}

      {user ? (
        <div className="">
          <button onClick={signOut} className="px-4 py-2 rounded uppercase">
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className={
            selectedLink === "signup" || selectedLink === "login"
              ? "text-white font-bold"
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
    </div>
  );
};

export default NavPart;
