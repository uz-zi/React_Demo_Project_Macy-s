import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:m-6 md:m-10">
    <div className="lg:h-[50px] lg:w-[50px] bg-white border lg:border-black-[1.5px] md:border-black-10 p-2 shadow-md h-[120px] w-[120px] flex items-center justify-center rounded">
      <IoIosArrowUp className="text-black dm:text-[200px] lg:text-[50px]"  />
    </div>
  </div>
  );
};

export default ScrollToTopButton;
