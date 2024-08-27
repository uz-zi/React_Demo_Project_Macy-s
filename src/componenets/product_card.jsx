import React, { useState } from "react";
import { products} from "./all_data.js"

const ProductDisplay = () => {
  
  // State to manage current image index for each product
  const [currentImages, setCurrentImages] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = Object.keys(product.images)[0]; 
      return acc;
    }, {})
  );

  // State to manage selected color for each product
  const [selectedColor, setSelectedColor] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = Object.keys(product.images)[0];
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-helvetica">
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
                <p className="">{product.description}</p>
              </div>
              <div className="mt-4">
                <span
                  className={`text-base ${
                    product.salePrice ? "line-through" : "text-black"
                  }`}
                >
                  ${product.price}
                </span>
              </div>

              <div>
                {product.salePrice && (
                  <span className="text-lg text-red-500 text-base font-bold">{`Sale $${product.salePrice}`}</span>
                  )}
              </div>

              {/* Reviews */}
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-black-400 text-xs ${
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
