import Link from "next/link";
import { labelContainer, labelStyle } from "./index.css";

interface FooterProps {
  guideLabel?: string;
  link: {
    label: string;
    href: string;
  };
}

const Footer = ({ guideLabel, link: { label, href } }: FooterProps) => {
  return (
    <div className={labelContainer}>
      <p className={labelStyle.guide}>{guideLabel}</p>
      <Link href={href} className={labelStyle.link}>
        {label}
      </Link>
    </div>
  );
};

export default Footer;
