import { buttonStyle } from "@/components/common/Button/Button.css";

interface ButtonProps {
  text: string;
  isActive?: boolean;
  handleClick: () => void;
  size?: "small" | "medium" | "large";
  color?: "purple" | "gray" | "lg";
  isLeftIc?: boolean;
}

const Button = ({
  text,
  isActive = false,
  handleClick,
  size = "small",
  color = "purple",
  isLeftIc = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      role="button"
      aria-disabled={isActive}
      className={buttonStyle({
        isActive: isActive,
        size: size,
        color: color,
      })}
      onClick={handleClick}
    >
      {isLeftIc && <div>ㅎㅇ</div>}
      {text}
    </button>
  );
};

export default Button;
