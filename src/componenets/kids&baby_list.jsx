import React from 'react';
import logo from "../images/logo.png";

const lists = {
  girls: [
    { name: "Toddler Girls (2T-5T)", path: "/girls/toddler" },
    { name: "Girls (4-16)", path: "/girls/4-16" },
    { name: "New Arrivals", path: "/girls/new-arrivals" },
    { name: "Accessories", path: "/girls/accessories" },
    { name: "Activewear", path: "/girls/activewear" },
    { name: "Coats, Jackets & Outerwear", path: "/girls/coats-jackets" },
    { name: "Dresses", path: "/girls/dresses" },
    { name: "Jeans & Denim", path: "/girls/jeans-denim" },
    { name: "Pajamas", path: "/girls/pajamas" },
    { name: "Pants & Leggings", path: "/girls/pants-leggings" },
    { name: "Sets & Outfits", path: "/girls/sets-outfits" },
    { name: "Shirts & Tops", path: "/girls/shirts-tops" },
    { name: "Shoes", path: "/girls/shoes" },
    { name: "Shorts", path: "/girls/shorts" },
    { name: "Skirts", path: "/girls/skirts" },
    { name: "Sweaters", path: "/girls/sweaters" },
    { name: "Sweatshirts & Hoodies", path: "/girls/sweatshirts-hoodies" },
    { name: "Swimsuits", path: "/girls/swimsuits" },
    { name: "Underwear & Socks", path: "/girls/underwear-socks" }
  ],
  boys: [
    { name: "Toddler Boys (2T-5T)", path: "/boys/toddler" },
    { name: "Boys (4-20)", path: "/boys/4-20" },
    { name: "New Arrivals", path: "/boys/new-arrivals" },
    { name: "Accessories", path: "/boys/accessories" },
    { name: "Activewear", path: "/boys/activewear" },
    { name: "Coats, Jackets & Outerwear", path: "/boys/coats-jackets" },
    { name: "Jeans & Denim", path: "/boys/jeans-denim" },
    { name: "Pajamas", path: "/boys/pajamas" },
    { name: "Pants", path: "/boys/pants" },
    { name: "Sets & Outfits", path: "/boys/sets-outfits" },
    { name: "Shirts", path: "/boys/shirts" },
    { name: "Shoes", path: "/boys/shoes" },
    { name: "Shorts", path: "/boys/shorts" },
    { name: "Suits & Suit Sets", path: "/boys/suits-suit-sets" },
    { name: "Sweaters", path: "/boys/sweaters" },
    { name: "Sweatshirts & Hoodies", path: "/boys/sweatshirts-hoodies" },
    { name: "Swimwear", path: "/boys/swimwear" },
    { name: "Underwear & Socks", path: "/boys/underwear-socks" }
  ],
  baby: [
    { name: "All Baby", path: "/baby/all" },
    { name: "Newborn", path: "/baby/newborn" },
    { name: "Baby Boy (0-24 Months)", path: "/baby/boy" },
    { name: "Baby Girl (0-24 Months)", path: "/baby/girl" },
    { name: "Accessories", path: "/baby/accessories" },
    { name: "Baby Shoes", path: "/baby/shoes" },
    { name: "Baby Shower Gifts", path: "/baby/shower-gifts" },
    { name: "Baby Registry", path: "/baby/registry" },
    { name: "Kids & Baby Room", path: "/baby/room" }
  ],
  babyGear: [
    { name: "All Baby Gear & Essentials", path: "/baby-gear/all" },
    { name: "Car Seats", path: "/baby-gear/car-seats" },
    { name: "Health & Safety", path: "/baby-gear/health-safety" },
    { name: "Nursery Essentials", path: "/baby-gear/nursery" },
    { name: "Nursing & Feeding", path: "/baby-gear/nursing-feeding" },
    { name: "Playtime & Activities", path: "/baby-gear/playtime" },
    { name: "Strollers", path: "/baby-gear/strollers" }
  ],
  toys: [
    { name: "All Toys", path: "/toys/all" },
    { name: "0-12 Months", path: "/toys/0-12" },
    { name: "12-24 Months", path: "/toys/12-24" },
    { name: "2-4 Years Old", path: "/toys/2-4" },
    { name: "5-7 Years Old", path: "/toys/5-7" }
  ],
  discover: [
    { name: "Summer Shop", path: "/discover/summer" },
    { name: "Character Shop", path: "/discover/character" },
    { name: "Carter's", path: "/discover/carters" },
    { name: "Epic Threads", path: "/discover/epic-threads" },
    { name: "Finish Line Kids' Shoes", path: "/discover/finish-line" },
    { name: "Nike", path: "/discover/nike" },
    { name: "Ralph Lauren Childrenswear", path: "/discover/ralph-lauren" }
  ],
  sale: [
    { name: "40-60% off Back to School", path: "/sale/back-to-school" },
    { name: "$17.99 Backpacks", path: "/sale/backpacks" },
    { name: "Sale & Clearance", path: "/sale/clearance" }
  ]
};



const ListComponent = () => {
    return (
      <div className="flex flex-row text-sm">
        {/* First Column - Girls' and Boys' Lists */}
        <div className="flex flex-col w-1/3 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">GIRLS'</h2>
            <ul>
              {lists.girls.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="flex flex-col w-1/3 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">BOYS'</h2>
            <ul>
              {lists.boys.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Second Column - Baby and Baby Gear Lists */}
        <div className="flex flex-col w-1/3 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">BABY</h2>
            <ul>
              {lists.baby.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">BABY GEAR</h2>
            <ul>
              {lists.babyGear.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Third Column - Shop hrefys R Us and Sale Lists */}
        <div className="flex flex-col w-1/3 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">SHOP TOYS "R" US</h2>
            <ul>
              {lists.toys.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">DISCOVER</h2>
            <ul>
              {lists.discover.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <ul className="text-red-500">
              {lists.sale.map((item, index) => (
                <li key={index} className="mb-1">
                  <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Logo Column */}
        <div className="flex flex-col w-1/3 p-4">
        <div>
          <ul>
            <li>
              <img
                src={logo}
                alt="Company logo"
                className="h-1/2 w1/2 object-contain"
              />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img
                src={logo}
                alt="Company logo"
                className="h-1/2 w1/2 object-contain"
              />
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
  };
  
  export default ListComponent;
  