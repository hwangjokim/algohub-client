import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const storyFormStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  padding: "5rem",
  borderRadius: "1rem",
  backgroundColor: theme.color.bg
});

export const storyContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  width: "34rem",
});

export const itemDefaultStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
});

export const labelDefaultStyle = styleVariants({
  default: {
    color: theme.color.wg,
  },
  error: {
    color: theme.color.red
  }
});
