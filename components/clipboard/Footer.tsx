import React from "react";
import SectionContainer from "./section/SectionContainer";

import styles from "./Footer.module.css";
import Image from "next/image";

import iconFacebook from "@/public/images/clipboard/icon-facebook.svg";
import iconTwitter from "@/public/images/clipboard/icon-twitter.svg";
import iconInstagram from "@/public/images/clipboard/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <SectionContainer>
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* <!-- Image --> */}
          <Image
            src="/images/clipboard/logo.svg"
            width={125}
            height={125}
            alt=""
            className="scale-50"
          />

          {/* <!-- Container for Menus & Social--> */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayish-blue">
            {/* <!-- Menus --> */}
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              {/* <!-- Menu 1 --> */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strong-cyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strong-cyan">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* <!-- Menu 2 --> */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strong-cyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strong-cyan">
                    Press Kit
                  </a>
                </div>
              </div>
              {/* <!-- Menu 3 --> */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strong-cyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Social Icons --> */}
            <div className="flex justify-between w-32 py-1 items-center">
              <a href="#">
                <Image
                  src={iconFacebook}
                  alt=""
                  className={"duration-200 " + styles.ficon}
                />
              </a>

              <a href="#">
                <Image
                  src={iconTwitter}
                  alt=""
                  className={"duration-200 " + styles.ficon}
                />
              </a>

              <a href="#">
                <Image
                  src={iconInstagram}
                  alt=""
                  className={"duration-200 " + styles.ficon}
                />
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default Footer;
