"use client";
import UserDashboardPage from "@/app/user/page";
import { IcnBtnDelete } from "@/asset/svg";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import type { GroupJoinResponse } from "@/view/user/join-group/api/type";
import DecisionPrompt from "@/view/user/join-group/component/DecisionPrompt";
import GroupInfoCard from "@/view/user/join-group/component/GroupInfoCard";
import {
  btnWrapper,
  exitStyle,
  wrapper,
} from "@/view/user/join-group/component/index.css";
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
    owner: "진이",
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
          <GroupInfoCard groupInfo={tmpGroupInfo} />
          <DecisionPrompt owner={tmpGroupInfo.owner} />
          <div className={btnWrapper}>
            <Button size="medium" color="lg">
              거절하기
            </Button>
            <Button size="medium" color="purple">
              수락하기
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JoinGroupPage;
