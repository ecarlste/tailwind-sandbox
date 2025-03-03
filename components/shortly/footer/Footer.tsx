import React from "react";

import styles from "./Footer.module.css";
import Image from "next/image";

import shortlyLogoSvg from "@/public/images/shortly/logo.svg";
import facebookIconSvg from "@/public/images/shortly/icon-facebook.svg";
import twitterIconSvg from "@/public/images/shortly/icon-twitter.svg";
import pinterestIconSvg from "@/public/images/shortly/icon-pinterest.svg";
import instagramIconSvg from "@/public/images/shortly/icon-instagram.svg";

function Footer() {
  return (
    <footer className="py-16 bg-very-dark-violet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* Logo */}
        <Image src={shortlyLogoSvg} alt="" />

        {/* Menus Container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* Menu 1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Link shortening
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Branded links
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Analytics
              </a>
            </div>
          </div>

          {/* Menu 2 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Blog
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Developers
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Support
              </a>
            </div>
          </div>

          {/* Menu 3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                About
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Our Team
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Careers
              </a>
              <a
                href="#"
                className="capitalize text-grayish-violet hover:text-cyan"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Container */}
        <div className="flex space-x-6 items-center">
          <a href="#">
            <Image src={facebookIconSvg} alt="" className={styles.ficon} />
          </a>
          <a href="#">
            <Image src={twitterIconSvg} alt="" className={styles.ficon} />
          </a>
          <a href="#">
            <Image src={pinterestIconSvg} alt="" className={styles.ficon} />
          </a>
          <a href="#">
            <Image src={instagramIconSvg} alt="" className={styles.ficon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
