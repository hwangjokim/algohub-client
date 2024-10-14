import { style } from "@vanilla-extract/css";

export const triggerButtonStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "0.4rem",
  gap: "0.4rem",
  width: "100%",
});

export const storyArrowDownStyle = style({
  width: "1.2rem",
  height: "1.2rem",
});

export const dropdownStyle = style({
  paddingTop: "1.6rem",
  paddingBottom: "1.6rem",
  ":hover": {
    opacity: 0.9,
  },
});
