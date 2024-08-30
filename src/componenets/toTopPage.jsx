import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    showButton && (
      <div className="fixed bottom-0 right-0 lg:m-6 md:m-10">
        <div
          className="lg:h-[50px] lg:w-[50px] bg-white border lg:border-black-[1.5px] md:border-black-10 p-2 shadow-md h-[120px] w-[120px] flex items-center justify-center rounded cursor-pointer"
          onClick={handleClick}
        >
          <IoIosArrowUp className="text-black dm:text-[200px] lg:text-[50px]" />
        </div>
      </div>
    )
  );
};

export default ScrollToTopButton;
