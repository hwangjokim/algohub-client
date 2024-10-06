"use client";
import Modal from "@/common/component/Modal";
import AuthHeader from "@/view/index/component/AuthHeader";
import Card from "@/view/index/component/Card";
import Footer from "@/view/index/component/Footer";
import Container from "@/view/login/component/Container";
import Heading from "@/view/login/component/Heading";
import LoginForm from "@/view/login/component/LoginForm";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };
  return (
    <Modal isOpen={true} onClose={onClose}>
      <AuthHeader handleClick={onClose} />
      <Container>
        <Heading />
        <Card>
          <LoginForm />
          <Footer
            guideLabel="아직 계정이 없으신가요?"
            link={{ href: "/signup", label: "회원가입하기" }}
          />
        </Card>
      </Container>
    </Modal>
  );
};

export default LoginPage;
