import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapperStyle = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  overflow: "auto",
});

export const tableStyle = style({
  width: "100rem",
  borderCollapse: "collapse",
  captionSide: "top",
  padding: "1.6rem",
});

export const tableCaptionStyle = style({
  marginBottom: "2rem",

  textAlign: "left",
  fontSize: "1.6rem",
  fontWeight: 600,
  lineHeight: "19.09px",
});

export const tableHeaderStyle = recipe({
  base: {},
  variants: {
    type: {
      /** border bottom style */
      스터디관리: {
        height: "3.6rem",
        verticalAlign: "top",
        borderBottom: "1px solid #2D3239",
      },
      /** backgound color style */
      알림설정: {
        height: "4.1rem",
        backgroundColor: theme.color.mg5,
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      },
      /** dense style */
      내가푼문제: {
        height: "3.7rem",
      },
      문제리스트: {
        height: "4rem",
      },
    },
  },
});

export const tableBodyStyle = style({});

export const tableFooterStyle = style({
  backgroundColor: "rgba(128, 128, 128, 0.5)",
  fontWeight: 500,
});

export const tableRowStyle = style({});

export const tableHeadStyle = recipe({
  base: {
    height: "2.5rem",

    ...theme.font.Caption3_M_12,
    color: theme.color.mg2,
  },
  variants: {
    textAlign: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
    padding: {
      dense: {
        padding: "0 2rem",
      },
    },
  },
});

export const tableCellStyle = recipe({
  base: {
    padding: "2rem 0",

    verticalAlign: "middle",
    textAlign: "center",
  },
  variants: {
    textAlign: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
        paddingRight: "1.5rem",
      },
    },
  },
});

export const tableCellTextStyle = style({
  ...theme.font.Caption3_M_12,
  color: theme.color.white,
});

export const withdrawTextStyle = style({
  ...theme.font.Body1_M_14,
  color: theme.color.mg2,
  borderRadius: ".4rem",
  padding: "0 .4rem",
  ":hover": {
    backgroundColor: theme.color.mg5,
  },
});
