import type { ReactNode } from "react";
import { cn } from "@/utils/style";

interface CardProps {
  title: ReactNode;
  subTitle?: ReactNode;
  description: ReactNode;
}

export default function Card({ title, subTitle, description }: CardProps) {
  return (
    <div className={cn("flex justify-end", "max-sm:justify-center")}>
      {/* min-h keeps the fade crossing between slides from resizing the column. */}
      <div
        className={cn(
          "flex w-[363px] flex-col justify-end text-white",
          "min-h-[280px] max-sm:min-h-[240px] max-sm:w-full",
        )}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[12px]">
            <h3 className={cn("text-[20px] font-bold", "max-md:text-[19px]")}>
              {title}
            </h3>
            {subTitle && (
              <p
                className={cn(
                  "text-[16px] text-white/70",
                  "max-md:text-[14px]",
                )}
              >
                {subTitle}
              </p>
            )}
          </div>
          <p className={cn("text-[18px] break-keep", "max-md:text-[16px]")}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
