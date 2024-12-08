import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // For most browsers
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For other browsers
  }, [pathname]); // Run effect when the pathname changes

  return null;
};

export default ScrollToTop;
