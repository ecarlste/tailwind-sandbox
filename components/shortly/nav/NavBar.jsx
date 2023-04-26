import React, { useState } from 'react';
import HamburgerMenuButton from './HamburgerMenuButton';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function hamburgerButtonClickHandler() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container for All Items */}
      <div className="flex items-center justify-between">
        {/* Flex Container for Logo/Menu */}
        <div className="flex items-center space-x-20">
          {/* Logo */}
          <img src="/images/shortly/logo.svg" alt="" />
          {/* Left Menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Right Buttons Menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Button */}
        <HamburgerMenuButton
          isOpen={isMobileMenuOpen}
          onClick={hamburgerButtonClickHandler}
        />
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
