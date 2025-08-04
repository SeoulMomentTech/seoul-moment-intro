"use client";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";
import InfoBox from "./InfoBox";
import InfoSlider from "./InfoSlider";
import SideBar from "./SideBar";

const info = [
  {
    title: "서울 모먼트의 철학, Brand Story & Quality",
    subTitle: `“Trend Magazine = Seoul Life Style X Taiwan”`,
    description:
      "한국의 트렌디한 패션, 뷰티, 라이프 스타일을 경험하고, 브랜드 스토리를 효과적이고 빠르게 전달 할 수 있는 글로벌 감성 플랫폼.",
    images: [
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1754316746/junko-nakase-Q-72wa9-7Dg-unsplash_2_ksgnvu.jpg",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541286/belief2_ykbaxc.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541320/belief3_c3n1bi.png",
    ],
    linkId: "link1",
  },
  {
    title: "다양한 느낌과 다양한 상품",
    subTitle: `“나에게 필요한, 나를 위한 상품들”`,
    description:
      "남을 따라가는것이 아닌, 일상 속 자신만의 트렌드를 만들어가는 스토리텔링 커머스 플렛폼.",
    images: [
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541414/style1_bwkm5z.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541419/style2_nkbngi.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541429/style3_dlo1uz.png",
    ],
    linkId: "link2",
  },
  {
    title: "Everyday, Connect with Seoul.",
    subTitle: `“한국에서 대만 전국 오프라인 매장으로"`,
    description:
      "대만 고객들에게 더욱 가깝게 브랜드를 만나 볼 수 있고, 새로운 기회와 경험을 만들어 갑니다.",
    images: [
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541506/seoul1_ajfr2g.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541508/seoul2_cbihvo.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541514/seoul3_vfc2f9.png",
    ],
    linkId: "link3",
  },
];

export default function Information() {
  return (
    <Section
      className={cn(
        "relative",
        "mx-auto max-w-[1920px] py-[100px] pr-[140px] pl-[40px]",
        "flex h-auto justify-center gap-[8px]",
        "max-lg:px-[40px]",
        "max-md:px-[20px]",
      )}
    >
      <SideBar />
      <div className={cn("flex flex-1 flex-col gap-[120px]", "max-sm:hidden")}>
        {info.map((data) => (
          <InfoBox key={data.linkId} {...data} />
        ))}
      </div>
      <InfoSlider info={info} />
    </Section>
  );
}
