import type { ComponentProps } from "react";
import { cn } from "@/utils/style";

export default function Section({
  children,
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("h-dvh w-full", className)} {...props}>
      {children}
    </section>
  );
}
