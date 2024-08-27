import React, { useState } from "react";
import pic1 from "../images/10631691_fpx.png";
import pic2 from "../images/27024606_fpx.png";
import pic3 from "../images/8982930_fpx.png";
import pic4 from "../images/28794642_fpx.png";
import pic5 from "../images/27024606_fpx.png";
import pic6 from "../images/10631691_fpx.png"; // Add an additional image

const ProductDisplay = () => {
  // Array of product data objects
  const products = [
    {
      id: 1,
      images: {
        [pic1]: "red",
        [pic2]: "orange",
        [pic3]: "pink",
        [pic4]: "yellow",
        [pic5]: "blue",
      },
      brandName: "Brand XYZ 1",
      description: "Product 1 description",
      price: 100.0,
      salePrice: 80.0,
      reviews: 4,
    },
    {
      id: 2,
      images: {
        [pic1]: "red",
        [pic2]: "orange",
        [pic3]: "pink",
        [pic4]: "yellow",
        [pic5]: "blue",
      },
      brandName: "Brand XYZ 2",
      description: "Product 2 description",
      price: 120.0,
      salePrice: 90.0,
      reviews: 5,
    },
    {
      id: 3,
      images: {
        [pic1]: "red",
        [pic2]: "orange",
        [pic3]: "pink",
      },
      brandName: "Brand XYZ 3",
      description: "Product 3 description",
      price: 150.0,
      salePrice: 110.0,
      reviews: 3,
    },
    {
      id: 4,
      images: {
        [pic1]: "red",
        [pic2]: "orange",
        [pic3]: "pink",
        [pic4]: "yellow",
        [pic5]: "blue",
      },
      brandName: "Brand XYZ 4",
      description: "Product 4 description",
      price: 130.0,
      salePrice: 85.0,
    },
    {
      id: 5,
      images: {
        [pic1]: "red",
        [pic2]: "orange",
        [pic3]: "pink",
        [pic4]: "yellow",
        [pic5]: "blue",
      },
      brandName: "Brand XYZ 5",
      description: "Product 5 description",
      price: 95.0,
      reviews: 2,
    },
    {
      id: 6,
      images: {
        [pic1]: "red",
        [pic2]: "orange",
        [pic3]: "pink",
        [pic4]: "yellow",
        [pic5]: "blue",
      },
      brandName: "Brand XYZ 6",
      description: "Product 6 description",
      price: 110.0,
      salePrice: 75.0,
      reviews: 5,
    },
  ];

  // State to manage current image index for each product
  const [currentImages, setCurrentImages] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = Object.keys(product.images)[0]; // Initialize each product's image to the first in the array
      return acc;
    }, {})
  );

  // State to manage selected color for each product
  const [selectedColor, setSelectedColor] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = Object.keys(product.images)[0]; // Initialize each product's selected color to the first in the array
      return acc;
    }, {})
  );

  // Function to handle color hover to change image
  const handleColorHover = (productId, imageSrc) => {
    setCurrentImages({
      ...currentImages,
      [productId]: imageSrc,
    });
  };

  // Function to handle color click to set the selected color
  const handleColorClick = (productId, imageSrc) => {
    setSelectedColor({
      ...selectedColor,
      [productId]: imageSrc,
    });
    setCurrentImages({
      ...currentImages,
      [productId]: imageSrc,
    });
  };

  // Function to reset image on mouse leave
  const resetImage = (productId) => {
    const selectedImageSrc = selectedColor[productId];
    setCurrentImages({
      ...currentImages,
      [productId]: selectedImageSrc,
    });
  };

  return (
    <div className="max-w-8xl ml-4 mt-8 mr-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={product.id} className="p-1">
            {/* Picture Section */}
            <div className="h-45">
              <img
                src={currentImages[product.id]}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Color hover */}
            <div className="flex mt-4 ml-2">
              {Object.keys(product.images).map((imageSrc, index) => (
                <button
                  key={index}
                  className={`w-5 h-5 rounded-full m-1 p-[2px] ${
                    selectedColor[product.id] === imageSrc
                      ? "border border-black"
                      : "border border-transparent hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: product.images[imageSrc] }}
                  onMouseEnter={() => handleColorHover(product.id, imageSrc)}
                  onMouseLeave={() => resetImage(product.id)}
                  onClick={() => handleColorClick(product.id, imageSrc)}
                >
                  {/* Optional: You can add a small icon or text to indicate color */}
                </button>
              ))}
            </div>

            {/* Product Information */}
            <div className="mt-3 ml-3">
              <div className="hover:underline">
                <h2 className="text-lg font-bold">{product.brandName}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="mt-4">
                <span
                  className={`text-lg ${
                    product.salePrice ? "line-through" : "text-black"
                  }`}
                >
                  ${product.price}
                </span>
              </div>

              <div>
                {product.salePrice && (
                  <span className="text-lg">${product.salePrice}</span>
                )}
              </div>

              {/* Reviews */}
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-black-400 ${
                      index < product.reviews ? "fas fa-star" : "far fa-star"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;



//product card--------------------





import React, { useState, useEffect } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import "./checkbox_style.css";

// // Define filter data
// const filterData = [
//     {
//       name: "Offer",
//       options: [
//         "Limited-Time Special (152)",
//         "Clearance/Closeout (24)",
//         "Last Act (7)",
//         "Offer code ULTIMATE (71)",
//         "Sales & Discounts (170)",
//         "Special Offer (218)",
//       ],
//     },
//     {
//       name: "Sleeve Length",
//       options: ["Short Sleeve (7)", "Long Sleeve (198)"],
//     },
//     {
//       name: "Discount Range",
//       options: [
//         "70% off & more (1)",
//         "60% off & more (8)",
//         "50% off & more (30)",
//         "40% off & more (170)",
//         "30% off & more (170)",
//         "20% off & more (170)",
//       ],
//     },
//     {
//       name: "Brand",
//       options: [
//         "Alfani (29)",
//         "Bar III (21)",
//         "Ben Sherman (8)",
//         "Calvin Klein (14)",
//         "Club Room (19)",
//         "Dylan Park (8)",
//         "Haggar (6)",
//         "Hugo Boss (1)",
//         "Jones New York (5)",
//         "Kenneth Cole Reaction (5)",
//         "Michael Kors (6)",
//         "MICHELSONS OF LONDON (28)",
//         "Nick Graham (9)",
//         "Nine West (2)",
//         "OppoSuits (14)",
//         "Perry Ellis (1)",
//         "Tallia (4)",
//         "Tom Baine (8)",
//         "Van Heusen (36)",
//       ],
//     },
//     {
//       name: "Price",
//       options: [
//         "Under $20 (7)",
//         "$20-$40 (98)",
//         "$40-$60 (110)",
//         "$60-$80 (10)",
//         "$80-$100 (1)",
//       ],
//     },
//     {
//       name: "Occasion",
//       options: ["Formal (10)", "Wedding (1)", "Work (37)"],
//     },
//     {
//       name: "Age Group",
//       options: ["Adult (181)", "Teen (30)"],
//     },
//     {
//       name: "Available for Registry",
//       options: ["Adult (181)", "Teen (30)"],
//     },
//     {
//       name: "Shirt Fit",
//       options: [
//         "Classic Fit (90)",
//         "Slim Fit (102)",
//         "Extra Slim (3)",
//         "Athletic Fitted (10)",
//       ],
//     },
//     {
//       name: "Color",
//       options: [
//         "Black",
//         "Orange",
//         "Green",
//         "Blue",
//         "Grey",
//         "Purple",
//         "Pink",
//         "Yellow",
//         "White",
//         "Silver",
//         "Red",
//       ],
//     },
//   ];
// const Sidebar = ({ openSection, isOpen, setIsOpen }) => {
//   const [openSections, setOpenSections] = useState({});
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [selectedColors, setSelectedColors] = useState(new Set());

//   useEffect(() => {
//     // Update the openSections state based on the openSection prop
//     setOpenSections((prevState) => {
//       const newOpenSections = { ...prevState };
//       Object.keys(newOpenSections).forEach((key) => {
//         newOpenSections[key] = false; // Close all sections
//       });
//       if (openSection) {
//         newOpenSections[openSection] = true; // Open the clicked section
//       }
//       return newOpenSections;
//     });
//   }, [openSection]);

//   const handleCloseSidebar = () => {
//     setIsOpen(false); // Set sidebar to close
//   };

//   const toggleSection = (section) => {
//     setOpenSections((prevState) => {
//       const newOpenSections = {};
//       newOpenSections[section] = !prevState[section];
//       return newOpenSections;
//     });
//   };

//   const handleOptionChange = (filterName, option) => {
//     setSelectedOptions((prevState) => {
//       const currentSelection = prevState[filterName] || [];
//       const newSelection = currentSelection.includes(option)
//         ? currentSelection.filter((item) => item !== option)
//         : [...currentSelection, option];

//       if (filterName === "Color") {
//         setSelectedColors((prevColors) => {
//           const updatedColors = new Set(prevColors);
//           if (updatedColors.has(option)) {
//             updatedColors.delete(option);
//           } else {
//             updatedColors.add(option);
//           }
//           return updatedColors;
//         });
//       }

//       return {
//         ...prevState,
//         [filterName]: newSelection,
//       };
//     });
//   };

//   const handleClearAll = () => {
//     setSelectedOptions({});
//     setSelectedColors(new Set());
//   };

//   const isAnyOptionSelected = Object.values(selectedOptions).some(
//     (options) => options.length > 0
//   );

//   const handleColorChange = (color) => {
//     setSelectedColors((prevState) => {
//       const newColors = new Set(prevState);
//       if (newColors.has(color)) {
//         newColors.delete(color);
//       } else {
//         newColors.add(color);
//       }
//       return newColors;
//     });

//     setSelectedOptions((prevState) => {
//       const currentSelection = prevState["Color"] || [];
//       const newSelection = currentSelection.includes(color)
//         ? currentSelection.filter((item) => item !== color)
//         : [...currentSelection, color];

//       return {
//         ...prevState,
//         "Color": newSelection,
//       };
//     });
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 bottom-0 w-[600px] bg-white p-4 overflow-y-auto shadow-lg px-[50px] transition-transform duration-300 z-50 ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`} 
//     >
//       <div className="mt-10">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">Filters</h2>
//           <span className="cursor-pointer" onClick={handleCloseSidebar}>
//             <AiOutlineClose size={24} />
//           </span>
//         </div>

//         <div className="mt-6">
//           {filterData.map((filter, index) => (
//             <div key={index} className="mb-4">
//               <button
//                 className="w-full text-left text-lg"
//                 onClick={() => toggleSection(filter.name)}
//               >
//                 {filter.name}
//               </button>
//               {selectedOptions[filter.name] &&
//                 selectedOptions[filter.name].length > 0 && (
//                   <div className="flex flex-wrap">
//                     {selectedOptions[filter.name].map((option, idx) => (
//                       <span
//                         key={idx}
//                         className="text-gray-800 mr-2 mb-2 text-xs"
//                       >
//                         {option}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//               {openSections[filter.name] && (
//                 <div className={`${filter.name === 'Color' ? 'grid grid-cols-5 gap-1' : ''}`}>
//                   {filter.options.map((option, idx) => (
//                     <label
//                       key={idx}
//                       className={`mt-4 flex items-center ${filter.name === 'Color' ? 'border border-gray-300 rounded-full w-9 h-9 justify-items-x ' : ''}`}
//                       style={filter.name === 'Color' ? { borderColor: selectedColors.has(option) ? 'black' : 'transparent' } : {}}
//                       onClick={() => handleOptionChange(filter.name, option)}
//                     >
//                       {filter.name === 'Color' ? (
//                         <>
//                           <input
//                             type="checkbox"
//                             className="hidden"
//                             checked={selectedColors.has(option)}
//                             onChange={() => handleColorChange(option)}
//                           />
//                           <span
//                             className="w-8 h-8 rounded-full"
//                             style={{
//                               backgroundColor: option.toLowerCase(),
//                               borderRadius: '50%',
//                               marginLeft: '1px',
//                               borderColor: selectedColors.has(option) ? 'black' : 'transparent'
//                             }}
//                           ></span>
//                         </>
//                       ) : (
//                         <>
//                           <input type="checkbox" className="custom-checkbox border-gray-100" checked={selectedOptions[filter.name]?.includes(option) || false} />
//                           <span className="ml-2">{option}</span>
//                         </>
//                       )}
//                     </label>
//                   ))}
//                 </div>
//               )}
//               <div className="border-b border-black my-6"></div>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-row mt-6 space-x-2">
//             <button
//               onClick={handleClearAll}
//               disabled={!isAnyOptionSelected}
//               className={`py-2 px-4 rounded w-[271px] h-[50px] ${
//                 isAnyOptionSelected
//                   ? "bg-gray-200 border border-black text-black"
//                   : "bg-gray-100 border border-black text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               Clear All
//             </button>
//             <button className="py-2 px-4 rounded w-[271px] h-[50px] bg-black text-white">
//               Apply Filters
//             </button>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


//------side bar