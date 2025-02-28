import React from 'react';
import SectionContainer from './section/SectionContainer';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className="bg-gray-50">
      <SectionContainer>
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* <!-- Image --> */}
          <img src="/images/clipboard/logo.svg" alt="" className="scale-50" />

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
            <div className="flex justify-between w-32 py-1">
              <a href="#">
                <img
                  src="images/clipboard/icon-facebook.svg"
                  alt=""
                  className={'duration-200 ' + styles.ficon}
                />
              </a>

              <a href="#">
                <img
                  src="/images/clipboard/icon-twitter.svg"
                  alt=""
                  className={'duration-200 ' + styles.ficon}
                />
              </a>

              <a href="#">
                <img
                  src="/images/clipboard/icon-instagram.svg"
                  alt=""
                  className={'duration-200 ' + styles.ficon}
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
