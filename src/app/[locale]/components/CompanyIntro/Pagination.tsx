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
    <div className="flex items-center justify-end gap-[20px] pt-[60px] text-white">
      <div className="flex items-center gap-[20px]">
        <span className="text-[12px]">
          {currentPage} / {total}
        </span>
        <ProgressBar progress={progress} />
      </div>
      <div className="flex justify-end gap-[10px]">
        <button
          className={cn(
            "h-[40px] w-[40px] rounded-[12px] border border-white",
            "flex cursor-pointer items-center justify-center",
          )}
          onClick={handlePrev}
          type="button"
        >
          <ArrowLeft />
        </button>
        <button
          className={cn(
            "h-[40px] w-[40px] rounded-[12px] border border-white text-white",
            "flex cursor-pointer items-center justify-center",
          )}
          onClick={handleNext}
          type="button"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
