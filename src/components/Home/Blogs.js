import React, { useEffect, useState } from "react";
import HeadTitle from "../../shared/HeadTitle";
import AllBlogs from "../Blog/AllBlogs";
import { useGetBlogQuery } from "../../redux/EndPoints/ApiEndpoints";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { data: ecoBlog, isLoading } = useGetBlogQuery();
  //console.log(ecoBlog);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-20">
      <HeadTitle title="LATEST BLOGS" />

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-3/4 mx-auto my-10">
        {blogs.slice(0, 3).map((b) => (
          <AllBlogs b={b} key={b?.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
