import {
  dropdownContainer,
  dropdownDefaultStyle,
  dropdownItemStyle,
} from "@/common/component/Dropdown/index.css";
import { camelToKebab } from "@/common/util/string";
import {
  Children,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
  isValidElement,
} from "react";

type DropdownProps = {
  label: string;
  className?: string;
} & PropsWithChildren;

/**
 * @param label id, aria-labelledby에 들어갈 string.
 ** id의 값은 lebel
 ** aria-labelledby의 값은 `camelToKebab('${label}Toggle')`
 * @param className 드롭다운 위치 조정용 style
 ** default: `{ position: "absolute" }`
 * @param children li 태그를 사용해 주세요
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
              key: index, // TODO: 실제 데이터로 확인 후 버그 있으면 적절한 key 탐색
              role: "button",
              tabIndex: 0,
            },
          );
        }
        return child;
      })}
    </ul>
  );
};

export default Dropdown;
