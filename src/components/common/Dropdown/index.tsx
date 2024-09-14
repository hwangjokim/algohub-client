import type { PropsWithChildren } from "react";
import React from "react";
import { dropdownContainer, dropdownDefaultStyle, dropdownItemStyle } from "./index.css";

type DropdownProps = {
  label: string;
  className?: string;
} & PropsWithChildren;

/**
 * @param label id, aria-label에 들어갈 string
 * @param className 위치 조정용 style
 * @example
 * // dropdownStyle = style({ position: "absolute", top: "6.5rem", right: "6rem" })
 * <Dropdown label="profile" className={dropdownStyle}>
     <button {...buttonProps}>내 프로필</button>
     <button {...buttonProps}>로그아웃</button>
   </Dropdown>
 */
const Dropdown = ({ children, label, className = dropdownDefaultStyle }: DropdownProps) => {
  return (
    <nav
      className={`${dropdownContainer} ${className}`}
      id={label}
      aria-label={label}
      role="menu"
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<HTMLButtonElement>(
            child as React.ReactElement<HTMLButtonElement>,
            {
              className: dropdownItemStyle,
              role: "menuitem",
              key: index,
            },
          );
        }
        return child;
      })}
    </nav>
  );
};

export default Dropdown;
