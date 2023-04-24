import React from 'react';

import styles from './HeroSection.module.css';
import SectionContainer from './section/SectionContainer';
import SectionContent from './section/SectionContent';
import LargeHeader from './headers/LargeHeader';

function HeroSection() {
  return (
    <section id="hero">
      <SectionContainer className="mb-40 pt-16">
        <img
          src="/images/clipboard/logo.svg"
          alt=""
          className="mx-auto my-16"
        />
        <LargeHeader>A history of everything you copy</LargeHeader>

        <SectionContent className="mb-10 text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </SectionContent>

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
      </SectionContainer>
    </section>
  );
}

export default HeroSection;
