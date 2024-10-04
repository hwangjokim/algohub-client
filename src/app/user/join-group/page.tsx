"use client";
import UserDashboardPage from "@/app/user/page";
import { IcnBtnDelete } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import { exitStyle, wrapper } from "@/view/user/join-group/component/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const JoinGroupPage = () => {
  const router = useRouter();
  return (
    <>
      <UserDashboardPage />
      <Modal isOpen={true} onClose={() => router.push("/user")}>
        <section className={wrapper}>
          <Link href="/user">
            <IcnBtnDelete width={10} height={10} className={exitStyle} />
          </Link>
        </section>
      </Modal>
    </>
  );
};

export default JoinGroupPage;
