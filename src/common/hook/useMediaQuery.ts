import { type DependencyList, useEffect, useState } from "react";

type CallbackByDevice = {
  mobile?: () => void;
  tablet?: () => void;
  desktop?: () => void;
};

const DEVICE_QUERY = {
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 640px) and (max-width: 1024px)",
  desktop: "(min-width: 1024px)",
};

export const useMediaQuery = (
  { mobile, tablet, desktop }: CallbackByDevice,
  dependencies?: DependencyList,
) => {
  const [matches, setMatches] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  const handleMatch = () => {
    const isMobile = window.matchMedia(DEVICE_QUERY.mobile);
    const isTablet = window.matchMedia(DEVICE_QUERY.tablet);
    const isDesktop = window.matchMedia(DEVICE_QUERY.desktop);

    setMatches({
      mobile: isMobile.matches,
      tablet: isTablet.matches,
      desktop: isDesktop.matches,
    });

    isMobile.matches && mobile?.();
    isTablet.matches && tablet?.();
    isDesktop.matches && desktop?.();
  };

  useEffect(() => {
    window.addEventListener("resize", handleMatch);

    return () => {
      window.removeEventListener("resize", handleMatch);
    };
  }, dependencies);

  return {
    isMobile: matches.mobile,
    isTablet: matches.tablet,
    isDesktop: matches.desktop,
  };
};
