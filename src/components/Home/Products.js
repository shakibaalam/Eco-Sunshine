import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "../../redux/EndPoints/ApiEndpoints";
import HeadTitle from "../../shared/HeadTitle";
import AllProducts from "../Shop/AllProducts";
import { BsArrowRightCircle } from "react-icons/bs";
import Loading from "../../shared/Loading";
import { useNavigate } from "react-router-dom";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const { data: ecoProduct, isLoading } = useGetProductQuery();
  //console.log(ecoProduct);
  const navigate = useNavigate();

  const reversedProduct = ecoProduct?.data?.slice().reverse();

  const handleNavigate = () => {
    navigate(`/product`);
  };
  return (
    <div className="mt-20">
      <HeadTitle title="Our Products" />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="lg:w-[90%] xl:w-[85%] mx-auto my-10">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
            {reversedProduct?.slice(0, 4).map((p) => (
              <AllProducts key={p._id} p={p} />
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

export default Products;
