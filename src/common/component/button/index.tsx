import { buttonStyle } from "@/common/component/button/index.css";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "purple" | "gray" | "lg";
}

const Button = ({
  children,
  size = "small",
  color = "purple",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle({
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
