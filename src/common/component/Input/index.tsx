"use client";

import {
  type ChangeEvent,
  type KeyboardEvent,
  type TextareaHTMLAttributes,
  useState,
} from "react";
import { barStyle, inputStyle, wrapperStyle } from "./index.css";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size: "medium" | "large" | "textarea";
  handleChange: (value: string) => void;
  error?: boolean;
}

const Input = ({
  size,
  placeholder,
  error,
  defaultValue,
  handleChange,
}: InputProps) => {
  const [active, setActive] = useState<boolean>(false);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(event.target.value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && size !== "textarea") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className={wrapperStyle({ size, active, error })}>
      {active && <div className={barStyle({ size })} />}
      <textarea
        className={inputStyle({ size })}
        placeholder={placeholder}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          setActive(false);
        }}
        value={defaultValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        aria-invalid={error}
        aria-multiline={size === "textarea"}
      />
    </div>
  );
};

export default Input;
