import IconCheck from "./_components/icon-check";

const benefits = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

export default function NewsletterSignupPage() {
  return (
    <div className="bg-white flex flex-col gap-10">
      <div>Hero Image</div>
      <div className="flex flex-col gap-10 mx-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-preset-1m">Stay Updated!</h1>
          <p className="text-preset-2">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col gap-2 text-preset-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4">
                <IconCheck />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label>Email address</label>
            <input type="email" placeholder="email@company.com" />
          </div>
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
}
