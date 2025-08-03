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
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1753543300/feeling1_lrmexf.png",
  },
  {
    word: "YOUR",
    activeKey: "your",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541821/feeling4_j6gfek.png",
  },
  {
    word: "SEOUL",
    activeKey: "seoul",
    srcPosition: 4,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541821/feeling2_tss05c.png",
  },
  {
    word: "HERE",
    activeKey: "here",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1753542066/feeling5_sbs6kq.png",
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
