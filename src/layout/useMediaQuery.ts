import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [mq, setMq] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeScreen: false,
  });

  useEffect(() => {
    const listener = () => {
      const width = window.innerWidth;

      setMq({
        isMobile: width < 768,
        isTablet: width >= 768,
        isDesktop: width >= 1024,
        isLargeScreen: width >= 1440,
      });
    };

    document.body.addEventListener("resize", listener);
    listener();
    return () => {
      document.body.removeEventListener("resize", listener);
    };
  }, []);

  return mq;
};
