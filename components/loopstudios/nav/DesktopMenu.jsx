import React from 'react';

import { Alata } from 'next/font/google';

const alata = Alata({
  subsets: ['latin'],
  variable: '--font-alata',
  weight: '400',
});

const menuItemNames = ['About', 'Careers', 'Events', 'Products', 'Support'];

function DesktopMenu() {
  return (
    <div
      className={`hidden h-10 ${alata.variable} font-alata md:flex md:space-x-8`}
    >
      {menuItemNames.map((name) => (
        <div className="group">
          <a href="#">{name}</a>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
      ))}
    </div>
  );
}

export default DesktopMenu;
