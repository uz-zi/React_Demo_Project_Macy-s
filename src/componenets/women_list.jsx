import React from 'react';
import logo from "../images/logo.png"; 

const lists = {
  womensClothing: [

    { name: "Shop All", path: "/womens-clothing/all" },
    { name: "Active & Workout", path: "/womens-clothing/active-workout" },
    { name: "Blazers", path: "/womens-clothing/blazers" },
    { name: "Bras, Underwear & Lingerie", path: "/womens-clothing/bras-underwear-lingerie" },
    { name: "Coats & Jackets", path: "/womens-clothing/coats-jackets" },
    { name: "Dresses", path: "/womens-clothing/dresses" },
    { name: "Hoodies & Sweatshirts", path: "/womens-clothing/hoodies-sweatshirts" },
    { name: "Jeans", path: "/womens-clothing/jeans" },
    { name: "Jumpsuits & Rompers", path: "/womens-clothing/jumpsuits-rompers" },
    { name: "Matching Sets", path: "/womens-clothing/matching-sets" },
    { name: "Pajamas & Robes", path: "/womens-clothing/pajamas-robes" },
    { name: "Pants & Capris", path: "/womens-clothing/pants-capris" },
    { name: "Shorts", path: "/womens-clothing/shorts" },
    { name: "Skirts", path: "/womens-clothing/skirts" },
    { name: "Suits & Suit Separates", path: "/womens-clothing/suits-suit-separates" },
    { name: "Sweaters", path: "/womens-clothing/sweaters" },
    { name: "Swimsuits & Cover-Ups", path: "/womens-clothing/swimsuits-cover-ups" },
    { name: "Tops", path: "/womens-clothing/tops" },
  ],
  womensSizes: [
    { name: "Plus Sizes", path: "/womens-sizes/plus" },
    { name: "Petites (5'4\" and under)", path: "/womens-sizes/petites" },
    { name: "Juniors & Young Adult", path: "/womens-sizes/juniors-young-adult" }
  ],
  womensDresses: [
    { name: "New Fall Dresses", path: "/womens-dresses/new-fall" },
    { name: "Formal Gowns", path: "/womens-dresses/formal-gowns" },
    { name: "Cocktail & Party", path: "/womens-dresses/cocktail-party" },
    { name: "Juniors Dresses", path: "/womens-dresses/juniors" },
    { name: "Plus Dresses", path: "/womens-dresses/plus" },
    { name: "Petite Dresses", path: "/womens-dresses/petite" },
    { name: "Dresses Under $100", path: "/womens-dresses/under-100" }
  ],
  womensOutdoor: [
  ],
  womensContemporary: [
  ],
  womensBrands: [
    { name: "Shop All", path: "/womens-brands/all" },
    { name: "Adrianna Papell", path: "/womens-brands/adrianna-papell" },
    { name: "Bar III", path: "/womens-brands/bar-iii" },
    { name: "CeCe", path: "/womens-brands/cece" },
    { name: "Donna Karan New York", path: "/womens-brands/donna-karan-new-york" },
    { name: "Free People", path: "/womens-brands/free-people" },
    { name: "I.N.C. International Concepts", path: "/womens-brands/inc-international-concepts" },
    { name: "KARL LAGERFELD PARIS", path: "/womens-brands/karl-lagerfeld-paris" },
    { name: "MANGO", path: "/womens-brands/mango" },
    { name: "On 34th", path: "/womens-brands/on-34th" },
    { name: "Style & Co", path: "/womens-brands/style-co" },
    { name: "Vince Camuto", path: "/womens-brands/vince-camuto" }
  ],
  womensCompleteLook: [
    { name: "Shoes", path: "/womens-complete-look/shoes" },
    { name: "Handbags & Wallets", path: "/womens-complete-look/handbags-wallets" },
    { name: "Accessories", path: "/womens-complete-look/accessories" },
    { name: "Jewelry & Watches", path: "/womens-complete-look/jewelry-watches" },
    { name: "Tights, Socks, & Hosiery", path: "/womens-complete-look/tights-socks-hosiery" }
  ],
  womensOccasion: [
    { name: "Back to School", path: "/womens-occasion/back-to-school" },
    { name: "Homecoming", path: "/womens-occasion/homecoming" },
    { name: "Wedding", path: "/womens-occasion/wedding" },
    { name: "Evening", path: "/womens-occasion/evening" },
    { name: "Work", path: "/womens-occasion/work" },
    { name: "Vacation", path: "/womens-occasion/vacation" }
  ],
  womensSales: [
    { name: "Extra 25% off with code ULTIMATE", path: "/womens-sales/ultimate" },
    { name: "New Dresses Under $100", path: "/womens-sales/new-dresses-under-100" },
    { name: "Sale & Clearance", path: "/womens-sales/sale-clearance" }
  ],
  womensTrending: [
    { name: "Lightweight Layers", path: "/womens-trending/lightweight-layers" },
    { name: "Quilting & Puffer Jackets", path: "/womens-trending/quilting-puffer-jackets" },
    { name: "Fresh Fall Denim", path: "/womens-trending/fresh-fall-denim" },
    { name: "Cargo & Utility", path: "/womens-trending/cargo-utility" }
  ]
};

const Women_ListComponent = () => {
  return (
    <div className="flex flex-row text-xs">
      {/* Women's Clothing */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">WOMEN'S CLOTHING</h2>
          <ul>
            {lists.womensClothing.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* More Sizes */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">MORE SIZES</h2>
          <ul>
            {lists.womensSizes.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">DRESSES</h2>
          <ul>
            {lists.womensDresses.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">OUTDOOR APPAREL & SHOES</h2>
          <ul>
            {lists.womensOutdoor.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">CONTEMPORARY</h2>
          <ul>
            {lists.womensContemporary.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Brands */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">FEATURED BRANDS</h2>
          <ul>
            {lists.womensBrands.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Complete Your Look */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">COMPLETE YOUR LOOK</h2>
          <ul>
            {lists.womensCompleteLook.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">SHOP BY OCCASION</h2>
          <ul>
            {lists.womensOccasion.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2"></h2>
          <ul className="text-red-500">
            {lists.womensSales.map((item, index) => (
              <li key={index} className="mb-1">
                <a href={item.path} className="hover:border-b-2 hover:border-black">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      


      {/* Now Trending */}
      <div className="flex flex-col w-1/3 p-4">
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">NOW TRENDING</h2>
          <ul>
            {lists.womensTrending.map((item, index) => (
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
                className="h-1/2 w-1/2 object-contain"
              />
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Women_ListComponent;
