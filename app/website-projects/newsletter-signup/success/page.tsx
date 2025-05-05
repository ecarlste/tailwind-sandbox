"use client";

import { useRouter } from "next/navigation";
import Button from "../_components/button";
import IconCheck from "../_components/icon-check";
import { use } from "react";

type NewsletterSignupSuccessPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function NewsletterSignupSuccessPage({
  searchParams,
}: NewsletterSignupSuccessPageProps) {
  const router = useRouter();
  const { email } = use(searchParams);

  const handleClick = () => {
    router.push("/website-projects/newsletter-signup");
  };

  return (
    <div className="flex flex-col gap-8 text-blue-800 w-[327px] mt-8 md:w-[504px] md:mt-0 md:p-16 md:bg-white md:rounded-[36px]">
      <IconCheck className="w-16 h-16" />
      <h1 className="text-preset-1">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>{email}</b>. Please open it and
        click the button inside to confirm your subscription
      </p>
      <Button onClick={handleClick}>Dismiss Message</Button>
    </div>
  );
}

export default NewsletterSignupSuccessPage;
