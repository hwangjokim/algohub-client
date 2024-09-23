import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const defaultButtonStyle = style({
  position: "relative",

  width: "2.5rem",
  height: "2.5rem",

  borderRadius: "5rem",

  cursor: "pointer",

  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});