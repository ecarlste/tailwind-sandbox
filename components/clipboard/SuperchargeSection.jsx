import React from 'react';
import SectionContainer from './section/SectionContainer';
import SectionContent from './section/SectionContent';
import LargeHeader from './headers/LargeHeader';
import MediumHeader from './headers/MediumHeader';

function SuperchargeSection() {
  return (
    <section id="supercharge">
      <SectionContainer className="my-20">
        <LargeHeader>Supercharge your workflow</LargeHeader>
        <SectionContent className="mb-16">
          We've got the tools to boost your productivity.
        </SectionContent>

        {/* <!-- Items Container --> */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {/* <!-- Item 1 --> */}
          <div className="flex flex-col items-center space-y-5">
            <img
              src="/images/clipboard/icon-blocklist.svg"
              alt=""
              className="mb-6"
            />
            <MediumHeader>Create Blocklists</MediumHeader>
            <p className="max-w-md text-grayish-blue">
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
            <MediumHeader>Plain Text Snippets</MediumHeader>
            <p className="max-w-md text-grayish-blue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          {/* <!-- Item 3 --> */}
          <div className="flex flex-col items-center space-y-5">
            <img
              src="/images/clipboard/icon-preview.svg"
              alt=""
              className="mb-6"
            />
            <MediumHeader>Sneak Preview</MediumHeader>
            <p className="max-w-md text-grayish-blue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default SuperchargeSection;
