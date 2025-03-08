import FooterCtaSection from "./_components/footer-cta-section";
import HeroSection from "./_components/hero-section";
import MainContentSection from "./_components/main-content-section";
import NavBar from "./_components/nav-bar";

export const metadata = {
  title: "Meet Landing Page",
  description: "A landing page for a video conferencing app.",
  icons: {
    icon: "/images/meet-landing-page/favicon-32x32.png",
  },
};

export default function MeetLandingPageSitePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MainContentSection />
      <FooterCtaSection />
    </>
  );
}
