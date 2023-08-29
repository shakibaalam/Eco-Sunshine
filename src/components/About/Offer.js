import React from "react";
import img1 from "../../img/image1.jpg";
import img2 from "../../img/image2.jpg";
import img3 from "../../img/image3.png";
import img4 from "../../img/image4.png";
import img5 from "../../img/about-us-video.jpg";

const Offer = () => {
  const offer = [
    {
      id: 1,
      title: "RECYCLING",
      des: "Recycling, recovery and reprocessing of waste materials for use in new products.",
      img: img1,
    },
    {
      id: 2,
      title: "ORGANIC",
      des: "Organic describes things that are natural or related to nature. In common usage, organic is used to mean “healthful” or “close to nature.”",
      img: img2,
    },
    {
      id: 3,
      title: "ECO SYSTEM",
      des: "An ecosystem is a geographic area where plants, animals, and other organisms, as well as weather and landscapes, work together to form a bubble of life.",
      img: img3,
    },
    {
      id: 4,
      title: "BIOLOGY",
      des: "Biology is the science of life. It spans multiple levels from biomolecules and cells to organisms and populations.",
      img: img4,
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:w-[80%] w-[95%] mx-auto lg:relative my-16">
      <div>
        <img className="w-full mx-auto" src={img5} alt="" />
      </div>
      <div className="bg-white shadow-lg p-6 lg:absolute lg:left-96">
        <h2 className=" font-bold text-xl mb-4">
          <span className="text-primary underline">WHAT</span> WE OFFER
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
          {offer?.map((o) => (
            <div key={o?.id} className="flex gap-3">
                <img className="w-20 h-20" src={o?.img} alt="" />
                <div>
                    <h4 className="text-lg font-bold">{o?.title}</h4>
                    <p>{o?.des}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
