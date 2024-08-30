import React, { useState } from "react";
import Chaticon from "../images/chat.png";

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:px-4 md:px-9 md:space-y-10">
      <div className="flex flex-row space-x-4">
        <h1 className="md:text-2xl lg:text-base">See All Categories</h1>
        <button
          className={`text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleList}
        >
          <span className="inline-block transform mt-1">{"^"}</span>
        </button>
      </div>
      {isOpen && (
        <div className="grid grid-cols-5 gap-4 mt-5 font-sans text-sm">
          <a href="/" className="col-span-1">
            Dress Shirt Fit Guide
          </a>
          <a href="/" className="col-span-1">
            Classic Fit Dress Shirts
          </a>
          <a href="/" className="col-span-1">
            Slim Fit Dress Shirts
          </a>
          <a href="/" className="col-span-1">
            Athletic Fit Dress Shirts
          </a>
          <a href="/" className="col-span-1">
            Extra Slim Fit Dress Shirts
          </a>
          <a href="/" className="col-span-2">
            No Iron Dress Shirts
          </a>
        </div>
      )}

      <div className="mt-4 lg:py-0 md:py-8">
        <a href="/" class="flex items-center flex-row lg:space-x-2 md:space-x-8">
          <img src={Chaticon} alt="Icon" className="lg:w-[20px] md:w-[50px]" />
          <p className="lg:text-sm underline py-3 md:text-3xl">Talk to a Style Expert</p>
        </a>
      </div>
    </div>
  );
};

export default CategoryList;
