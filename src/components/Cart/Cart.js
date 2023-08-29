import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGetCartQuery } from "../../redux/EndPoints/ApiEndpoints";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";

const Cart = () => {
  const { data: allCartOfUser, isLoading, refetch } = useGetCartQuery();
  const navigate = useNavigate();
  //console.log(allCartOfUser);
  const handleCart = () => {
    navigate(`/dashboard/my-order`);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="relative" onClick={handleCart}>
          <span className=" absolute top-[-14px] right-[-14px] text-primary font-bold text-lg">
            {allCartOfUser?.data?.length}
          </span>
          <FaShoppingCart className="hover:text-[#7abf18] cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Cart;
