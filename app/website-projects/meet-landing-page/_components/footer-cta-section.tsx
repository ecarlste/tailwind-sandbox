import Button from "./button";
import NumberHeading from "./number-heading";

export default function FooterCtaSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <NumberHeading num={2} />
      {/* hero */}
      <div
        className={`
          relative z-[-10] flex flex-col px-8 py-16 items-center gap-16 -mt-7 w-full bg-cover bg-no-repeat bg-center
          bg-[url('/images/meet-landing-page/mobile/image-footer.jpg')]
          md:bg-[url('/images/meet-landing-page/tablet/image-footer.jpg')]
          xl:bg-[url('/images/meet-landing-page/desktop/image-footer.jpg')]
        `}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-cyan-600 opacity-85" />

        {/* content */}
        <div className="relative flex flex-col max-w-[504px] items-center gap-6 mx-auto">
          <h2 className="text-mobile-preset-2 text-white text-center">
            Experience more together
          </h2>
          <p className="text-tablet-preset-4 text-white text-center">
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
