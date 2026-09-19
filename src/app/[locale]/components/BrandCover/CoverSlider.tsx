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
      loopAdditionalSlides={3}
      ref={swiperRef}
      slidesOffsetBefore={20}
      slidesPerView="auto"
      spaceBetween={16}
      updateOnWindowResize
    >
      {images.map((img, index) => (
        <SwiperSlide
          className={cn("w-[190px]!")}
          key={img}
          onClick={() => handleClick(index)}
        >
          <button
            aria-label={`Show image ${index + 1} of ${images.length}`}
            className="relative block aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-[18px]"
            type="button"
          >
            <Image
              alt=""
              className="object-cover"
              fill
              priority={index < 2}
              sizes="190px"
              src={img}
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
