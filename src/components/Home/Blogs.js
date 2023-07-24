import React, { useEffect, useState } from "react";
import HeadTitle from "../../shared/HeadTitle";
import AllBlogs from "../Blog/AllBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <HeadTitle title="LATEST BLOGS" />

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-28 my-10">
        {blogs.slice(0, 3).map((b) => (
          <AllBlogs b={b} key={b?.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
