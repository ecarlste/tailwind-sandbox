import Image from "next/image";
import { Outfit } from "next/font/google";

export const generateMetadata = () => {
  return {
    title: "QR Code Component",
    description:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
    icons: {
      icon: "/images/qr-code/favicon-32x32.png",
    },
  };
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

const outfitBold = Outfit({
  subsets: ["latin"],
  weight: "700",
});

export default function QrCodeSitePage() {
  return (
    <main className="bg-slate-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 pb-10 rounded-3xl shadow-lg text-center space-y-4  max-w-xs">
        <Image
          className="rounded-xl"
          src="/images/qr-code/image-qr-code.png"
          width={288}
          height={288}
          alt="QR code"
        />
        <div className="px-3 pt-1 space-y-4">
          <h1
            className={`text-slate-900 text-[22px]/7  ${outfitBold.className}`}
          >
            Improve your front-end skills by building projects
          </h1>
          <p className={`text-slate-500 text-[15px]/5 ${outfit.className}`}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
