import { buttonStyle } from "@/components/common/Button/index.css";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
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
