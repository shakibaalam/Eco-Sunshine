import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBlogs = ({ b }) => {
  return (
    <div key={b._id} className=" shadow-lg shadow-[#79bf1856]">
      <div className="relative w-full h-[200px] overflow-hidden rounded group">
        <img className="w-full  rounded" src={b?.img} alt="" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#7abf18] bg-opacity-50 rounded">
          <Link
            to={`/blogDetails/${b?._id}`}
            className="bg-white px-6 py-2 font-bold text-[#7abf18]"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-6 items-center w-full gap-5 mt-4 px-4">
        <p className="col-span-1 border-r-4 border-slate-200 text-primary font-bold text-lg">
          {b?.date}
        </p>
        <h4 className=" text-lg col-span-5">{b?.name}</h4>
      </div>
      <div className="flex gap-10 items-center my-2 font-semibold px-4">
        <p className="flex items-center gap-1">
          <BsFillEyeFill />
          {b?.views} Views
        </p>
        <p className="flex items-center gap-1">
          <FaRegComment />
          {b?.comments} Comments
        </p>
      </div>

      <p className=" text-justify px-4 pb-4">{b?.des}</p>
    </div>
  );
};

export default AllBlogs;
