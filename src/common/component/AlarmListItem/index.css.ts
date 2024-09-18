import { theme } from "@/styles/themes.css";
// NotificationCard.css.ts
import { style } from "@vanilla-extract/css";

export const listStyle = style({
  listStyle: "none",
});

export const containerStyle = style({
  padding: "0.6rem 1rem",
  borderRadius: "0.8rem",

  backdropFilter: "blur(2px)",
  backgroundColor: theme.color.mg6,

  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.color.transparent_mg4,
  },
});

export const alarmStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
})

export const deleteIconStyle = style({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: theme.zIndex.top,
  transform: "translate(0, 10px)",
  borderRadius: "20px",

  opacity: 1,
  selectors: {
    "&:hover": {
      ["rect:nth-of-type(2)" as string]: {
        stroke: theme.color.mg4,
        strokeWidth: 5
      },
    },
  },
});

export const profileImageStyle = style({
  width: "2.5rem",
  height: "2.5rem",
  border: `1px solid ${theme.color.mg1}`,
  borderRadius: "5rem",
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
