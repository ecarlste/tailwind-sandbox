import React, { useState } from 'react';
import HamburgerMenuButton from './HamburgerMenuButton';
import MobileMenu from './MobileMenu';

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
              className="text-grayish-violet hover:text-very-dark-violet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayish-violet hover:text-very-dark-violet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayish-violet hover:text-very-dark-violet"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Right Buttons Menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayish-violet lg:flex">
          <div className="hover:text-very-dark-violet">Login</div>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        <HamburgerMenuButton
          isOpen={isMobileMenuOpen}
          onClick={hamburgerButtonClickHandler}
        />
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
}

export default NavBar;
