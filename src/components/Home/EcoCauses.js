import React, { useEffect, useState } from "react";
import HeadTitle from "../../shared/HeadTitle";
import AllCampaign from "../Campaign/AllCampaign";
import { useGetCampaignQuery } from "../../redux/EndPoints/ApiEndpoints";
import Loading from "../../shared/Loading";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EcoCauses = () => {
  // const [campaigns, setCampaign] = useState([]);
  const { data: allCampaign, isLoading } = useGetCampaignQuery();

  // console.log(allCampaign);
  const reversedCampaign = allCampaign?.data?.slice().reverse();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/campaign`);
  };
  return (
    <div className=" my-20 ">
      <HeadTitle title="ECO CAUSES" />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="lg:w-[90%] xl:w-[85%] mx-auto">
          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
            {reversedCampaign?.slice(0, 3).map((campaign, index) => (
              <AllCampaign key={index} campaign={campaign} />
            ))}
          </div>

          <div className="flex items-center justify-end  mt-4 ">
            <button
              onClick={handleNavigate}
              className="bg-[#7abf18] flex items-center gap-2 justify-end rounded uppercase text-white hover:text-[#7abf18] px-6 py-1 hover:bg-black"
            >
              See more <BsArrowRightCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcoCauses;
