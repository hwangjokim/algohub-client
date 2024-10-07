import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  overflow: "auto",
});

export const tableStyle = style({
  width: "50vw",
});

export const tableHeaderStyle = style({

});

export const tableBodyStyle = style({

});

export const tableFooterStyle = style({
  borderTop: "1px solid",
  backgroundColor: "rgba(128, 128, 128, 0.5)",
  fontWeight: 500,
});

export const tableRowStyle = style({
  borderBottom: "1px solid",
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(128, 128, 128, 0.5)",
    },
    "&[data-state=selected]": {
      backgroundColor: "rgba(128, 128, 128, 1)",
    },
  },
});

export const tableHeadStyle = style({
  height: "2.5rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  textAlign: "left",
  verticalAlign: "middle",
  fontWeight: 600,
  selectors: {
    "&:has([role=checkbox])": {
      paddingRight: "0",
    },
  },
});

export const tableCellStyle = style({
  padding: "0.5rem",
  verticalAlign: "middle",
  selectors: {
    "&:has([role=checkbox])": {
      paddingRight: "0",
    },
  },
});
