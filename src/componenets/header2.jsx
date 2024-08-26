
import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import List1 from "./Men's Clothing&Accessories_AllMen'sClothing_Shirts&hrefps_Dress Shirts.jsx"
import CategoryList from "./categories.jsx";
import Filters from "./filters.jsx"
import ProductCard from './product_card.jsx';
import Cradtest from "./product_card.jsx"

const DressShirtsPage = () => {
  return (
    <div>
        <List1/>
        <CategoryList/>
        <Filters/>
        <Cradtest/>
    </div>
  );
};

export default DressShirtsPage;
