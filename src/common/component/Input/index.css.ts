import { theme } from "@/styles/themes.css";
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

    ":hover": {
      border: `1px solid ${theme.color.transparent_purple2_50}`,
    },

    ":focus-within": {
      border: `1px solid ${theme.color.purple}`,
    },
  },

  variants: {
    size: {
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
    size: {
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
