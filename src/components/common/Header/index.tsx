"use client";

import { IcnBellHeader, IcnLogo } from "@/assets/svgs";
import IcnNew from "@/assets/svgs/icn_new.svg?url";
import { authAtom } from "@/store";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	buttonContainer,
	buttonStyle,
	headerStyle,
	iconStyle,
	logoContainer,
	logoStyle,
} from "./Header.css";

const Header = () => {
	const { isLoggedIn } = useAtomValue(authAtom);

	return (
		<header className={headerStyle}>
			<Link href={"/user"} className={logoContainer} aria-label="User page">
				<IcnLogo className={logoStyle} />
			</Link>
			{isLoggedIn ? <UserMenu /> : <LoginMenu />}
		</header>
	);
};

const UserMenu = () => {
	const [showNotification, setShowNotification] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);

	const handleNotificationClick = () => setShowNotification(!showNotification);
	const handleProfileClick = () => setShowProfileMenu(!showProfileMenu);

	return (
		<div className={buttonContainer}>
			<button
				className={buttonStyle}
				id="notificationDropdownToggle"
				aria-label="Show notifications"
				aria-expanded={showNotification}
				aria-controls="notificationDropdown"
				onClick={handleNotificationClick}
			>
				<IcnBellHeader className={iconStyle} />
			</button>
			<button
				className={buttonStyle}
				id="profileDropdownToggle"
				aria-label="Open user profile menu"
				aria-expanded={showProfileMenu}
				aria-controls="profileDropdown"
				onClick={handleProfileClick}
			>
				<Image className={iconStyle} src={IcnNew} alt="user profile" priority />
			</button>
		</div>
	);
};

const LoginMenu = () => {
	const handleProfileClick = () => {};

	return (
		<div className={buttonContainer}>
			{/** 임시 버튼 */}
			<button
				style={{ backgroundColor: "violet", width: "4rem", height: "2.5rem" }}
				aria-label="Login"
				onClick={handleProfileClick}
			>
				로그인
			</button>
		</div>
	);
};

export default Header;
