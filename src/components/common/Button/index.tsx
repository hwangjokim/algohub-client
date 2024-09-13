import { buttonStyle } from "@/components/common/Button/index.css";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  size?: "small" | "medium" | "large";
  color?: "purple" | "gray" | "lg";
}

const Button = ({
  children,
  isActive = false,
  size = "small",
  color = "purple",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      aria-disabled={isActive}
      className={buttonStyle({
        isActive: isActive,
        size: size,
        color: color,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
