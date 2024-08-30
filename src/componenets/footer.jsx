import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [visibleSections, setVisibleSections] = useState({
    customerService: false,
    ourStores: false,
    macysInc: false,
    connectWithUs: false,
  });

  const sections = [
    {
      key: 'customerService',
      title: 'Customer Service',
      items: [
        'Help & FAQs',
        'Order Tracking',
        'Shipping & Delivery',
        'Returns',
        'Contact Us',
        'Shipping To',
        'PK current selected country',
        'Go to U.S. site',
      ],
    },
    {
      key: 'ourStores',
      title: 'Our Stores',
      items: [
        'Find a Store',
        'Tell Us What You Think',
        "Macy's Backstage",
        'Personal Stylist',
      ],
    },
    {
      key: 'macysInc',
      title: "Macy's Inc.",
      items: [
        'Corporate Sites',
        "About Macy's",
        'News Room',
        'Investors',
        "Macy's Gives",
      ],
    },
    // Add more sections if needed
  ];

  // Function to toggle visibility for a specific section
  const toggleVisibility = (section) => {
    setVisibleSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div>
    <div className="bg-[#1F1F1F] text-white lg:mt-10 lg:h-[350px] md:mt-[40px]">
      <div className="lg:mx-4 lg:pt-0 md:pt-[70px] md:pb-[70px]">
        <div className="lg:flex lg:flex-row lg:gap-[210px] lg:mt-8">
          {sections.map((section) => (
            <div key={section.key}>
              <h3
    className="lg:text-sm lg:font-semibold lg:mb-4 md:text-4xl md:ml-10 md:mt-10 lg:cursor-pointer flex items-center justify-between"
    onClick={() => toggleVisibility(section.key)}
  >
    {section.title}
    <span className="lg:hidden md:text-3xl md:ml-auto md:mr-[50px]">+</span>
  </h3>
              <ul
                className={`lg:space-y-3 lg:text-xs lg:${visibleSections[section.key] ? 'block' : 'block'}
                  md:${visibleSections[section.key] ? 'block' : 'hidden'}
                  md:ml-10 md:space-y-8 md:text-2xl md:mt-5 md:mb-5 md:font-extralight`}
              >
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
              <div className="lg:hidden md:border-b-2 md:mx-10 md:mt-8"></div>
            </div>
          ))}

<div>
            <h3
              className="lg:text-sm lg:font-semibold mb-4 md:text-4xl md:ml-10 md:mt-10 lg:text-sm cursor-pointer"
            >
              Connect With Us
            </h3>
            <div
              className={`flex lg:space-x-4 md:space-x-6 md:ml-10 md:text-4xl md:mt-5 md:mb-5`}
            >
              <a href="#" aria-label="Visit us on Facebook">
                <FaFacebookF className="md:text-5xl lg:text-xl" />
              </a>
              <a href="#" aria-label="Visit us on Instagram">
                <FaInstagram className="md:text-5xl lg:text-xl" />
              </a>
              <a href="#" aria-label="Visit us on Twitter">
                <FaTwitter className="md:text-5xl lg:text-xl" />
              </a>
            </div>
          </div>
        </div>


        

      </div>















      


      


    </div>

    <div>
  <div className="lg:hidden bg-[#000000] text-center md:text-3xl text-white md:py-[60px]">
    <div className="md:my-10">
      <a href="#" className="hover:underline mx-7">Privacy Notice</a>
      <span>|</span>
      <a href="#" className="hover:underline mx-7">Cookie Preference</a>
      <span>|</span>
      <a href="#" className="hover:underline mx-7">Interest Based Ads</a>
    </div>
    <div className="md:my-10">
      <a href="#" className="hover:underline mx-7">CA Privacy Rights</a>
    </div>
    <div className="md:my-10">
      <a href="#" className="hover:underline mx-7">Do Not Sell or Share My Personal Information</a>
      <span>|</span>
      <a href="#" className="hover:underline mx-7">Legal Notice</a>
    </div>
    <div className="md:my-10">
      <a href="#" className="hover:underline mx-7">Customer Bill of Rights</a>
      <span>|</span>
      <a href="#" className="hover:underline mx-7">CA Transparency in Supply Chains</a>
    </div>
    <div className='md:mx-10 md:px-8'>
      &copy; {new Date().getFullYear()} Macy’s. All rights reserved. Macys.com, LLC, 151 West 34th Street, New York, NY 10001. Request our corporate name & address by email.
    </div>
  </div>

  <div className="hidden lg:bg-[#000000] lg:text-center lg:text-xs lg:text-white lg:py-6 lg:h-[150px] lg:block">
    <div className="lg:mb-4">
      <a href="#" className="lg:hover:underline lg:mx-2">Privacy Notice</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Cookie Preference</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Interest Based Ads</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">CA Privacy Rights</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Do Not Sell or Share My Personal Information</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Legal Notice</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Customer Bill of Rights</a>
    </div>
    <div className="lg:mb-4">
      <a href="#" className="lg:hover:underline lg:mx-2">CA Transparency in Supply Chains</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Product Recalls</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Pricing Policy</a>
      <span>|</span>
      <a href="#" className="lg:hover:underline lg:mx-2">Accessibility</a>
    </div>
    <div className="lg">
      &copy; {new Date().getFullYear()} Macy’s. All rights reserved. Macys.com, LLC, 151 West 34th Street, New York, NY 10001. Request our corporate name & address by email.
    </div>
  </div>
</div>

    </div>
  );
};

export default Footer;
