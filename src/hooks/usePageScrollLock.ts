import { useEffect } from "react";

export default function usePageScrollLock(lock: boolean) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (lock) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";  // 元に戻す
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [lock]);
}
