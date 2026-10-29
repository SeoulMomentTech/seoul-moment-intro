import { cn } from "@/utils/style";

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-[4px] bg-black text-white",
        "transition-[background-color,color,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:bg-black/80 focus-visible:outline-black active:scale-[0.98]",
        "disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-black/40",
        "disabled:hover:bg-black/10 disabled:active:scale-100",
        "px-[20px] py-[16px]",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
