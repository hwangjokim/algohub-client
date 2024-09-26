import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const breakpoints = {
  lg: "1366px",
};

export const onboardingStyle = style({
  overflowY: "scroll",
  scrollBehavior: "smooth",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  scrollSnapType: "y mandatory",

  height: "100vh",
});

export const sectionStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  scrollSnapAlign: "start",

  height: "100vh",

  backgroundColor: theme.color.bg,
});

export const contentsContainer = recipe({
  base: {
    display: "grid",
    justifyContent: "center",

    height: "100%",
    padding: "0 7rem",
  },
  variants: {
    section: {
      intro: {
        gridTemplateColumns: "55rem 45rem",
        alignItems: "center",

        paddingTop: "12rem",
      },
      feature1: {
        gridTemplateColumns: "47.5rem 72.5rem",
        gridTemplateRows: "25rem 65rem",
        alignItems: "start",

        paddingTop: "12rem",

        "@media": {
          [`screen and (max-width: ${breakpoints.lg})`]: {
            gridTemplateColumns: "40rem 60rem",
            gridTemplateRows: "20rem auto",
          },
        },
      },
      feature2: {
        gridTemplateColumns: "47.5rem 72.5rem",
        gridTemplateRows: "22.5rem auto",
        gridAutoFlow: "column",
        
        paddingTop: "5rem",
        "@media": {
          [`screen and (max-width: ${breakpoints.lg})`]: {
            gridTemplateColumns: "40rem 60rem",
          },
        },
      },
    },
  },
});

export const introContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "6.4rem",
});

export const introTextContainer = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.4rem",

    alignSelf: "stretch",
  },
  variants: {
    section: {
      feature2: {
        gap: "1.6rem",
      },
    },
  },
});

export const introTextStyle = recipe({
  base: {
    color: theme.color.wg,
    fontStyle: "normal",
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "67.2px",
    letterSpacing: "-0.125em",
    textWrap: "nowrap",
  },
  variants: {
    type: {
      em: {
        color: theme.color.purple2,
      },
      alphabet: {
        letterSpacing: "-0.015em",
      },
      small: {
        color: theme.color.mg2,
        fontSize: "24px",
        fontWeight: "500",
        letterSpacing: "-0.1em",
        lineHeight: "33.6px",
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

export const buttonTextStyle = style({
  ...theme.font.Title1_SB_16,
});

export const imageContainer = styleVariants({
  intro: {
    gridColumn: 2,
    gridRow: 2,
  },
  feature2: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gridColumn: "1 / span 2",
    gridRow: 2,

    width: "100%",
    height: "fit-content",
  },
});

export const imageStyle = recipe({
  base: {
    objectFit: "cover",
    objectPosition: "center",
  },
  variants: {
    section: {
      intro: {
        width: "58.4rem",
        height: "54.1rem",
      },
      feature1: {
        width: "70rem",
        height: "40rem",
      },
      feature2: {
        width: "85.6rem",
        height: "48rem",
        borderRadius: "1.6rem",
      },
    },
  },
});

export const arrowContainer = style({
  display: "flex",
  justifyContent: "center",
});

export const arrowStyle = style({
  cursor: "pointer",
});

export const gradientStyle = style({
  position: "absolute",
  bottom: 0,

  width: "100%",
  height: "17.3rem",

  background: "linear-gradient(180deg, rgba(16, 18, 23, 0) 0%, #101217 100%)",
});
