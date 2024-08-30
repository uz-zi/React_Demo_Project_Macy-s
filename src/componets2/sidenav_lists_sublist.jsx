
import { AiOutlineClose, AiOutlineCaretRight } from "react-icons/ai";
import { useState,useEffect } from "react";

const SidenavSublist = ({ category, handleBack }) => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the main page
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling on the main page
      document.body.style.overflow = "auto";
    }

    // Cleanup function to enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const Sublist = {
    Women: [
      { name: "Featured For Women" },
      { name: "Labor Day Sale Specials" },
      { name: "Women's Clothing" },
      { name: "Plus Size Clothing", color:"red" },
      { name: "Petite Clothing" },
      { name: "Juniors'" },
      { name: "Shoes" },
      { name: "Accessories", color:"red" },
      { name: "Sale & Clearance" },
      { name: "Handbags & Wallets" },
      { name: "Jewelry & Watches" },
      { name: "Shop by Occasion", color:"red"},
      { name: "Brands" },
    ],
    Men: [
      { name: "Featured For Men" },
      { name: "Labor Day Sale Specials" },
      { name: "Sale & Clearance" },
      { name: "New & Noteworthy" },
      { name: "Back To School" },
      { name: "Men's Clothing" },
      { name: "Big & Tall" },
      { name: "Shoes" },
      { name: "Accessories", color:"red" },
      { name: "Jewelry & Watches" },
      { name: "Sports Fan Shop", color:"red" },
      { name: "Brands" },
      { name: "Activewear & Outdoor" },
      { name: "Shop by Occasion" },
    ],
  };

  // Extract the selected category's list
  const list = Sublist[category] || [];

  // Extract the first item for the header
  const headerItem = list[0];
  // Extract the remaining items for the list
  const remainingItems = list.slice(1);

  // Handle close action
  const handleCloseSidebar = () => {
    setIsOpen(false);
    setTimeout(() => handleBack(), 300); // Adjust timeout to match the transition duration
  };

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 md:top-[450px] bg-white p-4 shadow-lg z-50 md:w-[850px] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >      
      <div className="m-8 text-4xl">
        <div className="flex justify-between items-center">
          <span className="cursor-pointer rotate-180" onClick={handleBack}>
            <AiOutlineCaretRight size={24} />
          </span>
          <h1 className="font-semibold">{headerItem ? headerItem.name : `Shop By ${category}`}</h1>
          <span className="cursor-pointer" onClick={handleCloseSidebar}>
            <AiOutlineClose size={24} />
          </span>
        </div>

        <ul className="space-y-[60px] mt-[95px] relative">
          {/* Display remaining items after the first one */}
          {remainingItems.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-center justify-between cursor-pointer">
                {/* Apply text-red-500 conditionally */}
                <span className={item.color === "red" ? "text-red-500" : ""}>
                  {item.name}
                </span>
                {item.sublist && (
                  <AiOutlineCaretRight className="text-gray-500" size={20} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidenavSublist;