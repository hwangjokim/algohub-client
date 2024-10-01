import { theme } from "@/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const storyFormStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "2rem",

    height: "fit-content",
    borderRadius: "2.4rem",
    backgroundColor: theme.color.bg,
  },
  variants: {
    type: {
      login: {
        padding: "3rem",
      },
      edit: {
        padding: "2rem 3rem",
      },
    },
  },
});

export const storyContentStyle = styleVariants({
  loginContents: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",

    width: "34rem",
  },
  editContents: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    width: "34rem",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export const storyItemStyle = styleVariants({
  description: {
    margin: 0,
  },
  input: {
    width: "unset",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "0rem",
    ...theme.font.Body2_R_14,
    color: theme.color.mg2,
  },
  label: {
    ...theme.font.Title1_SB_16,
    color: theme.color.mg2,
  },
});

export const itemDefaultStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
});

export const labelDefaultStyle = styleVariants({
  default: {
    color: theme.color.wg,
  },
  error: {
    color: theme.color.red,
  },
});
