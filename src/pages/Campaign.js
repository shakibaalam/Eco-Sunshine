import React, { useEffect, useState } from "react";
import AllCampaign from "../components/Campaign/AllCampaign";
import Banner from "../shared/Banner";
import bannerImg from "../img/aboutBanner.jpg";
import { useGetCampaignQuery } from "../redux/EndPoints/ApiEndpoints";
import Loading from "../shared/Loading";

const Campaign = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { data: allCampaign, isLoading } = useGetCampaignQuery();
  const reversedCampaign = allCampaign?.data?.slice()?.reverse();

  console.log(reversedCampaign);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reversedCampaign?.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const current = reversedCampaign?.slice(indexOfFirst, indexOfLast);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Banner banner={bannerImg} title="CAMPAIGN" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[90%] xl:w-[85%] mx-auto">
          {current?.map((c) => (
            <AllCampaign campaign={c} key={c?.id} />
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

export default Campaign;
