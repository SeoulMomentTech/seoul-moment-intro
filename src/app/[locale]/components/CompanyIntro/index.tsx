"use client";

import { useTranslations } from "next-intl";
import { useCallback, useId, useRef, useState } from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Trans from "@/components/Trans";
import Section from "@/components/ui/section";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/style";
import Card from "./Card";
import Pagination from "./Pagination";
import Video from "./Video";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const info = [
  {
    title1: "The Essence of Seoul",
    description1: "info1-description",
    title2: "Your style, told the Seoul way.",
    subTitle2: "",
    description2: (
      <>
        &quot;
        <Trans id="info1-description-line1" />
        &quot;
        <br />
        <Trans id="info1-description-line2" />
      </>
    ),
    videoWeb:
      "https://res.cloudinary.com/dumqfde1s/video/upload/v1754223651/korea_web_kshxak.mp4",
    videoMobile:
      "https://res.cloudinary.com/dumqfde1s/video/upload/v1754223637/korea_mb_u0yinb.mp4",
  },
  {
    title1: "Seoul x Taiwan: A Shared Rhythm",
    description1: "info2-description",
    title2: "Different tones, same rhythm.",
    subTitle2: "",
    description2: (
      <>
        &quot;
        <Trans id="info2-description-line1" />
        &quot;
        <br />
        <Trans id="info2-description-line2" />
      </>
    ),
    videoWeb:
      "https://res.cloudinary.com/dumqfde1s/video/upload/v1754223697/taiwan_web_ge8q0h.mp4",
    videoMobile:
      "https://res.cloudinary.com/dumqfde1s/video/upload/v1754223678/taiwan_mb_leu0yk.mp4",
  },
  {
    title1: "Who We Are",
    description1: "info3-description",
    title2: "Inside Seoul Moment",
    subTitle2: "",
    description2: (
      <>
        &quot;
        <Trans id="info3-description-line1" />
        &quot;
        <br />
        <Trans id="info3-description-line2" />
      </>
    ),
    videoWeb:
      "https://res.cloudinary.com/dumqfde1s/video/upload/v1754223625/intro_gnid8x.mp4",
    videoMobile:
      "https://res.cloudinary.com/dumqfde1s/video/upload/v1754290659/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%88%8F%EB%8F%99%EC%98%81%EC%83%81_fv9jdh.mp4",
  },
];

function CompanyIntro() {
  const t = useTranslations();
  const id = useId();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery("(max-width: 48rem)", false);

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
    <Section
      className={cn(
        "company-intro relative bg-black",
        "h-[1080px] max-md:h-full",
      )}
    >
      {info.map(({ videoWeb, videoMobile }, idx) => {
        return (
          <Video
            active={idx === activeIdx}
            autoPlay
            className={cn(
              "absolute h-full w-full scale-90 object-cover opacity-0 transition-all duration-500",
              idx === activeIdx && "scale-100 opacity-45",
            )}
            key={`${id}-${idx + 1}-company-intro-${isMobile ? "mobile" : "web"}`}
            loop
            muted
            playsInline
            preload="metadata"
            src={isMobile ? videoMobile : videoWeb}
          />
        );
      })}
      <div
        className={cn(
          "relative",
          "mx-auto max-w-[1200px] pt-[140px]",
          "max-xl:px-[20px]",
          "max-md:pt-[90px] max-md:pb-[60px]",
        )}
      >
        <div
          className={cn(
            "h-[81px]",
            "max-sm:flex max-sm:h-[44px] max-sm:flex-col max-sm:gap-[10px]",
          )}
        >
          <h2
            className={cn(
              "text-[36px] font-bold text-white",
              "leading-[100%] max-md:text-[20px]",
            )}
          >
            {info[activeIdx].title1}
          </h2>
          <p className={cn("text-[18px] text-gray-200", "max-md:text-[14px]")}>
            {t(info[activeIdx].description1)}
          </p>
        </div>
        <Swiper
          autoplay={{ delay: 7000 }}
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
                description={item.description2}
                subTitle={item.subTitle2}
                title={item.title2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={cn("flex justify-end", "max-sm:justify-center")}>
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
