import Image from "next/image";
import { FeatureCardData } from "./four-card-feature-section";

type borderColor = "bg-red" | "bg-cyan" | "bg-orange" | "bg-blue";

type FeatureCardProps = {
  data: FeatureCardData;
  borderColor?: borderColor;
};

export default function FeatureCard({
  data,
  borderColor = "bg-red",
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col shadow-custom rounded-lg w-full
         max-w-[314px] overflow-hidden md:w-[314px]`}
    >
      <div className={`${borderColor} h-1 w-full`} />

      <div className="flex flex-col p-8 gap-8 items-end">
        <div className="flex flex-col gap-1.5">
          <span className="font-poppins text-xl font-semibold leading-[135%]">
            {data.title}
          </span>
          <span className="text-lg text-grey-400 text-[13px] leading-[160%] tracking-[0.09px]">
            {data.description}
          </span>
        </div>

        <div className="pb-3">
          <Image
            src={data.icon}
            alt={data.title}
            className="w-[64px] h-[64px]"
          />
        </div>
      </div>
    </div>
  );
}
