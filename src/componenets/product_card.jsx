import React, { useState } from "react";
import pic1 from "../images/chat.png";
import pic2 from "../images/logo.png";
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
        [pic1]: pic1,
        [pic2]: pic2,
        [pic3]: pic3,
        [pic4]: pic4,
        [pic5]: pic5,
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
        [pic1]: pic1,
        [pic2]: pic2,
        [pic3]: pic3,
        [pic4]: pic4,
        [pic5]: pic5,
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
        [pic1]: pic1,
        [pic2]: pic2,
        [pic3]: pic3,
        [pic4]: pic4,
        [pic5]: pic5,
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
        [pic1]: pic1,
        [pic2]: pic2,
        [pic3]: pic3,
        [pic4]: pic4,
        [pic5]: pic5,
      },
      brandName: "Brand XYZ 4",
      description: "Product 4 description",
      price: 130.0,
      salePrice: 85.0,
      reviews: 4,
    },
    {
      id: 5,
      images: {
        [pic1]: pic1,
        [pic2]: pic2,
        [pic3]: pic3,
        [pic4]: pic4,
        [pic5]: pic5,
      },
      brandName: "Brand XYZ 5",
      description: "Product 5 description",
      price: 140.0,
      salePrice: 95.0,
      reviews: 2,
    },
    {
      id: 6,
      images: {
        [pic1]: pic1,
        [pic2]: pic2,
        [pic3]: pic3,
        [pic4]: pic4,
        [pic5]: pic5,
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

  // Function to handle left arrow click
  const handlePrevImage = (productId) => {
    const productImages = Object.keys(products.find((product) => product.id === productId).images);
    const currentIndex = productImages.indexOf(currentImages[productId]);
    if (currentIndex > 0) {
      setCurrentImages({
        ...currentImages,
        [productId]: productImages[currentIndex - 1],
      });
    }
  };

  // Function to handle right arrow click
  const handleNextImage = (productId) => {
    const productImages = Object.keys(products.find((product) => product.id === productId).images);
    const currentIndex = productImages.indexOf(currentImages[productId]);
    if (currentIndex < productImages.length - 1) {
      setCurrentImages({
        ...currentImages,
        [productId]: productImages[currentIndex + 1],
      });
    }
  };

  // Function to handle color hover to change image
  const handleColorHover = (productId, imageSrc) => {
    setCurrentImages({
      ...currentImages,
      [productId]: imageSrc,
    });
  };

  // Function to reset image on mouse leave
  const resetImage = (productId) => {
    const firstImageSrc = Object.keys(products.find((product) => product.id === productId).images)[0];
    setCurrentImages({
      ...currentImages,
      [productId]: firstImageSrc,
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={product.id} className="border p-4">
            {/* Picture Section */}
            <div className="relative h-40">
              <img
                src={currentImages[product.id]}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                  onClick={() => handlePrevImage(product.id)}
                  className="bg-white rounded-full shadow-md p-2"
                  disabled={Object.keys(product.images).indexOf(currentImages[product.id]) === 0}
                >
                  &lt; {/* Left Arrow */}
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                  onClick={() => handleNextImage(product.id)}
                  className="bg-white rounded-full shadow-md p-2"
                  disabled={
                    Object.keys(product.images).indexOf(currentImages[product.id]) === Object.keys(product.images).length - 1
                  }
                >
                  &gt; {/* Right Arrow */}
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-4">
                {Object.keys(product.images).map((imageSrc, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 m-1 ${
                      currentImages[product.id] === imageSrc ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: "transparent" }} // Set a placeholder color
                    onMouseEnter={() => handleColorHover(product.id, imageSrc)}
                    onMouseLeave={() => resetImage(product.id)}
                  >
                    <img src={imageSrc} alt={`Color ${index}`} className="w-full h-full object-cover rounded-full" />
                  </button>
                ))}
              </div>

            {/* Product Information */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold hover:underline">{product.brandName}</h2>
              <p className="text-gray-600 hover:underline">{product.description}</p>
              <div className="mt-4">
                <span
                  className={`text-lg ${
                    product.salePrice ? "line-through" : "text-black"
                  }`}
                >
                  ${product.price}
                </span>
                {product.salePrice && (
                  <span className="text-lg ml-2 ">
                    ${product.salePrice}
                  </span>
                )}
              </div>

              {/* Reviews */}
              <div className="flex justify-center items-center mt-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 ${
                      index < product.reviews ? "fas fa-star" : "far fa-star"
                    }`}
                  ></span>
                ))}
              </div>

              {/* Color Selection */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
