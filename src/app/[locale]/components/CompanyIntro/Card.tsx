import type { ReactNode } from "react";
import { cn } from "@/utils/style";

interface CardProps {
  title: ReactNode;
  subTitle?: ReactNode;
  description: ReactNode;
}

export default function Card({ title, subTitle, description }: CardProps) {
  return (
    <div className="flex justify-end">
      <div
        className={cn(
          "flex min-h-[530px] w-[363px] flex-col justify-end pt-[300px] text-white",
          "max-sm:min-h-[360px]",
        )}
      >
        <div className="flex min-h-[110px] flex-col gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className={cn("text-[20px] font-bold", "max-sm:text-[24px]")}>
              {title}
            </h3>
            {subTitle && (
              <p
                className={cn(
                  "text-[16px] text-gray-200",
                  "max-sm:text-[14px]",
                )}
              >
                {subTitle}
              </p>
            )}
          </div>
          <div className={cn("min-h-auto", "max-sm:min-h-auto")}>
            <p className={cn("text-[18px]", "max-sm:text-[16px]")}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
