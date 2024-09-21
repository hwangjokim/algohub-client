"use client";
import Animation from "@/common/component/Animation";
import ToastProvider from "@/common/component/Toast";
import ToggleButton from "@/common/component/ToggleButton";
import { useToast } from "@/common/hook/useToast";
import "@/styles/globalStyles.css";

const OnboardingPage = () => {
  const { showToast } = useToast();

  return (
    <div>
      OnboardingPage
      <Animation size={""} animationJson={undefined} />
      <ToggleButton isSelected={false} onChange={() => {}} />
      <button
        onClick={() => showToast("아이디 비밀번호를 업데이트해주세요", "error")}
      >
        Click
      </button>
      <ToastProvider />
    </div>
  );
};

export default OnboardingPage;
