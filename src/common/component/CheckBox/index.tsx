import { boxStyle } from "@/common/component/CheckBox/index.css";

interface CheckBoxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <input
      className={boxStyle}
      type="checkbox"
      checked={checked}
      onChange={() => onChange?.(!checked)}
    />
  );
};

export default CheckBox;
