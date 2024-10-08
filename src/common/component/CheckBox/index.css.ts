import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const boxStyle = style({
  appearance: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "14px",
  height: "14px",

  border: "none",
  borderRadius: "1px",

  backgroundColor: theme.color.mg3,

  cursor: "pointer",

  ":checked": {
    backgroundColor: theme.color.purple,
  },

  "::before": {
    content: "✓",

    fontWeight: 700,

    color: theme.color.black,
  },
});
