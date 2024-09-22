"use client";

import { IcnError } from "@/asset/svg";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import ErrorInfo from "../ErrorInfo";
import {
  barStyle,
  containerStyle,
  errorIconStyle,
  errorMsgStyle,
  errorWrapper,
  inputStyle,
  wrapperStyle,
} from "./index.css";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  handleChange: (value: string) => void;
  size?: "medium" | "large";
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  errorPosition?: "top" | "bottom";
}

const Input = ({
  size = "medium",
  handleChange,
  label,
  isError = false,
  errorMsg = "입력값이 올바르지 않습니다.",
  errorPosition = "bottom",
  ...props
}: InputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className={containerStyle({ errorPosition })}>
      <div className={wrapperStyle({ size, isError })}>
        <input
          className={inputStyle({ size })}
          onChange={onChange}
          aria-invalid={isError}
          aria-label={label}
          aria-errormessage={errorMsg}
          {...props}
        />
      </div>
      <ErrorInfo isError={isError} errorMsg={errorMsg} />
    </div>
  );
};

export default Input;
