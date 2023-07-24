import React, { useEffect, useState } from "react";
import Banner from "../shared/Banner";
import bannerImg from "../img/aboutBanner.jpg";
import AllEvent from "../components/Event/AllEvent";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Banner banner={bannerImg} title="EVENT" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-28 my-10">
        {events.map((e) => (
          <AllEvent e={e} key={e?.id} />
        ))}
      </div>
    </div>
  );
};

export default Event;
