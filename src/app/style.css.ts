import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const icnPlusStyle = style({
  '&:path': {
    fill: theme.color.white,
  }
})
