import React from "react";
import HeadTitle from "../../shared/HeadTitle";
import AllBlogs from "../Blog/AllBlogs";
import { useGetBlogQuery } from "../../redux/EndPoints/ApiEndpoints";
import Loading from "../../shared/Loading";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { data: ecoBlog, isLoading } = useGetBlogQuery();
  // console.log(ecoBlog);
  const navigate = useNavigate();

  const reversedBlog = ecoBlog?.data?.slice().reverse();

  const handleNavigate = () => {
    navigate(`/blog`);
  };

  return (
    <div className="mt-20">
      <HeadTitle title="LATEST BLOGS" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="lg:w-[90%] xl:w-[85%] w-[95%] mx-auto">
          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
            {reversedBlog?.slice(0, 3)?.map((b) => (
              <AllBlogs b={b} key={b?.id} />
            ))}
          </div>

          <div className="flex items-center justify-end  mt-4 ">
            <button
              onClick={handleNavigate}
              className="bg-[#7abf18] flex items-center gap-2 justify-end rounded uppercase text-white hover:text-[#7abf18] px-6 py-1 hover:bg-black"
            >
              See more <BsArrowRightCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
