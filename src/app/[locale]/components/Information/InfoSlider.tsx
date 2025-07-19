import { useCallback, useId, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import { cn } from "@/utils/style";
import InfoBox from "./InfoBox";

import "swiper/css";
import "swiper/css/pagination";

interface InfoType {
  title: string;
  subTitle: string;
  description: string;
  images?: string[];
  linkId?: string;
}

interface InfoSliderProps {
  info: InfoType[];
}

export default function InfoSlider({ info }: InfoSliderProps) {
  const id = useId();
  const [activeIdx, setActiveIdx] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperRef["swiper"]) => {
    setActiveIdx(swiper.realIndex);
  }, []);

  return (
    <div className="w-full flex-col max-sm:flex sm:hidden">
      <div className="mb-[20px] flex justify-end gap-[8px]">
        {info.map(({ linkId }, idx) => (
          <Bullet active={activeIdx === idx} key={`${id}-bullet-${linkId}`} />
        ))}
      </div>
      <Swiper
        autoplay={{ delay: 5000 }}
        className="h-full w-full flex-1"
        initialSlide={0}
        loop
        modules={[Autoplay]}
        onSlideChange={handleSlideChange}
        slidesPerView="auto"
      >
        {info.map((data) => (
          <SwiperSlide className="h-full" key={`${id}-${data.linkId}`}>
            <InfoBox {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

interface BulletProps {
  className?: string;
  active?: boolean;
}

function Bullet({ className, active }: BulletProps) {
  return (
    <div
      className={cn(
        "h-[8px] w-[8px] rounded-full bg-black/20",
        active && "bg-black",
        className,
      )}
    />
  );
}
