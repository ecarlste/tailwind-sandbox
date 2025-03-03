import React from 'react';
import FooterMenuItem from './FooterMenuItem';

function FooterMenuItemsContainer() {
  const footerMenuItemNames = [
    'About',
    'Careers',
    'Events',
    'Products',
    'Support',
  ];

  return (
    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
      {footerMenuItemNames.map((name) => (
        <FooterMenuItem key={name} text={name} />
      ))}
    </div>
  );
}

export default FooterMenuItemsContainer;
