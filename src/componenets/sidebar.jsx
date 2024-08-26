import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./checkbox_style.css";

// Define filter data
const filterData = [
    {
      name: "Offer",
      options: [
        "Limited-Time Special (152)",
        "Clearance/Closeout (24)",
        "Last Act (7)",
        "Offer code ULTIMATE (71)",
        "Sales & Discounts (170)",
        "Special Offer (218)",
      ],
    },
    {
      name: "Sleeve Length",
      options: ["Short Sleeve (7)", "Long Sleeve (198)"],
    },
    {
      name: "Discount Range",
      options: [
        "70% off & more (1)",
        "60% off & more (8)",
        "50% off & more (30)",
        "40% off & more (170)",
        "30% off & more (170)",
        "20% off & more (170)",
      ],
    },
    {
      name: "Brand",
      options: [
        "Alfani (29)",
        "Bar III (21)",
        "Ben Sherman (8)",
        "Calvin Klein (14)",
        "Club Room (19)",
        "Dylan Park (8)",
        "Haggar (6)",
        "Hugo Boss (1)",
        "Jones New York (5)",
        "Kenneth Cole Reaction (5)",
        "Michael Kors (6)",
        "MICHELSONS OF LONDON (28)",
        "Nick Graham (9)",
        "Nine West (2)",
        "OppoSuits (14)",
        "Perry Ellis (1)",
        "Tallia (4)",
        "Tom Baine (8)",
        "Van Heusen (36)",
      ],
    },
    {
      name: "Price",
      options: [
        "Under $20 (7)",
        "$20-$40 (98)",
        "$40-$60 (110)",
        "$60-$80 (10)",
        "$80-$100 (1)",
      ],
    },
    {
      name: "Occasion",
      options: ["Formal (10)", "Wedding (1)", "Work (37)"],
    },
    {
      name: "Age Group",
      options: ["Adult (181)", "Teen (30)"],
    },
    {
      name: "Available for Registry",
      options: ["Adult (181)", "Teen (30)"],
    },
    {
      name: "Shirt Fit",
      options: [
        "Classic Fit (90)",
        "Slim Fit (102)",
        "Extra Slim (3)",
        "Athletic Fitted (10)",
      ],
    },
    {
      name: "Color",
      options: [
        "Black",
        "Orange",
        "Green",
        "Blue",
        "Grey",
        "Purple",
        "Pink",
        "Yellow",
        "White",
        "Silver",
        "Red",
      ],
    },
  ];
const Sidebar = ({ openSection, isOpen, setIsOpen }) => {
  const [openSections, setOpenSections] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedColors, setSelectedColors] = useState(new Set());

  useEffect(() => {
    // Update the openSections state based on the openSection prop
    setOpenSections((prevState) => {
      const newOpenSections = { ...prevState };
      Object.keys(newOpenSections).forEach((key) => {
        newOpenSections[key] = false; // Close all sections
      });
      if (openSection) {
        newOpenSections[openSection] = true; // Open the clicked section
      }
      return newOpenSections;
    });
  }, [openSection]);

  const handleCloseSidebar = () => {
    setIsOpen(false); // Set sidebar to close
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
    setSelectedColors(new Set()); // Reset selected colors
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
        "Color": newSelection,
      };
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-[600px] bg-white p-4 overflow-y-auto shadow-lg px-[50px] transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`} 
    >
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <span className="cursor-pointer" onClick={handleCloseSidebar}>
            <AiOutlineClose size={24} />
          </span>
        </div>

        <div className="mt-6">
          {filterData.map((filter, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left text-lg"
                onClick={() => toggleSection(filter.name)}
              >
                {filter.name}
              </button>
              {selectedOptions[filter.name] &&
                selectedOptions[filter.name].length > 0 && (
                  <div className="flex flex-wrap">
                    {selectedOptions[filter.name].map((option, idx) => (
                      <span
                        key={idx}
                        className="text-gray-800 mr-2 mb-2 text-xs"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                )}

              {openSections[filter.name] && (
                <div className={`${filter.name === 'Color' ? 'grid grid-cols-5 gap-1' : ''}`}>
                  {filter.options.map((option, idx) => (
                    <label
                      key={idx}
                      className={`mt-4 flex items-center ${filter.name === 'Color' ? 'border border-gray-300 rounded-full w-9 h-9 justify-items-x ' : ''}`}
                      style={filter.name === 'Color' ? { borderColor: selectedColors.has(option) ? 'black' : 'transparent' } : {}}
                      onClick={() => handleOptionChange(filter.name, option)}
                    >
                      {filter.name === 'Color' ? (
                        <>
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={selectedColors.has(option)}
                            onChange={() => handleColorChange(option)}
                          />
                          <span
                            className="w-8 h-8 rounded-full"
                            style={{
                              backgroundColor: option.toLowerCase(),
                              borderRadius: '50%',
                              marginLeft: '1px',
                              borderColor: selectedColors.has(option) ? 'black' : 'transparent'
                            }}
                          ></span>
                        </>
                      ) : (
                        <>
                          <input type="checkbox" className="custom-checkbox border-gray-100" checked={selectedOptions[filter.name]?.includes(option) || false} />
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
              className={`py-2 px-4 rounded w-[271px] h-[50px] ${
                isAnyOptionSelected
                  ? "bg-gray-200 border border-black text-black"
                  : "bg-gray-100 border border-black text-gray-500 cursor-not-allowed"
              }`}
            >
              Clear All
            </button>
            <button className="py-2 px-4 rounded w-[271px] h-[50px] bg-black text-white">
              Apply Filters
            </button>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;


