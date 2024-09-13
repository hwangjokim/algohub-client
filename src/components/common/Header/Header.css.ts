// styles/header.css.ts
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
	display: "flex",
	width: "100dvw",
	height: "7.2rem",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0 6.4rem",
	margin: 0,
	backgroundColor: theme.color.bg,
	boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
});

export const logoContainer = style({
	display: "flex",
	justifyContent: "flex-start",
	margin: 0,
	cursor: "pointer",
});

export const logoStyle = style({
	width: "7.4rem",
	height: "2rem",
});

export const buttonContainer = style({
	display: "flex",
	justifyContent: "flex-end",
	padding: 0,
	gap: "1.6rem",
	margin: 0,
});

export const buttonStyle = style({
	width: "2.5rem",
	height: "2.5rem",
	borderRadius: "50px",
	cursor: "pointer",
	":hover": {
		backgroundColor: theme.color.purple2,
	},
});

export const iconStyle = style({
	width: "inherit",
	height: "inherit",
});
