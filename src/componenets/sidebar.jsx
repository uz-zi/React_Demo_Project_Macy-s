import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./checkbox_style.css";
import { filterData } from "./filter_list_data.js";
import { products as allProductsData } from "./all_data.js";

const Sidebar = ({ openSection, isOpen, setIsOpen, onFilteredProducts }) => {
  const [openSections, setOpenSections] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [filteredCount, setFilteredCount] = useState(0);

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
      onFilteredProducts(filteredProducts); // Pass filtered products to parent
      console.log(filteredProducts); 
    };

    calculateFilteredCount();
  }, [selectedOptions, selectedColors]);

  const handleCloseSidebar = () => {
    setIsOpen(false);
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

      if (filterName === "Color") {
        setSelectedColors((prevColors) => {
          const updatedColors = new Set(prevColors);
          if (updatedColors.has(option)) {
            updatedColors.delete(option);
          } else {
            updatedColors.add(option);
          }
          return updatedColors;
        });
      }

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

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-[600px] bg-white p-4 overflow-y-auto shadow-lg px-[50px] transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="mt-10 font-helvetica">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <span className="cursor-pointer" onClick={handleCloseSidebar}>
            <AiOutlineClose size={24} />
          </span>
        </div>

        <div className="mt-6">
          {filterData.map((filter, index) => (
            <div key={index} className="mb-4">
              <button className="w-full text-left text-lg" onClick={() => toggleSection(filter.name)}>
                {filter.name}
              </button>
              
              {selectedOptions[filter.name] && selectedOptions[filter.name].length > 0 && (
                  <div className="flex flex-wrap">
                    {selectedOptions[filter.name].map((option, idx) => (
                      <span key={idx} className="text-gray-800 mr-2 mb-2 text-xs">
                        {option}
                      </span>
                    ))}
                  </div>
                )}

              {openSections[filter.name] && (
                <div className={filter.name === "Color" ? "grid grid-cols-5 gap-1" : ""}>
                  {filter.options.map((option, idx) => (
                    <label key={idx} className={`mt-4 flex items-center ${filter.name === "Color" ? "border border-gray-300 rounded-full w-9 h-9 justify-items-x" : ""}`}
                      style={filter.name === "Color" ? { borderColor: selectedColors.has(option) ? "black" : "transparent" } : {}}
                      onClick={() => handleOptionChange(filter.name, option)}
                    >
                      {filter.name === "Color" ? (
                        <>
                          <input type="checkbox"
                            className="hidden" checked={selectedColors.has(option)}
                            onChange={() => handleColorChange(option)}
                          />
                          <span className={`w-8 h-8 rounded-full ml-[1px] ${selectedColors.has(option) ? 'border-black' : 'border-transparent'}`}
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
                          <span className="ml-2 flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i key={i} className={`fa-star color-black ${i < option ? "fas" : "far"} fa-star`}></i>
                            ))}
                            {option}
                          </span>
                        </>
                      ) : (
                        <>
                          <input type="checkbox" className="custom-checkbox border-gray-100"
                            checked={selectedOptions[filter.name]?.includes(option) || false}
                          />
                          <span className="ml-2">{option}</span>
                        </>
                      )}
                    </label>
                  ))}
                </div>
              )}
              <div className="border-b border-black my-6"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-6 space-x-2">
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
