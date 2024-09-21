"use client";

import { IcnError } from "@/asset/svg";
import type { ChangeEvent, TextareaHTMLAttributes } from "react";
import {
  errorIconStyle,
  errorMsgStyle,
  errorWrapper,
} from "../Input/index.css";
import {
  barStyle,
  containerStyle,
  textareaStyle,
  wrapperStyle,
} from "./index.css";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  handleChange: (value: string) => void;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  errorPosition?: "top" | "bottom";
}

const Textarea = ({
  handleChange,
  label,
  isError,
  errorMsg = "입력값이 올바르지 않습니다.",
  errorPosition = "bottom",
  ...props
}: InputProps) => {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className={containerStyle({ errorPosition })}>
      <div className={wrapperStyle({ isError })}>
        <div className={barStyle} />
        <textarea
          className={textareaStyle}
          onChange={onChange}
          aria-invalid={isError}
          aria-label={label}
          aria-multiline="true"
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

export default Textarea;
