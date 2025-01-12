import { useEffect } from "react";

export const useScrollLock = (isLocked: boolean = true) => {
  useEffect(() => {
    const lock = () => (document.body.style.overflow = "hidden");
    const unlock = () => (document.body.style.overflow = "auto");

    isLocked ? lock() : unlock();

    return () => {
      unlock();
    };
  }, [isLocked]);
};
