import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { handleA11yClick } from "@/common/util/dom";
import { camelToKebab } from "@/common/util/string";
import { Slot } from "@radix-ui/react-slot";
import type React from "react";
import { useState } from "react";
import { defaultButtonStyle } from "./Menu.css";

type MenuProps = {
  label: string;
  renderTriggerButton: React.ReactNode;
  renderList: React.ReactNode;
};
/**
 * trigger button과 list에 토글 기능과 aria속성을 부여해주는 컴포넌트
 * @param label id, aria-label에 들어갈 string.
 * id: camelToKebab(`${label}Toggle`)
 * aria-label: `${showMenu ? "Close" : "Open"} ${kebabLabel}`
 * @param renderTriggerButton trigger button 컴포넌트
 * @param renderList <Dropdown />으로 만들어진 리스트 컴포넌트
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
  renderTriggerButton={<TriggerButton />}
  renderList={
    <Dropdown>
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
  const handleClose = () => setShowMenu(false);
  const ref = useOutsideClick(handleClose);
  const triggerId = camelToKebab(`${label}Toggle`);
  const menuId = camelToKebab(label);

  return (
    <div ref={ref}>
      <Slot
        className={defaultButtonStyle}
        id={triggerId}
        aria-label={`${showMenu ? "Close" : "Open"} ${menuId}`}
        aria-haspopup="true"
        aria-expanded={showMenu}
        aria-controls={menuId}
        onClick={handleClick}
        onKeyDown={handleA11yClick(handleClick)}
      >
        {renderTriggerButton}
      </Slot>

      {showMenu && (
        <Slot id={menuId} aria-labelledby={triggerId}>
          {renderList}
        </Slot>
      )}
    </div>
  );
};

export default Menu;
