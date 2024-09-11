import { IcnPlus } from "@/assets/svgs";
import { buttonStyle } from "@/components/common/Button/Button.css";
import { theme } from "@/styles/themes.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...props
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
      {...props}
    >
      {isLeftIc && <IcnPlus width="24" height="24" />}
      {text}
    </button>
  );
};

export default Button;
