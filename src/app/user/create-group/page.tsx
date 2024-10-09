"use client";
import UserDashboardPage from "@/app/user/page";
import Modal from "@/common/component/Modal";
import { useToast } from "@/common/hook/useToast";
import CreateGroupForm from "@/view/user/create-group/component/CreateGroupForm";
import LinkWithCopy from "@/view/user/create-group/component/LinkWithCopy";
import { wrapper } from "@/view/user/create-group/component/index.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateGroupPage = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (isSuccess) {
      showToast("스터디가 정상적으로 만들어졌어요.", "success");
    }
  }, [isSuccess]);

  return (
    <>
      <UserDashboardPage />
      <Modal isOpen={true} onClose={() => router.push("/user")} hasCloseBtn>
        <div className={wrapper}>
          <CreateGroupForm setIsSuccess={setIsSuccess} />
          {isSuccess && <LinkWithCopy link="algohub.kr" />}
        </div>
      </Modal>
    </>
  );
};

export default CreateGroupPage;
