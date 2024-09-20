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
        <IcnLogo className={logoStyle} />
        <div className={iconContainer}>
          <IcnInstagram
            className={iconStyle}
            role="button"
            onClick={handleInstaClick}
          />
          <IcnMail
            className={iconStyle}
            role="button"
            onClick={handleMailClick}
          />
        </div>
      </div>
      <p className={textStyle}>Copyright 2024. Algohub All rights reserved.</p>
    </footer>
  );
};

export default Footer;
