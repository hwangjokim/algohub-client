import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const noticeModalWrapper = style({
  width: "100rem",
  height: "60rem",
  padding: "4.4rem",

  backgroundColor: theme.color.bg,
  borderRadius: "2rem",
});
