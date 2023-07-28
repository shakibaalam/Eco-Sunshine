import React, { useState, useEffect } from "react";
import img1 from "../../img/image1.jpg";
import img2 from "../../img/3-icon.png";
import img3 from "../../img/2-icon.png";
import img4 from "../../img/4-icon.png";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";
import Donation from "../../shared/Donation";
import { FaWindowClose } from "react-icons/fa";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopup, setPopup] = useState(false);
  const featuredProducts = [
    {
      id: 1,
      img: banner1,
      title: "Save nature with us",
      des1: "Come And",
      des2: "All our dreams come true with time",
    },
    {
      id: 2,
      img: banner2,
      title: "Lead Safe Environment",
      des1: "Zero Waste",
      des2: "All our dreams come true with time",
    },
    {
      id: 3,
      img: banner3,
      title: "Recycling Process Management",
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
  ];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts?.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="relative h-[75vh] mt-[-35px]">
      {featuredProducts.map((item, index) => (
        <div
          key={item.id}
          className={`absolute h-full w-full object-cover ${
            index === currentIndex ? "opacity-100" : "opacity-0 scale-100 "
          } transition-opacity ease-out duration-1000`}
        >
          <img src={item.img} alt="" className="w-full h-full" />
          <div
            className={`absolute inset-0 bg-black opacity-40 transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              className={`text-white text-lg mt-4 ${
                index === currentIndex
                  ? "opacity-100 transition-transform ease-out duration-1000 transform translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {item?.des1}
            </p>
            <h2
              className={`text-white text-4xl font-bold uppercase ${
                index === currentIndex
                  ? "opacity-100 transition-transform  ease-out duration-1000 transform translate-x-0"
                  : "opacity-0 translate-x-10 "
              }`}
            >
              {item.title}
            </h2>
            <p
              className={`text-white text-lg my-4 ${
                index === currentIndex
                  ? "opacity-100 transition-transform ease-out duration-1000 transform translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {item.des2}
            </p>
            <div
              className={`flex gap-3 ${
                index === currentIndex
                  ? "opacity-100 transition-opacity ease-out duration-500"
                  : "opacity-0"
              }`}
            >
              <div className="block">
                {item?.img1 && item?.img2 && item?.img3 && item?.img4 && (
                  <div className="flex gap-4 items-center ">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item?.img1}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item?.img2}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item?.img3}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item?.img4}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setPopup(true)}
                  className="bg-[#7abf18] rounded px-6 py-1 border-2 border-[#7abf18] uppercase font-bold text-white"
                >
                  Donate us
                </button>
                <button className="px-6 py-1 uppercase rounded font-bold text-white border-2 border-white">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
        onClick={handlePrevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
        onClick={handleNextSlide}
      >
        {">"}
      </button>

      {isPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <div className="bg-[#7abf18] text-white w-full flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold">DONATE </h2>
              <FaWindowClose
                className=" cursor-pointer"
                onClick={() => setPopup(false)}
              />
            </div>
            <Donation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
