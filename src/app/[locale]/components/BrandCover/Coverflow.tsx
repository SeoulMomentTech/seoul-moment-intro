import Image from "next/image";
import { useRef } from "react";
import { EffectCoverflow } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/utils/style";
import { images } from ".";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface CoverflowProps {
  className?: string;
}

export default function Coverflow({ className }: CoverflowProps) {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleClick = (index: number) => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;
    swiper.slideToLoop(index, 750);
  };

  return (
    <Swiper
      centeredSlides
      className={cn("cover-flow w-full", className)}
      // Depth alone carries the falloff. The previous setup scaled the slide
      // and its child on top of this, which pushed the active image outside
      // its own box and over its neighbours.
      coverflowEffect={{
        rotate: 0,
        depth: 220,
        stretch: 0,
        modifier: 1,
        slideShadows: false,
      }}
      effect="coverflow"
      loop
      loopAdditionalSlides={3}
      modules={[EffectCoverflow]}
      ref={swiperRef}
      slidesPerView="auto"
      spaceBetween={28}
      updateOnWindowResize
    >
      {[...images, ...images].map((img, index) => (
        <SwiperSlide
          key={`${img}-${index + 1}`}
          onClick={() => handleClick(index)}
        >
          <button
            aria-label={`Show image ${(index % images.length) + 1} of ${images.length}`}
            className="relative block h-full w-full cursor-pointer overflow-hidden rounded-[18px]"
            type="button"
          >
            <Image
              alt=""
              className="object-cover"
              fill
              priority={index < 3}
              sizes="(max-width: 768px) 60vw, 30vw"
              src={img}
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
