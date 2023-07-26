import React, { useEffect, useState } from "react";
import HeadTitle from "../../shared/HeadTitle";
import AllCampaign from "../Campaign/AllCampaign";

const EcoCauses = () => {
  const [campaigns, setCampaign] = useState([]);

  useEffect(() => {
    fetch("campaign.json")
      .then((res) => res.json())
      .then((data) => setCampaign(data))
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className=" mt-20 ">
      <HeadTitle title="ECO CAUSES" />
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-4/5 xl:w-3/4 mx-auto">
        {campaigns.slice(0,3).map((campaign, index) => (
          <AllCampaign key={index} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default EcoCauses;
