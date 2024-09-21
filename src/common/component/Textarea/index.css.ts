import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = recipe({
  base: {
    display: "flex",
    height: "7.4rem",
    gap: "0.2rem",
  },
  variants: {
    errorPosition: {
      top: {
        flexDirection: "column-reverse",
      },
      bottom: {
        flexDirection: "column",
      },
    },
  },
});

export const wrapperStyle = recipe({
  base: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    justifyContent: "center",

    width: "100%",
    height: "100%",
    padding: "1rem 1.6rem",
    border: "1px solid transparent",
    borderRadius: "0.5rem",
    outline: "none",
    boxSizing: "border-box",

    backgroundColor: theme.color.mg5,

    ":focus-within": {
      border: `1px solid ${theme.color.purple}`,
    },
  },

  variants: {
    isError: {
      true: {
        border: `1px solid ${theme.color.red}`,
      },
    },
  },
});

export const textareaStyle = style({
  overflow: "hidden",

  width: "100%",
  height: "100%",
  border: "none",

  backgroundColor: "transparent",

  ...theme.font.Caption3_M_12,

  color: theme.color.white,
  "::placeholder": {
    color: theme.color.mg4,
  },
});

export const barStyle = style({
  display: "none",
  height: "1.4rem",
  border: `0.5px solid ${theme.color.purple}`,
  selectors: {
    [`&:has(+ ${textareaStyle}:focus)`]: {
      display: "block",
    },
  },
});
