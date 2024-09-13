// styles/header.css.ts
import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",

	width: "100vw",
	height: "7.2rem",
	margin: 0,
	padding: "0 6.4rem",
	backgroundColor: theme.color.bg,
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
	gap: "1.6rem",

	margin: 0,
	padding: 0,
});

export const buttonStyle = style({
	position: "relative",
	width: "2.5rem",
	height: "2.5rem",
	borderRadius: "5rem",
	cursor: "pointer",
	":hover": {
		backgroundColor: theme.color.mg5,
	},
});

export const iconStyle = style({
	width: "inherit",
	height: "inherit",
});

export const countStyle = style({
	position: "absolute",
	right: 0,
	width: "1.2rem",
	height: "1.2rem",
	borderRadius: "1rem",
	backgroundColor: theme.color.purple2,
	color: theme.color.white,
	alignContent: "center",
	fontSize: "0.8rem",
	fontWeight: 500,
	lineHeight: "5.6px",
	letterSpacing: "-0.025em",
	textAlign: "center",
});

export const notificationContainer = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "1rem",
	position: "absolute",
	top: "7.2rem",
	right: "8rem",

	width: "26.9rem",
	height: "27.4rem",
	padding: "0.8rem",
	opacity: "0.9",
	borderRadius: "2rem",
	backdropFilter: "blur(2px)",
	backgroundColor: theme.color.mg6,
});

export const profileMenuContainer = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "1rem",
	position: "absolute",
	top: "6.5rem",

	width: "13.2rem",
	height: "8.8rem",
	padding: "0.8rem 1rem",
	borderRadius: "0.8rem",
	backdropFilter: "blur(2px)",
	backgroundColor: theme.color.mg6,
});

export const profileMenuItemStyle = style({
	listStyle: "none",
	width: "11.2rem",
	height: "3.4rem",
	borderRadius: "0.8rem",
	padding: "0.5rem 0.8rem",

	color: theme.color.white,
	textAlign: "left",
	...theme.font["caption-m-12"],

	selectors: {
		"&:hover": {
			backgroundColor: theme.color.mg5,
		},
	},
});
