"use client";
import UserDashboardPage from "@/app/user/page";
import { IcnBtnDelete } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import type { GroupJoinResponse } from "@/view/user/join-group/api/type";
import GroupInfoCard from "@/view/user/join-group/component/GroupInfoCard";
import { exitStyle, wrapper } from "@/view/user/join-group/component/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const JoinGroupPage = () => {
  const router = useRouter();
  const tmpGroupInfo: GroupJoinResponse = {
    src: "",
    name: "숭실대학교 알고리즘 스터디",
    startDate: "2024.08.13",
    endDate: "2024.09.13",
    description:
      "BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘 스터디입니다.",
  };
  return (
    <>
      <UserDashboardPage />
      <Modal isOpen={true} onClose={() => router.push("/user")}>
        <section className={wrapper}>
          <Link href="/user">
            <IcnBtnDelete width={10} height={10} className={exitStyle} />
          </Link>
          <GroupInfoCard groupInfo={tmpGroupInfo} />
        </section>
      </Modal>
    </>
  );
};

export default JoinGroupPage;
