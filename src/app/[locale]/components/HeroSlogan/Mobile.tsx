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

// One type size drives the whole composition; every offset below is in em, so
// the staggered column keeps its proportions on any handset.
const TYPE = "text-[clamp(3.125rem,13vw,3.5rem)]";

const lines = [
  { shiftOn: "odd", shifted: "-3em", gapAfter: "0.4em" },
  { shiftOn: "even", shifted: "-3em", gapAfter: "0.6em" },
  { shiftOn: "odd", shifted: "-2.4em", gapAfter: "0.4em" },
  { shiftOn: "even", shifted: "-3.2em", gapAfter: "0" },
] as const;

const imagePlacements = [
  "top-[-1.3em] left-0",
  "right-[-0.6em] bottom-[-2.7em]",
  "top-[-1.3em] left-0",
  "right-[-0.6em] bottom-[-2.7em]",
];

export default function MobileHeroSlogan({ className }: Props) {
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
    duration: 2500,
    callback: () => {
      if (isPaused) return;

      const nextTurn = ((currentTurn?.index ?? 4) + 1) % 4;

      setCurrentTurn({ index: nextTurn, name: turns[nextTurn] });
    },
    pause: isPaused || prefersReducedMotion,
  });

  return (
    <Section
      className={cn(
        "section-one hidden flex-col items-center pt-[145px]",
        "relative px-[20px] pb-[72px] max-sm:flex",
        className,
      )}
      ref={sectionRef}
    >
      <div className="relative">
        <TextContainer turn={currentTurn} />
        <ImageBox images={CONTENTS.map(({ src }) => src)} turn={currentTurn} />
      </div>
      <a
        aria-label="Skip to the contact section"
        className={cn(
          "flex items-center justify-center",
          "h-[40px] w-[40px] rounded-full bg-black text-white",
          "absolute bottom-0 mb-[60px]",
        )}
        href="#contact-us"
      >
        <ChevronDown aria-hidden height={22} width={22} />
      </a>
    </Section>
  );
}

interface ImageBoxProps extends Record<"turn", Turn | null> {
  images: string[];
}

function ImageBox({ turn, images }: ImageBoxProps) {
  return (
    <>
      {images.map((src, idx) => (
        <div
          className={cn(
            "absolute z-0 overflow-hidden rounded-[0.16em]",
            "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            TYPE,
            "h-[0.4em] w-[0.4em] scale-0",
            imagePlacements[idx],
            turn?.index === idx && "h-[3.2em] w-[3.2em] scale-100",
          )}
          key={src}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            sizes="200px"
            src={src}
          />
        </div>
      ))}
    </>
  );
}

function TextContainer({ turn }: Record<"turn", Turn | null>) {
  return (
    <div
      className={cn(
        "relative z-1 flex w-[6.4em] flex-col justify-center",
        TYPE,
        "leading-none font-bold",
      )}
    >
      {CONTENTS.map(({ word, activeKey }, lineIdx) => {
        const line = lines[lineIdx];
        const isShifted =
          turn != null &&
          (line.shiftOn === "odd"
            ? turn.index % 2 === 1
            : turn.index % 2 === 0);

        return (
          <Fragment key={activeKey}>
            <div
              className={cn(
                "slogan-line flex w-full items-center justify-end gap-[0.2em] overflow-hidden",
                "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              )}
              style={{
                transform: `translateX(${isShifted ? line.shifted : "-0.4em"})`,
              }}
            >
              {word.split("").map((w, idx) => (
                <span
                  className="slogan-letter inline-block"
                  key={`${word}-${w}-${idx + 1}`}
                >
                  {w}
                </span>
              ))}
            </div>
            {line.gapAfter !== "0" && (
              <div aria-hidden style={{ height: line.gapAfter }} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
