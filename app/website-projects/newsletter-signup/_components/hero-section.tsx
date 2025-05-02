import Image from "next/image";

import heroImageMobile from "@/public/images/newsletter-signup/illustration-sign-up-mobile.svg";
import heroImageTablet from "@/public/images/newsletter-signup/illustration-sign-up-tablet.png";

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
        className="hidden md:block"
      />
    </>
  );
}

export default HeroSection;
