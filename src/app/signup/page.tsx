"use client";
import Modal from "@/common/component/Modal";
import AuthHeader from "@/view/index/component/AuthHeader";
import Footer from "@/view/index/component/Footer";
import Container from "@/view/signup/component/Container";
import SignupForm from "@/view/signup/component/SignupForm";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };
  return (
    <Modal isOpen={true} onClose={onClose}>
      <AuthHeader handleClick={onClose} />
      <Container>
        <SignupForm />
        <Footer
          guideLabel="이미 계정이 있으신가요?"
          link={{ href: "/login", label: "로그인하기" }}
        />
      </Container>
    </Modal>
  );
};

export default SignupPage;
