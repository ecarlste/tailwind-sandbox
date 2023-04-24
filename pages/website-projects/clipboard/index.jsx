import React from 'react';

import styles from './index.module.css';

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

      {/* <!-- Hero Section --> */}
      <section id="hero">
        <div className={styles['section-container'] + ' mb-40 pt-16'}>
          <img
            src="images/clipboard/logo.svg"
            alt=""
            className="mx-auto my-16"
          />
          <h3 className={styles['header-lg']}>
            A history of everything you copy
          </h3>

          <p
            className={
              styles['section-content'] + ' mb-10 text-2xl text-grayishBlue'
            }
          >
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
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

      {/* <!-- Snippets Section --> */}
      <section id="snippets">
        <div className={styles['section-container'] + ' my-20'}>
          <h3 className={styles['header-lg']}>Keep track of your snippets</h3>
          <p className={styles['section-content'] + ' mb-24'}>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features">
        <div className={styles['section-container'] + ' my-20 md:my-40'}>
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* <!-- Image --> */}
            <div className="md:w-3/5 md:my-auto">
              <img
                src="/images/clipboard/image-computer.png"
                alt=""
                className="md:object-contain"
              />
            </div>

            {/* <!-- Item Container  --> */}
            <div className="flex flex-col items-center mt-16 mb-24 space-y-12 text-xl md:w-2/5 md:my-auto md:text-left md:pl-16">
              {/* <!-- Item 1 --> */}
              <div>
                <h5 className={styles['header-md']}>Quick Search</h5>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              {/* <!-- Item 2 --> */}
              <div>
                <h5 className={styles['header-md']}>iCloud Sync</h5>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              {/* <!-- Item 1 --> */}
              <div>
                <h5 className={styles['header-md']}>Complete History</h5>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Access Anywhere Section --> */}
      <section id="access">
        <div className={styles['section-container'] + ' my-20'}>
          <h3 className={styles['header-lg']}>Access Clipboard Anywhere</h3>
          <p className={styles['section-content'] + ' mb-24'}>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img
            src="/images/clipboard/image-devices.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </section>

      {/* <!-- Supercharge Section --> */}
      <section id="supercharge">
        <div className={styles['section-container'] + ' my-20'}>
          <h3 className={styles['header-lg']}>Supercharge your workflow</h3>
          <p className={styles['section-content'] + ' mb-16'}>
            We've got the tools to boost your productivity.
          </p>

          {/* <!-- Items Container --> */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* <!-- Item 1 --> */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/images/clipboard/icon-blocklist.svg"
                alt=""
                className="mb-6"
              />
              <h5 className={styles['header-md']}>Create Blocklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* <!-- Item 2 --> */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/images/clipboard/icon-text.svg"
                alt=""
                className="mb-6"
              />
              <h5 className={styles['header-md']}>Plain Text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* <!-- Item 3 --> */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/images/clipboard/icon-preview.svg"
                alt=""
                className="mb-6"
              />
              <h5 className={styles['header-md']}>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

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