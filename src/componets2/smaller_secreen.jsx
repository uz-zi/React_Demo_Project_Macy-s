import React, {useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.png";
import Sidenav from "./newlists.jsx";

const Sidebar = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false); // State to control the sidenav visibility

  // Function to toggle sidenav visibility
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <div>
      {/* This div will be hidden on screens smaller than `md` */}
      <div className="hidden md:flex md:h-[100px] md:text-3xl md:border-b-2 md:mx-10 md:items-center md:justify-center md:space-x-2">
        <h1 className="">We now ship to 200 locations worldwide</h1>
        <a
          className="border-b-2 border-black text-center lg:text-left"
          href="/"
        >
          Details
        </a>
      </div>

      <div className="hidden md:block md:mx-[50px] md:font-helvetica md:bg-white">
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
          <img
            src={logo}
            alt="Company logo"
            className="h-[200px] w-[200px] object-contain"
          />
        </div>

        {/* Search bar on a new line */}
        <div className="flex justify-center p-4">
          <form className="w-full max-w-4xl">
            <input
              type="text"
              className="w-full h-[90px] border border-black px-10 font-lg rounded-full"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      {isSidenavOpen && <Sidenav />}
    </div>
  );
};

export default Sidebar;
