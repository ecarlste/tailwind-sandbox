import Image from "next/image";
import SocialLinkButton from "./social-link-button";
import { Inter } from "next/font/google";
import { SocialLinksProfileData } from "../social-links-profile-data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type SocialLinksProfileProps = {
  data: SocialLinksProfileData;
};

export default function SocialLinksProfile({ data }: SocialLinksProfileProps) {
  return (
    <div
      className={`
        w-[327px] md:w-[384px] bg-grey-800 rounded-xl flex flex-col p-[24px] md:p-[40px] items-center gap-[24px]
        text-white ${inter.className}
      `}
    >
      <Image
        src={data.avatar}
        alt={`Avatar image of ${data.name}`}
        width={88}
        height={88}
        className="rounded-full"
      />

      <div className="flex flex-col gap-[4px]">
        <h1 className="text-2xl text-white font-semibold text-center">
          {data.name}
        </h1>
        <p className="text-sm text-green font-bold text-center">
          {data.location}
        </p>
      </div>

      <p className="text-sm text-white text-center">&quot;{data.bio}&quot;</p>

      <div className="flex flex-col gap-[16px] w-full">
        {data.socialLinks.map((socialLink) => (
          <SocialLinkButton key={socialLink}>{socialLink}</SocialLinkButton>
        ))}
      </div>
    </div>
  );
}
