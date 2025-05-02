import CallToActionSection from "./_components/call-to-action-section";
import HeroSection from "./_components/hero-section";
import NewsletterSubscribeForm from "./_components/newsletter-subscribe-form";

export default function NewsletterSignupPage() {
  return (
    <div className="bg-white flex flex-col gap-10 max-w-[500px] md:max-w-none md:rounded-[36px] md:p-10">
      <HeroSection />
      <div className="flex flex-col gap-10 mx-6 md:gap-6 md:mx-0">
        <CallToActionSection />
        <NewsletterSubscribeForm />
      </div>
    </div>
  );
}
