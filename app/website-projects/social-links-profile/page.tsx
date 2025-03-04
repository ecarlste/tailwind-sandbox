import SocialLinksProfile from "./_components/social-links-profile";

const socialLinksProfileData = {
  avatar: "/images/social-links-profile/avatar-jessica.jpeg",
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: "Front-end developer and avid reader.",
  socialLinks: [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ],
};

export default function SocialLinksSitePage() {
  return (
    <div className="p-[24px] bg-grey-900 min-h-lvh flex items-center justify-center">
      <SocialLinksProfile data={socialLinksProfileData} />
    </div>
  );
}
