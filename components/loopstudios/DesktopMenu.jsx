import React from 'react';

import { Alata } from 'next/font/google';

const alata = Alata({
  subsets: ['latin'],
  variable: '--font-alata',
  weight: '400',
});

function DesktopMenu() {
  return (
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
  );
}

export default DesktopMenu;
