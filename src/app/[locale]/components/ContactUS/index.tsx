"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "@/components/ui/section";
import useInterval from "@/hooks/useInterval";
import { cn } from "@/utils/style";
import EmailForm from "./EmailForm";

export default function ContactUS() {
  const [maskingIdx, setMaskingIdx] = useState(0);

  useInterval({
    duration: 1500,
    callback: () => {
      setMaskingIdx((prev) => (prev + 1) % 2);
    },
  });

  return (
    <Section
      className={cn(
        "mx-auto h-[761px] max-w-[1920px] max-2xl:h-auto",
        "max-md:bg-black max-md:pt-[24px]",
      )}
      id="contact-us"
    >
      <div
        className={cn(
          "flex justify-center pr-[180px] pl-[220px]",
          "max-xl:px-[40px] max-md:rounded-t-[27px]",
          "max-md:bg-white max-md:px-[20px]",
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-[1592px] justify-center gap-[132px] pt-[140px] pb-[140px]",
            "max-2xl:flex-col max-2xl:gap-[132px]",
            "max-md:gap-[60px] max-md:pt-[60px] max-md:pb-[90px]",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-[46px]",
              "max-md:flex-col-reverse max-md:items-center max-md:gap-[30px]",
            )}
          >
            <div
              className={cn(
                "flex justify-between",
                "max-md:flex-col-reverse max-md:items-center max-md:gap-[30px]",
              )}
            >
              <div className={cn("flex gap-[20px]", "max-md:flex-col")}>
                {[0, 1].map((_, idx) => (
                  <Image
                    alt=""
                    className={cn(
                      "h-[45px] text-black transition-opacity",
                      "max-md:rotate-90",
                      maskingIdx !== idx && "opacity-20",
                    )}
                    height={45}
                    key={`${idx + 1}-arrow`}
                    src="/arrow.svg"
                    width={58}
                  />
                ))}
              </div>
              <Image
                alt=""
                className="max-md:w-[80px]"
                height={163}
                src="/qrcode.png"
                width={163}
              />
            </div>
            <h4
              className={cn(
                "w-[485px] text-[80px] leading-[80px] font-bold",
                "max-w-[485px] max-md:w-auto max-md:text-center max-md:text-[44px] max-md:leading-[44px]",
              )}
            >
              We’re Waiting for Our Moment
            </h4>
          </div>
          <EmailForm />
        </div>
      </div>
    </Section>
  );
}
