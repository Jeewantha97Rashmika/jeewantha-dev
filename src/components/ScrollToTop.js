import { useEffect } from "react";
import { useLocation } from "@reach/router";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
