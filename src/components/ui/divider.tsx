import { cn } from "@/utils/style";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return <div className={cn("h-[8px] w-[1px] bg-black/40", className)} />;
}
