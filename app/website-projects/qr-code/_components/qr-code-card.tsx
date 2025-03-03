import { Outfit } from "next/font/google";
import Image, { StaticImageData } from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type QrCodeCardProps = {
  qrCodeImage: StaticImageData;
  heading: string;
  description: string;
  priority?: boolean;
};

export default function QrCodeCard({
  qrCodeImage,
  heading,
  description,
  priority = false,
}: QrCodeCardProps) {
  return (
    <div className="bg-white p-4 pb-10 rounded-3xl shadow-lg text-center space-y-4 max-w-xs">
      <Image
        className="rounded-xl"
        src={qrCodeImage}
        width={288}
        height={288}
        alt="QR code"
        priority={priority}
        loading={priority ? "eager" : undefined}
      />
      <div className="px-3 pt-1.5 space-y-4">
        <h1
          className={`text-slate-900 text-[22px]/7 ${outfit.className} font-bold`}
        >
          {heading}
        </h1>
        <p className={`text-slate-500 text-[15px]/5 ${outfit.className}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
