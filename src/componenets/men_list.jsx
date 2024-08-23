import React from 'react';
import logo from "../images/logo.png";

const lists = {
  mensClothing: [
    { name: "All Men's Clothing", path: "/mens-clothing/all" },
    { name: "New Arrivals", path: "/mens-clothing/new-arrivals" },
    { name: "Blazer & Sports Coats", path: "/mens-clothing/blazers-sports-coats" },
    { name: "Coats & Jackets", path: "/mens-clothing/coats-jackets" },
    { name: "Dress Shirts", path: "/mens-clothing/dress-shirts" },
    { name: "Hoodies & Sweatshirts", path: "/mens-clothing/hoodies-sweatshirts" },
    { name: "Jeans", path: "/mens-clothing/jeans" },
    { name: "Pajamas & Robes", path: "/mens-clothing/pajamas-robes" },
    { name: "Pants", path: "/mens-clothing/pants" },
    { name: "Shirts", path: "/mens-clothing/shirts" },
    { name: "Shorts", path: "/mens-clothing/shorts" },
    { name: "Suits & Tuxedos", path: "/mens-clothing/suits-tuxedos" },
    { name: "Sweaters", path: "/mens-clothing/sweaters" },
    { name: "Swimwear", path: "/mens-clothing/swimwear" },
    { name: "Underwear & Socks", path: "/mens-clothing/underwear-socks" }
  ],
  mensActiveOutdoor: [
    { name: "All Activewear", path: "/mens-activewear/all" },
    { name: "Outdoor Apparel & Shoes", path: "/mens-activewear/outdoor-apparel-shoes" },
    { name: "Sports Fan Shop", path: "/mens-activewear/sports-fan-shop" }
  ],
  mensBigTall: [
    { name: "All Big & Tall", path: "/mens-big-tall/all" },
    { name: "Jeans & Pants", path: "/mens-big-tall/jeans-pants" },
    { name: "Tops", path: "/mens-big-tall/tops" }
  ],
  mensBrands: [
    { name: "All Men's Brands", path: "/mens-brands/all" },
    { name: "adidas", path: "/mens-brands/adidas" },
    { name: "Nike", path: "/mens-brands/nike" }
  ],
  mensShoes: [
    { name: "All Men's Shoes", path: "/mens-shoes/all" },
    { name: "Athletic Shoes & Sneakers", path: "/mens-shoes/athletic-sneakers" },
    { name: "Boat Shoes", path: "/mens-shoes/boat-shoes" },
    { name: "Casual Shoes", path: "/mens-shoes/casual-shoes" },
    { name: "Dress Shoes", path: "/mens-shoes/dress-shoes" },
    { name: "Loafers & Drivers", path: "/mens-shoes/loafers-drivers" },
    { name: "Sandals", path: "/mens-shoes/sandals" },
    { name: "Summer Shoes", path: "/mens-shoes/summer-shoes" },
    { name: "Designer Shoes", path: "/mens-shoes/designer-shoes" }
  ],
  bagsAccessories: [
    { name: "All Accessories", path: "/bags-accessories/all" },
    { name: "Bags & Backpacks", path: "/bags-accessories/bags-backpacks" },
    { name: "Belts & Suspenders", path: "/bags-accessories/belts-suspenders" },
    { name: "Jewelry & Cufflinks", path: "/bags-accessories/jewelry-cufflinks" },
    { name: "Ties & Pocket Squares", path: "/bags-accessories/ties-pocket-squares" },
    { name: "Wallets", path: "/bags-accessories/wallets" },
    { name: "Watches", path: "/bags-accessories/watches" }
  ],
  cologneGrooming: [],
  discover: [
    { name: "Business Casual", path: "/discover/business-casual" },
    { name: "Contemporary Trends", path: "/discover/contemporary-trends" },
    { name: "Own Your Style", path: "/discover/own-your-style" },
    { name: "Shop NCAA College Apparel & Gear", path: "/discover/ncaa-college-apparel-gear" },
    { name: "Vacation Shop", path: "/discover/vacation-shop" },
    { name: "Wedding", path: "/discover/wedding" },
    { name: "Extra 25% Off with code ULTIMATE", path: "/discover/extra-25-off" },
    { name: "25-40% off Limited Time Specials", path: "/discover/limited-time-specials" },
    { name: "Sale & Clearance", path: "/discover/sale-clearance" }
  ],
  backToSchoolEssentials: [
    { name: "Shop All Back to School", path: "/back-to-school/all" },
    { name: "$25 & Under Tees", path: "/back-to-school/25-under-tees" },
    { name: "$35 & Under Shorts", path: "/back-to-school/35-under-shorts" },
    { name: "$50 & Under Jeans & Pants", path: "/back-to-school/50-under-jeans-pants" },
    { name: "$70 & Under Shoes", path: "/back-to-school/70-under-shoes" }
  ],
  sale: [
    { name: "$25 & Under Tees", path: "/sale/25-under-tees" },
    { name: "$35 & Under Shorts", path: "/sale/35-under-shorts" },
    { name: "$50 & Under Jeans & Pants", path: "/sale/50-under-jeans-pants" },
    { name: "$70 & Under Shoes", path: "/sale/70-under-shoes" }
  ]
};

const Men_ListComponent = () => {
  return (
    <div className="flex flex-row">
      {/* First Column - Men's Clothing and Activewear */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">MEN'S CLOTHING</h2>
          <ul>
            {lists.mensClothing.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Column - Men's Big & Tall and Brands */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">MEN'S ACTIVE & OUTDOOR</h2>
          <ul>
            {lists.mensActiveOutdoor.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">MEN'S BIG & TALL</h2>
          <ul>
            {lists.mensBigTall.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">MEN'S BRANDS</h2>
          <ul>
            {lists.mensBrands.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Third Column - Men's Shoes and Bags & Accessories */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">MEN'S SHOES</h2>
          <ul>
            {lists.mensShoes.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">BAGS & ACCESSORIES</h2>
          <ul>
            {lists.bagsAccessories.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fourth Column - Cologne & Grooming, Discover, Sale */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">COLOGNE & GROOMING</h2>
          <ul>
            {lists.cologneGrooming.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">DISCOVER</h2>
          <ul>
            {lists.discover.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2"></h2>
          <ul className="text-red-500">
            {lists.sale.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fifth Column - Back to School Essentials and Logo */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">BACK TO SCHOOL ESSENTIALS</h2>
          <ul>
            {lists.backToSchoolEssentials.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
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

export default Men_ListComponent;
