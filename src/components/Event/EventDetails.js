import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaRegComment, FaUserAlt } from "react-icons/fa";
import Banner from "../../shared/Banner";
import bannerImg from "../../img/aboutBanner.jpg";
import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "../../redux/EndPoints/ApiEndpoints";
import { formatDateTime } from "../../shared/FormatDateTime";
import Comment from "../../shared/Comment";
import { GrLocation } from "react-icons/gr";
import RegisterForm from "./RegisterForm";
import Loading from "../../shared/Loading";

const EventDetails = () => {
  const { id } = useParams();
  const { data: eventById, isLoading } = useGetEventByIdQuery(id);
  const { formattedDate, formattedTime } = formatDateTime(eventById?.date);
  // console.log(eventById);
  return (
    <div>
      <Banner banner={bannerImg} title={eventById?.title} />

      <div className="lg:w-[80%] w-[90%] mx-auto my-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="relative">
                <img src={eventById?.image} className="w-full h-full" alt="" />
                <h4 className="absolute bg-[#7abf18] text-white text-xl p-4 top-0">
                  {formattedDate}
                </h4>
              </div>

              <div className=" my-2 font-semibold">
                <p className="flex items-center gap-1 ">
                  <GrLocation />
                  {eventById?.des}
                </p>
                <p className="flex items-center gap-1 ">
                  <AiOutlineClockCircle />
                  {formattedDate} {formattedTime}
                </p>
                <p className="flex items-center gap-1">
                  <FaRegComment />
                  {/* {b?.comments} Comments */} 100 Comments
                </p>
                <p className="flex items-center gap-1">
                  <FaUserAlt />
                  Admin
                </p>
              </div>

              <p color="mt-5">{eventById?.content}</p>
            </div>
            <RegisterForm eventById={eventById} formattedTime={formattedTime} formattedDate={formattedDate}/>
          </div>
        )}

        <Comment />
      </div>
    </div>
  );
};

export default EventDetails;
