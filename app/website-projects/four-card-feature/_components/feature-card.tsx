import Image from "next/image";
import { FeatureCardData } from "../feature-card-data";

type AccentColorClass = "bg-red" | "bg-cyan" | "bg-orange" | "bg-blue";

type FeatureCardProps = {
  data: FeatureCardData;
  accentColor?: AccentColorClass;
};

export default function FeatureCard({
  data,
  accentColor = "bg-red",
}: FeatureCardProps) {
  return (
    <div
      className={`
        flex flex-col shadow-custom rounded-lg w-full
        max-w-[314px] overflow-hidden md:w-[314px]
      `}
    >
      <div className={`${accentColor} h-1 w-full`} />

      <div className="flex flex-col p-8 gap-8 items-end">
        <div className="flex flex-col gap-1.5">
          <span className="font-poppins text-xl font-semibold leading-[135%]">
            {data.title}
          </span>
          <span className="text-grey-400 text-[13px] leading-[160%] tracking-[0.09px]">
            {data.description}
          </span>
        </div>

        <div className="pb-3">
          <Image
            src={data.icon}
            alt={data.title}
            className="w-[64px] h-[64px]"
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
}
