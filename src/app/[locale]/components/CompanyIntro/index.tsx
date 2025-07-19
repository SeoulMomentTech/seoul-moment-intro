"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";
import Card from "./Card";
import Pagination from "./Pagination";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const info = [
  {
    title1: "The Essence of Seoul",
    description1: "한국의 다양한 브랜드의 스토리를 그대로 전달합니다.",
    title2: "Your style, told the Seoul way.",
    subTitle2: "",
    description2:
      "현대 아름다움은 결국 자유로운 자신의 모습입니다.서울은 과하지 않고, 자연스러움속에서 감각적인 자신의 모습을 표현하는것에 중점을 둡니다.",
    img: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226610/samples/look-up.jpg",
  },
  {
    title1: "Seoul x Taiwan: A Shared Rhythm",
    description1: "",
    title2: "Different tones, same rhythm.",
    subTitle2: "",
    description2:
      "말하지 않아도, 감각은 통하니까요. 서울과 타이완, 공감으로 이어집니다.",
    img: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226609/samples/balloons.jpg",
  },
  {
    title1: "Who We Are",
    description1: "감각을 나누는 사람들, 그게 우리 팀입니다.",
    title2: "Inside Seoul Moment",
    subTitle2: "사람에서 시작해, 브랜드가 됩니다",
    description2:
      "서울모먼트는 하나의 감각을 완성하기 위해, 각자의 포지션에서 유연하게 움직이는 팀입니다. 경영팀은 방향을 설계하고, 물류팀은 흐름을 이어가며, 개발팀은 그 모든 연결을 가능하게 합니다. 우리는 함께, 브랜드를 넘어 새로운 감각의 경험을 만들어갑니다.",
    img: "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226602/samples/landscapes/girl-urban-view.jpg",
  },
];

function CompanyIntro() {
  const id = useId();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;
    swiper.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;

    swiper.slidePrev();
  };

  const handleSlideChange = useCallback((swiper: SwiperRef["swiper"]) => {
    setActiveIdx(swiper.realIndex);
    setProgress(0);
  }, []);

  return (
    <Section className={cn("company-intro relative bg-black", "h-[1080px]")}>
      {info.map(({ img }, idx) => (
        <Image
          alt=""
          className={cn(
            "scale-90 opacity-0 transition-all duration-500",
            idx === activeIdx && "scale-100 opacity-45",
          )}
          fill
          key={`${id}-${img}-company-intro`}
          objectFit="cover"
          src={img}
        />
      ))}

      <div
        className={cn(
          "relative",
          "mx-auto max-w-[1200px] pt-[140px]",
          "max-xl:px-[20px] max-sm:py-[50px]",
        )}
      >
        <div className="h-[81px]">
          <h2
            className={cn(
              "text-[36px] font-bold text-white",
              "max-md:text-[24px]",
            )}
          >
            {info[activeIdx].title1}
          </h2>
          <p className={cn("text-[18px] text-gray-200", "max-md:text-[16px]")}>
            {info[activeIdx].description1}
          </p>
        </div>
        <Swiper
          autoplay={{ delay: 5000 }}
          className="w-full"
          effect="fade"
          loop
          modules={[EffectFade, Autoplay]}
          onAutoplay={() => setProgress(0)}
          onAutoplayTimeLeft={(_, __, progressFraction) => {
            setProgress(1 - progressFraction);
          }}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          slidesPerView="auto"
          spaceBetween={30}
        >
          {info.map((item, idx) => (
            <SwiperSlide key={`${id}-${idx + 1}`}>
              <Card
                description={`“${item.description2}”`}
                subTitle={item.subTitle2}
                title={item.title2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end">
          <Pagination
            currentPage={activeIdx + 1}
            handleNext={handleNext}
            handlePrev={handlePrev}
            progress={progress}
            total={info.length}
          />
        </div>
      </div>
    </Section>
  );
}

export default CompanyIntro;
