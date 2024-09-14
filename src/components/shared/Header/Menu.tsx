import { useOutsideClick } from "@/hooks/useOutsideClick";
import { checkContains } from "@/utils/domUtils";
import { camelToKebab } from "@/utils/stringUtils";
import type React from "react";
import { useMemo, useRef, useState } from "react";
import { buttonStyle } from "./Header.css";

type MenuProps = {
  label: string;
  renderTriggerIcon: React.ReactNode;
  renderList: React.ReactNode;
};

export type MenuRefType = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.RefObject<HTMLDivElement>;
};

const Menu = ({ label, renderTriggerIcon, renderList }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClick = () => setShowMenu(!showMenu);
  const handleOutsideClick = ({ target }: MouseEvent) => {
    const [check] = checkContains(target!, containerRef);
    if (!check) setShowMenu(false);
  };
  const id = useMemo(() => camelToKebab(`${label}Toggle`), [label]);
  useOutsideClick(handleOutsideClick);

  return (
    <div ref={containerRef} aria-label="menu container">
      <button
        className={buttonStyle}
        id={id}
        aria-label={`${showMenu ? "Close" : "Open"} ${camelToKebab(label)}`}
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
