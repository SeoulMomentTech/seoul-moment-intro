import { useEffect, useRef } from "react";

interface UseIntervalProps {
  duration?: number;
  pause?: boolean;
  callback(): void;
}

const useInterval = ({
  duration,
  callback,
  pause = false,
}: UseIntervalProps) => {
  const timeRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (pause && timeRef.current) {
      clearInterval(timeRef.current);
      return;
    }

    timeRef.current = setInterval(() => {
      callback();
    }, duration ?? 1000);

    return () => {
      if (timeRef.current) clearInterval(timeRef.current);
    };
  }, [callback, duration, pause]);
};

export default useInterval;
