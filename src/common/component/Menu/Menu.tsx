import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { camelToKebab } from "@/common/util/string";
import type React from "react";
import { useState } from "react";
import { defaultButtonStyle } from "./Menu.css";

type MenuProps = {
  label: string;
  renderTriggerButton: (
    props: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ) => React.ReactNode;
  renderList: React.ReactNode;
};
/**
 * 
 * @param label id, aria-label에 들어갈 string.
 * id: camelToKebab(`${label}Toggle`)
 * aria-label: `${showMenu ? "Close" : "Open"} ${kebabLabel}`
 * @param renderTriggerButton trigger button에 필요한 aria 속성들과 메뉴 열기 click 이벤트를 props로 받는<button></button>
 * @param renderList <Dropdown></Dropdown>으로 만들어진 리스트 컴포넌트
 * @example
const TriggerButton = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <IcnAlarm width="2.5rem" height="2.5rem" />
    </button>
  );
};

<Menu
  label={label}
  renderTriggerButton={(props) => <TriggerButton {...props} />}
  renderList={
    <Dropdown {label}>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </Dropdown>
  }
/>
 */
const Menu = ({ label, renderTriggerButton, renderList }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  const handleToggle = () => setShowMenu(false);
  const ref = useOutsideClick(handleToggle);
  const id = camelToKebab(`${label}Toggle`);
  const kebabLabel = camelToKebab(label);

  const triggerButtonProps = {
    className: defaultButtonStyle,
    id,
    "aria-label": `${showMenu ? "Close" : "Open"} ${kebabLabel}`,
    "aria-haspopup": "true",
    "aria-expanded": showMenu,
    "aria-controls": kebabLabel,
    onClick: handleClick,
  } as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <div ref={ref}>
      {renderTriggerButton(triggerButtonProps)}

      {showMenu && renderList}
    </div>
  );
};

export default Menu;
