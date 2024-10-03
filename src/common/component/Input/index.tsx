"use client";

import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from "react";
import { inputStyle } from "./index.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "medium" | "large";
  isError?: boolean;
}

const Input = forwardRef(
  (
    { size = "medium", isError = false, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={inputStyle({ size, isError })}
        aria-invalid={isError}
        {...props}
      />
    );
  },
);

export default Input;
