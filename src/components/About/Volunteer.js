import React from "react";
import HeadTitle from "../../shared/HeadTitle";
import img1 from "../../img/volunteer1.jpg";
import img2 from "../../img/volunteer2.jpg";
import img3 from "../../img/volunteer3.jpg";
import img4 from "../../img/volunteer4.jpg";

const Volunteer = () => {
  const volunteer = [
    {
      id: 1,
      name: "KATIE MARTIN",
      des: "Volunteer",
      img: img1,
    },
    {
      id: 2,
      name: "ALLEN PARKER",
      des: "Volunteer",
      img: img2,
    },
    {
      id: 3,
      name: "CAMILLA JOHN",
      des: "Volunteer",
      img: img3,
    },
    {
      id: 4,
      name: "AMELIA JAMES",
      des: "Volunteer",
      img: img4,
    },
  ];
  return (
    <div>
      <HeadTitle title="OUR VOLUNTEERS" />

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-10 lg:w-[80%] w-[95%] mx-auto mt-12">
        {volunteer?.map((v) => (
          <div key={v?.id} className=" text-center">
            <img className="border-2 border-[#7abf18] rounded-full mb-2 w-full" src={v?.img} alt="" />
            <p>{v?.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
