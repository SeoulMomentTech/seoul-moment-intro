import Image from "next/image";
import { useRef } from "react";

import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/utils/style";

import "swiper/css";

const images = [
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753543300/feeling1_lrmexf.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541821/feeling4_j6gfek.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541821/feeling2_tss05c.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753542066/feeling5_sbs6kq.png",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541963/feeling3_n4ushn.png",
];

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
      loopAdditionalSlides={1}
      ref={swiperRef}
      slidesPerView="auto"
      spaceBetween={16}
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
                className="rounded-[18px]"
                fill
                objectFit="cover"
                src={img}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
