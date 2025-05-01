export default function NewsletterSignupPage() {
  return (
    <div className="bg-white flex flex-col gap-10">
      <div>Hero Image</div>
      <div className="flex flex-col gap-10">
        <h1 className="text-preset-1m">Stay Updated!</h1>
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
