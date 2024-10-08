import React, { useState } from "react";
import { products } from "./all_data.js";

const ProductDisplay = ({ fromSideNav =[]}) => {
  const displayProducts = fromSideNav.length > 0 ? fromSideNav : products;
  console.log("data coming from sidenav", fromSideNav);

  // State to manage current image index for each product
  const [currentImages, setCurrentImages] = useState(
    displayProducts.reduce((acc, product) => {
      acc[product.id] = Object.keys(product.images)[0];
      return acc;
    }, {})
  );

  // State to manage selected color for each product
  const [selectedColor, setSelectedColor] = useState(
    displayProducts.reduce((acc, product) => {
      acc[product.id] = Object.keys(product.images)[0];
      return acc;
    }, {})
  );

  // State to manage variant for each product
  const [variantIndex, setVariantIndex] = useState(
    displayProducts.reduce((acc, product) => {
      acc[product.id] = 1;
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

  // Function to handle arrow click to change variant image
  const handleArrowClick = (productId, direction) => {
    const product = displayProducts.find(p => p.id === productId);
    const currentVariantIndex = variantIndex[productId];
    const variants = Object.values(product.variants);
    const totalVariants = variants.length;

    // Calculate the new variant index
    let newVariantIndex;
    if (direction === 'left') {
      newVariantIndex = (currentVariantIndex - 1 + totalVariants) % totalVariants;
    } else {
      newVariantIndex = (currentVariantIndex + 1) % totalVariants;
    }

    // Update the variant index state
    setVariantIndex({
      ...variantIndex,
      [productId]: newVariantIndex,
    });

    // Get the new variant images
    const newImages = variants[newVariantIndex].images;

    // Update the current image to cycle through the new variant images
    const currentImageSrc = currentImages[productId];
    const currentImageIndex = newImages.indexOf(currentImageSrc);

    // Calculate the new image index based on the direction
    let newImageIndex;
    if (direction === 'left') {
      newImageIndex = (currentImageIndex - 1 + newImages.length) % newImages.length;
    } else {
      newImageIndex = (currentImageIndex + 1) % newImages.length;
    }

    setCurrentImages({
      ...currentImages,
      [productId]: newImages[newImageIndex],
    });
  };

  return (
    <div className="max-w-8xl lg:ml-4 lg:mt-8 lg:mr-4 md:ml-8 md:mt-16 md:mr-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-helvetica">
        {displayProducts.map((product, index) => (
          <div key={product.id} className="p-1 relative">
            {/* Picture Section */}
            <div className="h-45 relative group">
  <img
    src={currentImages[product.id]}
    alt={`Product ${index + 1}`}
    className="w-full h-full object-cover"
  />

  {Object.keys(product.variants).length > 0 && (
    <>
      <button
        onClick={() => handleArrowClick(product.id, 'left')}
        onMouseLeave={() => resetImage(product.id)}
        className="absolute top-1/2 left-2  p-2 rounded-full bg-gray-200 text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &lt;
      </button>
      <button
        onClick={() => handleArrowClick(product.id, 'right')}
        onMouseLeave={() => resetImage(product.id)}
        className="absolute top-1/2 right-2  p-2 rounded-full bg-gray-200 text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &gt;
      </button>
    </>
  )}
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
