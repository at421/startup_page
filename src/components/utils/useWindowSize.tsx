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

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);

      handleResize();
    }


    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowSize;
};