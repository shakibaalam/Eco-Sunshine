import React from "react";
import { Link } from "react-router-dom";

const AllCampaign = ({ campaign }) => {
  const startDateParts = campaign?.startDate?.split("-");
  const endDateParts = campaign?.endDate?.split("-");

  // Create Date objects from the parsed parts
  const startDate = new Date(
    parseInt(startDateParts[0]),
    parseInt(startDateParts[1]) - 1, // Month is 0-indexed in Date objects
    parseInt(startDateParts[2])
  );

  const endDate = new Date(
    parseInt(endDateParts[0]),
    parseInt(endDateParts[1]) - 1,
    parseInt(endDateParts[2])
  );

  // Calculate the remaining days
  const timeDiff = endDate.getTime() - startDate.getTime();
  const remainingDays = Math.abs(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));

  return (
    <div className="group ">
      <div className="bg-[#f0f0f0] rounded shadow-md group-hover:hidden h-full">
        <img className=" rounded" src={campaign?.img} alt="" />
        <div className="px-5 text-[#555454] pb-5">
          <h4 className=" font-bold text-lg my-3">{campaign?.title}</h4>
          <p className="leading-5 border-b-2 border-[#b2b0b0] pb-3 h-24 overflow-hidden">
            {campaign?.des?.split(".")[0]+'.'}
          </p>
          <p className=" font-bold text-md py-2">
            <span className="text-primary">{campaign?.fund}</span> Funded
          </p>
          <p className=" flex justify-between font-bold">
            <span>- {remainingDays} Days Remaining</span>
            <span>Goals : ${campaign?.targetAmount}</span>
          </p>
        </div>
      </div>

      {/* hover part */}
      <div className="bg-[#7abf18] rounded text-white shadow-md hidden group-hover:block p-5 h-full">
        <h2 className=" text-3xl py-8">Urgent Causes</h2>
        <h4 className=" font-bold text-xl my-3">{campaign?.title}</h4>
        <p className="leading-5 border-b-2 border-[#b2b0b0] pb-3 h-24 overflow-hidden">
          {campaign?.des?.split(".")[0]}
        </p>
        <p className=" font-bold text-lg py-2">{campaign?.fund} Funded</p>
        <p className=" flex justify-between font-bold">
          <span>- {remainingDays} Days Remaining</span>
          <span>Goals : ${campaign?.targetAmount}</span>
        </p>

        <button className="w-full bg-white text-gray-800 font-bold mt-10 hover:bg-black hover:text-white text-center text-xl py-2 rounded-lg">
          <Link to={`/campaignDetails/${campaign?._id}`}>Donate Now</Link>
        </button>
      </div>
    </div>
  );
};

export default AllCampaign;
