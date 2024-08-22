import React from 'react';

const lists = {
  girls: [
    "Toddler Girls (2T-5T)", "Girls (4-16)", "New Arrivals", "Accessories", "Activewear", "Coats, Jackets & Outerwear", "Dresses", "Jeans & Denim",
    "Pajamas", "Pants & Leggings", "Sets & Outfits", "Shirts & Tops", "Shoes", "Shorts", "Skirts", "Sweaters", "Sweatshirts & Hoodies", "Swimsuits", "Underwear & Socks"
  ],
  boys: [
    "Toddler Boys (2T-5T)", "Boys (4-20)", "New Arrivals", "Accessories", "Activewear", "Coats, Jackets & Outerwear", "Jeans & Denim", "Pajamas", "Pants",
    "Sets & Outfits", "Shirts", "Shoes", "Shorts", "Suits & Suit Sets", "Sweaters", "Sweatshirts & Hoodies", "Swimwear", "Underwear & Socks"
  ],
  baby: [
    "All Baby", "Newborn", "Baby Boy (0-24 Months)", "Baby Girl (0-24 Months)", "Accessories", "Baby Shoes", "Baby Shower Gifts", "Baby Registry", "Kids & Baby Room"
  ],
  babyGear: [
    "All Baby Gear & Essentials", "Car Seats", "Health & Safety", "Nusery Essentials", "Nursing & Feeding", "Playtime & Activities", "Strollers"
  ],
  toys: [
    "All Toys", "0-12 Months", "12-24 Months", "2-4 Years Old", "5-7 Years Old"
  ],
  discover: [
    "Summer Shop", "Character Shop", "Carter's", "Epic Threads", "Finish Line Kids' Shoes", "Nike", "Ralph Lauren Childrenswear"
  ],
  sale: [
    "40-60% off Back to School", "$17.99 Backpacks", "Sale & Clearance"
  ]
};

const ListComponent = () => {
  return (
    <div className="flex flex-row">
      {/* First Column - Girls' and Boys' Lists */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">GIRLS'</h2>
          <ul className="">
            {lists.girls.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">BOYS'</h2>
          <ul className="">
            {lists.boys.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Second Column - Baby and Baby Gear Lists */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">BABY</h2>
          <ul className="">
            {lists.baby.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">BABY GEAR</h2>
          <ul className="">
            {lists.babyGear.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Third Column - Shop Toys R Us and Sale Lists */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">SHOP TOYS "R" US</h2>
          <ul className="">
            {lists.toys.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">DISCOVER</h2>
          <ul className="">
            {lists.discover.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">SALE</h2>
          <ul className="">
            {lists.sale.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
