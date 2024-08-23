
import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const DressShirtsPage = () => {
  return (
    <div className="p-4">
      <div className="mb-4 flex items-center space-x-4">
        <a href="/mens-clothing" className="hover:text-gray-500 underline text-xs">
          Men's Clothing & Accessories
        </a>
        <span>/</span>
        <a href="/mens-clothing/all" className="hover:text-gray-500 underline text-xs">
          All Men's Clothing
        </a>
        <span>/</span>
        <a
          href="/mens-clothing/all/shirts-hrefps"
          className="hover:text-gray-500 underline text-xs"
        >
          Shirts & hrefps
        </a>
        <span>/</span>
        {/* <a
          href="/mens-clothing/all/shirts-hrefps/dress-shirts"
          
        >
          Dress Shirts
        </a> */}
        <p className="text-gray-500 text-xs">Dress Shirts</p>
        </div >
      <h1 className="text-2xl font-bold">Men's Dress Shirts (227)</h1>
    </div>
  );
};

export default DressShirtsPage;
