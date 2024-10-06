import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",

  width: "110rem",
  height: "62.4rem",
  backgroundColor: theme.color.bg,
});

export const textStyle = styleVariants({
  heading: {
    position: "absolute",
    top: "4.8rem",
    left: "4.2rem",

    ...theme.font.Title1_SB_16,
    color: theme.color.white,
  },
  footer: {
    padding: "0 .4rem",
    
    ...theme.font.Body1_M_14,
    color: theme.color.mg2,
    textDecoration: "underline",
    cursor: "pointer",
    ":hover": {
      backgroundColor: theme.color.mg5
    }
  },
});
