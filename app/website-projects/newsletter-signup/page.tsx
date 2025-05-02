export default function NewsletterSignupPage() {
  return (
    <div className="bg-white flex flex-col gap-10">
      <div>Hero Image</div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-preset-1m">Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
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
