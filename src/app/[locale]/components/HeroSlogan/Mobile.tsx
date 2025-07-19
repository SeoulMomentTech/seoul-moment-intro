"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";
import Section from "@/components/ui/section";
import useInterval from "@/hooks/useInterval";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

interface Turn {
  index: number;
  name: string;
}

const turns = ["make", "your", "here", "seoul"];

const CONTENTS = [
  {
    word: "MAKE",
    activeKey: "make",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/samples/dessert-on-a-plate.jpg",
  },
  {
    word: "YOUR",
    activeKey: "your",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226610/samples/man-on-a-escalator.jpg",
  },
  {
    word: "SEOUL",
    activeKey: "seoul",
    srcPosition: 4,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/samples/dessert-on-a-plate.jpg",
  },
  {
    word: "HERE",
    activeKey: "here",
    srcPosition: 1,
    src: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226610/samples/chair-and-coffee-table.jpg",
  },
];

const styleMap = {
  word: "inline-block max-md:text-[50px]",
  image: "absolute h-[150px] rounded-lg ",
};

export default function MobileHeroSlogan({ className }: Props) {
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
    duration: 2500,
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

  return (
    <Section
      className={cn(
        "section-one hidden flex-col items-center pt-[145px]",
        "relative px-[20px] pb-[72px] max-md:pb-0 max-sm:flex",
        className,
      )}
    >
      <div className="relative">
        <TextContainer turn={currentTurn} />
        <ImageBox images={CONTENTS.map(({ src }) => src)} turn={currentTurn} />
      </div>
      <div
        className={cn(
          "flex items-center justify-center",
          "h-[54px] w-[54px] rounded-full bg-black",
          "absolute bottom-0 mb-[155px]",
          "max-md:mb-[60px] max-md:h-[40px] max-md:w-[40px]",
        )}
      >
        <ChevronDown className={cn("text-white")} height={24} width={24} />
      </div>
    </Section>
  );
}

interface ImageBoxProps extends Record<"turn", Turn | null> {
  images: string[];
}

function ImageBox({ turn, images }: ImageBoxProps) {
  return (
    <>
      <div
        className={cn(
          "video-container overflow-hidden transition-all duration-700",
          "unvisible absolute top-[-65px] z-0 h-[20px] w-[20px] scale-0 rounded-[8px]",
          turn?.index === 0 &&
            "visible mx-1 h-[160px] w-[160px] scale-100 opacity-100 hover:opacity-100",
        )}
      >
        <Image alt="" fill priority src={images[0]} />
      </div>
      <div
        className={cn(
          "video-container overflow-hidden transition-all duration-700",
          "unvisible absolute right-[-30px] bottom-[-135px] z-0 h-[20px] w-[20px] scale-0 rounded-[8px]",
          turn?.index === 1 &&
            "visible mx-1 h-[160px] w-[160px] scale-100 opacity-100 hover:opacity-100",
        )}
      >
        <Image alt="" fill priority src={images[1]} />
      </div>
      <div
        className={cn(
          "video-container overflow-hidden transition-all duration-700",
          "unvisible absolute top-[-65px] z-0 h-[20px] w-[20px] scale-0 rounded-[8px]",
          turn?.index === 2 &&
            "visible mx-1 h-[160px] w-[160px] scale-100 opacity-100 hover:opacity-100",
        )}
      >
        <Image alt="" fill priority src={images[2]} />
      </div>
      <div
        className={cn(
          "video-container overflow-hidden transition-all duration-700",
          "unvisible absolute right-[-30px] bottom-[-135px] z-0 h-[20px] w-[20px] scale-0 rounded-[8px]",
          turn?.index === 3 &&
            "visible mx-1 h-[160px] w-[160px] scale-100 opacity-100 hover:opacity-100",
        )}
      >
        <Image alt="" fill priority src={images[3]} />
      </div>
    </>
  );
}

function TextContainer({ turn }: Record<"turn", Turn | null>) {
  return (
    <div
      className={cn(
        "relative z-1 flex w-[320px] flex-col justify-center",
        "text-[10rem] leading-none font-bold",
        "max-xl:text-[5rem]",
      )}
    >
      <div
        className={cn(
          "inline-flex w-full translate-x-[-20px] justify-end gap-[10px] overflow-hidden text-center transition-transform duration-700",
          turn && turn.index % 2 === 1 && "translate-x-[-150px]",
        )}
      >
        {CONTENTS.slice(0, 1).map(({ word, activeKey }) => {
          return (
            <Fragment key={activeKey}>
              {word.split("").map((w, idx) => (
                <div
                  className={cn("flex items-center")}
                  key={`${word}-${w}-${idx + 1}`}
                >
                  <span className={styleMap.word} key={`word1-${w}-${idx + 1}`}>
                    {w}
                  </span>
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div className="h-[20px]" />
      <div
        className={cn(
          "flex w-full justify-end gap-[10px] overflow-hidden text-center",
          "transition-transform duration-700",
          "translate-x-[-20px]",
          turn && turn.index % 2 === 0 && "translate-x-[-150px]",
        )}
      >
        {CONTENTS.slice(1, 2).map(({ word, activeKey }) => {
          return (
            <Fragment key={activeKey}>
              {word.split("").map((w, idx) => (
                <div
                  className={cn("flex items-center")}
                  key={`${word}-${w}-${idx + 1}`}
                >
                  <span className={styleMap.word} key={`word1-${w}-${idx + 1}`}>
                    {w}
                  </span>
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div className="h-[30px]" />
      <div
        className={cn(
          "flex w-full translate-x-[-20px] items-center justify-end gap-[10px] overflow-hidden text-center",
          "transition-transform duration-700",
          turn && turn.index % 2 === 1 && "translate-x-[-120px]",
        )}
      >
        {CONTENTS.slice(2, CONTENTS.length - 1).map(({ word, activeKey }) => {
          return (
            <Fragment key={activeKey}>
              {word.split("").map((w, idx) => (
                <div
                  className={cn("flex items-center")}
                  key={`${word}-${w}-${idx + 1}`}
                >
                  <span className={styleMap.word}>{w}</span>
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div className="h-[20px]" />
      <div
        className={cn(
          "flex w-full items-center justify-end gap-[10px] overflow-hidden text-center",
          "transition-transform duration-700",
          "translate-x-[-20px]",
          turn && turn.index % 2 === 0 && "translate-x-[-160px]",
        )}
      >
        {CONTENTS.slice(3, CONTENTS.length).map(({ word, activeKey }) => {
          return (
            <Fragment key={activeKey}>
              {word.split("").map((w, idx) => (
                <div
                  className={cn("flex items-center")}
                  key={`${word}-${w}-${idx + 1}`}
                >
                  <span className={styleMap.word}>{w}</span>
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
