import { boxStyle } from "@/common/component/CheckBox/index.css";
import type { HTMLAttributes } from "react";

interface CheckBoxProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({ checked, onChange, ...props }: CheckBoxProps) => {
  return (
    <input
      {...props}
      className={boxStyle}
      type="checkbox"
      checked={checked}
      onChange={() => onChange?.(!checked)}
    />
  );
};

export default CheckBox;
