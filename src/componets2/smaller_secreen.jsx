import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.png";
import OptionsSideNavList from "./newlists.jsx";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false); // State to control the sidenav visibility

  // Function to toggle sidenav visibility
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  useEffect(() => {
    if (isSidenavOpen) {
      // Disable scrolling on the main page
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling on the main page
      document.body.style.overflow = "auto";
    }

    // Cleanup function to enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidenavOpen]);

  return (
    <div className="lg:hidden">
      {/* This div will be hidden on screens smaller than `md` */}
      <div className="md:flex md:h-[100px] md:text-3xl md:border-b-2 md:mx-10 md:items-center md:justify-center md:space-x-2">
        <h1 className="">We now ship to 200 locations worldwide</h1>
        <a
          className="border-b-2 border-black text-center lg:text-left"
          href="/"
        >
          Details
        </a>
      </div>

      <div className="hidden md:block md:mx-[50px] md:bg-white">
        {/* Flex container for the top row */}
        <div className="flex items-center justify-between">
          {/* Three-line icon */}
          <div className="flex">
            <div className="mt-[70px] text-3xl">
              <AiOutlineMenu size={70} onClick={toggleSidenav}/>
            </div>

            <img
              src={logo}
              alt="Company logo"
              className="h-[200px] w-[200px] object-contain"
            />
          </div>

          {/* Logos */}
          <FiShoppingBag className="h-[100px] w-[100px] object-contain"/>
        </div>

        {/* Search bar on a new line */}
        <div className="flex justify-center p-4">
        <form className="w-full max-w-4xl">
  <div className="relative w-full">
    <IoSearchOutline className="absolute top-1/2 left-4 transform -translate-y-1/2 text-5xl text-gray-500" />
    <input
      type="text"
      className="w-full h-[90px] border border-black pl-[75px] pr-10 text-4xl rounded-full"
      placeholder="Search"
    />
  </div>
</form>
        </div>
      </div>
      <OptionsSideNavList isOpen={isSidenavOpen} handleCloseSidebar={toggleSidenav} />
    </div>
  );
};

export default Sidebar;