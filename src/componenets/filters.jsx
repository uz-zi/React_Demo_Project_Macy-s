// import React, {useState} from 'react';

// const FilterButtons = () => {
//   const buttons = ['Brand', 'Price', 'Size', 'Color', 'Top Rated'];
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState('');

//   // List of featured items
//   const items = [
//     'Show Featured Items',
//     'Price: low to high', 
//     'Price: high to low',
//     'Top rated',
//     'Best seller',
//     'New arrivals',
//   ];

//   return (
//     <div className='mt-5 ml-4'>
//     <div className="flex space-x-4">
//       {buttons.map((button, index) => (
//         <button
//           key={index}
//           className="px-4 py-2 border-[1px] border-black rounded-lg transition duration-300"
//         >
//           {button}
//         </button>
//       ))}
//     </div>


//     <div className="">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="px-2 py-2 rounded-lg border-[2px] border-black bg-white text-black w-40 text-sm"
//       >
//         {selectedItem || 'Show Featured Items'}
//       </button>
      
//       {isOpen && (
//         <ul className="mt-2 w-[170px] bg-gray-500 border border-gray-300 rounded-md shadow-lg">
//           {items.map((item, index) => (
//             <li
//               key={index}
//               className={`px-2 py-1 text-white cursor-pointer text-sm hover:bg-blue ${item === selectedItem ? '' : ''}`}
//               onClick={() => {
//                 setSelectedItem(item);
//                 setIsOpen(false);
//               }}
//             >
//               {item} {item === selectedItem && '*'}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </div>
//   );
// };


// export default FilterButtons;



import React, { useState } from 'react';

const FilterButtons = () => {
  const buttons = ['Brand', 'Price', 'Size', 'Color', 'Top Rated'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  // List of featured items
  const items = [
    'Show Featured Items',
    'Price: low to high', 
    'Price: high to low',
    'Top rated',
    'Best seller',
    'New arrivals',
  ];

  return (
    <div className='mt-5 ml-4 flex space-x-4'>
      <div className='flex space-x-4'>
        {buttons.map((button, index) => (
          <button
            key={index}
            className="px-4 py-2 border-[1px] border-black rounded-lg transition duration-300"
          >
            {button}
          </button>
        ))}
      </div>

      {/* <div className='relative'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-2 rounded-lg border-[2px] border-black bg-white text-black w-40 text-sm"
        >
          {selectedItem || 'Show Featured Items'}
        </button>
        
        {isOpen && (
          <ul className="absolute mt-2 w-[170px] bg-gray-500 border border-gray-300 rounded-md">
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-2 py-1 text-white cursor-pointer text-sm hover:bg-blue-600 ${item === selectedItem ? 'bg-blue-600' : ''}`}
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(false);
                }}
              >
                {item} {item === selectedItem && '*'}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default FilterButtons;
