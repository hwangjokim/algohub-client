import { theme } from "@/styles/themes.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  display: "flex",
  alignItems: "center",
  padding: "0.8rem",
  gap: "0.4rem",
  borderRadius: "0.5rem",
  backgroundColor: theme.color.mg5,
  width: "fit-content",
  height: "3.6rem",
});

export const calendarIcnStyle = recipe({
  base: {
    width: "2rem",
    height: "2rem",

    ["[stroke='#9BA1B4']" as string]: {
      stroke: theme.color.mg4,
    },
  },
  variants: {
    selected: {
      true: {
        ["[stroke='#9BA1B4']" as string]: {
          stroke: theme.color.lg2,
        },
      },
    },
  },
});

export const dateStyle = recipe({
  base: {
    width: "6.2rem",
    fontSize: "1.2rem",
    fontWeight: "400",
    border: "none",
    lineHeight: "1.68rem",
    backgroundColor: "transparent",
    color: theme.color.mg4,
  },
  variants: {
    selected: {
      true: {
        color: theme.color.lg2,
      },
    },
  },
});

export const customHeaderWrapperStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});

export const arrowWrapperStyle = style({
  display: "flex",
  alignItems: "center",
  height: "2rem",
});

export const leftArrowStyle = recipe({
  base: {
    width: "1.5rem",
    height: "1.5rem",
    ["[stroke='#BCC0CD']" as string]: {
      stroke: theme.color.mg4,
    },
  },
  variants: {
    rotate: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const dateDetailStyle = style({
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "500",
  color: theme.color.wg,
  lineHeight: "2.5rem",
});

globalStyle(".react-datepicker", {
  border: `1px solid ${theme.color.mg4}`,
});

globalStyle(".react-datepicker__header", {
  backgroundColor: theme.color.mg5,
  borderBottom: `1px solid ${theme.color.mg4}`,
  padding: "0.4rem 0rem 0.8rem 0rem",
});

globalStyle(".react-datepicker__current-month", {
  color: theme.color.wg,
});

globalStyle(".react-datepicker__day-name", {
  color: theme.color.wg,
  fontSize: "1rem",
});

globalStyle(
  ".react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name",
  {
    width: "2.3rem",
    height: "2.3rem",
  }
);

globalStyle(".react-datepicker__month", {
  margin: 0,
  padding: "0.8rem",
  backgroundColor: theme.color.mg5,
});

globalStyle(".react-datepicker__triangle", {
  display: "none",
});

globalStyle(".react-datepicker__day", {
  color: theme.color.mg3,
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "2.3rem",
});

globalStyle(".react-datepicker__day--selected", {
  backgroundColor: theme.color.purple,
  color: theme.color.white,
  borderRadius: "50%",
});

globalStyle(".react-datepicker__day--keyboard-selected", {
  backgroundColor: theme.color.mg4,
  color: theme.color.white,
  borderRadius: "50%",
});

globalStyle(".react-datepicker__day:hover", {
  backgroundColor: theme.color.mg4,
  color: theme.color.white,
  borderRadius: "50%",
});
