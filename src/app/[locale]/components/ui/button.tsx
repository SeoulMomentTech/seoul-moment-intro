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
        "disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-black/40",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
