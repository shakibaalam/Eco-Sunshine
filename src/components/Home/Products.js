import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "../../redux/EndPoints/ApiEndpoints";
import HeadTitle from "../../shared/HeadTitle";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { data: ecoProduct, isLoading } = useGetProductQuery();
  console.log(ecoProduct);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-20">
      <HeadTitle title="Our Products" />

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:w-4/5 xl:w-3/4 mx-auto my-10">
        {products.slice(0, 4).map((p) => (
          <Product key={p._id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
