import Image from "next/image";
import Button from "./button";

export default function HeroSection() {
  return (
    <section className="p-8 pt-16">
      {/* combined */}
      <div className="flex flex-col max-w-[305px] justify-center items-center gap-12 self-stretch">
        {/* combined-image */}
        <div className="flex h-40 justify-center items-center self-stretch gap-[16.9px]">
          <Image
            src="/images/meet-landing-page/desktop/image-hero-left.png"
            alt="Hero Images Left"
            width={208.053}
            height={160}
            className="shrink-0"
          />
          <Image
            src="/images/meet-landing-page/desktop/image-hero-right.png"
            alt="Hero Images Right"
            width={208.053}
            height={160}
            className="shrink-0"
          />
        </div>

        {/* text-content */}
        <div className="flex flex-col items-center gap-6 self-stretch">
          <h1 className="text-slate-900 text-mobile-preset-1 text-center self-stretch px-2">
            Group Chat for Everyone
          </h1>
          <p className="text-slate-600 text-tablet-preset-4 text-center font-me">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button>
              <div className="flex flex-start gap-1">
                Download<span className="text-cyan-300">v1.3</span>
              </div>
            </Button>
            <Button variant="secondary">What is it?</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
