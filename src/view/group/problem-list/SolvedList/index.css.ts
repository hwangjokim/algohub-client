import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const solvedListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",

  width: "100%",
});

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
});

export const headerTextStyle = style({
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

export const dividerStyle = style({
  width: "100%",
  height: "1px",
  background: theme.color.mg4,
});
