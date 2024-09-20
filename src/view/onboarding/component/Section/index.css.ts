import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const sectionStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    height: "100vh",
  },
  variants: {
    section: {
      first: {
        height: "calc(100vh - 7.2rem)",
      },
    },
  },
});

export const contentsContainer = recipe({
  base: {
    display: "grid",
    justifyItems: "start",
    justifyContent: "center",
    
    height: "100%",
    padding: "0 7rem",
  },
  variants: {
    section: {
      first: {
        gridTemplateColumns: "60rem 60rem",
        alignItems: "center",
      },
      second: {
        gridTemplateColumns: "47.5rem 72.5rem",
        gridTemplateRows: "25rem 65rem",
        alignItems: "start",

        paddingTop: "10rem",
      },
    },
  },
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
  gap: "4px",
  flex: "none",
  alignSelf: "stretch",
  order: 0,
  flexGrow: 0,

  padding: "0px",
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
    color: {
      purple: {
        color: theme.color.purple2,
      },
    },
    spacing: {
      alphabet: {
        letterSpacing: "-0.015em",
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

export const imageContainer = recipe({
  base: {},
  variants: {
    section: {
      second: {
        gridColumn: 2,
        gridRow: 2,
      },
      third: {
        paddingLeft: "25.5rem",
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
