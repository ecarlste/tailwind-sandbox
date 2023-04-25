import React from 'react';

import ShowcaseItemsContainer from '../../../components/loopstudios/showcase/ShowcaseItemsContainer';
import ShowcaseItem from '../../../components/loopstudios/showcase/ShowcaseItem';
import HeroSection from '../../../components/loopstudios/HeroSection';
import FeaturesSection from '../../../components/loopstudios/FeaturesSection';
import Button from '../../../components/loopstudios/Button';

function LoopstudiosSitePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />

      {/* <!-- Creations Section --> */}
      <section id="creations">
        {/* <!-- Creations Container --> */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* <!-- Creations Header --> */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>

            <Button className="hidden md:block">See All</Button>
          </div>

          <ShowcaseItemsContainer>
            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-deep-earth.jpg"
              mobileImage="/images/loopstudios/mobile/image-deep-earth.jpg"
              name="Deep Earth"
            />

            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-night-arcade.jpg"
              mobileImage="/images/loopstudios/mobile/image-night-arcade.jpg"
              name="Night Arcade"
            />

            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-soccer-team.jpg"
              mobileImage="/images/loopstudios/mobile/image-soccer-team.jpg"
              name="Soccer Team VR"
            />

            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-grid.jpg"
              mobileImage="/images/loopstudios/mobile/image-grid.jpg"
              name="The Grid"
            />
          </ShowcaseItemsContainer>

          <ShowcaseItemsContainer className="mt-10">
            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-from-above.jpg"
              mobileImage="/images/loopstudios/mobile/image-from-above.jpg"
              name="From up Above VR"
            />

            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-pocket-borealis.jpg"
              mobileImage="/images/loopstudios/mobile/image-pocket-borealis.jpg"
              name="Pocket Borealis"
            />

            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-curiosity.jpg"
              mobileImage="/images/loopstudios/mobile/image-curiosity.jpg"
              name="The Curiosity"
            />

            <ShowcaseItem
              desktopImage="/images/loopstudios/desktop/image-fisheye.jpg"
              mobileImage="/images/loopstudios/mobile/image-fisheye.jpg"
              name="Make it Fisheye"
            />
          </ShowcaseItemsContainer>

          {/* <!-- Bottom Button Container --> */}
          <div className="flex justify-center mt-10 md:hidden">
            <Button className="w-full md:hidden">See All</Button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          {/* <!-- Footer Flex Container --> */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* <!-- Menu & Logo --> */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* <!-- Logo  --> */}
              <div className="h-8">
                <img
                  src="/images/loopstudios/logo.svg"
                  alt=""
                  className="w-44 md:ml-3"
                />
              </div>
              {/* <!-- Menu Container --> */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* <!-- Item 1 --> */}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* <!-- Item 2 --> */}
                <div className="h-10 group">
                  <a href="#">Career</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* <!-- Item 3 --> */}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* <!-- Item 4 --> */}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* <!-- Item 5 --> */}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* <!-- Social & Copy --> */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* <!-- Icons Container --> */}
              <div className="flex flex-row items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                {/* <!-- Icon 1 --> */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/loopstudios/icon-facebook.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>

                {/* <!-- Icon 2 --> */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/loopstudios/icon-twitter.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>

                {/* <!-- Icon 3 --> */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/loopstudios/icon-pinterest.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>

                {/* <!-- Icon 4 --> */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/loopstudios/icon-instagram.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>
              </div>

              {/* <!-- Copy --> */}
              <div className="font-bold">
                &copy; 2023 Loopstudios. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LoopstudiosSitePage;
