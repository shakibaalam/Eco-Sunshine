import React from "react";
import Banner from "../../shared/Banner";
import bannerImg from "../../img/aboutBanner.jpg";
import { BsFillEyeFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const BlogDetails = () => {
  return (
    <div>
      <Banner
        banner={bannerImg}
        title="PLANTS SAVING LIFE PROVIDING FRESH AIR"
      />

      <div className="lg:w-[80%] mx-auto my-10">
        <div className="relative">
          <img
            src="https://i.ibb.co/Kbb1jBf/blog1.jpg"
            className="w-full h-[50vh]"
            alt=""
          />
          <h4 className="absolute bg-[#7abf18] text-white text-xl p-4 top-0">
            18 JAN
          </h4>
        </div>

        <div className="flex gap-10 items-center my-2 font-semibold">
          <p className="flex items-center gap-1 ">
            <BsFillEyeFill />
            {/* {b?.views} Views */} 111 Views
          </p>
          <p className="flex items-center gap-1 ">
            <AiOutlineClockCircle />
            {/* {b?.views} Views */} 2:45 pm
          </p>
          <p className="flex items-center gap-1">
            <FaRegComment />
            {/* {b?.comments} Comments */} 100 Comments
          </p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          congue feugiat libero sit amet blandit. Maecenas maximus tempus est,
          vel laoreet ante dapibus id. Donec orci to
        </p>

        <div className="my-20">
          <h2 className="text-[#7abf18] font-bold text-xl mb-3">
            LEAVE COMMENT
          </h2>
          <textarea
            name=""
            className=" resize-none p-4 border-2 border-gray-100 rounded w-full focus:border-[#7abf18]"
            placeholder="Comment..."
          ></textarea>

          <div className="flex justify-between gap-10 my-4">
            <input className="px-4 py-1 border-2 border-gray-100 rounded w-full focus:border-[#7abf18]" type="text" name="" id="" placeholder="Enter your name" />
            <input type="email" className="px-4 py-1 border-2 border-gray-100 rounded w-full focus:border-[#7abf18]" name="" id="" placeholder="Enter your email" />
          </div>

          <button className="bg-[#7abf18] text-white px-6 py-2">Send</button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
