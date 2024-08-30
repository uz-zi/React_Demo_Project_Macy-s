import React, { useState } from 'react';
import Sidebar from './shipping_to_sidebar.jsx';
import ReactCountryFlag from "react-country-flag"; // Import the country flag component

function Nav1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Pakistan');
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');

  

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleSelectCountryAndCurrency = (country, currency) => {
    setSelectedCountry(country || 'Pakistan');
    setSelectedCurrency(currency || 'PKR');
    console.log('Selected Currency:', currency || 'PKR');
  };

  // Map country names to their respective country codes
  const countryToCode = {
    'United States': 'US',
    'Canada': 'CA',
    'United Kingdom': 'GB',
    'Australia': 'AU',
    'Pakistan': 'PK',
    'India': 'IN',
    'Germany': 'DE',
    'France': 'FR'
  };

  return (
    <nav className="flex lg:flex-row lg:justify-between p-2 text-xs-custom font-helvetica text-custom-grey border-b-2 flex-row justify-center mx-2">
      <div className="flex lg:flex-row lg:items-center lg:justify-start lg:space-x-2">
        <p className="text-center lg:text-left">
          We now ship to 200 locations worldwide
        </p>
        <a className="border-b-2 border-black text-center lg:text-left" href="/">
          Details
        </a>
      </div>

      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <ul className="flex space-x-4">
          <li className="border-r-2 border-custom-grey pr-4">
            <a className="hover:border-b-2 hover:border-black" href="/">
              Order Tracking
            </a>
          </li>
          <li className="border-r-2 border-custom-grey pr-4">
            <a className="hover:border-b-2 hover:border-black" href="/">
              Stores
            </a>
          </li>
          <li className="border-r-2 border-custom-grey pr-4">
            <a className="hover:border-b-2 hover:border-black" href="/">
              Gift Registry
            </a>
          </li>
          <li>
            <a className="hover:border-b-2 hover:border-black" href="#" onClick={handleOpenSidebar}>
              Shipping To
              {/* Display the flag icon of the selected country */}
              <ReactCountryFlag 
                countryCode={countryToCode[selectedCountry]} 
                svg 
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  marginLeft: '0.5em'
                }}
                title={selectedCountry}
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar Component */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectCountryAndCurrency={handleSelectCountryAndCurrency}
        />
      )}
    </nav>
  );
}

export default Nav1;
