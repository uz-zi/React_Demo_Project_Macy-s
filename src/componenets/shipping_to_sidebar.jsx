import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ isOpen, onClose, onSelectCountryAndCurrency }) => {
  // States for storing selected country and currency
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');

  // List of countries (example)
  const countries = ["United States", "Canada", "United Kingdom", "Australia", "Pakistan", "India", "Germany", "France"];

  // List of currencies (example)
  const currencies = ["USD", "CAD", "GBP", "AUD", "PKR", "INR", "EUR", "JPY"];

  // Handler to save selected options and close the sidebar
  const handleSaveAndClose = () => {
    onSelectCountryAndCurrency(selectedCountry, selectedCurrency);
    onClose(); // Close the sidebar after saving
  };

  return (
    <div className={`fixed top-0 right-0 bottom-0 w-[600px] bg-white p-4 overflow-y-auto shadow-lg px-[50px] transition-transform duration-300 z-50 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}>
      <div className="flex justify-between items-center mb-4 mt-10">
        <h1 className="text-xl font-semibold">International Shipping</h1>
        <span className="cursor-pointer" onClick={onClose}>
          <AiOutlineClose size={24} />
        </span>
      </div>

      <p className="mb-4">
        Macy’s ships to over 200 locations worldwide through our international service provider, Borderfree.*
      </p>

      <div className="flex flex-col gap-4">

        {/* Country Selection */}
        <div>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* Currency Selection */}
        <div>
          <label htmlFor="currency" className="block text-gray-700 font-medium mb-2">Choose Your Currency</label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select a currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>

        {/* Save and Continue Button */}
        <button
          className="bg-black text-white rounded px-4 py-2 mt-4"
          onClick={handleSaveAndClose}
        >
          Save and Continue
        </button>

      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Shipping and Transaction Info</h2>
        <p className='mt-2'>When you place an international order, your transaction will be with Borderfree, but if you have questions please contact Macy’s Customer Service at 1-800-289-6229.</p>
        <p className='mt-2'>Orders shipped to the United States must have a U.S. credit card billing address to be placed online.</p>
        <p className='mt-2'>Select items are excluded from international shipping. International order totals can’t exceed $10,000 USD. For more details, see Shipping Policy.</p>
      </div>
    </div>
  );
};

export default Sidebar;
