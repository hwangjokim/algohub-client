"use client";
import { IcnBtnArrowDown } from "@/asset/svg";
import {
  icnStyle,
  optionStyle,
  optionWrapper,
  selectStyle,
  textStyle,
} from "@/common/component/SelectBox/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

interface SelectBoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  label: string;
  options: readonly string[];
  selectCustomStyle?: string;
  align?: "left" | "right" | "center";
  value: string;
  onChange: (value: string) => void;
}
const SelectBox = ({
  label,
  options,
  selectCustomStyle,
  align = "center",
  value,
  onChange,
  ...props
}: SelectBoxProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={clsx(selectStyle, selectCustomStyle)}
      onClick={() => setClicked((prev) => !prev)}
      onKeyDown={useA11yHoverHandler}
      aria-label={`${label} 선택하기`}
      {...props}
    >
      <p className={textStyle({ isActive: !!value })}>{value || label}</p>
      <IcnBtnArrowDown
        width={20}
        height={20}
        className={clicked ? icnStyle : "none"}
      />
      <ul className={optionWrapper({ isActive: clicked, align })}>
        <label className={textStyle({ isActive: false })}>{label}</label>
        {options.map((option, idx) => (
          <li
            className={optionStyle}
            onClick={() => onChange(option)}
            onKeyDown={useA11yHoverHandler}
            value={option}
            key={idx}
          >
            <p className={textStyle({ isActive: true })}>{option}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
