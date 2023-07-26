import React, { useEffect, useState } from "react";
import eventImg from "../../img/eco_events_img.jpg";
import HeadTitle from "../../shared/HeadTitle";
import Events from "./Events";

const LatestEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-20">
      <HeadTitle title="LATEST EVENTS" />

      <div className="flex items-center lg:w-4/5 xl:w-3/4 mx-auto my-10">
        <img src={eventImg} alt="" />
        <div className=" relative ">
          {events.slice(0, 4).map((e) => (
            <Events key={e._id} e={e}></Events>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestEvent;
