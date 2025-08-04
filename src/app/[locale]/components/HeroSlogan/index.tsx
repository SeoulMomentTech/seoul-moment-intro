"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import MobileHeroSlogan from "./Mobile";
import WebHeroSlogan from "./Web";

interface HeroSloganProps {
  className?: string;
}

export const CONTENTS = [
  {
    word: "MAKE",
    activeKey: "make",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1754315800/8_Cute_and_Trendy_Outfits_for_Cold_Weather_nqugkh.jpg",
  },
  {
    word: "YOUR",
    activeKey: "your",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1754290691/singsing-wade-kim-on0JT_t3COI-unsplash_mls9xk.jpg",
  },
  {
    word: "SEOUL",
    activeKey: "seoul",
    srcPosition: 4,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1754290695/yu-kato-wfrbfXyxVaU-unsplash_cmvveg.jpg",
  },
  {
    word: "HERE",
    activeKey: "here",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1754290688/manuel-kuhlmann-Euman2A8rPg-unsplash_rssdrg.jpg",
  },
];

export default function HeroSlogan({ className }: HeroSloganProps) {
  const isMobile = useMediaQuery("(max-width: 40rem)", false);

  return (
    <>
      {isMobile ? (
        <MobileHeroSlogan className="h-screen" />
      ) : (
        <WebHeroSlogan className={className} />
      )}
    </>
  );
}
