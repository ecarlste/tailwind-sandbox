import CallToActionSection from "./_components/call-to-action-section";
import HeroSection from "./_components/hero-section";
import NewsletterSubscribeForm from "./_components/newsletter-subscribe-form";

export default function NewsletterSignupPage() {
  return (
    <div className="bg-white flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 max-w-[500px] md:max-w-none md:rounded-[36px] md:p-10 lg:p-8 lg:items-center shadow-none md:shadow-card">
      <HeroSection />
      <div className="flex flex-col gap-10 md:gap-6 mx-6 md:mx-0 w-fit md:w-full lg:w-[376px]">
        <CallToActionSection />
        <NewsletterSubscribeForm />
      </div>
    </div>
  );
}
