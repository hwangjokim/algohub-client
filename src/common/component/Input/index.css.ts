import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

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
  },

  variants: {
    size: {
      medium: {
        height: "4.4rem",
        padding: "0rem 0.8rem",
      },

      large: {
        height: "5.1rem",
        padding: "1rem 1.6rem",
      },

      textarea: {
        alignItems: "flex-start",
        height: "100%",
        padding: "1rem 1.6rem",
      },
    },

    active: {
      true: {
        border: `1px solid ${theme.color.purple}`,
        ":hover": {
          border: `1px solid ${theme.color.purple}`,
        },
      },
    },

    error: {
      true: {
        border: `1px solid ${theme.color.red}`,
        ":hover": {
          border: `1px solid ${theme.color.red}`,
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        size: "medium",
        active: true,
      },
      style: {
        border: `1px solid ${theme.color.purple2}`,
        ":hover": {
          border: `1px solid ${theme.color.purple2}`,
        },
      },
    },
  ],
});

export const inputStyle = recipe({
  base: {
    overflow: "hidden",

    width: "100%",
    border: "none",

    backgroundColor: "transparent",

    color: theme.color.white,
    letterSpacing: "-0.01875rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    "::placeholder": {
      color: theme.color.mg4,
    },
  },

  variants: {
    size: {
      medium: {
        height: "2.2rem",
        fontSize: "1.4rem",
        lineHeight: "2.2rem",
      },

      large: {
        height: "3rem",
        fontSize: "1.6rem",
        lineHeight: "3rem",
      },

      textarea: {
        height: "auto",
        fontSize: "1.2rem",
        lineHeight: "1.4rem",
      },
    },
  },
});

export const barStyle = recipe({
  variants: {
    size: {
      medium: {
        height: "2.6rem",
        border: `0.5px solid ${theme.color.purple2}`,
      },

      large: {
        height: "3rem",
        border: `0.5px solid ${theme.color.purple}`,
      },

      textarea: {
        height: "1.4rem",
        border: `0.5px solid ${theme.color.purple}`,
      },
    },
  },
});
