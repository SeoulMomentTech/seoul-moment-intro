import Image from "next/image";
import { useRef } from "react";

import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/utils/style";

import "swiper/css";

const images = [
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample-4.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample-5.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample-3.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/samples/coffee.jpg",
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
