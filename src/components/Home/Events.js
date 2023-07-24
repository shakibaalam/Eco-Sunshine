import React from "react";
import { GrLocation } from "react-icons/gr";

const Events = ({ e }) => {
  const { img, _id, name, place, date } = e;
  const words = date.split(" ");

  return (
    <div className=" flex items-center gap-10 ml-[-40px] my-10 group ">
      <div className="">
        <img
          className="w-20 h-20 rounded-full border-4 border-white event-container"
          src={img}
          alt=""
        />
      </div>
      <div className="flex-1 group-hover:bg-[#7abf18] group-hover:text-white p-5">
        <div className=" grid grid-cols-4 items-center gap-10 ">
          <div className="col-span-1 border-r-4 border-slate-200 ">
            <p className="text-lg font-semibold group-hover:text-white text-primary">{words[0]}</p>
            <p className="text-lg font-semibold group-hover:text-white text-primary">{words[1]}</p>
          </div>
          <div className="col-span-3 transition-all">
            <div></div>
            <h4 className=" text-lg">{name}</h4>
            <p className="flex items-center gap-1">
              <GrLocation />
              {place}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
