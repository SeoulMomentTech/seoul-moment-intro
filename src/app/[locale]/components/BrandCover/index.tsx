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

export const images = [
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753543300/feeling1_lrmexf.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541821/feeling4_j6gfek.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541821/feeling2_tss05c.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1754316561/517410429_18514484098060627_785745689500304738_n_1_inkmnw.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1754301498/KakaoTalk_20250526_155222900_20_yuwspq.jpg",
];

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
