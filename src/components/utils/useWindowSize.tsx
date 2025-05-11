'use client';

import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
       window.addEventListener("resize", handleResize);
       handleResize(); // Call once on mount
    }


    return () => {
       if (typeof window !== 'undefined') {
         window.removeEventListener("resize", handleResize);
       }
    };
  }, []);

  return windowSize;
};