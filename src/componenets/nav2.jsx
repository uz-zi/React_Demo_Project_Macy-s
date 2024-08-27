import React, { useState } from 'react';
import logo from "../images/logo.png";
import WomenList from "./women_list.jsx";
import MenList from "./men_list.jsx";
import KidsList from "./kids&baby_list.jsx";

function Nav1() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="h-[120px] border-b-2 mx-3">
      <div className="upper font-helvetica">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-2 flex justify-left">
            <img
              src={logo}
              alt="Company logo"
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-4">
            <form className="w-full">
              <input
                type="text"
                className="w-full h-10 rounded-2xl border border-black px-4"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-2 flex justify-end">
            <img src={logo} alt="Company logo" className="h-20 w-20" />
          </div>
        </div>
      </div>

      <div
        className=" flex justify-between items-center overflow-x-auto text-xs-custom font-helvetica text-custom-grey font-bold"
        onMouseLeave={handleMouseLeave}
      >
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('women')}
          className="block text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Women
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('men')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Men
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('kids')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Kids & Baby
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('home')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Home
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('shoes')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Shoes
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('handbags')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Handbags & Accessories
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('jewelry')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Jewelry
        </a>
        <a
          href="#"
          onMouseEnter={() => handleMouseEnter('sale')}
          className="text-center mx-2 hover:border-b-2 hover:border-black"
        >
          Sale
        </a>
      </div>

      <div
        className="absolute top-[120px] left-0 right-0 bg-white active mt-5 z-30"
        onMouseEnter={() => setHoveredItem(hoveredItem)}
        onMouseLeave={handleMouseLeave} 
      >
        {hoveredItem === 'women' && <WomenList />}
        {hoveredItem === 'men' && <MenList />}
        {hoveredItem === 'kids' && <KidsList />}
      </div>
    </nav>
  );
}

export default Nav1;

