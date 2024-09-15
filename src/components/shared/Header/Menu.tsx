import { useOutsideClick } from "@/hooks/useOutsideClick";
import { camelToKebab } from "@/utils/string";
import type React from "react";
import { useState } from "react";
import { buttonStyle } from "./Menu.css";

type MenuProps = {
  label: string;
  renderTriggerIcon: React.ReactNode;
  renderList: React.ReactNode;
};

const Menu = ({ label, renderTriggerIcon, renderList }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  const handleToggle = () => setShowMenu(false);
  const ref = useOutsideClick(handleToggle);
  const id = camelToKebab(`${label}Toggle`);

  return (
    <div ref={ref}>
      <button
        className={buttonStyle}
        id={id}
        aria-label={`${showMenu ? "Close" : "Open"} ${camelToKebab(label)}`}
        aria-haspopup="true"
        aria-expanded={showMenu}
        aria-controls={label}
        onClick={handleClick}
      >
        {renderTriggerIcon}
      </button>

      {showMenu && renderList}
    </div>
  );
};

export default Menu;
