import React from "react";
import { Link } from "react-router-dom";

const AllCampaign = ({ c }) => {
  return (
    <div className="group">
      <div className="bg-[#f0f0f0] rounded shadow-md group-hover:hidden min-h-[460px]">
        <img className=" rounded" src={c.img} alt="" />
        <div className="px-5 text-[#555454] pb-5">
          <h4 className=" font-bold text-xl my-3">{c.title}</h4>
          <p className=" leading-7 border-b-2 border-[#b2b0b0] pb-3">
            {c.para}
          </p>
          <p className=" font-bold text-lg py-2">
            <span className="text-primary">{c.fund}</span> Funded
          </p>
          <p className=" flex justify-between font-bold">
            <span>- {c.days} Days Remaining</span>
            <span>Goals : {c.goal}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#7abf18] h-[460px] rounded text-white shadow-md hidden group-hover:block p-5">
        <h2 className=" text-3xl py-10">Urgent Causes</h2>
        <h4 className=" font-bold text-xl my-3">{c.title}</h4>
        <p className=" leading-7 border-b-2 border-[#b2b0b0] pb-3">{c.para}</p>
        <p className=" font-bold text-lg py-2">{c.fund} Funded</p>
        <p className=" flex justify-between font-bold">
          <span>- {c.days} Days Remaining</span>
          <span>Goals : {c.goal}</span>
        </p>

        <button className="w-full bg-white text-gray-800 font-bold mt-10 hover:bg-black hover:text-white text-center text-xl py-2 rounded-lg">
          <Link to={`/campaignDetails/${c?._id}`}>Donate Now</Link>
        </button>
      </div>
    </div>
  );
};

export default AllCampaign;
