import { navListStyle, navStyle } from "@/shared/component/NavBar/index.css";
import type { ComponentPropsWithoutRef } from "react";

interface NavBarProps extends ComponentPropsWithoutRef<"nav"> {}

const NavBar = ({ children }: NavBarProps) => {
  return (
    <nav className={navStyle}>
      <ul className={navListStyle}>{children}</ul>
    </nav>
  );
};

export default NavBar;
