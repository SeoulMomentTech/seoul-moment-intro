import { cn } from "@/utils/style";

interface ProgressBarProps {
  className?: string;
  progress: number;
}

const styleMap = {
  base: "relative w-[203px] h-[1px] bg-white/50",
};

export default function ProgressBar({ className, progress }: ProgressBarProps) {
  return (
    <div className={cn(styleMap.base, className)}>
      <div
        className="absolute top-0 left-0 inline h-full w-[var(--width)] bg-white"
        style={{ "--width": `${progress * 100}%` }}
      />
    </div>
  );
}
