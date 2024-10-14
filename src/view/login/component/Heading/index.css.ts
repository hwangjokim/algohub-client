// styles.css.ts
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headingStyle = style({
  color: theme.color.white,
  fontSize: "3rem",
  fontWeight: "700",
  lineHeight: "4.2rem",
  letterSpacing: "-0.35rem",
  textAlign: "center",
});
