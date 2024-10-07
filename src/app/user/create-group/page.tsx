"use client";
import UserDashboardPage from "@/app/user/page";
import { IcnBtnDelete } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import CreateGroupForm from "@/view/user/create-group/component/CreateGroupForm";
import {
  exitStyle,
  wrapper,
} from "@/view/user/create-group/component/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CreateGroupPage = () => {
  const router = useRouter();
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
          <CreateGroupForm />
        </div>
      </Modal>
    </>
  );
};

export default CreateGroupPage;
