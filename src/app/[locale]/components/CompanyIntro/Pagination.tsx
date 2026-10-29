import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/style";
import ProgressBar from "./ProgressBar";

const control = cn(
  "flex h-[40px] w-[40px] cursor-pointer items-center justify-center",
  "rounded-[4px] border border-white text-white",
  "transition-[background-color,color,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
  "hover:bg-white hover:text-black focus-visible:outline-white active:scale-[0.98]",
);

interface PaginationProps {
  total: number;
  currentPage: number;
  progress: number;
  handleNext(): void;
  handlePrev(): void;
}

export default function Pagination({
  total,
  currentPage,
  progress,
  handleNext,
  handlePrev,
}: PaginationProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-[20px] pt-[60px] text-white",
        "max-sm:w-full max-sm:flex-col-reverse max-sm:items-start max-sm:gap-[32px]",
      )}
    >
      <div className={cn("flex items-center gap-[20px]", "max-sm:w-full")}>
        <span className="text-[12px] tabular-nums">
          <b>{currentPage} /</b> {total}
        </span>
        <ProgressBar className={cn("max-sm:flex-1")} progress={progress} />
      </div>
      <div className="flex justify-end gap-[10px]">
        <button
          aria-label="Previous slide"
          className={control}
          onClick={handlePrev}
          type="button"
        >
          <ArrowLeft aria-hidden height={24} width={24} />
        </button>
        <button
          aria-label="Next slide"
          className={control}
          onClick={handleNext}
          type="button"
        >
          <ArrowRight aria-hidden height={24} width={24} />
        </button>
      </div>
    </div>
  );
}
