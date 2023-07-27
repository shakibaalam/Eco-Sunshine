import React, { useEffect, useState } from "react";
import AllCampaign from "../components/Campaign/AllCampaign";
import Banner from "../shared/Banner";
import bannerImg from "../img/aboutBanner.jpg";

const Campaign = () => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    fetch("campaign.json")
      .then((res) => res.json())
      .then((data) => setCampaign(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Banner banner={bannerImg} title="CAMPAIGN" />
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-28 my-20">
        {campaign.slice(0, 3).map((c, index) => (
          <AllCampaign key={index} campaign={c} />
        ))}
      </div>
    </div>
  );
};

export default Campaign;
