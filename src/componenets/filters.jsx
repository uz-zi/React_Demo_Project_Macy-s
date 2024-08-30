import React, { useState } from 'react';
import Sidebar from './sidebar.jsx';

const FilterButtons = ({ onFilteredProducts }) => {
  const buttons = ['All Filters', 'Brand', 'Price', 'Size', 'Color', 'Top Rated',];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [isitemOpen, setIsitemOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const items = [
    'Show Featured Items',
    'Price: low to high',
    'Price: high to low',
    'Top rated',
    'Best seller',
    'New arrivals',
  ];

  const handleButtonClick = (button) => {
    setIsOpen(true);
    setSelectedButton(button);
  };

  const handleFilteredProducts = (products) => {
    console.log('Filtered Products received in FilterButtons:', products); // Log the filtered products
    setFilteredProducts(products);
    onFilteredProducts(products); // Pass the data to the parent component
  };

  return (
    <div className='mt-5 lg:ml-4 md:ml-8 mr-4 flex space-x-4 relative z-10 justify-between'>
      <div className='flex space-x-4 overflow-x-auto md:overflow-x-scroll lg:overflow-hidden'>
        {buttons.map((button, index) => (
          <button
            key={index}
            className="lg:px-4 lg:py-2 lg:border-[0.5px] border-black rounded-lg transition lg:text-base duration-300 lg:h-[50px] md:h-[100px] md:px-8 md:py-4 md:text-2xl border-[1.5px]"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>

      <div className='relative ml-auto md:hidden'>
        <button
          onClick={() => setIsitemOpen(!isitemOpen)}
          className="px-2 py-2 rounded-lg border-[2px] border-black bg-white text-black w-40 text-sm"
        >
          {selectedItem || 'Show Featured Items'}
        </button>

        {isitemOpen && (
          <ul className="absolute mt-2 w-[170px] bg-gray-500 border border-gray-300 rounded-md">
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-2 py-1 text-white cursor-pointer text-sm hover:bg-blue-600 ${item === selectedItem ? 'bg-blue-600' : ''}`}
                onClick={() => {
                  setSelectedItem(item);
                  setIsitemOpen(false);
                }}
              >
                {item} {item === selectedItem && '*'}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Sidebar
        openSection={selectedButton}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onFilteredProducts={handleFilteredProducts} // Pass the callback function
      />
    </div>
  );
};

export default FilterButtons;
