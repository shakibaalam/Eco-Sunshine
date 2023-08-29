import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption";
import { GrSkype } from "@react-icons/all-files/gr/GrSkype";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../img/logo.png";
import { logOut } from "../redux/Slice/authSlice";
import Cart from "../components/Cart/Cart";
import DonateForm from "../components/Home/DonateForm";
import NavPart from "./NavPart";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [selectedLink, setSelectedLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopup, setPopup] = useState(false);

  const user = useSelector((state) => {
    const userData = state.auth.user;
    try {
      return JSON.parse(userData);
    } catch (error) {
      return userData;
    }
  });

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedLink(currentPath.slice(1));
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signOut = () => {
    dispatch(logOut());
    toast.success("Logged out successfully");
  };

  return (
    <div className={`navbar ${isScrolled ? "navbar-scrolled" : ""} `}>
      <div className="flex justify-between lg:w-[90%] xl:w-[85%] mx-auto py-5">
        <div className="flex items-center gap-5">
          <img className="w-16 h-16 rounded-full" src={logo} alt="" />
          <h1 className="text-3xl font-bold">
            ECO <span className="text-primary">SUNSHINE</span>
          </h1>
          <span className=" items-center gap-2 border-l-2 pl-2 border-[#7abf18] hidden md:flex">
            <BsSearch className="text-primary cursor-pointer" />
            <input
              type="text"
              placeholder="I'm searching for..."
              className="px-2 border-none focus:outline-none border-b border-gray-400"
            />
          </span>
        </div>
        <div className="flex items-center gap-5 cursor-pointer pr-4 lg:pr-0">
          <div className="md:flex hidden items-center gap-5 border-l-2 border-r-2 px-2 border-[#7abf18]">
            <FaFacebookF className="hover:text-[#7abf18]" />
            <GrLinkedinOption className="hover:text-[#7abf18]" />
            <GrSkype className="hover:text-[#7abf18]" />
            <GrTwitter className="hover:text-[#7abf18]" />
          </div>
          {user?.role !== "ADMIN" && <Cart />}
          <GiHamburgerMenu
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <NavPart
            setPopup={setPopup}
            mbl
            signOut={signOut}
            user={user}
            selectedLink={selectedLink}
          />
        </div>
      )}

      <nav className={` hidden lg:flex`}>
        <NavPart
          setPopup={setPopup}
          signOut={signOut}
          user={user}
          selectedLink={selectedLink}
        />
      </nav>

      {isPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/2 max-h-[80vh] overflow-y-auto ecoScroll">
            <div className="bg-[#7abf18] text-white w-full flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold">DONATE</h2>
              <FaWindowClose
                className="cursor-pointer"
                onClick={() => setPopup(false)}
              />
            </div>
            <DonateForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
