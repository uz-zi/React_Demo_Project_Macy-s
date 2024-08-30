import { AiOutlineClose, AiOutlineCaretRight } from "react-icons/ai";

import { useState } from "react";
import SidenavSublist from "./sidenav_lists_sublist"; // Import the sublist component
import ReactCountryFlag from 'react-country-flag';
import { CiLocationOn } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { TbViewfinder } from "react-icons/tb";



const OptionsSideNavList = ({ isOpen, handleCloseSidebar }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const list = [
    "Women", 
    "Men", 
    "Kids & Baby", 
    "Home", 
    "Shoes", 
    "Handbags & Accessories", 
    "Jewelry", 
    "Sale & Clearance"
  ];

  const menuItems = [
    { label: 'Order Tracking', href: '/', logo: <TbViewfinder /> },
    { label: 'Stores', href: '/', logo: <CiLocationOn /> },
    { label: 'Gift Registry', href: '/', logo: <IoGiftOutline /> },
  ];

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    // Close the sidebar after clicking
    handleCloseSidebar();
  };

  const handleBack = () => {
    setSelectedCategory(null);
    handleCloseSidebar(); // Close the sidebar when going back
  };

  if (selectedCategory) {
    return (
      <SidenavSublist category={selectedCategory} handleBack={handleBack} />
    );
  }

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 md:top-[450px] bg-white p-4 shadow-lg z-50 md:w-[850px] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="m-8 text-4xl">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">Shop By Department</h1>
          <span className="cursor-pointer" onClick={handleCloseSidebar}>
            <AiOutlineClose size={24} />
          </span>
        </div>

        <ul className="space-y-[60px] mt-[95px] relative">
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={`flex items-center justify-between cursor-pointer ${
                item === "Sale & Clearance" ? "text-red-500" : ""
              }`}
            >
              {item}
              <AiOutlineCaretRight className="text-gray-500" size={20} />
            </li>
          ))}
        </ul>


        <div className="border-b-4 mt-[80px]" ></div>


        <ul className="space-y-[60px] mt-[65px] relative">
  {menuItems.map((item, index) => (
    <li key={index} className="flex items-center space-x-4 pr-4">
      <span className="text-5xl">{item.logo}</span> {/* Render the icon here */}
      <a className="hover:border-b-2" href={item.href}>
        {item.label}
      </a>
    </li>
  ))}
      <li>
        <a className="hover:border-b-2 hover:border-black" href="#" >
          Shipping To
        </a>
      </li>
    </ul>
      </div>
      
    </div>
  );
};

export default OptionsSideNavList;