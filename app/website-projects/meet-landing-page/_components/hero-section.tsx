import Button from "./button";
import HeroImage from "./hero-image";

export default function HeroSection() {
  return (
    <section className="p-8 pt-16 xl:p-16 xl:px-20">
      {/* combined */}
      <div
        className={`
          flex flex-col max-w-[305px] justify-center items-center gap-12 md:max-w-[680px] xl:flex-row
          xl:max-w-none
        `}
      >
        {/* combined-image */}
        <div className="flex justify-center items-center gap-[16.9px] md:gap-8 xl:hidden">
          <HeroImage variant="left" />
          <HeroImage variant="right" />
        </div>

        <div className="hidden pr-24 pb-14 xl:block">
          <HeroImage variant="left" />
        </div>

        {/* text-content */}
        <div className="flex flex-col items-center gap-6 w-full md:max-w-[448px] xl:min-w-[448px]">
          <h1 className="text-slate-900 text-preset-1 text-center self-stretch px-2">
            Group Chat for Everyone
          </h1>
          <p className="text-slate-600 text-preset-4 text-center font-me">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button>
              <span className="flex flex-start gap-1">
                Download<span className="text-cyan-300">v1.3</span>
              </span>
            </Button>
            <Button variant="secondary">What is it?</Button>
          </div>
        </div>

        <div className="hidden pl-24 pt-14 xl:block">
          <HeroImage variant="right" />
        </div>
      </div>
    </section>
  );
}
