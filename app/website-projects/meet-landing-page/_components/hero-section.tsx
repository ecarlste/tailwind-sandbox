import Image from "next/image";
import Button from "./button";

import imageHeroLeft from "/public/images/meet-landing-page/desktop/image-hero-left.png";
import imageHeroRight from "/public/images/meet-landing-page/desktop/image-hero-right.png";

export default function HeroSection() {
  return (
    <section className="p-8 pt-16">
      {/* combined */}
      <div
        className={`
          flex flex-col max-w-[305px] justify-center items-center gap-12 self-stretch md:max-w-[680px] xl:flex-row
          xl:max-w-none
        `}
      >
        {/* combined-image */}
        <div className="flex justify-center items-center self-stretch gap-[16.9px] md:gap-8">
          <Image
            src={imageHeroLeft}
            alt="Hero Images Left"
            className="shrink-0 h-40 w-[208.053px] md:h-[303px] md:w-[394px]"
          />
          <Image
            src={imageHeroRight}
            alt="Hero Images Right"
            className="shrink-0 h-40 w-[208.053px] md:h-[303px] md:w-[394px] xl:hidden"
          />
        </div>

        {/* text-content */}
        <div className="flex flex-col items-center gap-6 w-full md:max-w-[448px]">
          <h1 className="text-slate-900 text-mobile-preset-1 text-center self-stretch px-2">
            Group Chat for Everyone
          </h1>
          <p className="text-slate-600 text-tablet-preset-4 text-center font-me">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button>
              <div className="flex flex-start gap-1">
                Download<span className="text-cyan-300">v1.3</span>
              </div>
            </Button>
            <Button variant="secondary">What is it?</Button>
          </div>
        </div>

        <Image
          src={imageHeroRight}
          alt="Hero Images Right"
          className="hidden shrink-0 h-40 w-[208.053px] md:h-[303px] md:w-[394px] xl:block"
        />
      </div>
    </section>
  );
}
