import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import styles from './styles.module.css';

import HeroSection from '../../../components/loopstudios/HeroSection';
import FeaturesSection from '../../../components/loopstudios/FeaturesSection';
import Showcase from '../../../components/loopstudios/showcase/Showcase';
import Footer from '../../../components/loopstudios/footer/Footer';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: '300',
  variable: "--font-josefin",
});

/**
 * Renders the main Loopstudios site page.
 *
 * This component returns a <main> element styled with a custom font and CSS module classes.
 * It encapsulates the following sections:
 * - HeroSection: The top visual introduction.
 * - FeaturesSection: Highlights the site's key features.
 * - Showcase: Displays featured content.
 * - Footer: Contains navigational links and additional information.
 *
 * @returns {JSX.Element} The rendered Loopstudios site page.
 */
function LoopstudiosSitePage() {
  return (
    <main className={`${josefin.variable} ${styles.loopstudios}`}>
      <HeroSection />
      <FeaturesSection />
      <Showcase />
      <Footer />
    </main>
  );
}

export default LoopstudiosSitePage;
