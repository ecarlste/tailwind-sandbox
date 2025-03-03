import React from 'react';
import SectionContainer from './section/SectionContainer';
import SectionContent from './section/SectionContent';

import LargeHeader from './headers/LargeHeader';
import ButtonContainer from './buttons/ButtonContainer';

function CallToActionSection() {
  return (
    <section id="bottom">
      <SectionContainer className=" my-20">
        <LargeHeader>Clipboard for iOS and MacOS</LargeHeader>
        <SectionContent className="mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
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

export default CallToActionSection;
