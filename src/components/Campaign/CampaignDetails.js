import React, { useState } from "react";
import Banner from "../../shared/Banner";
import bannerImg from "../../img/aboutBanner.jpg";
import Donation from "../../shared/Donation";

const CampaignDetails = () => {
  return (
    <div>
      <Banner
        banner={bannerImg}
        title="PLANTS SAVING LIFE PROVIDING FRESH AIR"
      />
      <div className="lg:w-[80%] mx-auto my-10">
        {/* donation part */}
        <Donation />
      </div>
    </div>
  );
};

export default CampaignDetails;
