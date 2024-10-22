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

export const tableWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
});

export const tableStyle = style({
  width: "100%",
  borderCollapse: "collapse",
  color: "white",
});

export const thTextStyle = style({
  color: theme.color.mg2,
  ...theme.font.Caption3_M_12,
});

export const tableRowStyle = style({
  borderBottom: "1px solid #444",
  height: "50px",
  textAlign: "center",
});

export const resultIncorrect = style({
  color: "red",
});
