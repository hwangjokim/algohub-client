"use client";
import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Sections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    let isScrolling = false;
    console.log({ sections });
    const smoothScroll = (event: WheelEvent) => {
      if (isScrolling) return; // 스크롤 중일 때는 추가 이동을 막음

      isScrolling = true;
      if (event.deltaY > 0) {
        // 아래로 스크롤
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
        }
      } else if (currentSectionIndex > 0) {
        currentSectionIndex--;
      }
      console.log({currentSectionIndex})
      // 해당 섹션으로 스크롤 이동
      sections[currentSectionIndex].scrollIntoView(true);

      // 1초 후에 스크롤 허용
      setTimeout(() => {
        isScrolling = false;
      }, 500); // 스크롤 완료 후 1초 동안 추가 스크롤 방지
    };
    // 스크롤 이벤트 핸들러
    window.addEventListener("wheel", smoothScroll);
    return () => {
      window.removeEventListener("wheel", smoothScroll);
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
