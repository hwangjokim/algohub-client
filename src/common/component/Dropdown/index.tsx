import {
  dropdownContainer,
  dropdownDefaultStyle,
  dropdownItemStyle,
} from "@/common/component/Dropdown/index.css";
import { camelToKebab } from "@/common/util/string";
import { Children, type PropsWithChildren, type ReactElement, cloneElement, isValidElement } from "react";

type DropdownProps = {
  label: string;
  className?: string;
} & PropsWithChildren;

/**
 * @param {string} label id, aria-label에 들어갈 string
 * @param {string} className 드롭다운 위치 조정용 style
 * @param {React.ReactNode} children li 태그를 사용해 주세요
 * @example
 * const dropdownStyle = style({ position: "absolute", top: "6.5rem", right: "6rem" })
 * <Dropdown label="profile" className={dropdownStyle}>
 *   <li {...liProps}>내 프로필</li>
 *   <li {...liProps}>로그아웃</li>
 * </Dropdown>
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
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement<HTMLLIElement>(
            child as ReactElement<HTMLLIElement>,
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
