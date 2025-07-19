"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import MobileHeroSlogan from "./Mobile";
import WebHeroSlogan from "./Web";

interface HeroSloganProps {
  className?: string;
}

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
