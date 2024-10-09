import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const sidebarStyle = style({
  position: "sticky",
  left: 0,

  width: "27rem",
  height: "100%",

  padding: "4.2rem 2.4rem",

  backgroundColor: theme.color.mg6,
});
