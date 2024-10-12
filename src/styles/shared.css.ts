import { style } from "@vanilla-extract/css";

export const sidebarWrapper = style({
  display: "flex",
  alignItems: "stretch",

  minHeight: "calc(100vh - 7.2rem)",
});

export const mainWrapper = style({
  flexGrow: "1",
  padding: "0 10rem 2rem 4.2rem",
});
