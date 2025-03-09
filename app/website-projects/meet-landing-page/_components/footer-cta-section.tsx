import Button from "./button";
import NumberHeading from "./number-heading";

export default function FooterCtaSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <NumberHeading num={2} className="relative z-20" />
      {/* hero */}
      <div
        className={`
          relative flex flex-col px-8 py-16 items-center gap-16 -mt-7 w-full bg-footer-cta xl:py-28 xl:px-20
        `}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-cyan-600 opacity-85" />

        {/* content */}
        <div
          className={`
            relative z-10 flex flex-col max-w-[504px] items-center gap-6 mx-auto xl:flex-row xl:max-w-[1120px]
            xl:items-start xl:gap-8 xl:justify-center
          `}
        >
          <h2 className="text-preset-2 text-white text-center xl:text-left xl:flex-1">
            Experience more together
          </h2>
          <p className="text-preset-4 text-white text-center xl:text-left xl:w-[355px]">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <div className="xl:flex xl:w-64 xl:justify-end">
            <Button variant="secondary">
              <span className="flex items-start gap-1">
                Download
                <span className="text-purple-300">v1.3</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
