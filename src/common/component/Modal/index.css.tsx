import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const backgroundStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: theme.zIndex.middle,

  width: "100%",
  height: "100%",

  backgroundColor: theme.color.transparent_black_50,
});

export const dialogStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  margin: "auto auto",

  zIndex: theme.zIndex.high,

  border: "none",

  overflow: "hidden",
});
