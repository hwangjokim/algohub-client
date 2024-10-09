"use client";

import {
  iconStyle,
  indicatorStyle,
  itemStyle,
} from "@/shared/component/NavBar/index.css";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { type HTMLAttributes, type ReactElement, cloneElement } from "react";

interface NavBarItemProps extends HTMLAttributes<HTMLLIElement> {
  href: string;
  icon?: ReactElement;

  mode?: "fill" | "stroke";
}

const NavBarItem = ({ href, icon, mode, children }: NavBarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isSelected = pathname === href;

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="button"
      className={itemStyle({ isSelected })}
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(href);
        }
      }}
    >
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
        <motion.div layoutId="navbar-indicator" className={indicatorStyle} />
      )}
    </li>
  );
};

export default NavBarItem;
