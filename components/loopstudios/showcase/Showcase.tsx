import React from "react";
import Button from "../Button";
import ShowcaseItemsContainer from "./ShowcaseItemsContainer";
import ShowcaseItem from "./ShowcaseItem";

import deepEarthDesktop from "@/public/images/loopstudios/desktop/image-deep-earth.jpg";
import deepEarthMobile from "@/public/images/loopstudios/mobile/image-deep-earth.jpg";
import nightArcadeDesktop from "@/public/images/loopstudios/desktop/image-night-arcade.jpg";
import nightArcadeMobile from "@/public/images/loopstudios/mobile/image-night-arcade.jpg";
import soccerTeamDesktop from "@/public/images/loopstudios/desktop/image-soccer-team.jpg";
import soccerTeamMobile from "@/public/images/loopstudios/mobile/image-soccer-team.jpg";
import gridDesktop from "@/public/images/loopstudios/desktop/image-grid.jpg";
import gridMobile from "@/public/images/loopstudios/mobile/image-grid.jpg";
import fromAboveDesktop from "@/public/images/loopstudios/desktop/image-from-above.jpg";
import fromAboveMobile from "@/public/images/loopstudios/mobile/image-from-above.jpg";
import pocketBorealisDesktop from "@/public/images/loopstudios/desktop/image-pocket-borealis.jpg";
import pocketBorealisMobile from "@/public/images/loopstudios/mobile/image-pocket-borealis.jpg";
import curiosityDesktop from "@/public/images/loopstudios/desktop/image-curiosity.jpg";
import curiosityMobile from "@/public/images/loopstudios/mobile/image-curiosity.jpg";
import fisheyeDesktop from "@/public/images/loopstudios/desktop/image-fisheye.jpg";
import fisheyeMobile from "@/public/images/loopstudios/mobile/image-fisheye.jpg";

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
            desktopImage={deepEarthDesktop}
            mobileImage={deepEarthMobile}
            name="Deep Earth"
          />

          <ShowcaseItem
            desktopImage={nightArcadeDesktop}
            mobileImage={nightArcadeMobile}
            name="Night Arcade"
          />

          <ShowcaseItem
            desktopImage={soccerTeamDesktop}
            mobileImage={soccerTeamMobile}
            name="Soccer Team VR"
          />

          <ShowcaseItem
            desktopImage={gridDesktop}
            mobileImage={gridMobile}
            name="The Grid"
          />
        </ShowcaseItemsContainer>

        <ShowcaseItemsContainer className="mt-10">
          <ShowcaseItem
            desktopImage={fromAboveDesktop}
            mobileImage={fromAboveMobile}
            name="From up Above VR"
          />

          <ShowcaseItem
            desktopImage={pocketBorealisDesktop}
            mobileImage={pocketBorealisMobile}
            name="Pocket Borealis"
          />

          <ShowcaseItem
            desktopImage={curiosityDesktop}
            mobileImage={curiosityMobile}
            name="The Curiosity"
          />

          <ShowcaseItem
            desktopImage={fisheyeDesktop}
            mobileImage={fisheyeMobile}
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
