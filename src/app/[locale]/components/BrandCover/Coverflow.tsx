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
      coverflowEffect={{
        rotate: 0,
        depth: 200,
        stretch: -45,
        modifier: 1,
        slideShadows: false,
      }}
      effect="coverflow"
      loop
      loopAdditionalSlides={1}
      modules={[EffectCoverflow]}
      ref={swiperRef}
      slidesPerView="auto"
      updateOnWindowResize
    >
      {[...images, ...images].map((img, index) => {
        return (
          <SwiperSlide
            className={cn(
              "mx-[10px] min-h-[400px]! w-[720px]! max-2xl:w-[30vw]!",
              "max-md:min-h-[200px]! max-md:w-[40vw]!",
            )}
            key={`card-${index + 1}`}
            onClick={() => handleClick(index)}
          >
            <div
              className={cn(
                "relative min-h-[260px]! cursor-pointer max-2xl:w-[30vw]!",
                "max-md:min-h-[200px]! max-md:w-[40vw]!",
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
