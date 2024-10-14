"use client";
import { IcnInstagram, IcnLogo, IcnMail } from "@/asset/svg";
import {
  buttonContainer,
  footerStyle,
  iconContainer,
  iconStyle,
  logoStyle,
  textStyle,
} from "./index.css";

const Footer = () => {
  const handleInstaClick = () => {
    window.open("http://www.instagram.com", "_blank");
  };
  const handleMailClick = () => {
    alert("mail");
  };
  return (
    <footer className={footerStyle}>
      <div className={buttonContainer}>
        <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
        <div className={iconContainer}>
          <IcnInstagram
            className={iconStyle}
            role="button"
            onClick={handleInstaClick}
            // onKeyDown
            tabIndex={0}
            aria-label="instagram을 새 창에서 열기"
          />
          <IcnMail
            className={iconStyle}
            role="button"
            onClick={handleMailClick}
            // onKeyDown
            tabIndex={0}
            aria-label="메일 보내기"
          />
        </div>
      </div>
      <p className={textStyle}>Copyright 2024. Algohub All rights reserved.</p>
    </footer>
  );
};

export default Footer;
