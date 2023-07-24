import React, { useEffect, useState } from "react";
import HeadTitle from "../../shared/HeadTitle";
import AllCampaign from "../Campaign/AllCampaign";

const EcoCauses = () => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    fetch("campaign.json")
      .then((res) => res.json())
      .then((data) => setCampaign(data))
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className=" my-10">
      <HeadTitle title="ECO CAUSES" />
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-28">
        {campaign.slice(0,3).map((c, index) => (
          <AllCampaign key={index} c={c} />
        ))}
      </div>
    </div>
  );
};

export default EcoCauses;
