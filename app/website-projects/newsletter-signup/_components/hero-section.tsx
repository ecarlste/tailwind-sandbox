import Image from "next/image";

import heroImageMobile from "@/public/images/newsletter-signup/illustration-sign-up-mobile.svg";
import heroImageTablet from "@/public/images/newsletter-signup/illustration-sign-up-tablet.png";
import heroImageDesktop from "@/public/images/newsletter-signup/illustration-sign-up-desktop.svg";

function HeroSection() {
  return (
    <>
      <Image
        src={heroImageMobile}
        alt="Fancy Chart Image Small"
        className="w-full block md:hidden"
      />
      <Image
        src={heroImageTablet}
        alt="Fancy Chart Image Medium"
        className="hidden md:block lg:hidden"
      />
      <Image
        src={heroImageDesktop}
        alt="Fancy Chart Image Large"
        className="hidden lg:block"
      />
    </>
  );
}

export default HeroSection;
