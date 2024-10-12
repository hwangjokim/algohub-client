import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "2.4rem",
  marginBottom: "0.6rem",
  width: "100%",

  borderRadius: "8px",
  background: theme.color.mg5,
});

export const nameStyle = style({
  paddingTop: "2rem",
  color: theme.color.purple,
  ...theme.font.Title1_SB_16,
});

export const dateStyle = style({
  display: "flex",
  gap: "0.4rem",

  color: theme.color.mg1,
  ...theme.font.Caption1_R_12,
});

export const descStyle = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  overflow: "hidden",

  paddingTop: "0.8rem",

  color: theme.color.mg3,
  ...theme.font.Caption1_R_12,
});
