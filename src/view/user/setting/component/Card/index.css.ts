// styles.css.ts
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const cardStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",

  padding: "2rem 3rem",
  
  borderRadius: "2.4rem",
  backgroundColor: theme.color.mg6,
});
