import Image from "next/image";
import SocialLinksButton from "./social-links-button";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function SocialLinksProfile() {
  return (
    <div
      className={
        "w-[327px] md:w-[384px] bg-grey-800 rounded-xl flex flex-col p-[24px] md:p-[40px] items-center gap-[24px] " +
        "text-white " +
        `${inter.className}`
      }
    >
      <Image
        src="/images/social-links-profile/avatar-jessica.jpeg"
        alt="Jessica Randall"
        width={88}
        height={88}
        className="rounded-full"
      />
      <div className="flex flex-col gap-[4px]">
        <h1 className="text-2xl text-white font-semibold text-center">
          Jessica Randall
        </h1>
        <p className="text-sm text-green font-bold text-center">
          London, United Kingdom
        </p>
      </div>
      <p className="text-sm text-white text-center">
        "Front-end developer and avid reader."
      </p>

      <div className="flex flex-col gap-[16px] w-full">
        <SocialLinksButton>GitHub</SocialLinksButton>
        <SocialLinksButton>Frontend Mentor</SocialLinksButton>
        <SocialLinksButton>LinkedIn</SocialLinksButton>
        <SocialLinksButton>Twitter</SocialLinksButton>
        <SocialLinksButton>Instagram</SocialLinksButton>
      </div>
    </div>
  );
}
