import { IcnCheckSmall, IcnError } from "@/asset/svg";
import { textStyle, toastStyle } from "@/common/component/Toast/index.css";
import type { PropsWithChildren } from "react";

type ToastProps = PropsWithChildren<{
  variant?: "error" | "success" | "default";
}>;

const Icon = {
  error: <IcnError width={24} height={24} />,
  success: <IcnCheckSmall width={24} height={24} />,
  default: null,
} as const;

const Toast = ({ variant = "default", children }: ToastProps) => {
  return (
    <div className={toastStyle}>
      {Icon[variant]}
      <span className={textStyle}>{children}</span>
    </div>
  );
};

export default Toast;
