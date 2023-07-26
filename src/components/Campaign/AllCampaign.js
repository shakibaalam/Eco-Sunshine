import React from "react";
import { Link } from "react-router-dom";

const AllCampaign = ({ campaign }) => {
  return (
    <div className="group">
      <div className="bg-[#f0f0f0] rounded shadow-md group-hover:hidden h-[490px]">
        <img className=" rounded" src={campaign?.img} alt="" />
        <div className="px-5 text-[#555454] pb-5">
          <h4 className=" font-bold text-lg my-3">{campaign?.title}</h4>
          <p className=" leading-5 border-b-2 border-[#b2b0b0] pb-3">
            {campaign?.para}
          </p>
          <p className=" font-bold text-md py-2">
            <span className="text-primary">{campaign?.fund}</span> Funded
          </p>
          <p className=" flex justify-between font-bold">
            <span>- {campaign?.days} Days Remaining</span>
            <span>Goals : {campaign?.goal}</span>
          </p>
        </div>
      </div>
      <div className="bg-[#7abf18] min-h-[490px] rounded text-white shadow-md hidden group-hover:block p-5">
        <h2 className=" text-3xl py-8">Urgent Causes</h2>
        <h4 className=" font-bold text-xl my-3">{campaign?.title}</h4>
        <p className=" leading-5 border-b-2 border-[#b2b0b0] pb-3">{campaign?.para}</p>
        <p className=" font-bold text-lg py-2">{campaign?.fund} Funded</p>
        <p className=" flex justify-between font-bold">
          <span>- {campaign?.days} Days Remaining</span>
          <span>Goals : {campaign?.goal}</span>
        </p>

        <button className="w-full bg-white text-gray-800 font-bold mt-10 hover:bg-black hover:text-white text-center text-xl py-2 rounded-lg">
          <Link to={`/campaignDetails/${campaign?._id}`}>Donate Now</Link>
        </button>
      </div>
    </div>
  );
};

export default AllCampaign;
