import React, { useEffect, useState } from "react";
import Banner from "../shared/Banner";
import bannerImg from "../img/shop-bg-img.jpg";
import AllProducts from "../components/Shop/AllProducts";
import {
  useGetProductQuery,
} from "../redux/EndPoints/ApiEndpoints";

const Product = () => {
  const [products, setProducts] = useState([]);

  const { data: ecoProduct, isLoading } = useGetProductQuery();

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Banner banner={bannerImg} title="SHOP" />

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-28 my-10">
        {ecoProduct?.data?.map((p) => (
          <AllProducts key={p._id} p={p} shop/>
        ))}
      </div>
    </div>
  );
};

export default Product;
