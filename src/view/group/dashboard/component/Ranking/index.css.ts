import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const topRankingWrapper = style({
  display: "flex",
  gap: "2rem",
  paddingTop: "2.4rem",
});

export const rankingCardWrapper = style({
  position: "relative",
});

export const rankingCardStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",

  position: "absolute",
  top: "0",

  width: "14.6rem",
  padding: "1.6rem",
});

export const avatarStyle = style({
  alignSelf: "center",
});

export const infoStyle = style({
  display: "flex",
  alignItems: "center",
  paddingTop: "1.5rem",
  gap: "0.4rem",
});

export const infoTextStyle = recipe({
  base: {
    ...theme.font.Caption1_R_12,
  },
  variants: {
    highlight: {
      true: {
        color: theme.color.purple2,
      },
      false: {
        color: theme.color.wg,
      },
    },
  },
});

export const nicknameStyle = style({
  color: theme.color.purple2,
  ...theme.font.Title1_SB_16,
});
