"use client";

import {
  iconStyle,
  indicatorStyle,
  itemStyle,
} from "@/shared/component/NavBar/index.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type HTMLAttributes, type ReactElement, cloneElement } from "react";

interface NavBarItemProps extends HTMLAttributes<HTMLLIElement> {
  href: string;
  icon?: ReactElement;

  mode?: "fill" | "stroke";
}

const NavBarItem = ({ href, icon, mode, children }: NavBarItemProps) => {
  const pathname = usePathname();

  const isSelected = pathname === href;

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="button"
      tabIndex={-1}
    >
      <Link href={href} className={itemStyle({ isSelected })}>
        {icon &&
          cloneElement(icon, {
            className: iconStyle({
              variant: isSelected
                ? mode
                : (`none${mode}` as NavBarItemProps["mode"]),
            }),
          })}
        {children}
        {isSelected && (
          <motion.div
            tabIndex={-1}
            layoutId="navbar-indicator"
            className={indicatorStyle}
          />
        )}
      </Link>
    </li>
  );
};

export default NavBarItem;
