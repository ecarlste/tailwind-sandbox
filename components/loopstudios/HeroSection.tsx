"use client"

import React, { useState } from 'react';

import styles from './HeroSection.module.css';
import DesktopMenu from './nav/DesktopMenu';
import MobileMenu from './nav/MobileMenu';
import HamburgerMenuButton from './nav/HamburgerMenuButton';

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <section id={styles.hero}>
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* <!-- Menu/Logo Container --> */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* <!-- Logo --> */}
          <img src="/images/loopstudios/logo.svg" alt="" />
          <DesktopMenu />

          {/* <!-- Hamburger Button --> */}
          <HamburgerMenuButton
            onClick={toggleMobileMenu}
            isOpen={mobileMenuOpen}
          />
        </nav>

        <MobileMenu isOpen={mobileMenuOpen} />

        <div className="max-w-lg mt-32 mb-32 p-4 text-4xl text-white uppercase border-2 md:p-10 md:m-32md:mx-0 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
