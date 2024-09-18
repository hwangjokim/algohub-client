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
  position: "absolute",
  top: "7.2rem",
  right: "8rem",
  
  width: "26.9rem",
  height: "27.4rem",
  padding: "2rem 0.7rem",
  borderRadius: "2rem",

  opacity: "0.9",
  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const ulStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  overflowY: "scroll",
  
  height: "24.5rem",
  paddingTop: "1rem",

  selectors: {
    "&::-webkit-scrollbar": {
      width: "0.3rem",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.color.mg1,
      borderRadius: "0.4rem",
    },
    "&::-webkit-scrollbar-button": {
      height: "1rem",
    },
    "&::-webkit-scrollbar-thumb:active": {
      background: theme.color.mg4,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      boxShadow: "none",
    },
  },
});
