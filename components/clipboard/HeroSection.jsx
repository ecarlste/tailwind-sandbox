import React from 'react';

import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section id="hero">
      <div className={styles['section-container'] + ' mb-40 pt-16'}>
        <img
          src="/images/clipboard/logo.svg"
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
  );
}

export default HeroSection;
