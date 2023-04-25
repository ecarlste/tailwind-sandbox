import React from 'react';

import styles from './HeroSection.module.css';

import { Alata } from 'next/font/google';

const alata = Alata({
  subsets: ['latin'],
  variable: '--font-alata',
  weight: '400',
});

function HeroSection() {
  function hamburgerClickHandler() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.classList.toggle(styles.open);
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  }

  return (
    <section id={styles.hero}>
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* <!-- Menu/Logo Container --> */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* <!-- Logo --> */}
          <img src="/images/loopstudios/logo.svg" alt="" />
          {/* <!-- Menu --> */}
          <div
            className={`hidden h-10 ${alata.variable} font-alata md:flex md:space-x-8`}
          >
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>

          {/* <!-- Hamburger Button --> */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className={`z-40 block ${styles.hamburger} md:hidden focus:outline-none`}
              onClick={hamburgerClickHandler}
            >
              <span className={styles['hamburger-top']}></span>
              <span className={styles['hamburger-middle']}></span>
              <span className={styles['hamburger-bottom']}></span>
            </button>
          </div>
        </nav>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
        >
          <a href="#" className="hover:text-pink-500">
            About
          </a>
          <a href="#" className="hover:text-pink-500">
            Careers
          </a>
          <a href="#" className="hover:text-pink-500">
            Events
          </a>
          <a href="#" className="hover:text-pink-500">
            Products
          </a>
          <a href="#" className="hover:text-pink-500">
            Support
          </a>
        </div>

        <div className="max-w-lg mt-32 mb-32 p-4 text-4xl text-white uppercase border-2 md:p-10 md:m-32md:mx-0 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
