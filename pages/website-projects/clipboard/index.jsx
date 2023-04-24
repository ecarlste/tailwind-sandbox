import React from 'react';

import styles from './index.module.css';
import HeroSection from '../../../components/clipboard/HeroSection';
import SnippetSection from '../../../components/clipboard/SnippetSection';
import FeaturesSection from '../../../components/clipboard/FeaturesSection';
import AccessAnywhereSection from '../../../components/clipboard/AccessAnywhereSection';
import SuperchargeSection from '../../../components/clipboard/SuperchargeSection';

function ClipboardSitePage() {
  return (
    <>
      <style global jsx>{`
        body {
          background-image: url('/images/clipboard/bg-header-desktop.png');
          background-repeat: no-repeat;
          background-size: contain;
        }

        @media (max-width: 576px) {
          body {
            background-image: url('/images/clipboard/bg-header-mobile.png');
          }
        }
      `}</style>

      <HeroSection />
      <SnippetSection />
      <FeaturesSection />
      <AccessAnywhereSection />
      <SuperchargeSection />

      {/* <!-- References Section --> */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="/images/clipboard/logo-google.png" alt="" />
          <img src="/images/clipboard/logo-ibm.png" alt="" />
          <img src="/images/clipboard/logo-microsoft.png" alt="" />
          <img src="/images/clipboard/logo-hp.png" alt="" />
          <img src="/images/clipboard/logo-vector-graphics.png" alt="" />
        </div>
      </section>

      {/* <!-- Bottom CTA Section --> */}
      <section id="bottom">
        <div className={styles['section-container'] + ' my-20'}>
          <h3 className={styles['header-lg']}>Clipboard for iOS and MacOS</h3>
          <p className={styles['section-container'] + ' mb-10'}>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* <!-- Button Container --> */}
          <div className={styles['button-container']}>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>

            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className={styles['section-container']}>
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* <!-- Image --> */}
            <img src="/images/clipboard/logo.svg" alt="" className="scale-50" />

            {/* <!-- Container for Menus & Social--> */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* <!-- Menus --> */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* <!-- Menu 1 --> */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* <!-- Menu 2 --> */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* <!-- Menu 3 --> */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
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
        </div>
      </footer>
    </>
  );
}

export default ClipboardSitePage;
