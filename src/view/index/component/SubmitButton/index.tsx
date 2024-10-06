import Button from "@/common/component/Button";
import { buttonStyle } from "./index.css";
import type { ComponentProps } from "react";

const SubmitButton = ({ ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button
      className={buttonStyle}
      type="submit"
      size="medium"
      color="purple"
      {...props}
    />
  );
};

export default SubmitButton;
