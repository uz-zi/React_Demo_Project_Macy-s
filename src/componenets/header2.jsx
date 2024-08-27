import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List1 from "./Men's Clothing&Accessories_AllMen'sClothing_Shirts&hrefps_Dress Shirts.jsx";
import CategoryList from "./categories.jsx";
import Filters from "./filters.jsx";
import ProductCard from './product_card.jsx';

const Section = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to handle the filtered products from FilterButtons
  const handleFilteredProducts = (products) => {
    console.log('Filtered Products received in Section:', products); // Log the filtered products
    setFilteredProducts(products);
  };

  return (
    <div>
      <List1/>
      <CategoryList/>
      <Filters onFilteredProducts={handleFilteredProducts}/>
      <ProductCard fromSideNav={filteredProducts}/>
    </div>
  );
};

export default Section;
