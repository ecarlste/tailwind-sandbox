import Image from "next/image";

import imageHeroLeft from "@/public/images/meet-landing-page/desktop/image-hero-left.png";
import imageHeroRight from "@/public/images/meet-landing-page/desktop/image-hero-right.png";

type HeroImageProps = {
  variant: "left" | "right";
  className?: string;
};

const imageSrcMap = {
  left: imageHeroLeft,
  right: imageHeroRight,
};

export default function HeroImage({ variant, className = "" }: HeroImageProps) {
  return (
    <Image
      src={imageSrcMap[variant]}
      alt={`Hero images ${variant}`}
      className={`shrink-0 h-40 w-[208.053px] md:h-[303px] md:w-[394px] ${className}`}
    />
  );
}
