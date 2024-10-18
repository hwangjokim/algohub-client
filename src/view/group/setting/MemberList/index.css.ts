import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const memberListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  width: "80%",
  padding: "4.8rem 4.2rem",
});

export const labelStyle = style({
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});
