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

  // Function to handle color hover to change image
  const handleColorHover = (productId, imageSrc) => {
    setCurrentImages({
      ...currentImages,
      [productId]: imageSrc,
    });
  };

  // Function to reset image on mouse leave
  const resetImage = (productId) => {
    const firstImageSrc = Object.keys(
      products.find((product) => product.id === productId).images
    )[0];
    setCurrentImages({
      ...currentImages,
      [productId]: firstImageSrc,
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

            {/* color hover */}
            <div className="flex mt-4 ml-2">
              {Object.keys(product.images).map((imageSrc, index) => (
                <button
                  key={index}
                  className={`w-7 h-7 rounded-full m-1 p-[2px] ${
                    index === 0
                      ? "border border-black"
                      : "border border-transparent hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: "transparent" }}
                  onMouseEnter={() => handleColorHover(product.id, imageSrc)}
                  onMouseLeave={() => resetImage(product.id)}
                >
                  <img
                    src={imageSrc}
                    alt={`Color ${index}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
              ))}
            </div>




            {/* Product Information */}
            <div className="mt-3 ml-3">
              <h2 className="text-lg font-bold hover:underline">
                {product.brandName}
              </h2>
              <p className="text-gray-600 hover:underline">
                {product.description}
              </p>
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
                    className={`text-balck-400 ${
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
