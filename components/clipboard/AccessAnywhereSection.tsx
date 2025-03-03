import React from 'react';

import SectionContainer from './section/SectionContainer';
import SectionContent from './section/SectionContent';
import LargeHeader from './headers/LargeHeader';

function AccessAnywhereSection() {
  return (
    <section id="access">
      <SectionContainer className="my-20">
        <LargeHeader>Access Clipboard Anywhere</LargeHeader>
        <SectionContent className="mb-24">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </SectionContent>

        <img
          src="/images/clipboard/image-devices.png"
          alt=""
          className="mx-auto"
        />
      </SectionContainer>
    </section>
  );
}

export default AccessAnywhereSection;
