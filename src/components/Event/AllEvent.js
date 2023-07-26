import React from "react";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllEvent = ({ e }) => {
  return (
    <div >
      <div className="relative">
        <img className=" w-full" src={e?.img1} alt="" />
        <img
          className="absolute w-20 h-20 border-8 border-white rounded-full bottom-[-16px] left-[-10px]"
          src={e?.img}
          alt=""
        />
      </div>

      <p className="flex items-center gap-1 mt-4 mb-4">
        <FaRegComment />
        {e?.comment} Comments
      </p>
      <div>
        <Link
          to={`/eventDetails/${e?._id}`}
          className=" font-bold text-[#7abf18]"
        >
          Events
        </Link>
      </div>

      <div className="grid grid-cols-6 items-center w-full gap-5 mt-4 px-4">
        <p className="col-span-1 border-r-4 border-slate-200 text-primary font-bold text-lg">
          {e?.date}
        </p>
        <h4 className=" text-lg col-span-5">{e?.name}</h4>
      </div>
    </div>
  );
};

export default AllEvent;
