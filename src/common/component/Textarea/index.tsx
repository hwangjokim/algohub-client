"use client";

import {
  type ForwardedRef,
  type TextareaHTMLAttributes,
  forwardRef,
} from "react";
import SupportingText from "../SupportingText";
import { containerStyle, textareaStyle } from "./index.css";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
  hasErrorIcon?: boolean;
  supportingText?: string;
  supportingTextPosition?: "top" | "bottom";
}

const Textarea = forwardRef(
  (
    {
      isError = false,
      hasErrorIcon = false,
      supportingText,
      supportingTextPosition = "bottom",
      ...props
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className={containerStyle({ supportingTextPosition })}>
        <textarea
          ref={ref}
          className={textareaStyle({ isError })}
          aria-invalid={isError}
          aria-multiline="true"
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

export default Textarea;
