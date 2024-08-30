import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose,FiShoppingBag } from "react-icons/ai";
import { MdAdd, MdRemove } from 'react-icons/md';
import "./checkbox_style.css";
import { filterData} from "./filter_list_data.js";
import { products as allProductsData } from "./all_data.js";

const Sidebar = ({ openSection, isOpen, setIsOpen, onFilteredProducts }) => {
  const [openSections, setOpenSections] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [filteredCount, setFilteredCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(allProductsData);
  const sidebarRef = useRef(null);

  useEffect(() => {
    setOpenSections((prevState) => {
      const newOpenSections = { ...prevState };
      Object.keys(newOpenSections).forEach((key) => {
        newOpenSections[key] = false;
      });
      if (openSection) {
        newOpenSections[openSection] = true;
      }
      return newOpenSections;
    });
  }, [openSection]);

  useEffect(() => {
    const calculateFilteredCount = () => {
      let filteredProducts = allProductsData;

      if (selectedOptions["Brand"]) {
        filteredProducts = filteredProducts.filter(product =>
          selectedOptions["Brand"].includes(product.brandName)
        );
      }

      if (selectedOptions["Price"]) {
        filteredProducts = filteredProducts.filter(product => {
          const price = product.price;
          if (selectedOptions["Price"].includes("Under $20") && price < 20) return true;
          if (selectedOptions["Price"].includes("$20-$40") && price >= 20 && price <= 40) return true;
          if (selectedOptions["Price"].includes("$40-$60") && price > 40 && price <= 60) return true;
          if (selectedOptions["Price"].includes("$60-$80") && price > 60 && price <= 80) return true;
          if (selectedOptions["Price"].includes("$80-$100") && price > 80 && price <= 100) return true;
          return false;
        });
      }

      if (selectedOptions["Color"]) {
        const lowerCaseSelectedColors = selectedOptions["Color"].map(color => color.toLowerCase());

        filteredProducts = filteredProducts.filter(product =>
          Object.values(product.images).some(color =>
            lowerCaseSelectedColors.includes(color.toLowerCase())
          )
        );
      }

      if (selectedOptions["size"]) {
        filteredProducts = filteredProducts.filter(product =>
          selectedOptions["size"].includes(product.size)
        );
      }

      if (selectedOptions["toprated"]) {
        filteredProducts = filteredProducts.filter(product =>
          selectedOptions["toprated"].includes(product.reviews.toString())
        );
      }

      setFilteredCount(filteredProducts.length);
      //onFilteredProducts(filteredProducts); // Pass filtered products to parent
      setFilteredProducts(filteredProducts);
      console.log(filteredProducts); 
    };

    calculateFilteredCount();
  }, [selectedOptions, selectedColors]);

  const handleCloseSidebar = () => {
    setIsOpen(false);
    onFilteredProducts(filteredProducts);
  };

  const toggleSection = (section) => {
    setOpenSections((prevState) => {
      const newOpenSections = {};
      newOpenSections[section] = !prevState[section];
      return newOpenSections;
    });
  };

  const handleOptionChange = (filterName, option) => {
    setSelectedOptions((prevState) => {
      const currentSelection = prevState[filterName] || [];
      const newSelection = currentSelection.includes(option)
        ? currentSelection.filter((item) => item !== option)
        : [...currentSelection, option];
        
      return {
        ...prevState,
        [filterName]: newSelection,
      };
    });
  };

  const handleClearAll = () => {
    setSelectedOptions({});
    setSelectedColors(new Set());
  };

  const isAnyOptionSelected = Object.values(selectedOptions).some(
    (options) => options.length > 0
  );

  const handleColorChange = (color) => {
    setSelectedColors((prevState) => {
      const newColors = new Set(prevState);
      if (newColors.has(color)) {
        newColors.delete(color);
      } else {
        newColors.add(color);
      }
      return newColors;
    });

    setSelectedOptions((prevState) => {
      const currentSelection = prevState["Color"] || [];
      const newSelection = currentSelection.includes(color)
        ? currentSelection.filter((item) => item !== color)
        : [...currentSelection, color];

      return {
        ...prevState,
        Color: newSelection,
      };
    });
  };



  //click outside the naavbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the sidebar if the click is outside of it
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
    ref={sidebarRef}
      className={`fixed top-0 right-0 bottom-0 lg:w-[600px] md:w-full bg-white p-4 overflow-y-auto shadow-lg px-[50px] transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      
      <div className="mt-10 font-helvetica">
        <div className="flex justify-between items-center mb-4">
          <h2 className="lg:text-lg lg:font-bold md:text-6xl md:font-semibold">Filters</h2>
          <span className="cursor-pointer lg:text-[24px] md:text-[50px]" onClick={handleCloseSidebar}>
            <AiOutlineClose  />
          </span>
        </div>
        <div className="lg:hidden md:flex md:flex-row md:mt-6 md:space-x-4 justify-between">
          <button
            onClick={handleClearAll}
            disabled={!isAnyOptionSelected}
            className={`py-2 px-4 rounded-lg md:w-[420px] md:h-[130px] ${isAnyOptionSelected ? "bg-white border-4 border-black text-black text-3xl" : "text-3xl bg-gray-100 border-4 border-gray-500 text-gray-500 cursor-not-allowed"}`}
          >
            Clear All
          </button>
          <button
            className="py-2 px-4 rounded-lg md:w-[420px] md:h-[130px] bg-black text-white text-3xl"
            onClick={handleCloseSidebar}
          >
            Apply Filters ({filteredCount})
          </button>
        </div>

        <div className="lg:mt-6 md:mt-[80px]">
          {filterData.map((filter, index) => (
            <div key={index} className="mb-4">
              <button
  className="w-full text-left lg:text-lg md:text-5xl flex items-center justify-between"
  onClick={() => toggleSection(filter.name)}
>
  <span>{filter.name}</span>
  <MdAdd className="mr-2" />
</button>
              
              {selectedOptions[filter.name] && selectedOptions[filter.name].length > 0 && (
                  <div className="flex flex-wrap">
                    {selectedOptions[filter.name].map((option, idx) => (
                      <span key={idx} className="text-gray-800 mr-2 mb-2 lg:text-xs md:text-xl">
                        {option}
                      </span>
                    ))}
                  </div>
                )}

              {openSections[filter.name] && (
                <div className={filter.name === "Color" ? "grid grid-cols-5 gap-1" : ""}>
                  {filter.options.map((option, idx) => (
                    <label key={idx} className={`mt-4 flex items-center ${filter.name === "Color" ? "border border-gray-300 lg:w-9 lg:h-9 md:w-[50px] md:h-[50px] rounded-full justify-items-x" : ""}`}
                      style={filter.name === "Color" ? { borderColor: selectedColors.has(option) ? "black" : "transparent" } : {}}
                      onClick={() => handleOptionChange(filter.name, option)}
                    >
                      {filter.name === "Color" ? (
                        <>
                          <input type="checkbox"
                            className="hidden" checked={selectedColors.has(option)}
                            onChange={() => handleColorChange(option)}
                          />
                          <span className={`md:w-[45px] md:h-[45px] lg:w-8 lg:h-8 rounded-full ml-[1px] lg:text-base md:text-4xl ${selectedColors.has(option) ? 'border-black' : 'border-transparent'}`}
                            style={{ backgroundColor: option.toLowerCase() }}
                          ></span>
                        </>
                      ) : filter.name === "toprated" ? (
                        <>
                          <input
                            type="checkbox"
                            className="custom-checkbox border-gray-100"
                            checked={selectedOptions[filter.name]?.includes(option) || false}
                            onChange={() => handleOptionChange(filter.name, option)}
                          />
                          <span className="ml-2 flex items-center lg:text-base md:text-4xl">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i key={i} className={`fa-star color-black ${i < option ? "fas" : "far"} fa-star`}></i>
                            ))}
                            {option}
                          </span>
                        </>
                      ) : (
                        <>
                          <input type="checkbox" className="custom-checkbox border-gray-100 "
                            checked={selectedOptions[filter.name]?.includes(option) || false}
                          />
                          <span className="ml-2 lg:text-base md:text-4xl">{option} </span>
                        </>
                      )}
                    </label>
                  ))}
                </div>
              )}
              <div className="border-b border-black lg:my-6 md:my-10"></div>
            </div>
          ))}
        </div>

        <div className=" md:hidden lg:flex lg:flex-row lg:mt-6 lg:space-x-2">
          <button
            onClick={handleClearAll}
            disabled={!isAnyOptionSelected}
            className={`py-2 px-4 rounded w-[271px] h-[50px] ${isAnyOptionSelected ? "bg-gray-200 border border-black text-black" : "bg-gray-100 border border-black text-gray-500 cursor-not-allowed"}`}
          >
            Clear All
          </button>
          <button
            className="py-2 px-4 rounded w-[271px] h-[50px] bg-black text-white"
            onClick={handleCloseSidebar}
          >
            Apply Filters ({filteredCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
