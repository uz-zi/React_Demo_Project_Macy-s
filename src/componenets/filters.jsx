import React, { useState } from 'react';
import Sidebar from './sidebar';

const FilterButtons = () => {
  const buttons = ['All Filters','Brand', 'Price', 'Size', 'Color', 'Top Rated'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const [isitemOpen, setIsitemOpen] = useState(false);

  // List of featured items
  const items = [
    'Show Featured Items',
    'Price: low to high', 
    'Price: high to low',
    'Top rated',
    'Best seller',
    'New arrivals',
  ];

  // Function to handle button click and open sidebar
  const handleButtonClick = (button) => {
    setIsOpen(true); // Open the sidebar
    setSelectedButton(button); // Set the selected button
  };

  return (
    <div className='mt-5 ml-4 mr-4 flex space-x-4 relative z-10 justify-between'>
      <div className='flex space-x-4'>
        {buttons.map((button, index) => (
          <button
            key={index}
            className="px-4 py-2 border-[0.5px] border-black rounded-lg transition duration-300 h-[50px]"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>

      <div className='relative ml-auto'>
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

      {/* Pass selectedButton to Sidebar */}
      <Sidebar openSection={selectedButton} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default FilterButtons;
