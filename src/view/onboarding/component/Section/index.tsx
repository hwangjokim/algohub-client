"use client";
import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Sections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const totalSections = sections.length;
    let currentSection = 0;
    let isScroll = false;
    const sectionScroll = (event: WheelEvent) => {
      if (isScroll) return;
      isScroll = true;
      if (event.deltaY > 0) {
        if (currentSection < totalSections - 1) {
          const position = sections[++currentSection].offsetTop;
          window.scrollTo({
            top: position,
          });
        }
      } else if (currentSection > 0) {
        const position = sections[--currentSection].offsetTop;
        window.scrollTo({
          top: position,
        });
      }
      isScroll = false;
      return;
    };

    window.addEventListener("wheel", sectionScroll);
    return () => {
      window.removeEventListener("wheel", sectionScroll);
    };
  }, []);
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
};

export default Sections;
