import Image from "next/image";
import { useId } from "react";
import { cn } from "@/utils/style";

interface InfoBoxProps {
  title: string;
  subTitle: string;
  description: string;
  images?: string[];
  linkId?: string;
}

export default function InfoBox({
  title,
  subTitle,
  description,
  linkId,
  images = [],
}: InfoBoxProps) {
  const id = useId();

  return (
    <div
      className={cn(
        "flex scroll-mt-[120px] flex-col gap-[60px]",
        "max-sm:gap-[30px]",
      )}
      id={linkId}
    >
      <div className="flex flex-col gap-[20px] max-sm:gap-[30px]">
        <h2 className="text-[40px] max-lg:text-[36px] max-sm:text-[20px]">
          <b>{title}</b>
        </h2>
        <div className="flex flex-col gap-[10px]">
          <h4>
            <b>{subTitle}</b>
          </h4>
          <p className="max-sm:text-[14px]">{description}</p>
        </div>
      </div>

      <div
        className={cn("flex gap-[20px]", "max-sm:flex-wrap max-sm:gap-[16px]")}
      >
        {images.map((img) => (
          <div
            className={cn(
              "relative aspect-[1/1.2] flex-1",
              "max-sm:h-[208px] max-sm:first:h-[184px]",
              "max-sm:w-[45%] max-sm:first:w-full max-sm:first:flex-auto",
            )}
            key={`${img}-${id}`}
          >
            <Image alt="" className="object-cover" fill src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
