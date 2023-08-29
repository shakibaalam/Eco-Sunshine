import React, { useEffect, useState } from "react";
import eventImg from "../../img/eco_events_img.jpg";
import HeadTitle from "../../shared/HeadTitle";
import Events from "./Events";
import { useGetEventQuery } from "../../redux/EndPoints/ApiEndpoints";
import Loading from "../../shared/Loading";

const LatestEvent = () => {
  const [events, setEvents] = useState([]);
  const { data: allEvents, isLoading } = useGetEventQuery();
  //console.log(allEvents);

  const reversedEvents = allEvents?.data?.slice().reverse();

  // console.log(reversedEvents);

  // useEffect(() => {
  //   fetch("events.json")
  //     .then((res) => res.json())
  //     .then((data) => setEvents(data))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div className="mt-20">
      <HeadTitle title="LATEST EVENTS" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[90%] xl:w-[85%] w-[95%] mx-auto my-10">
          <img className="w-full h-full mx-auto" src={eventImg} alt="" />
          <div className=" relative ">
            {reversedEvents?.slice(0,4).map((e) => (
              <Events key={e._id} e={e}></Events>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestEvent;
