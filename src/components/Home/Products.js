import React, { useEffect, useState } from "react";
import Product from "./Product";
import HeadTitle from "../../shared/HeadTitle";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <HeadTitle title="Our Products" />

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-28 my-10">
        {products.slice(0, 4).map((p) => (
          <Product key={p._id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
