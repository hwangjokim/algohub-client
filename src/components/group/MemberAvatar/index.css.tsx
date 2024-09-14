import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const iconStyle = style({
  zIndex: theme.zIndex.bottom,
  position: "absolute",
  right: "0.2rem",
  bottom: 0,

  width: "0.9rem",
  height: "1.3rem",

  opacity: 0.7,
});
