"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import Section from "@/components/ui/section";
import useInterval from "@/hooks/useInterval";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/style";
import { CONTENTS } from ".";

interface Props {
  className?: string;
}

interface Turn {
  index: number;
  name: string;
}

const turns = ["make", "your", "here", "seoul"];

// The chip is sized in em, so it is always exactly as tall as the cap line it
// sits beside — at every viewport, from the one font-size on the container.
const styleMap = {
  chip: "relative h-[0.86em] overflow-hidden rounded-[0.1em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
  word: "inline-block",
};

export default function WebHeroSlogan({ className }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentTurn, setCurrentTurn] = useState<Turn | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    false,
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".slogan-line", {
        duration: 1,
        opacity: 0,
        ease: "power4",
      });

      tl.from(".slogan-letter", {
        duration: 1.5,
        yPercent: 100,
        opacity: 0,
        ease: "power4",
        stagger: 0.01,
      });

      tl.call(() => {
        setIsPaused(false);
        setCurrentTurn({ index: 0, name: "make" });
      });
    },
    { scope: sectionRef },
  );

  useInterval({
    duration: 2000,
    callback: () => {
      if (isPaused) return;

      const nextTurn = ((currentTurn?.index ?? 4) + 1) % 4;

      setCurrentTurn({ index: nextTurn, name: turns[nextTurn] });
    },
    pause: isPaused || prefersReducedMotion,
  });

  const handleMouseEnter = (name: string) => () => {
    const turn = turns.findIndex((turnName) => turnName === name);

    setCurrentTurn({ index: turn, name });
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Section
      className={cn(
        "section-one flex flex-col items-center justify-center",
        "relative px-[20px] pb-[72px] max-sm:hidden",
        className,
      )}
      ref={sectionRef}
    >
      <div
        className={cn(
          "flex flex-col items-center",
          "text-[clamp(3.125rem,11vw,10rem)] leading-none font-bold",
        )}
      >
        {[CONTENTS.slice(0, 2), CONTENTS.slice(2)].map((line, lineIdx) => (
          <Fragment key={`slogan-line-${lineIdx + 1}`}>
            {lineIdx === 1 && <div aria-hidden className="h-[0.075em]" />}
            <div className="slogan-line flex items-center overflow-hidden text-center">
              {line.map(({ word, srcPosition, activeKey, src }, wordIdx) => (
                <Fragment key={activeKey}>
                  {word.split("").map((w, idx) => (
                    <div
                      className="flex items-center"
                      key={`${word}-${w}-${idx + 1}`}
                      onMouseEnter={handleMouseEnter(activeKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className={cn("slogan-letter", styleMap.word)}>
                        {w}
                      </span>
                      <div
                        className={cn(
                          styleMap.chip,
                          "w-0 scale-0",
                          idx === srcPosition &&
                            currentTurn?.name === activeKey &&
                            "mx-[0.04em] w-[0.86em] scale-100",
                        )}
                      >
                        <Image
                          alt=""
                          className="object-cover"
                          fill
                          priority
                          sizes="160px"
                          src={src}
                        />
                      </div>
                    </div>
                  ))}
                  {wordIdx === 0 && <span className="w-[0.26em]" />}
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
      <a
        aria-label="Skip to the contact section"
        className={cn(
          "flex items-center justify-center",
          "h-[54px] w-[54px] rounded-full bg-black text-white",
          "absolute bottom-0 mb-[155px]",
        )}
        href="#contact-us"
      >
        <ChevronDown aria-hidden height={24} width={24} />
      </a>
    </Section>
  );
}
