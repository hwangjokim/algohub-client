import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const groupCardWrapper = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "2rem 1.6rem",

    width: "100%",

    borderRadius: "8px",
    background: theme.color.mg5,

    cursor: "pointer",
  },

  variants: {
    isDone: {
      true: {
        opacity: 0.2,
      },
    },
  },
});

export const flexCenterStyle = style({
  display: "flex",
  alignSelf: "flex-start",

  alignItems: "center",
  gap: "0.4rem",
});

export const imgStyle = style({
  width: "100%",
  height: "15.6rem",

  borderRadius: "4px",
  objectFit: "cover",
});

export const nameWrapper = style([
  flexCenterStyle,
  {
    paddingTop: "2rem",
  },
]);

export const nameStyle = style({
  color: theme.color.white,
  ...theme.font.Title1_SB_16,
});

export const descStyle = style({
  color: theme.color.mg2,
  ...theme.font.Caption3_M_12,
});

export const dateStyle = style([
  flexCenterStyle,
  descStyle,
  {
    paddingTop: "1rem",
  },
]);

export const ownerStyle = style([
  flexCenterStyle,
  descStyle,
  {
    gap: "0.9rem",
    padding: "0.7rem 0 0 0.5rem",
  },
]);

export const statusIconStyle = recipe({
  base: {
    width: "1.2rem",
    height: "1.2rem",

    borderRadius: "50%",
  },
  variants: {
    status: {
      bookmarked: {
        background: theme.color.purple,
      },
      inProgress: {
        background: theme.color.yellow,
      },
      queued: {
        background: theme.color.mint,
      },
      done: {
        background: theme.color.mg4,
      },
    },
  },
});
