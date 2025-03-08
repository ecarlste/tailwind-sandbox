import Button from "./button";
import NumberHeading from "./number-heading";

export default function FooterCtaSection() {
  return (
    <section className="flex flex-col justify-center items-center self-stretch">
      <NumberHeading num={2} />
      {/* hero */}
      <div className="relative z-[-10] flex flex-col px-8 py-16 items-center gap-16 self-stretch bg-footer-cta -mt-7">
        {/* overlay */}
        <div className="absolute inset-0 bg-cyan-600 opacity-85" />

        {/* content */}
        <div className="relative flex flex-col max-w-[504px] items-center gap-6 self-stretch">
          <h2 className="text-mobile-preset-2 text-white text-center self-stretch">
            Experience more together
          </h2>
          <p className="self-stretch text-tablet-preset-4 text-white text-center">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button variant="secondary">
            <div className="flex items-start gap-1">
              Download
              <span className="text-purple-300">v1.3</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
