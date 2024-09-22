import { IcnError } from "@/asset/svg";
import { errorIconStyle, errorMsgStyle, errorWrapper } from "./Index.css";

interface ErrorInfoProps {
  isError: boolean;
  errorMsg: string;
}

const ErrorInfo = ({ isError, errorMsg }: ErrorInfoProps) => {
  return (
    <div className={errorWrapper}>
      {isError && (
        <>
          <IcnError className={errorIconStyle} />
          <div className={errorMsgStyle}>{errorMsg}</div>
        </>
      )}
    </div>
  );
};

export default ErrorInfo;
