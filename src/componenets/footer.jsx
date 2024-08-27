import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white mt-10 h-[350px]">
      <div className="mx-4 pt-[20px]">
        <div className="flex flex-row gap-[210px] mt-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Customer Service</h3>
            <ul className='space-y-3 text-xs'>
              <li><a href="#" className="hover:underline">Help & FAQs</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Shipping To</a></li>
              <li><a href="#" className="hover:underline">PK current selected country</a></li>
              <li><a href="#" className="hover:underline">Go to U.S. site</a></li>
            </ul>
          </div>
          {/* Our Stores */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Our Stores</h3>
            <ul className='space-y-3 text-xs'>
              <li><a href="#" className="hover:underline">Find a Store</a></li>
              <li><a href="#" className="hover:underline">Tell Us What You Think</a></li>
              <li><a href="#" className="hover:underline">Macy's Backstage</a></li>
              <li><a href="#" className="hover:underline">Personal Stylist</a></li>
            </ul>
          </div>
          {/* Macy's Inc. */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Macy's Inc.</h3>
            <ul className='space-y-3 text-xs'>
              <li><a href="#" className="hover:underline">Corporate Sites</a></li>
              <li><a href="#" className="hover:underline">About Macy's</a></li>
              <li><a href="#" className="hover:underline">News Room</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Macy's Gives</a></li>
            </ul>
          </div>
          {/* Connect With Us */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Visit us on Facebook">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" aria-label="Visit us on Instagram">
                <FaInstagram className="text-xl "/>
              </a>
              <a href="#" aria-label="Visit us on Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" aria-label="Thread icon">
                {/* <FaThread className="text-xl hover:text-gray-400" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#000000] text-center text-xs text-white py-6 mt-[35px] h-[150px]">
        <div className="mb-4">
          <a href="#" className="hover:underline mx-2">Privacy Notice</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Cookie Preference</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Interest Based Ads</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">CA Privacy Rights</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Do Not Sell or Share My Personal Information</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Legal Notice</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Customer Bill of Rights</a>
        </div>
        <div className="mb-4">
          <a href="#" className="hover:underline mx-2">CA Transparency in Supply Chains</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Product Recalls</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Pricing Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">Accessibility</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Macy’s. All rights reserved. Macys.com, LLC, 151 West 34th Street, New York, NY 10001. Request our corporate name & address by email.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
