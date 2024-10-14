"use client";
import Modal from "@/common/component/Modal";
import ToastProvider from "@/common/component/Toast";
import AuthHeader from "@/view/index/component/AuthHeader";
import Card from "@/view/index/component/Card";
import Footer from "@/view/index/component/Footer";
import LoginForm from "@/view/login/component/LoginForm";
import { containerStyle, headingStyle } from "@/view/login/component/index.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const onClose = () => {
    router.push("/");
  };
  return (
    <Modal isOpen={true} onClose={() => {}}>
      <AuthHeader handleClick={onClose} />
      <div className={containerStyle}>
        <h1 className={headingStyle}>알고허브로 로그인</h1>
        <Card>
          <LoginForm />
          <Footer
            guideLabel="아직 계정이 없으신가요?"
            link={{ href: "/signup", label: "회원가입하기" }}
          />
        </Card>
      </div>
      <ToastProvider />
    </Modal>
  );
};

export default LoginPage;
