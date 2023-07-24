import React from "react";
import Banner from "../shared/Banner";
import Offer from "../components/About/Offer";
import EcoProject from "../components/About/EcoProject";
import Volunteer from "../components/About/Volunteer";
import bannerImg from '../img/aboutBanner.jpg';

const About = () => {
  return (
    <div>
      <Banner banner={bannerImg} title='About'/>

      <Offer />
      <Volunteer />

      <div className="bg-[#7abf18] w-full flex gap-5 text-white items-center py-10 justify-center my-16">
        <h4 className="font-bold text-2xl">
          DO YOU CARE ABOUT THE EARTH LIKE WE DO? GET INVOLVED!
        </h4>
        <button className="uppercase border-2 border-white px-6 py-2">
          Donate now
        </button>
      </div>

      <EcoProject />
    </div>
  );
};

export default About;
