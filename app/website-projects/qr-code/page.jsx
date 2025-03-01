import Image from "next/image";
import { Outfit } from "next/font/google";
import styles from "./styles.module.css";

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
      <div className="bg-white p-4 rounded-3xl shadow-lg text-center space-y-4  max-w-xs">
        <Image
          className="rounded-xl"
          src="/images/qr-code/image-qr-code.png"
          width={286}
          height={286}
          alt="QR code"
        />
        <div className="px-3 space-y-4">
          <h1
            className={`text-slate-900 text-[22px]/7  ${outfitBold.className}`}
          >
            Improve your front-end skills by building projects
          </h1>
          <p className={`text-slate-500 text-[15px] ${outfit.className}`}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
          <div className={`${styles.attribution} ${outfit.className}`}>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/ecarlste">Erik S. Carlsten</a>.
          </div>
        </div>
      </div>
    </main>
  );
}
