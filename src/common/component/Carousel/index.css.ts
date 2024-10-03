import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const carouselStyle = style({
  position: "relative",

  width: "100%",
  height: "max-content",
});

export const sliderWrapperStyle = style({
  position: "relative",

  overflowX: "scroll",
  scrollBehavior: "smooth",
  scrollSnapType: "x mandatory",

  display: "flex",

  width: "100%",
  height: "100%",
});

export const itemStyle = style({
  width: "max-content",
  height: "30rem",

  scrollSnapAlign: "start",

  flexShrink: 0,
});

export const arrowStyle = recipe({
  base: {
    position: "absolute",
    top: 0,
    bottom: 0,

    margin: "auto 0",

    width: "3.2rem",
    height: "3.2rem",

    zIndex: theme.zIndex.middle,

    border: "none",
    borderRadius: "16px",

    background: "rgb(255,255,255,0.3)",

    cursor: "pointer",
  },
  variants: {
    position: {
      left: {
        left: "1.6rem",
      },
      right: {
        right: "1.6rem",
      },
    },
  },
});
