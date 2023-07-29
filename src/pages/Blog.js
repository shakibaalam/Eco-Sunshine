import React, { useEffect, useState } from "react";
import Banner from "../shared/Banner";
import bannerImg from "../img/aboutBanner.jpg";
import AllBlogs from "../components/Blog/AllBlogs";
import { useGetBlogQuery } from "../redux/EndPoints/ApiEndpoints";
import Loading from "../shared/Loading";

const Blog = () => {
  const itemsPerPage = 3; // Number of blogs to show per page

  const { data: ecoBlog, isLoading } = useGetBlogQuery();
  const [currentPage, setCurrentPage] = useState(1);
  //console.log(ecoBlog);

  const reversedBlog = ecoBlog?.data?.slice().reverse();

  // Calculate the total number of pages
  const totalPages = Math.ceil(reversedBlog?.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = reversedBlog?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Banner banner={bannerImg} title="Blog" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[90%] xl:w-[85%] mx-auto">
          {currentBlogs.slice(0, 3).map((b) => (
            <AllBlogs b={b} key={b?.id} />
          ))}
        </div>
      )}

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center my-20">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-2 p-4 w-10 h-10 flex justify-center items-center font-bold rounded-full ${
              currentPage === index + 1
                ? "bg-[#7abf18] text-white"
                : "bg-white text-[#7abf18]"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
