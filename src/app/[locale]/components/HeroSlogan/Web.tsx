"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";
import Section from "@/components/ui/section";
import useInterval from "@/hooks/useInterval";
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

const styleMap = {
  base: "overflow-hidden relative h-[150px] rounded-lg transition-all duration-700 max-xl:h-[80px] max-md:h-[45px] ",
  word: "inline-block max-md:text-[50px] max-sm:text-[40px]",
};

export default function WebHeroSlogan({ className }: Props) {
  const [currentTurn, setCurrentTurn] = useState<Turn | null>(null);
  const [isPaused, setIsPaused] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".section-one div", {
      duration: 1,
      opacity: 0,
      ease: "power4",
    });

    tl.from("span", {
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      stagger: 0.01,
    });

    tl.call(() => {
      setIsPaused(false);
      setCurrentTurn({
        index: 0,
        name: "make",
      });
    });
  });

  useInterval({
    duration: 2000,
    callback: () => {
      if (isPaused) return;

      const nextTurn = ((currentTurn?.index ?? 4) + 1) % 4;

      setCurrentTurn({
        index: nextTurn,
        name: turns[nextTurn],
      });
    },
    pause: isPaused,
  });

  const handleMouseEnter = (name: string) => () => {
    const turn = turns.findIndex((turnName) => turnName === name);

    setCurrentTurn({
      index: turn,
      name,
    });
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Section
      className={cn(
        "section-one flex flex-col items-center justify-center",
        "relative pb-[72px] max-md:pb-0 max-sm:hidden",
        className,
      )}
    >
      <div
        className={cn(
          "contents text-[10rem] leading-none font-bold",
          "max-xl:text-[5rem]",
        )}
      >
        <div className="flex overflow-hidden text-center">
          {CONTENTS.slice(0, 2).map(
            ({ word, srcPosition, activeKey, src }, idx) => {
              return (
                <Fragment key={activeKey}>
                  {word.split("").map((w, idx) => (
                    <div
                      className={cn("flex items-center")}
                      key={`${word}-${w}-${idx + 1}`}
                      onMouseEnter={handleMouseEnter(activeKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span
                        className={styleMap.word}
                        key={`word1-${w}-${idx + 1}`}
                      >
                        {w}
                      </span>
                      <div
                        className={cn(
                          "video-container",
                          styleMap.base,
                          "unvisible w-0 scale-0",
                          idx === srcPosition &&
                            currentTurn?.name === activeKey &&
                            "visible mx-1 w-[150px] scale-100 opacity-100 hover:opacity-100 max-xl:w-[80px] max-md:w-[45px]",
                        )}
                      >
                        <Image alt="" fill priority src={src} />
                      </div>
                    </div>
                  ))}
                  {idx === 0 && (
                    <span className={cn("w-[42px]", "max-md:w-[20px]")} />
                  )}
                </Fragment>
              );
            },
          )}
        </div>
        <div className="h-[12px]" />
        <div className="flex items-center overflow-hidden text-center">
          {CONTENTS.slice(2, CONTENTS.length).map(
            ({ word, src, activeKey, srcPosition }, idx) => {
              return (
                <Fragment key={activeKey}>
                  {word.split("").map((w, idx) => (
                    <div
                      className={cn("flex items-center")}
                      key={`${word}-${w}-${idx + 1}`}
                      onMouseEnter={handleMouseEnter(activeKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className={styleMap.word}>{w}</span>
                      <div
                        className={cn(
                          "video-container",
                          styleMap.base,
                          "unvisible w-0 scale-0",
                          idx === srcPosition &&
                            currentTurn?.name === activeKey &&
                            "visible mx-1 w-[150px] scale-100 opacity-100 hover:opacity-100 max-xl:w-[80px] max-md:w-[45px]",
                        )}
                      >
                        <Image alt="" fill priority src={src} />
                      </div>
                    </div>
                  ))}
                  {idx === 0 && (
                    <span className={cn("w-[42px]", "max-md:w-[20px]")} />
                  )}
                </Fragment>
              );
            },
          )}
        </div>
      </div>
      <a
        className={cn(
          "flex items-center justify-center",
          "h-[54px] w-[54px] rounded-full bg-black",
          "absolute bottom-0 mb-[155px]",
          "max-md:mb-[60px] max-md:h-[40px] max-md:w-[40px]",
        )}
        href="#contact-us"
      >
        <ChevronDown className={cn("text-white")} height={24} width={24} />
      </a>
    </Section>
  );
}
