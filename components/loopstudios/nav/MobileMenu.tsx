import React from "react";

function MobileMenu(props: { isOpen: boolean }) {
  const { isOpen } = props;

  return (
    <div
      id="mobile-menu"
      className={`absolute top-0 bottom-0 left-0 ${
        isOpen ? "flex" : "hidden"
      } flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
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
  );
}

export default MobileMenu;
