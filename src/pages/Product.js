import React, { useEffect, useState } from "react";
import Banner from "../shared/Banner";
import bannerImg from "../img/shop-bg-img.jpg";
import AllProducts from "../components/Shop/AllProducts";
import { useGetProductQuery } from "../redux/EndPoints/ApiEndpoints";
import Loading from "../shared/Loading";

const Product = () => {
  const { data: ecoProduct, isLoading } = useGetProductQuery();

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const reversedProducts = ecoProduct?.data?.slice()?.reverse();

  console.log(reversedProducts);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reversedProducts?.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const current = reversedProducts?.slice(indexOfFirst, indexOfLast);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Banner banner={bannerImg} title="SHOP" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 w-[95%] lg:w-[90%] xl:w-[85%] mx-auto">
          {current?.map((p) => (
            <AllProducts key={p._id} p={p} shop />
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

export default Product;
