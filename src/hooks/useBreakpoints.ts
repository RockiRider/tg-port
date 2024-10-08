import { useState, useEffect, useMemo } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useBreakpoints() {
  const [windowState, setWindowState] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    setWindowState(true);
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return useMemo(() => {
    if (windowDimensions === null) {
      return {
        dimensions: { width: 0, height: 0 },
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
        is2xl: false,
        isMobile: false,
        isWindow: windowState,
      };
    }

    const isSm = windowDimensions.width < 640;
    const isMd = windowDimensions.width >= 640 && windowDimensions.width < 768;
    const isLg = windowDimensions.width >= 768 && windowDimensions.width < 1024;
    const isXl =
      windowDimensions.width >= 1024 && windowDimensions.width < 1280;
    const is2xl = windowDimensions.width >= 1280;

    return {
      dimensions: windowDimensions,
      isSm,
      isMd,
      isLg,
      isXl,
      is2xl,
      isMobile: isSm || isMd,
      isWindow: windowState,
    };
  }, [windowState, windowDimensions]);
}
