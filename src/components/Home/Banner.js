import React, { useState, useEffect } from "react";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    },
  ];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
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
              {item.des1}
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
              <button className="bg-[#7abf18] rounded px-6 py-1 border-2 border-[#7abf18] uppercase font-bold text-white">
                Donate us
              </button>
              <button className="px-6 py-1 uppercase rounded font-bold text-white border-2 border-white">
                Contact us
              </button>
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
    </div>
  );
};

export default Banner;
