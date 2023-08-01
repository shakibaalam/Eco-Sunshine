import React, { useState } from "react";
import Banner from "../../shared/Banner";
import bannerImg from "../../img/aboutBanner.jpg";
import Donation from "../../shared/Donation";
import { useParams } from "react-router-dom";
import { useGetCampaignByIdQuery } from "../../redux/EndPoints/ApiEndpoints";
import { formatDateTime } from "../../shared/FormatDateTime";
import Loading from "../../shared/Loading";

const CampaignDetails = () => {
  const { id } = useParams();
  const { data: campaignById, isLoading } = useGetCampaignByIdQuery(id);
  const { formattedDate, formattedTime } = formatDateTime(
    campaignById?.endDate
  );
  // console.log(campaignById);
  return (
    <div>
      <Banner banner={bannerImg} title={campaignById?.title} />
      <div className="lg:w-[80%] mx-auto my-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="relative">
              <img src={campaignById?.img} className="w-full h-full" alt="" />
              <h4 className="absolute bg-[#7abf18] text-white text-xl p-4 top-0">
                {formattedDate}
              </h4>
            </div>

            <div className=" flex justify-around mt-2 text-2xl font-bold text-primary">
              <p>
                ${campaignById?.targetAmount} <br />
                Target
              </p>
              <p>
                $1000 <br />
                Received
              </p>
              <p>
                10 <br />
                Donators
              </p>
            </div>

            <h4 className="mb-3 mt-10 text-2xl">{campaignById?.title}</h4>

            <p className="mb-10">{campaignById?.des}</p>
          </div>
        )}

        {/* donation part */}
        <Donation id={campaignById?._id} />
      </div>
    </div>
  );
};

export default CampaignDetails;
