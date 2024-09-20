import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const tabListStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    variant: {
      primary: {},
      secondary: {
        gap: "12px",
      },
    },
  },
});

export const tabStyle = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    gap: "8px",

    ...theme.font.Title1_SB_16,
    color: theme.color.mg3,
  },
  variants: {
    variant: {
      primary: {
        padding: "26px 17px",
      },
      secondary: {
        padding: "16px 0px",
      },
    },
    isSelected: {
      true: {
        color: theme.color.white,
      },
    },
  },
});

export const indicatorStyle = recipe({
  base: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    margin: "0 auto",

    width: "100%",
    height: "2px",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.color.purple2,
      },
      secondary: {
        backgroundColor: theme.color.white,
      },
    },
  },
});
