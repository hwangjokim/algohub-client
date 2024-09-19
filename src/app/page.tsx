"use client";
import { Modal } from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import "@/styles/globalStyles.css";

const OnboardingPage = () => {
  const { isOpen, open, close } = useBooleanState();
  return (
    <>
      <button onClick={open}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={close}>
        <div>h1</div>
      </Modal>
    </>
  );
};

export default OnboardingPage;
