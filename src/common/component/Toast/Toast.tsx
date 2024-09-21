import { IcnCheckSmall, IcnError } from "@/asset/svg";
import { textStyle, toastStyle } from "@/common/component/Toast/index.css";
import { useTimeout } from "@/common/hook/useTimout";
import { type PropsWithChildren, useState } from "react";

type ToastProps = PropsWithChildren<{
  id: string;
  variant?: "error" | "success" | "default";
  onClose?: () => void;
  duration?: number;
}>;

const Toast = ({
  id,
  variant = "default",
  duration = 2000,
  children,
}: ToastProps) => {
  useTimeout(() => setAnimation("hide"), duration, [id]);

  const [animation, setAnimation] = useState<"show" | "hide">("show");

  return (
    <div className={toastStyle({ animation })}>
      {Icon[variant]}
      <span className={textStyle}>{children}</span>
    </div>
  );
};

export default Toast;

const Icon = {
  error: <IcnError width={24} height={24} />,
  success: <IcnCheckSmall width={24} height={24} />,
  default: null,
} as const;
