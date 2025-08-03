import { useEffect, useRef, type ComponentProps } from "react";
import { cn } from "@/utils/style";

interface VideoProps extends ComponentProps<"video"> {
  active?: boolean;
}

export default function Video({
  className,
  children,
  active,
  ...props
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (active) {
      video.play().catch((e) => {
        console.warn("Video play failed", e);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resumeVideo = () => {
      if (active && video.paused) {
        video.play().catch((e) => {
          console.warn("⚠️ Video resume failed (focus)", e);
        });
      }
    };

    document.addEventListener("visibilitychange", resumeVideo);
    window.addEventListener("focus", resumeVideo);

    return () => {
      document.removeEventListener("visibilitychange", resumeVideo);
      window.removeEventListener("focus", resumeVideo);
    };
  }, [active]);

  return (
    <video className={cn(className)} ref={videoRef} {...props}>
      {children}
    </video>
  );
}
