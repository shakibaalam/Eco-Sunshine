import React from "react";
import Banner from "../shared/Banner";
import Offer from "../components/About/Offer";
import EcoProject from "../components/About/EcoProject";
import Volunteer from "../components/About/Volunteer";
import bannerImg from "../img/aboutBanner.jpg";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import DonateForm from "../components/Home/DonateForm";

const About = () => {
  const [isPopup, setPopup] = useState(false);
  return (
    <div>
      <Banner banner={bannerImg} title="About" />

      <Offer />
      <Volunteer />

      <div className="bg-[#7abf18] w-full lg:flex  gap-5 text-white items-center px-4 py-10 justify-center my-16">
        <h4 className="font-bold text-2xl">
          DO YOU CARE ABOUT THE EARTH LIKE WE DO? GET INVOLVED!
        </h4>
        <button
          onClick={() => setPopup(true)}
          className="uppercase border-2 border-white px-6 py-2 hover:bg-black hover:text-[#7abf18]"
        >
          Donate now
        </button>
      </div>

      <EcoProject />

      {isPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[9999999]">
          <div className="bg-white rounded-lg p-6 w-1/2 max-h-[80vh] overflow-y-auto ecoScroll">
            <div className="bg-[#7abf18] text-white w-full flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold">DONATE </h2>
              <FaWindowClose
                className=" cursor-pointer"
                onClick={() => setPopup(false)}
              />
            </div>
            {/* <Donation /> */}
            <DonateForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
