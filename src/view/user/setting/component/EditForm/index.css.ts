import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  borderRadius: "1rem",
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  width: "34rem",
});

export const labelStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.wg
})