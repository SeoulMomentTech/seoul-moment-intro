"use client";

import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { cn } from "@/utils/style";

interface EmailInputs {
  name: string;
  email: string;
  message: string;
}

export default function EmailForm() {
  const { register, handleSubmit } = useForm<EmailInputs>();

  const onSubmit: SubmitHandler<EmailInputs> = (data) => console.log(data);

  return (
    <form
      className={cn("flex w-full max-w-[585px] flex-col", "max-2xl:max-w-none")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={cn("mb-[40px] flex flex-col gap-[10px]", "max-md:mb-[20px]")}
      >
        <h4 className={cn("text-[20px] leading-[20px] font-semibold")}>
          Contact Us
        </h4>
        <span className={cn("text-[14px] text-black/40")}>Drop us a line!</span>
      </div>
      <div className={cn("flex flex-col gap-[40px]", "max-md:gap-[20px]")}>
        <div className="flex flex-col gap-[30px]">
          <input
            className={cn(
              "rounded-[4px] border border-black/20 px-[12px] py-[16px]",
              "text-[16px] leading-[16px]",
            )}
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <div className="flex flex-col gap-[8px]">
            <input
              className={cn(
                "rounded-[4px] border border-black/20 px-[12px] py-[16px]",
                "text-[16px] leading-[16px]",
              )}
              placeholder="Email*"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            <span className="text-gray">
              Please enter a valid email address.
            </span>
          </div>
          <textarea
            className={cn(
              "h-[100px] rounded-[4px] border border-black/20 px-[12px] py-[16px]",
              "resize-none text-[16px] leading-[16px]",
            )}
            placeholder="Message"
            {...register("message", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <button
            className="cursor-pointer rounded-[4px] bg-black p-[16px] font-semibold text-white"
            type="submit"
          >
            SEND
          </button>
          <span
            className={cn(
              "text-[14px] leading-[14px] text-black/40",
              "max-md:text-[12px] max-md:leading-[12px]",
            )}
          >
            This site is protected by reCAPTCHA and the Google Privacy Polict
            and Terms of Service apply.
          </span>
        </div>
      </div>
    </form>
  );
}
