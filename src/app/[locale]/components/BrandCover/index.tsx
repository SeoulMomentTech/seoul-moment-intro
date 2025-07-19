"use client";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

import "swiper/css";
import "swiper/css/effect-coverflow";
import Coverflow from "./Coverflow";

interface Props {
  className?: string;
}

export default function BrandCover({ className }: Props) {
  return (
    <Section
      className={cn(
        "section-2 relative mx-auto flex max-w-[2200px] flex-col items-center justify-center gap-[52px] py-15",
        "max-sm:h-auto max-sm:justify-start max-sm:pt-[90px]",
        className,
      )}
    >
      <div className="px-[8px]">
        <h2
          className={cn(
            "text-[50px] font-bold",
            "max-xl:text-[40px] max-lg:text-center max-md:break-keep max-sm:text-[30px]",
          )}
        >
          Not a Place. A Feeling
        </h2>
      </div>
      <Coverflow />
    </Section>
  );
}
