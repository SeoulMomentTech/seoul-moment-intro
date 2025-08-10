"use client";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";
import InfoBox from "./InfoBox";
import InfoSlider from "./InfoSlider";
import SideBar from "./SideBar";

const info = [
  {
    title: "scrollInfo.1.title",
    subTitle: "scrollInfo.1.subtitle",
    description: "scrollInfo.1.description",
    images: [
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1754316746/junko-nakase-Q-72wa9-7Dg-unsplash_2_ksgnvu.jpg",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541286/belief2_ykbaxc.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541320/belief3_c3n1bi.png",
    ],
    linkId: "link1",
  },
  {
    title: "scrollInfo.2.title",
    subTitle: "scrollInfo.2.subtitle",
    description: "scrollInfo.2.description",
    images: [
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541414/style1_bwkm5z.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541419/style2_nkbngi.png",
      "https://res.cloudinary.com/dumqfde1s/image/upload/v1753541429/style3_dlo1uz.png",
    ],
    linkId: "link2",
  },
  {
    title: "scrollInfo.3.title",
    subTitle: "scrollInfo.3.subtitle",
    description: "scrollInfo.3.description",
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
