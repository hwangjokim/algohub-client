import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const section1Style = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  height: "calc(100vh - 7.2rem)",
  paddingTop: "10vh",
  backgroundColor: theme.color.bg,
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // paddingTop: "10vh",
});

export const introContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "6.4rem",
  paddingLeft: "6rem",
});

export const introTextContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  gap: "4px",
  flex: "none",
  order: 0,
  alignSelf: "stretch",
  flexGrow: 0,
});

export const introTextStyle = recipe({
  base: {
    color: theme.color.wg,
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "67.2px",
    letterSpacing: "-0.135em",
    textWrap: "nowrap",
  },
  variants: {
    color: {
      purple: {
        color: theme.color.purple2,
      },
    },
  },
});

export const introButtonContainer = style({
  display: "flex",
  gap: "1.8rem",
  width: "49.8rem",
  height: "5.3rem",
});

export const introButtonStyle = style({
  width: "24rem",
});

export const imageStyle = style({
  width: "58.4rem",
  height: "54.1rem",
  objectFit: "cover",
  objectPosition: "center",
});

export const arrowContainer = style({
  display: "flex",
  justifyContent: "center",
});

export const arrowStyle = style({
  cursor: "pointer",

});
