import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./themes.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
  fontSize: process.env.STORYBOOK === "true" ? "inherit" : "62.5%",
  margin: "0",
  padding: 0,
  backgroundColor: theme.color.bg,
});

globalStyle("html", {
  overflowY: "scroll",
  scrollBehavior: "smooth",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  scrollSnapType: "y mandatory",

  height: "100%",
});

globalStyle("input, textarea", {
  outline: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
});

globalStyle("button", {
  border: "none",
  background: "none",
  font: "inherit",
  cursor: "pointer",
});

globalStyle("textarea", {
  resize: "none",
});
