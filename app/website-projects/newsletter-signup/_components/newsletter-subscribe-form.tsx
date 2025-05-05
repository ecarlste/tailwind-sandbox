function NewsletterSubscribeForm() {
  return (
    <form className="flex flex-col gap-6 md:gap-4 lg:gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-preset-3">Email address</label>
        <input
          className="text-preset-2 outline-none px-6 py-4 rounded-lg border-[1px] border-grey focus:border-blue-800"
          type="email"
          placeholder="email@company.com"
          data-1p-ignore
        />
      </div>
      <button className="rounded-lg px-12 py-4 bg-blue-800 text-preset-2 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default NewsletterSubscribeForm;
