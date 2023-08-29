import React from "react";
import HeadTitle from "../../shared/HeadTitle";
import img1 from "../../img/solar-panel.jpg";
import img2 from "../../img/project2jpg.jpg";
import img3 from "../../img/projct2.jpg";
import img4 from "../../img/project3.jpg";
import img5 from "../../img/project4.jpg";
import img6 from "../../img/project5.jpg";
import { Link } from "react-router-dom";

const EcoProject = () => {
  const project = [
    {
      id: 1,
      img: img1,
      link: "",
    },
    {
      id: 2,
      img: img2,
      link: "",
    },
    {
      id: 3,
      img: img3,
      link: "",
    },
    {
      id: 4,
      img: img4,
      link: "",
    },
    {
      id: 5,
      img: img5,
      link: "",
    },
    {
      id: 6,
      img: img6,
      link: "",
    },
  ];
  return (
    <div>
      <HeadTitle title="ECO PROJECTS" />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:w-[80%] w-[95%] mx-auto my-10">
        {project?.map((p) => (
          <div key={p?.id} className="relative w-full h-full rounded group">
            <img className="w-full h-full rounded" src={p?.img} alt="" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#7abf18] bg-opacity-50 rounded">
              <Link
                to={`/details/${p?.id}`}
                className="bg-white px-6 py-2 font-bold text-[#7abf18]"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoProject;
