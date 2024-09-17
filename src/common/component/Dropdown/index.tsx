import {
  dropdownContainer,
  dropdownDefaultStyle,
  dropdownItemStyle,
} from "@/common/component/Dropdown/index.css";
import { camelToKebab } from "@/common/util/string";
import type { PropsWithChildren } from "react";
import React from "react";

type DropdownProps = {
  label: string;
  className?: string;
} & PropsWithChildren;

/**
 * @param label id, aria-label에 들어갈 string
 * @param className 드롭다운 위치 조정용 style
 * @param children li 태그를 사용해 주세요
 * @example
 * const dropdownStyle = style({ position: "absolute", top: "6.5rem", right: "6rem" })
 * <Dropdown label="profile" className={dropdownStyle}>
     <li {...liProps}>내 프로필</li>
     <li {...liProps}>로그아웃</li>
   </Dropdown>
 */
const Dropdown = ({
  children,
  label,
  className = dropdownDefaultStyle,
}: DropdownProps) => {
  return (
    <ul
      className={`${dropdownContainer} ${className}`}
      id={label}
      aria-labelledby={camelToKebab(`${label}Toggle`)}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<HTMLLIElement>(
            child as React.ReactElement<HTMLLIElement>,
            {
              className: dropdownItemStyle,
              key: index,
              tabIndex: 0,
            }
          );
        }
        return child;
      })}
    </ul>
  );
};

export default Dropdown;
