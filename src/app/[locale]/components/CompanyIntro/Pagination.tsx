import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/style";
import ProgressBar from "./ProgressBar";

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
        "max-sm:w-[363px] max-sm:flex-col-reverse max-sm:items-start max-sm:gap-[90px]",
      )}
    >
      <div className={cn("flex items-center gap-[20px]", "max-sm:w-full")}>
        <span className="text-[12px]">
          <b>{currentPage} /</b> {total}
        </span>
        <ProgressBar className={cn("max-sm:flex-1")} progress={progress} />
      </div>
      <div className="flex justify-end gap-[10px]">
        <button
          className={cn(
            "h-[40px] w-[40px] rounded-[4px] border border-white",
            "flex cursor-pointer items-center justify-center",
          )}
          onClick={handlePrev}
          type="button"
        >
          <ArrowLeft height={24} width={24} />
        </button>
        <button
          className={cn(
            "h-[40px] w-[40px] rounded-[4px] border border-white text-white",
            "flex cursor-pointer items-center justify-center",
          )}
          onClick={handleNext}
          type="button"
        >
          <ArrowRight height={24} width={24} />
        </button>
      </div>
    </div>
  );
}
