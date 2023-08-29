import React from "react";
import banner from "../../img/bg-1.jpg";
import global from "../../img/global.png";
import img1 from "../../img/image1.jpg";
import img2 from "../../img/image2.jpg";
import img3 from "../../img/image3.png";
import img4 from "../../img/image4.png";
import HeadTitle from "../../shared/HeadTitle";

const EcoServices = () => {
  return (
    <div
      className="w-full text-center  py-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <HeadTitle title="Eco Services"/>

      <div className=" grid grid-cols-1 md:grid-cols-3 mt-20 items-center text-[#666] lg:px-20">
        <div className="text-right p-5 md:p-0">
          <div className=" flex items-center gap-3 ">
            <div>
              <h3 className=" font-bold text-2xl">RECYCLING</h3>
              <p>
                Recycling, recovery and reprocessing of waste materials for use
                in new products.
              </p>
            </div>
            <img
              className="w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]"
              src={img1}
              alt=""
            />
          </div>
          <div className=" flex items-center gap-3 mt-10">
            <div>
              <h3 className=" font-bold text-2xl">ECO SYSTEM</h3>
              <p>
                An ecosystem is a geographic area where plants, animals, and
                other organisms, as well as weather and landscapes, work
                together to form a bubble of life.
              </p>
            </div>
            <img
              className="w-16 h-16  rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]"
              src={img2}
              alt=""
            />
          </div>
        </div>
        <img className="w-[50%] mx-auto" src={global} alt="" />
        <div className=" text-left p-5 md:p-0">
          <div className=" flex items-center gap-3">
            <img
              className="w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]"
              src={img3}
              alt=""
            />
            <div>
              <h3 className=" font-bold text-2xl">ORGANIC</h3>
              <p>
                Organic describes things that are natural or related to nature.
                In common usage, organic is used to mean “healthful” or “close
                to nature.”
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-3 mt-10">
            <img
              className="w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]"
              src={img4}
              alt=""
            />
            <div>
              <h3 className=" font-bold text-2xl">BIOLOGY</h3>
              <p>
                Biology is the science of life. It spans multiple levels from
                biomolecules and cells to organisms and populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoServices;
