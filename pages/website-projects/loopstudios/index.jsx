import React from 'react';
import { Josefin_Sans } from 'next/font/google';

import HeroSection from '../../../components/loopstudios/HeroSection';
import FeaturesSection from '../../../components/loopstudios/FeaturesSection';
import Showcase from '../../../components/loopstudios/showcase/Showcase';
import Footer from '../../../components/loopstudios/footer/Footer';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: '300',
});

function LoopstudiosSitePage() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${josefin.style.fontFamily};
        }
      `}</style>
      <HeroSection />
      <FeaturesSection />
      <Showcase />
      <Footer />
    </>
  );
}

export default LoopstudiosSitePage;
