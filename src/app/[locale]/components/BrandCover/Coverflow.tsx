import Image from "next/image";
import { useRef } from "react";
import { EffectCoverflow } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/utils/style";

import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample-4.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample-5.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample-3.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/cld-sample.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226611/samples/coffee.jpg",
];

export default function Coverflow() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleClick = (index: number) => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;
    swiper.slideToLoop(index, 750);
  };

  return (
    <div className="cover-flow">
      <Swiper
        centeredSlides
        className="w-full"
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
      >
        {[...images, ...images].map((img, index) => {
          return (
            <SwiperSlide
              className={cn(
                "mx-[10px] min-h-[400px]! w-[30vw]!",
                "max-md:min-h-[200px]! max-md:w-[40vw]!",
              )}
              key={`card-${index + 1}`}
              onClick={() => handleClick(index)}
            >
              <div
                className={cn(
                  "relative min-h-[260px]! w-[30vw]! cursor-pointer",
                  "max-md:min-h-[200px]! max-md:w-[40vw]!",
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
    </div>
  );
}
