import React from "react";

import styles from "./HamburgerMenuButton.module.css";

function HamburgerMenuButton(props: { onClick: () => void; isOpen: boolean }) {
  const { isOpen, onClick } = props;

  const openStyle = isOpen ? `${styles.open} ` : "";

  return (
    <button
      id="menu-btn"
      type="button"
      className={`block ${styles.hamburger} lg:hidden focus:outline-hidden`}
      onClick={onClick}
    >
      <span className={`${openStyle}${styles["hamburger-top"]}`}></span>
      <span className={`${openStyle}${styles["hamburger-middle"]}`}></span>
      <span className={`${openStyle}${styles["hamburger-bottom"]}`}></span>
    </button>
  );
}

export default HamburgerMenuButton;
