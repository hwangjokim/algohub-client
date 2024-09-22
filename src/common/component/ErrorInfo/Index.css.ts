import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const errorWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const errorIconStyle = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const errorMsgStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.error,
});
