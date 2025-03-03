import React from "react";

import styles from "./HamburgerMenuButton.module.css";

function HamburgerMenuButton(props: { onClick: () => void; isOpen: boolean }) {
  const { onClick, isOpen } = props;
  const openStyle = isOpen ? `${styles.open} ` : "";

  return (
    <div className="md:hidden">
      <button
        id="menu-btn"
        type="button"
        className={`z-40 block ${styles.hamburger} md:hidden focus-visible:outline-hidden`}
        onClick={onClick}
      >
        <span className={openStyle + styles["hamburger-top"]}></span>
        <span className={openStyle + styles["hamburger-middle"]}></span>
        <span className={openStyle + styles["hamburger-bottom"]}></span>
      </button>
    </div>
  );
}

export default HamburgerMenuButton;
