import React from 'react';
import Button from '../Button';
import ShowcaseItemsContainer from './ShowcaseItemsContainer';
import ShowcaseItem from './ShowcaseItem';

function Showcase() {
  return (
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
  );
}

export default Showcase;
