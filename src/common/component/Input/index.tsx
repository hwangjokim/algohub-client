"use client";

import { IcnError } from "@/asset/svg";
import type { ChangeEvent, InputHTMLAttributes } from "react";
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
  isError,
  errorMsg,
  errorPosition = "bottom",
  ...props
}: InputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className={containerStyle({ errorPosition })}>
      <div className={wrapperStyle({ size, isError })}>
        <div className={barStyle({ size })} />
        <input
          className={inputStyle({ size })}
          onChange={onChange}
          aria-invalid={isError}
          aria-label={label}
          aria-errormessage={errorMsg}
          {...props}
        />
      </div>
      <div className={errorWrapper}>
        {isError && (
          <>
            <IcnError className={errorIconStyle} />
            <div className={errorMsgStyle}>{errorMsg}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
