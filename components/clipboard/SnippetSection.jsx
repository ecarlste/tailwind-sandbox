import React from 'react';

import SectionContainer from './section/SectionContainer';
import SectionContent from './section/SectionContent';
import LargeHeader from './headers/LargeHeader';

function SnippetSection() {
  return (
    <section id="snippets">
      <SectionContainer className="my-20">
        <LargeHeader>Keep track of your snippets</LargeHeader>
        <SectionContent className="mb-24">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </SectionContent>
      </SectionContainer>
    </section>
  );
}

export default SnippetSection;
