import Modal from "@/common/component/Modal";
import type { ComponentProps } from "react";
import { noticeModalWrapper } from "./index.css";

const NoticeModal = ({ isOpen, onClose }: ComponentProps<typeof Modal>) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className={noticeModalWrapper}>
        <></>
      </section>
    </Modal>
  );
};

export default NoticeModal;
