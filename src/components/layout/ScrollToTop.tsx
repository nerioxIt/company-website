import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Use "instant" instead of "smooth" for immediate scrolling
    });
  }, [pathname]);

  return null;
};
