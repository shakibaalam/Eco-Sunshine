import React from "react";
import Banner from "../../shared/Banner";
import bannerImg from "../../img/aboutBanner.jpg";
import { BsFillEyeFill } from "react-icons/bs";
import { FaRegComment, FaUserAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useGetBlogByIdQuery } from "../../redux/EndPoints/ApiEndpoints";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import { formatDateTime } from "../../shared/FormatDateTime";
import Comment from "../../shared/Comment";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogById, isLoading } = useGetBlogByIdQuery(id);
  const { formattedDate, formattedTime } = formatDateTime(blogById?.date);
  //console.log(blogById);
  return (
    <div>
      <Banner banner={bannerImg} title={blogById?.title} />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="lg:w-[80%] mx-auto my-10">
          <div className="relative">
            <img src={blogById?.img} className="w-full h-[50vh]" alt="" />
            <h4 className="absolute bg-[#7abf18] text-white text-xl p-4 top-0">
              {formattedDate}
            </h4>
          </div>

          <div className="flex gap-10 items-center my-2 font-semibold">
            <p className="flex items-center gap-1 ">
              <BsFillEyeFill />
              {blogById?.views} Views
            </p>
            <p className="flex items-center gap-1 ">
              <AiOutlineClockCircle />
              {formattedDate} {formattedTime}
            </p>
            <p className="flex items-center gap-1">
              <FaRegComment />
              {blogById?.comments} Comments
            </p>
            <p className="flex items-center gap-1">
              <FaUserAlt />
              Admin
            </p>
          </div>

          <p className="mt-5 text-justify">{blogById?.content}</p>

          <Comment/>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
