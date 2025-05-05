"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "./button";

const FormSchema = z.object({
  email: z.string().email({
    message: "Valid email required",
  }),
});

type FormInput = z.infer<typeof FormSchema>;

function NewsletterSubscribeForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit((data) => {
    router.push(
      `/website-projects/newsletter-signup/success?email=${data.email}`
    );
  });

  return (
    <form className="flex flex-col gap-6 md:gap-4 lg:gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-preset-3 flex justify-between">
          <span>Email address</span>
          {errors.email?.message && (
            <span className="text-red">{errors.email.message}</span>
          )}
        </label>
        <input
          id="email"
          className={`text-preset-2 outline-none px-6 py-4 rounded-lg border-[1px] ${
            errors.email?.message
              ? "border-red text-red bg-red-100"
              : "border-grey focus:border-blue-800"
          }`}
          placeholder="email@company.com"
          data-1p-ignore
          {...register("email")}
        />
      </div>
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}

export default NewsletterSubscribeForm;
