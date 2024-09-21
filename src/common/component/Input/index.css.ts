import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerStyle = recipe({
  base: {
    display: "flex",
    gap: "0.2rem",
  },
  variants: {
    errorPosition: {
      top: {
        flexDirection: "column-reverse",
      },
      bottom: {
        flexDirection: "column",
      },
    },
  },
});

export const wrapperStyle = recipe({
  base: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    border: "1px solid transparent",
    borderRadius: "0.5rem",
    outline: "none",
    boxSizing: "border-box",

    backgroundColor: theme.color.mg5,

    ":focus-within": {
      border: `1px solid ${theme.color.purple}`,
    },
  },

  variants: {
    type: {
      medium: {
        height: "4.4rem",
        padding: "0rem 0.8rem",
        ":focus-within": {
          border: `1px solid ${theme.color.purple2}`,
        },
      },

      large: {
        height: "5.1rem",
        padding: "1rem 1.6rem",
      },
    },

    isError: {
      true: {
        border: `1px solid ${theme.color.red}`,
      },
    },
  },
});

export const inputStyle = recipe({
  base: {
    overflow: "hidden",

    width: "100%",
    border: "none",

    backgroundColor: "transparent",

    color: theme.color.white,
    "::placeholder": {
      color: theme.color.mg4,
    },
  },

  variants: {
    type: {
      medium: {
        height: "2.2rem",
        ...theme.font.Body1_M_14,
      },

      large: {
        height: "3rem",
        ...theme.font.Title2_M_16,
      },
    },
  },
});

export const barStyle = recipe({
  base: {
    display: "none",
    selectors: {
      [`&:has(+ ${inputStyle()}:focus)`]: {
        display: "block",
      },
    },
  },

  variants: {
    type: {
      medium: {
        height: "2.6rem",
        border: `0.5px solid ${theme.color.purple2}`,
      },

      large: {
        height: "3rem",
        border: `0.5px solid ${theme.color.purple}`,
      },
    },
  },
});

export const errorWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const errorIconStyle = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const errorMsgStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.error,
});
