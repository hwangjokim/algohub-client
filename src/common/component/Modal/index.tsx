import {
  backgroundStyle,
  dialogStyle,
} from "@/common/component/Modal/index.css";
import { useOutsideClick } from "@/common/hook/useOutsideClick";
import type { ComponentPropsWithoutRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps extends ComponentPropsWithoutRef<"dialog"> {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children, ...props }: ModalProps) => {
  const closeRef = useOutsideClick<HTMLDialogElement>(onClose);
  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <div className={backgroundStyle} />
            <dialog
              aria-hidden={!isOpen}
              ref={closeRef}
              className={dialogStyle}
              {...props}
            >
              {children}
            </dialog>
          </>,
          document.body
        )}
    </>
  );
};
