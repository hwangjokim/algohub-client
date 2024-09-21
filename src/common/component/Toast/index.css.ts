import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "fixed",
  bottom: "60px",
  left: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",

  width: "100vw",

  zIndex: theme.zIndex.top,
});

export const toastStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",

  maxWidth: "400px",

  padding: "16.5px 66px 16.5px 46px",

  backgroundColor: theme.color.mg4,

  borderRadius: "8px",
  border: "none",
});

export const textStyle = style({
  ...theme.font.Title1_SB_16,
  color: theme.color.white,

  zIndex: 10,
});
