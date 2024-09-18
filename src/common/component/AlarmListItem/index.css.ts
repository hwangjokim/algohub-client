import { theme } from "@/styles/themes.css";
// NotificationCard.css.ts
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const listStyle = style({
  listStyle: "none",
});

export const buttonStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  padding: "0.6rem 1rem",

  cursor: "pointer",

  borderRadius: "0.8rem",
  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,
  ":hover": {
    backgroundColor: theme.color.transparent_mg4,
  },
});

export const deleteButtonStyle = recipe({
  base: {
    position: "absolute",
    top: -5,
    right: -5,
    zIndex: theme.zIndex.top,
    opacity: 1,
    borderRadius: "20px",
    visibility: "hidden",
  },
  variants: {
    active: {
      true: {
        visibility: "visible",
      },
    },
  },
});

export const deleteIconStyle = style({
  selectors: {
    "&:hover": {
      ["rect:nth-of-type(2)" as string]: {
        stroke: theme.color.mg4,
      },
    },
  },
});

export const profileImageStyle = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "5rem",
  border: `1px solid ${theme.color.mg1}`,
});

export const profileStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  width: "22rem",

  textAlign: "left",
});

export const nameStyle = style({
  ...theme.font.Caption2_SB_12,
  color: theme.color.purple,
});

export const messageStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.wg2,
});

export const dateStyle = style({
  fontSize: "1rem",
  lineHeight: "1.193rem",
  color: theme.color.mg4,
});
