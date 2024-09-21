import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "fixed",
  bottom: "60px",
  left: 0,
  right: 0,
  margin: "0 auto",

  display: "flex",
  justifyContent: "center",

  width: "100vw",

  zIndex: theme.zIndex.top,
});

export const toastStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",

  padding: "16.5px 66px 16.5px 36px",

  backgroundColor: theme.color.mg4,

  borderRadius: "8px",
  border: "none",
});

export const textStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,

  zIndex: 10,
});
