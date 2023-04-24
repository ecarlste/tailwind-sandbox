import React from 'react';

import SectionContainer from './section/SectionContainer';
import MediumHeader from './headers/MediumHeader';

function FeaturesSection() {
  return (
    <section id="features">
      <SectionContainer className="my-20 md:my-40">
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
              <MediumHeader>Quick Search</MediumHeader>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* <!-- Item 2 --> */}
            <div>
              <MediumHeader>iCloud Sync</MediumHeader>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            {/* <!-- Item 1 --> */}
            <div>
              <MediumHeader>Complete History</MediumHeader>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default FeaturesSection;
