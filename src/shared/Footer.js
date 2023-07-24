import React, { useEffect, useState } from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="bg-[#1e1e1e] p-10 text-gray-200 flex gap-5 justify-around">
      <div>
        <h2 className="mb-10 text-lg font-bold ">ABOUT ECO SUNSHINE</h2>
        <p className="flex gap-2 items-center ">
          <MdCall className="w-5 h-5" /> 0800 - 3277 - 2808
        </p>
        <p className="flex gap-2 items-center my-2">
          <MdEmail className="w-5 h-5" />
          shakibaalam092@gmail.com
        </p>

        <div className="flex gap-2 items-center mt-5">
          <FaFacebookF className=" border-2 border-gray-200 p-1 rounded-full w-7 h-7 text-gray-200" />
          <FaTwitter className=" border-2 border-gray-200 p-1 rounded-full w-7 h-7 text-gray-200" />
          <FaGoogle className=" border-2 border-gray-200 p-1 rounded-full w-7 h-7 text-gray-200" />
          <FaLinkedinIn className=" border-2 border-gray-200 p-1 rounded-full w-7 h-7 text-gray-200" />
        </div>
      </div>

      {/* 2nd */}
      <div>
        <h2 className="mb-10 text-lg font-bold ">RECENT BLOG</h2>
        <div >
          {blogs.slice(0, 3).map((b) => (
            <div key={b?.id} className="flex gap-5 mb-3">
              <img src={b?.img} className="w-20 h-16" alt="" />
              <div>
                <p>{b?.date}</p>
                <p>{b?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3rd */}
      <div>
        <h2 className="mb-10 text-lg font-bold ">BLOG CATEGORIES</h2>
        <ul className=" flex flex-col gap-4">
          <li className=" hover:text-[#7abf18] cursor-pointer">Campaign</li>
          <li className=" hover:text-[#7abf18] cursor-pointer">Nature</li>
          <li className=" hover:text-[#7abf18] cursor-pointer">Planning</li>
          <li className=" hover:text-[#7abf18] cursor-pointer">Planting</li>
          <li className=" hover:text-[#7abf18] cursor-pointer">
            Social Energy
          </li>
        </ul>
      </div>

      {/* 4th */}
      <div>
        <h2 className="mb-10 text-lg font-bold ">INFORMATION</h2>

        <div className=" flex flex-col gap-4">
          <p>Registration</p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
