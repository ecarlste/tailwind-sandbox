import React from "react";
import { Josefin_Sans } from "next/font/google";
import styles from "./styles.module.css";

import HeroSection from "@/components/loopstudios/HeroSection";
import FeaturesSection from "@/components/loopstudios/FeaturesSection";
import Showcase from "@/components/loopstudios/showcase/Showcase";
import Footer from "@/components/loopstudios/footer/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-josefin",
});

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
