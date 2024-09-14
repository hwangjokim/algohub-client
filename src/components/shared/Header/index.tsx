"use client";

import { IcnLogo } from "@/assets/svgs";
import Link from "next/link";
import LoginMenu from "./LoginMenu";
import UserMenu from "./UserMenu";
import {
  headerStyle,
  logoContainer,
  logoStyle
} from "./index.css";

const Header = () => {
  /* TODO: 로그인 api 부착 후 Atom으로 교체 */
  // const { isLoggedIn } = useAtomValue(authAtom);
  const isLoggedIn = false;

  return (
    <header className={headerStyle}>
      <Link href={"/user"} className={logoContainer} aria-label="User page">
        <IcnLogo className={logoStyle} />
      </Link>
      {isLoggedIn ? <UserMenu /> : <LoginMenu />}
    </header>
  );
};

export default Header;
