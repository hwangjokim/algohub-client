import { IcnError } from "@/asset/svg";
import { errorIconStyle, errorWrapper, msgStyle } from "./Index.css";

interface SupportingTextProps {
  isError?: boolean;
  hasErrorIcon?: boolean;
  message?: string;
}

const SupportingText = ({
  isError,
  hasErrorIcon,
  message,
}: SupportingTextProps) => {
  return (
    <div className={errorWrapper}>
      <>
        {hasErrorIcon && <IcnError className={errorIconStyle} />}
        {message && <div className={msgStyle({ isError })}>{message}</div>}
      </>
    </div>
  );
};

export default SupportingText;
