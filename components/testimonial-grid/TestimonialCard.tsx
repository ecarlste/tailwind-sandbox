import React from "react";

import styles from "./TestimonialCard.module.css";

import bgPatternQuotation from "@/public/images/testimonial-grid/bg-pattern-quotation.svg";
import Image, { StaticImageData } from "next/image";

function TestimonialCard(props: {
  data: {
    image: StaticImageData;
    name: string;
    headline: string;
    fullText: string;
  };
  showQuotes?: boolean;
  lineClamp?: number;
  className?: string;
}) {
  const { data, showQuotes, lineClamp = 5 } = props;

  const containerStyles = `p-10 rounded-xl ${props.className}`.trimEnd();
  const lineClampStyle = styles[`line-clamp-${lineClamp}`];

  return (
    <>
      <div className={containerStyles}>
        {showQuotes && (
          <Image
            src={bgPatternQuotation}
            alt=""
            className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
          />
        )}

        <div className="flex z-10 space-x-4">
          <Image
            src={data.image}
            alt=""
            className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          />
          <div className="text-sm">
            <h4 className="opacity-90">{data.name}</h4>
            <p className="opacity-50">Verified Graduate</p>
          </div>
        </div>

        <p className="relative z-10 mt-6 text-xl">{data.headline}</p>

        <p className={`mt-6 opacity-50 ${lineClampStyle}`}>{data.fullText}</p>
      </div>
    </>
  );
}

export default TestimonialCard;
