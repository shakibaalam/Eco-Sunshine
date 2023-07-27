// import React from "react";

// const Loading = () => {
//   return (
//     <div className="flex h-screen justify-center items-center">
//       <button className="btn btn-square loading"></button>
//     </div>
//   );
// };

// export default Loading;



import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center h-[500px] z-[99999999]">
        <ReactLoading
          type={"spinningBubbles"}
          color={"rgb(53, 126, 221)"}
          height={100}
          width={100}
        />
      </h1>
    </div>
  );
};

export default Loading;