import CallToActionSection from "./_components/call-to-action-section";
import NewsletterSubscribeForm from "./_components/newsletter-subscribe-form";

export default function NewsletterSignupPage() {
  return (
    <div className="bg-white flex flex-col gap-10">
      <div>Hero Image</div>
      <div className="flex flex-col gap-10 mx-6">
        <CallToActionSection />
        <NewsletterSubscribeForm />
      </div>
    </div>
  );
}
