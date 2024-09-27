import { useEffect, useRef } from "react";
import { fadeInStyle } from "../component/Section/index.css";

export const useFadeIn = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          imageRef.current?.classList.add(fadeInStyle);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return imageRef;
}