type TitleSectionProps = {
  title1: string;
  title2: string;
  description: string;
};

export default function TitleSection({
  title1,
  title2,
  description,
}: TitleSectionProps) {
  return (
    <section
      className={`
        flex flex-col items-center gap-4 font-poppins text-grey-500 max-w-[316px] w-full md:max-w-[540px]
    `}
    >
      {/* Title */}
      <div
        className={`
          flex flex-col items-center text-center self-stretch text-2xl leading-[140%] tracking-[0.25px] md:text-4xl
        `}
      >
        <span className="font-[275]">{title1}</span>
        <span className="font-semibold">{title2}</span>
      </div>

      {/* Description */}
      <p className="text-center text-[15px] font-normal tracking-[0.104px]">
        {description}
      </p>
    </section>
  );
}
