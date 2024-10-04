import { buttonStyle } from "@/common/component/Button/index.css";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** small: Body3_SB_14 <br/> medium: Title1_SB_16 <br/> large: Head2_SB_18*/
  size?: "small" | "medium" | "large";
  color?: "purple" | "gray" | "lg";
}

const Button = ({
  children,
  className,
  size = "small",
  color = "purple",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonStyle({
          size,
          color,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
