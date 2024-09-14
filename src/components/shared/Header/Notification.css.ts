import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const countStyle = style({
  position: "absolute",
  right: 0,

  width: "1.2rem",
  height: "1.2rem",
  borderRadius: "1rem",

  backgroundColor: theme.color.purple2,

  color: theme.color.white,
  fontSize: "0.8rem",
  fontWeight: 500,
  lineHeight: "5.6px",
  letterSpacing: "-0.025em",
  textAlign: "center",
  alignContent: "center",
});

export const notificationContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",

  position: "absolute",
  top: "7.2rem",
  right: "8rem",

  width: "26.9rem",
  height: "27.4rem",
  padding: "0.8rem",
  
  borderRadius: "2rem",
  opacity: "0.9",
  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});
