import { scrollTheme, theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sectionWrapper = style({
  flex: 1,
  height: "43rem",
});

export const codeStyle = style({
  display: "block",
  overflowY: "scroll",
  height: "43rem",
  
  ...scrollTheme.scrollbar,
});

export const lineStyle = style({
  ...theme.font.Body1_M_14
})