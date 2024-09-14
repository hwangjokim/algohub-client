import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const dropdownContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",

  width: "13.2rem",
  height: "fit-content",
  padding: "0.8rem 1rem",

  borderRadius: "0.8rem",
  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
});

export const dropdownDefaultStyle = style({
  position: "absolute",
})

export const dropdownItemStyle = style({
  width: "11.2rem",
  height: "3.4rem",
  padding: "0.5rem 0.8rem",
  
  borderRadius: "0.8rem",

  color: theme.color.white,
  textAlign: "left",
  ...theme.font.Caption3_M_12,

  selectors: {
    "&:hover": {
      backgroundColor: theme.color.mg5,
    },
  },
});
