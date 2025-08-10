import Image from "next/image";
import { useRef } from "react";

import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/utils/style";
import { images } from ".";

import "swiper/css";

interface CoverSliderProps {
  className?: string;
}

export default function CoverSlider({ className }: CoverSliderProps) {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleClick = (index: number) => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;
    swiper.slideToLoop(index, 750);
  };

  return (
    <Swiper
      className={cn("cover-slider w-full", className)}
      loop
      loopAdditionalSlides={1}
      ref={swiperRef}
      slidesPerView="auto"
      spaceBetween={16}
      updateOnWindowResize
    >
      {[...images, ...images].map((img, index) => {
        return (
          <SwiperSlide
            className={cn("min-h-[280px]! w-[190px]!")}
            key={`card-${index + 1}`}
            onClick={() => handleClick(index)}
          >
            <div
              className={cn(
                "relative min-h-[280px]! w-[190px]! cursor-pointer",
              )}
            >
              <Image
                alt=""
                className="rounded-[18px] object-cover"
                fill
                priority
                src={img}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
