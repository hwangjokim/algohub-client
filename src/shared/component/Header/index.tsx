import { IcnLogo } from "@/asset/svg";
import LoginMenu from "@/shared/component/Header/LoginMenu";
import UserMenu from "@/shared/component/Header/UserMenu";
import {
  headerStyle,
  logoContainer,
  logoStyle,
} from "@/shared/component/Header/index.css";
import Link from "next/link";

const Header = () => {
  /* TODO: 로그인 api 부착 후 Atom으로 교체 */
  // const { isLoggedIn } = useAtomValue(authAtom);
  const isLoggedIn = true;

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
