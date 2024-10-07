"use client";
import UserDashboardPage from "@/app/user/page";
import { IcnBtnDelete } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import EditAvatar from "@/shared/component/EditAvatar";
import CreateGroupForm from "@/view/user/create-group/component/CreateGroupForm";
import {
  exitStyle,
  wrapper,
} from "@/view/user/create-group/component/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateGroupPage = () => {
  const router = useRouter();
  const [groupImg, setGroupImg] = useState("");
  const handleImageChange = (image: string) => {
    setGroupImg(image);
  };
  return (
    <>
      <UserDashboardPage />
      <Modal isOpen={true} onClose={() => router.push("/user")}>
        <div className={wrapper}>
          <Link href="/user">
            <IcnBtnDelete
              width={10}
              height={10}
              className={exitStyle}
              aria-label="Close JoinGroup Modal"
              role="button"
            />
          </Link>
          <EditAvatar src={groupImg} onImageChange={handleImageChange} />
          <CreateGroupForm />
        </div>
      </Modal>
    </>
  );
};

export default CreateGroupPage;
