import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const bannerWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "1.6rem",

  padding: "1rem 0.8rem",
  marginBottom: "2.4rem",
  
  backgroundColor: theme.color.mg6,
  borderRadius: "1rem",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});

export const headerWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const notifyWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const contentWrapper = style([
  headerWrapper,
  {
    gap: "0.8rem",
  },
]);

export const textStyle = styleVariants({
  header: {
    ...theme.font.Body3_SB_14,
    color: theme.color.wg,
    whiteSpace: "nowrap",
  },
  head: {
    ...theme.font.Body3_SB_14,
    color: theme.color.purple2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  content: {
    ...theme.font.Body2_R_14,
    color: theme.color.purple3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  time: {
    ...theme.font.Caption1_R_12,
    color: theme.color.mg4,
    whiteSpace: "nowrap",
  },
});
