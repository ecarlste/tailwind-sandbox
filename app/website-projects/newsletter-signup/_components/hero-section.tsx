import Image from "next/image";

import heroImage from "@/public/images/newsletter-signup/illustration-sign-up-mobile.svg";

function HeroSection() {
  return <Image src={heroImage} alt="Fancy Chart Image" className="w-full" />;
}

export default HeroSection;
