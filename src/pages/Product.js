import React, { useEffect, useState } from "react";
import Banner from "../shared/Banner";
import bannerImg from "../img/shop-bg-img.jpg";
import AllProducts from "../components/Shop/AllProducts";

const Product = () => {
  const [products, setProducts] = useState([]);
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
        {products.map((p) => (
          <AllProducts key={p._id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Product;
