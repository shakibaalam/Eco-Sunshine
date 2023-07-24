import React from "react";
import { Link } from "react-router-dom";

const AllProducts = ({ p }) => {
  const { img, _id, name, des, price } = p;
  console.log(img);
  return (
    <div className=" border-2 border-[#7abf18] flex flex-col justify-center items-center hover:shadow-xl">
      <img className="h-[230px]" src={img} alt="" />
      <Link to={`/productDetails/${_id}`} className=" text-blue-900">
        {name}
      </Link>
      <p className="text-[#7abf18] font-bold text-2xl"> ${price}</p>
      <button className="bg-[#7abf18] w-full text-center py-2 text-white font-semibold mt-5">
        Add To Cart
      </button>
    </div>
  );
};

export default AllProducts;
