"use client";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

import Coverflow from "./Coverflow";

import "swiper/css";
import "swiper/css/effect-coverflow";
import CoverSlider from "./CoverSlider";

interface Props {
  className?: string;
}

export default function BrandCover({ className }: Props) {
  return (
    <Section
      className={cn(
        "section-2 relative mx-auto flex max-w-[1920px] flex-col items-center justify-center gap-[52px] py-15",
        "max-sm:h-auto max-sm:gap-[60px] max-sm:px-[20px] max-sm:py-[90px]",
        className,
      )}
    >
      <div className="px-[8px]">
        <h2
          className={cn(
            "text-[50px] font-bold",
            "max-xl:text-[40px] max-lg:text-center max-md:break-keep max-sm:text-[28px]",
          )}
        >
          Not a Place. A Feeling
        </h2>
      </div>
      <Coverflow className="max-sm:hidden!" />
      <CoverSlider className="max-sm:block! sm:hidden!" />
    </Section>
  );
}
