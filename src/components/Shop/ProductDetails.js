import React from "react";
import Banner from "../../shared/Banner";
import bannerImg from "../../img/shop-bg-img.jpg";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  usePostCartMutation,
} from "../../redux/EndPoints/ApiEndpoints";
import Loading from "../../shared/Loading";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: productById, isLoading } = useGetProductByIdQuery(id);
  // console.log(productById);

  const [addCart, resInfo] = usePostCartMutation();
  // console.log(getCart);

  useEffect(() => {
    if (resInfo?.status === "fulfilled") {
      // console.log(resInfo?.status);
      toast.success("Successfully added to the cart");
    } else if (resInfo?.status === "rejected") {
      // console.log(resInfo?.status);
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
    <div>
      <Banner banner={bannerImg} title={productById?.name} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-100 shadow-lg mt-20">
            <img
              className="w-[80%] h-[400px] mx-auto"
              src={productById?.img}
              alt=""
            />
            <div className="my-auto">
              <h4 className=" text-3xl font-bold">{productById?.name}</h4>
              <p className=" text-primary font-bold text-2xl my-3">
                {productById?.price}
              </p>
              <p>{productById?.des}</p>
              {user?.role !== "ADMIN" && (
                <button
                  onClick={() => handleCart(productById?._id)}
                  className="bg-[#7abf18] px-6 mt-10 text-center py-2 text-white font-semibold"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
