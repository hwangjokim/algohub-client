"use client";

import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from "react";
import SupportingText from "../SupportingText";
import { containerStyle, inputStyle } from "./index.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "medium" | "large";
  isError?: boolean;
  hasErrorIcon?: boolean;
  supportingText?: string;
  supportingTextPosition?: "top" | "bottom";
}

const Input = forwardRef(
  (
    {
      size = "medium",
      isError = false,
      hasErrorIcon = false,
      supportingText,
      supportingTextPosition = "bottom",
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={containerStyle({ supportingTextPosition })}>
        <input
          ref={ref}
          className={inputStyle({ size, isError })}
          aria-invalid={isError}
          aria-errormessage={supportingText}
          {...props}
        />
        <SupportingText
          hasErrorIcon={hasErrorIcon}
          isError={isError}
          message={supportingText}
        />
      </div>
    );
  }
);

export default Input;
