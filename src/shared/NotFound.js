import React from "react";
import { Link } from "react-router-dom";
import notFound from "../img/404.jpg";
import donateBg from "../img/donate-bg.jpg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Background image */}
      <img
        src={donateBg}
        alt="Donate Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <img src={notFound} alt="Page Not Found" className="mt-8" />
        {/* Link to home page */}
        <Link to="/" className="text-primary underline mt-4">
          Go back to Eco Sunshine Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
