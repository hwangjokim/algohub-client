import { IcnLogo } from "@/asset/svg";
import UserMenu from "@/shared/component/Header/UserMenu";
import {
  headerStyle,
  logoContainer,
  logoStyle,
} from "@/shared/component/Header/index.css";
import Link from "next/link";

const Header = () => (
  <header className={headerStyle}>
    <Link href={"/user"} className={logoContainer} aria-label="User page">
      <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
    </Link>
    <UserMenu />
  </header>
);

export default Header;
