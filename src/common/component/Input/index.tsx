import { useState } from "react";
import { barStyle, inputStyle, wrapperStyle } from "./index.css";

interface InputProps {
  size: "medium" | "large" | "textarea";
  placeholder: string;
  handleChange: (value: string) => void;
  error?: boolean;
  defaultValue?: string;
}

const Input = ({
  size,
  placeholder,
  error,
  defaultValue,
  handleChange,
}: InputProps) => {
  const [active, setActive] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
