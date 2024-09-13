"use client";

import { IcnBellHeader, IcnLogo } from "@/assets/svgs";
import IcnNew from "@/assets/svgs/icn_new.svg?url";
import { authAtom } from "@/store";
import { checkContains } from "@/utils/domUtils";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	buttonContainer,
	buttonStyle,
	countStyle,
	headerStyle,
	iconStyle,
	logoContainer,
	logoStyle,
	notificationContainer,
	profileMenuContainer,
	profileMenuItemStyle,
} from "./Header.css";

const Header = () => {
	const { isLoggedIn } = useAtomValue(authAtom);

	return (
		<header className={headerStyle}>
			<Link href={"/user"} className={logoContainer} aria-label="User page">
				<IcnLogo className={logoStyle} />
			</Link>
			{/* TODO: 로그인 api 부착 후 isLoggedIn으로 교체 */}
			{true ? <UserMenu /> : <LoginMenu />}
		</header>
	);
};

const UserMenu = () => {
	const [showNotifications, setShowNotifications] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const notificationBtnRef = useRef<HTMLButtonElement | null>(null);
	const notificationRef = useRef<HTMLUListElement | null>(null);
	const profileBtnRef = useRef<HTMLButtonElement | null>(null);
	const profileMenuRef = useRef<HTMLDivElement | null>(null);
	const count = 10;
	const handleNotificationClick = useCallback(() => {
		setShowNotifications(!showNotifications);
		// 스크린 리더로 열 때 옆 메뉴 닫기
		setShowProfileMenu(false);
	}, [showNotifications]);

	const handleProfileClick = useCallback(() => {
		setShowProfileMenu(!showProfileMenu);
		// 스크린 리더로 열 때 옆 메뉴 닫기
		setShowNotifications(false);
	}, [showProfileMenu]);

	const handleOutsideClick = useCallback(({ target }: MouseEvent) => {
		// 알림, 프로필 버튼, 드롭다운 외의 화면 클릭 시 드롭다운 닫기
		const [notiBtn, noti, profileBtn, profile] = checkContains(
			target!,
			notificationBtnRef,
			notificationRef,
			profileBtnRef,
			profileMenuRef,
		);
		if (!(notiBtn || noti)) {
			setShowNotifications(false);
		}
		if (!(profileBtn || profile)) {
			setShowProfileMenu(false);
		}
	}, []);

	useEffect(() => {
		// click대신 mousedown으로 빠르게 진행
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<div className={buttonContainer}>
			<button
				ref={notificationBtnRef}
				className={buttonStyle}
				id="notificationToggle"
				aria-label={`${showNotifications ? "Hide" : "Show"} notifications`}
				aria-expanded={showNotifications}
				aria-controls="notifications"
				onClick={handleNotificationClick}
			>
				{count > 0 && <div className={countStyle}>{count}</div>}
				<IcnBellHeader className={iconStyle} />
			</button>

			{/* TODO: 알림창 구현 */}
			{showNotifications && (
				<ul
					ref={notificationRef}
					id="notifications"
					className={notificationContainer}
					role="alert"
				/>
			)}

			<button
				ref={profileBtnRef}
				className={buttonStyle}
				id="profileMenuToggle"
				aria-label={`${showProfileMenu ? "Close" : "Open"} user profile menu`}
				aria-expanded={showProfileMenu}
				aria-controls="profileMenu"
				onClick={handleProfileClick}
			>
				<Image className={iconStyle} src={IcnNew} alt="user profile" priority />
			</button>

			{showProfileMenu && (
				<div
					ref={profileMenuRef}
					className={profileMenuContainer}
					id="profileMenu"
					aria-label="user profile menu"
					role="menu"
				>
					{/* TODO: google profile 디자인 대기 중 */}
					<button className={profileMenuItemStyle} role="menuitem">
						내 프로필
					</button>
					<button className={profileMenuItemStyle} role="menuitem">
						로그아웃
					</button>
				</div>
			)}
		</div>
	);
};

const LoginMenu = () => {
	const handleProfileClick = () => {
		alert("로그인");
	};

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
