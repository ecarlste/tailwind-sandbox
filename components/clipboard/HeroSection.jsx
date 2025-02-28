import React from 'react';

import SectionContainer from './section/SectionContainer';
import SectionContent from './section/SectionContent';
import LargeHeader from './headers/LargeHeader';
import ButtonContainer from './buttons/ButtonContainer';

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

        <SectionContent className="mb-10 text-2xl text-grayish-blue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </SectionContent>

        <ButtonContainer>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strong-cyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-light-blue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </ButtonContainer>
      </SectionContainer>
    </section>
  );
}

export default HeroSection;
