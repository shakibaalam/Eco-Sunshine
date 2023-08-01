import React from "react";
import { Link } from "react-router-dom";
import {
  usePostCartMutation,
} from "../../redux/EndPoints/ApiEndpoints";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AllProducts = ({ p, shop }) => {
  const { img, _id, name, des, price } = p;
  const [addCart, resInfo] = usePostCartMutation();

  useEffect(() => {
    if (resInfo?.status === "fulfilled") {
      console.log(resInfo?.status);
      toast.success("Successfully add to cart");
    } else if (resInfo?.status === "rejected") {
      console.log(resInfo?.status);
      const errorMessage = resInfo?.error?.data?.message;
      toast.error(errorMessage);
    }
  }, [resInfo?.status, resInfo?.error?.data?.message]);

  const user = useSelector((state) => {
    const userData = state.auth.user;
    try {
      return JSON.parse(userData);
    } catch (error) {
      return userData;
    }
  });

  const handleCart = (id) => {
    addCart(id);
  };
  return (
    <div className=" border-2 border-[#7abf18] flex flex-col justify-center items-center hover:shadow-xl">
      <img className="h-[230px] w-[80%] mx-auto" src={img} alt="" />
      <Link to={`/productDetails/${_id}`} className=" text-blue-900">
        {name}
      </Link>
      <p className="text-[#7abf18] font-bold text-2xl mb-5"> ${price}</p>
      {/* <RequireAuth>
        <button
          onClick={() => handleCart(_id)}
          className="bg-[#7abf18] w-full text-center py-2 text-white font-semibold mt-5"
        >
          Add To Cart
        </button>
      </RequireAuth> */}
      {shop && user?.role !== "ADMIN" && (
        <button
          onClick={() => handleCart(_id)}
          className="bg-[#7abf18] w-full text-center py-2 text-white font-semibold"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AllProducts;
